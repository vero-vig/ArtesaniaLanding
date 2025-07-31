# Guía de Despliegue para GitHub Pages

Esta guía te ayudará a desplegar tu landing page de artesanías en GitHub Pages de forma estática.

## Opción 1: Despliegue usando GitHub Actions (Recomendado)

### 1. Crear archivo de configuración de GitHub Actions

Crea el archivo `.github/workflows/deploy.yml` en tu repositorio:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build static site
      run: |
        npm run build
        node build-static.js
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs
```

### 2. Configurar GitHub Pages

1. Ve a la configuración de tu repositorio en GitHub
2. Scroll hasta la sección "Pages"
3. **IMPORTANTE**: En "Source", selecciona "GitHub Actions" (NO "Deploy from a branch")
4. El workflow automáticamente detectará y desplegará tu sitio

### 3. Configurar Permisos (Si hay errores)

Si el despliegue falla por permisos:

1. Ve a Settings → Actions → General
2. En "Workflow permissions", selecciona "Read and write permissions"
3. Marca "Allow GitHub Actions to create and approve pull requests"
4. Guarda los cambios

**Nota**: El script automáticamente:
- Convierte las rutas absolutas a relativas para GitHub Pages
- Elimina scripts de desarrollo
- Crea el archivo `.nojekyll` necesario
- Usa el método moderno de GitHub Actions (no la rama gh-pages)

## Opción 2: Despliegue Manual

### 1. Construir el proyecto

```bash
# Instalar dependencias
npm install

# Construir el proyecto
npm run build

# Generar archivos estáticos
node build-static.js
```

### 2. Subir archivos

1. Los archivos estáticos se generarán en la carpeta `docs/`
2. Sube estos archivos a tu repositorio
3. Configura GitHub Pages para usar la carpeta `docs/` como fuente

## Opción 3: Para otros servicios de hosting estático

Si quieres usar Netlify, Vercel u otro servicio:

### Netlify
- Conecta tu repositorio
- Comando de build: `npm run build && node build-static.js`
- Directorio de publicación: `docs`

### Vercel
- Conecta tu repositorio
- Framework Preset: Vite
- Build Command: `npm run build && node build-static.js`
- Output Directory: `docs`

## Notas Importantes

1. **Formulario de contacto**: En un sitio estático, el formulario no funcionará sin un backend. Considera usar:
   - Netlify Forms
   - Formspree
   - EmailJS
   - Getform

2. **Rutas**: Como es una SPA (Single Page Application), asegúrate de configurar las redirects correctamente en tu servicio de hosting.

3. **Variables de entorno**: Si necesitas variables de entorno, agrégalas con el prefijo `VITE_` para que estén disponibles en el cliente.

## Estructura de archivos después del build

```
docs/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── [otros archivos estáticos]
```

¡Tu landing page estará lista para ser vista por todo el mundo! 🚀