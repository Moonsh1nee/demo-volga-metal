import shop from "@/data/shop-load.json";

export function ShopLoad() {
  return (
    <div className="live">
      <i aria-hidden />
      <span>
        Загрузка цеха на этой неделе <b>{shop.load}%</b>, свободно {shop.freeSlots} окон на резку
      </span>
      <div className="bar" aria-hidden>
        <u style={{ width: `${shop.load}%` }} />
      </div>
    </div>
  );
}
