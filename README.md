# Tapias Hookah — GitHub Pages Ready (React + Vite)

Este proyecto ya está preparado para publicarse fácil en **GitHub Pages** (sin que tengas que pelearte con rutas).

## ✅ Ver local
```bash
npm install
npm run dev
```

## ✅ Publicar en GitHub Pages (RECOMENDADO: Automático con Actions)

### 1) Sube este proyecto a un repo en GitHub (ej: `tapias-hookah`)
### 2) En GitHub ve a:
**Settings → Pages → Build and deployment**
- Source: **GitHub Actions**

### 3) Haz push a `main`
En cuanto subas (push), GitHub Actions va a:
- instalar dependencias
- hacer build con `BASE_PATH="/<repo-name>/"` automáticamente
- publicar tu site

Tu link será:
`https://TU-USUARIO.github.io/<repo-name>/`

---

## Alternativa (manual) con `gh-pages`
Si prefieres manual:

```bash
npm install
npm run build
npm run deploy
```

> Nota: en Vite, para GitHub Pages necesitas `base` con el nombre del repo.  
> Aquí ya está resuelto con `BASE_PATH`.

## Dónde cambiar links
- WhatsApp / Google Maps: `src/sections/Gallery.jsx`
- Sabores: `src/sections/Flavors.jsx`
