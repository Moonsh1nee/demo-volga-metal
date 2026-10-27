import { z } from "zod";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isContact(v: string) {
  if (emailRe.test(v)) return true;
  const digits = v.replace(/\D/g, "");
  return /^[\d\s()+\-]+$/.test(v) && digits.length >= 10 && digits.length <= 15;
}

export const quoteSchema = z.object({
  company: z.string().trim().min(2, "Укажите организацию"),
  name: z.string().trim().min(2, "Укажите контактное лицо"),
  contact: z.string().trim().refine(isContact, "Введите телефон (10 цифр и больше) или e-mail"),
});

export type QuoteInput = z.input<typeof quoteSchema>;

export const FILE_EXT = [".dxf", ".dwg", ".step", ".stp", ".pdf"];
export const FILE_MAX = 25 * 1024 * 1024;

export function checkFile(f: File): string | null {
  const ext = f.name.slice(f.name.lastIndexOf(".")).toLowerCase();
  if (!FILE_EXT.includes(ext)) return "Подходят файлы DXF, DWG, STEP и PDF";
  if (f.size > FILE_MAX) return "Файл больше 25 МБ";
  return null;
}
