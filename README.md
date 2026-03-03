# 🚀 All-in-One Solution: Frontend (Angular 21 + SSR)

¡Bienvenidos al repositorio oficial del Frontend! Nuestra aplicación está construida con Angular moderno, Server-Side Rendering (SSR) optimizado con `withFetch()`, y está completamente automatizada para separar desarrollo de producción.

## 🌐 Entornos y Enlaces Rápidos

- **Repo GitHub:** [s02-26-equipo-05-web-app-development-frontend](https://github.com/No-Country-simulation/s02-26-equipo-05-web-app-development-frontend)
- **App en Producción:** [https://s02-26-equipo-05-web-app-developmen-silk.vercel.app/](https://s02-26-equipo-05-web-app-developmen-silk.vercel.app/)

## 🚀 Infraestructura CI/CD (Despliegues Automáticos)

Hemos implementado **Despliegues Continuos con Vercel**. Esto significa que Vercel detecta automáticamente nuevos cambios en la rama `main`. 

Cada vez que el equipo apruebe una Pull Request (PR) y esta se fusione, Vercel interceptará el cambio, compilará la versión SSR de Angular, y hará un redeploy automático. Literalmente tendrán un entorno 100% en vivo con la última versión del código en un par de minutos, de forma completamente invisible.

## 💻 Desarrollo Local vs. Producción (Environment Strategy)

No se preocupen por golpear accidentalmente la base de datos de producción o cruzar URLs. Ya configuramos los entornos de forma nativa para blindar su código local:

### 1. Modo Desarrollo (Local)
Cuando trabajen en sus computadoras, utilicen este comando:

```bash
# Iniciar el servidor de desarrollo
npm run start
# (O alternativamente: ng serve)
```

Al hacer esto, Angular usará automáticamente el archivo `src/environments/environment.development.ts`. Este archivo ya está configurado para **apuntar las peticiones de Angular al backend local en `http://localhost:3000`**. Pueden destruir, testear y depurar componentes libremente sin afectar a los usuarios reales.

### 2. Modo Producción (Vercel Build)
Ustedes **no** necesitan cambiar manualmente las URLs cuando quieran subir código.

Durante la compilación en la nube (cuando se hace merge a `main`), Angular ejecuta una regla de **"File Replacement"** automática. Oculta el entorno de desarrollo local e inyecta el archivo de producción (`src/environments/environment.ts`), el cual apunta nativamente a las verdaderas URLs seguras de la API en el servidor (`https://...`).

## 📊 Accesos a Paneles de Control (Monitoreo)

Todo el equipo desarrollador tiene acceso maestro para ver logs de errores, el historial de despliegues y leer la información alojada en PostgreSQL:

### 1. Panel de Hosting (Vercel)
Para ver los despliegues web y los logs del servidor SSR:
1. Navega a [Vercel.com](https://vercel.com/)
2. Inicia sesión usando Google Server Auth ("Continue with Google").
3. **Credenciales del proyecto:** *Si eres Dev, habla con el equipo para adquirir las credenciales de acceso.*
4. Una vez ahí, podrán ver en "Projects" los dos despliegues paralelos (Frontend y Backend API).

### 2. Base de Datos Central (Supabase)
Si necesitan verificar si las llamadas HTTP del Frontend realmente están insertando leads/órdenes:
1. Navega a [Supabase.com](https://supabase.com/) e Inicia Sesión.
2. **Credenciales de Base de Datos:** *Si eres Dev, habla con el equipo para adquirir las credenciales de acceso.*

---
*¡Revisen los enlaces, bajen los últimos cambios de la rama principal (`git pull`) a sus computadoras locales, levanten sus servidores de desarrollo y sigamos programando!*
