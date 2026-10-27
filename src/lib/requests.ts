import { readStore, writeStore } from "./storage";

export type StoredRequest = {
  no: string;
  company: string;
  name: string;
  contact: string;
  calc: string;
  sum: number;
  file: { name: string; size: number } | null;
  at: number;
};

export function saveRequest(data: Omit<StoredRequest, "no" | "at">): StoredRequest {
  const list = readStore<StoredRequest[]>("requests", []);
  let no = "";
  do {
    no = `ВМС-${Math.floor(1000 + Math.random() * 9000)}`;
  } while (list.some((x) => x.no === no));
  const entry = { ...data, no, at: Date.now() };
  writeStore("requests", [...list, entry]);
  return entry;
}
