import { CLIENTS } from "@/data/site";

export function ClientsGrid() {
  return (
    <>
      <ul className="cl">
        {CLIENTS.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="note">Названия условные. На рабочем сайте здесь будут логотипы заказчиков с их согласия.</p>
    </>
  );
}
