# Отчёт по сборке Bootstrap-приложения с Vite

## 1. Установка и настройка

- **Создание проекта**:
  Создана новая директория `vite_bootstrap_project` и инициализирован npm проект:
  ```bash
  mkdir vite_bootstrap_project
  cd vite_bootstrap_project
  npm init -y
  ```

- **Установка зависимостей**:
  ```bash
  npm install --save-dev vite
  npm install bootstrap luxon
  ```

## 2. Структура проекта

Проект имеет следующую структуру:
```
vite_bootstrap_project/
├── index.html              # Главная HTML страница
├── src/
│   └── index.js            # Основной JavaScript файл
├── vite.config.js         # Конфигурация Vite
├── package.json           # Зависимости и скрипты
├── .gitignore             # Игнорируемые файлы
└── dist/ (после сборки)   # Готовый к деплою проект
    ├── index.html
    └── assets/
        ├── index-*.css
        └── index-*.js
```

## 3. Конфигурация

### package.json
Добавлены скрипты для работы с Vite:
```json
{
  "name": "vite_bootstrap_project",
  "version": "1.0.0",
  "description": "Bootstrap + Luxon project with Vite",
  "type": "module",
  "author": "Oleg Krikunov",
  "license": "ISC",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^7.1.12"
  },
  "dependencies": {
    "bootstrap": "^5.3.8",
    "luxon": "^3.7.2"
  }
}
```

**Команда для сборки проекта:**
```bash
npm run build
```

### vite.config.js
Создан конфигурационный файл для оптимизации сборки:
```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
```

## 4. Сборка проекта

### Команда для сборки:
```bash
npm run build
```

### Результат сборки:
```
vite v7.1.12 building for production...
✓ 31 modules transformed.
dist/index.html                   1.41 kB │ gzip:  0.67 kB
dist/assets/index-BtmJYOxZ.css  231.02 kB │ gzip: 30.98 kB
dist/assets/index-DfOvSXQO.js    96.54 kB │ gzip: 29.96 kB
✓ built in 319ms
```

## 5. Размер бандла

| Файл | Размер | Gzip |
|------|--------|------|
| **index.html** | 1.41 KB | 0.67 KB |
| **CSS** | 231.02 KB | 30.98 KB |
| **JavaScript** | 96.54 KB | 29.96 KB |
| **Итого** | ~329 KB | ~61.6 KB |

### Размеры файлов на диске:
- **index-BtmJYOxZ.css**: 226 KB
- **index-DfOvSXQO.js**: 94 KB

## 6. Запуск проекта

### Режим разработки:
```bash
npm run dev
```
Приложение доступно по адресу: http://localhost:5173/

### Сборка проекта для production:
```bash
npm run build
```
Эта команда создаст оптимизированную версию приложения в папке `dist/`.

### Предварительный просмотр собранного проекта:
```bash
npm run preview
```
