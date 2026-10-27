# Волга-Металл-Сервис · демо B2B-сайта

Демонстрационный сайт металлообработки из портфолио студии Akimov Web. Организация, станки, цены и клиенты вымышлены.

- Калькулятор стоимости с НДС (резка, гибка, сварка, окраска), скидки за объём, срочность, дата отгрузки.
- Запрос КП с чертежом: файл никуда не загружается, сохраняются имя и размер, запрос лежит в localStorage (`vms-requests`).
- Светлая и тёмная тема, мобильная версия, `noindex`.

Стек: Next.js (App Router, статический экспорт), TypeScript, Tailwind CSS v4, Motion, React Hook Form + Zod, lucide-react. Макет лежит в `design/maket-4.html`.

## Запуск

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # статический сайт в out/
npm run lint
```

## Деплой на GitHub Pages

1. Settings → Pages → Source: **GitHub Actions**.
2. Любой push в `main` запускает `.github/workflows/deploy.yml`: сборка с `NEXT_PUBLIC_BASE_PATH=/<имя-репозитория>` и публикация папки `out`.
3. Адрес: `https://<логин>.github.io/demo-volga-metal/`.

Для локальной проверки сборки с префиксом: `NEXT_PUBLIC_BASE_PATH=/demo-volga-metal npm run build`.

## Где править данные

- `src/data/site.ts`: услуги, оборудование, проекты, вопросы, контакты.
- `src/data/shop-load.json`: загрузка цеха на главной.
- `src/lib/calc.ts`: расценки и формулы калькулятора.
