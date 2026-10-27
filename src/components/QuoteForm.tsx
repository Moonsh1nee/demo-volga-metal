"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FILE_EXT, checkFile, quoteSchema, type QuoteInput } from "@/lib/quote-schema";
import { fileSize, rub } from "@/lib/format";
import { saveRequest, type StoredRequest } from "@/lib/requests";
import { toast } from "@/lib/toast";

type Saved = StoredRequest;

export function QuoteForm({ summary }: { summary: { line: string; gross: number } | null }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { company: "", name: "", contact: "" },
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileErr, setFileErr] = useState("");
  const [fileKey, setFileKey] = useState(0);
  const [done, setDone] = useState<Saved | null>(null);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    const err = f ? checkFile(f) : null;
    setFileErr(err ?? "");
    setFile(err ? null : f);
  };

  const onSubmit = async (v: QuoteInput) => {
    await new Promise((r) => setTimeout(r, 600));
    const entry = saveRequest({
      company: v.company.trim(),
      name: v.name.trim(),
      contact: v.contact.trim(),
      calc: summary?.line ?? "",
      sum: Math.round(summary?.gross ?? 0),
      file: file ? { name: file.name, size: file.size } : null,
    });
    setDone(entry);
    toast("Демо: запрос сохранён в браузере, не отправлен");
  };

  const again = () => {
    reset();
    setFile(null);
    setFileErr("");
    setFileKey((k) => k + 1);
    setDone(null);
  };

  if (done) {
    return (
      <div className="frm" role="status">
        <div className="ok">
          <div className="big">Запрос {done.no}</div>
          <div className="no">
            {done.calc || "Расчёт не выбран"}
            {done.sum > 0 && (<><br />Ориентир: от {rub(done.sum)}</>)}
            {done.file && (<><br />Чертёж: {done.file.name} ({fileSize(done.file.size)})</>)}
          </div>
          <p>{done.company}, в рабочем сайте менеджер связался бы с вами в течение 2 рабочих часов.</p>
          <div className="note">Демо: запрос сохранён только в вашем браузере, на сервер ничего не ушло. <Link href="/privacy/">Подробнее</Link></div>
          <button type="button" className="btn ln" onClick={again}>Новый запрос</button>
        </div>
      </div>
    );
  }

  const fld = (id: keyof QuoteInput) => ({ "aria-invalid": errors[id] ? true : undefined, "aria-describedby": errors[id] ? `${id}-e` : undefined }) as const;

  return (
    <form className="frm" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h3>Запросить КП</h3>
      <div className="f">
        <label htmlFor="company">Организация</label>
        <input id="company" autoComplete="organization" placeholder="ООО «Пример»" {...register("company")} {...fld("company")} />
        {errors.company && <p className="err" id="company-e">{errors.company.message}</p>}
      </div>
      <div className="g2">
        <div className="f">
          <label htmlFor="name">Контактное лицо</label>
          <input id="name" autoComplete="name" placeholder="Иван Петров" {...register("name")} {...fld("name")} />
          {errors.name && <p className="err" id="name-e">{errors.name.message}</p>}
        </div>
        <div className="f">
          <label htmlFor="contact">Телефон или e-mail</label>
          <input id="contact" autoComplete="off" placeholder="+7 900 000-00-00" {...register("contact")} {...fld("contact")} />
          {errors.contact && <p className="err" id="contact-e">{errors.contact.message}</p>}
        </div>
      </div>
      <div className="f">
        <label htmlFor="file">Чертёж (DXF, DWG, STEP, PDF)</label>
        <input key={fileKey} id="file" type="file" accept={FILE_EXT.join(",")} onChange={onFile} aria-invalid={fileErr ? true : undefined} aria-describedby={fileErr ? "file-e" : undefined} />
        {fileErr && <p className="err" id="file-e">{fileErr}</p>}
      </div>
      {summary && <div className="note" style={{ marginTop: 0, marginBottom: 14 }}>В запрос попадёт расчёт: {summary.line}, от {rub(summary.gross)}.</div>}
      <button className="btn" type="submit" style={{ width: "100%" }} disabled={isSubmitting}>
        {isSubmitting ? "Отправляем…" : "Отправить запрос"}
      </button>
      <div className="note">Демо: файл и данные остаются в вашем браузере, на сервер ничего не уходит. Файл не загружается, сохраняются только имя и размер.</div>
    </form>
  );
}
