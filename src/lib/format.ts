export const rub = (n: number) => `${Math.round(n).toLocaleString("ru-RU")} ₽`;

export const decimal = (n: number) => String(n).replace(".", ",");

export function fileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} Б`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} КБ`;
  return `${(bytes / 1024 / 1024).toFixed(1).replace(".", ",")} МБ`;
}
