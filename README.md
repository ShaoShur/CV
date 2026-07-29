# ShaoShur.com

Статический персональный сайт Павла Шурмистрова (ShaoShur): Senior BI Developer / BI Solution Architect, специализация — Qlik Sense.

## Локальный запуск

Сборка не требуется. Откройте `index.html` напрямую или запустите любой статический сервер:

```powershell
npx serve .
```

## Публикация на GitHub Pages

1. Создайте репозиторий и загрузите содержимое этой директории в ветку `main`.
2. В `Settings → Pages` выберите `Deploy from a branch`, ветку `main` и папку `/ (root)`.
3. После настройки DNS добавьте в корень файл `CNAME` с одной строкой `shaoshur.com`.

Сайт не использует бэкенд, npm-зависимости и сборщик. Внутренние страницы находятся в `/projects/` и `/learning/`, портативная тестовая сборка MyQvd — в `/downloads/`.
