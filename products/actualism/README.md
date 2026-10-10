# Actualism — Emergent Word v1.1

Prototipo editorial de EmergentSoft para explorar perspectivas contrastadas con Gemini.

## Ejecutar localmente
1. Requiere Node.js 20 o superior.
2. Desde esta carpeta, ejecutá `npm install`.
3. Configurá `GEMINI_API_KEY` como variable de entorno. Nunca pegues una clave real en el HTML ni la subas a Git.
   - macOS/Linux: `export GEMINI_API_KEY="tu_clave"`
   - PowerShell: `$env:GEMINI_API_KEY="tu_clave"`
4. Ejecutá `npm start` y abrí `http://localhost:3000`.

## Incluye
- UI adaptable en español y tres modos de exposición.
- Backend Node/Express que llama a Gemini sin exponer la clave al navegador.
- Validación de entrada, límite de tamaño, timeout y manejo de errores.
- Renderizado de resultados con `textContent` para evitar interpretar salida del modelo como HTML.
- Caso de artículo claramente identificado como ficticio.

## Límites
Social Radar no consulta redes sociales; Scout no recupera fuentes; Fact-Checker no verifica automáticamente afirmaciones contra fuentes primarias. La salida del modelo no constituye verificación periodística.

Antes de un despliegue público agregá autenticación, rate limiting, límites de gasto, política de privacidad, pruebas automatizadas y revisión de seguridad. Tailwind se carga desde CDN para prototipado y debería compilarse para producción.

## Secretos
No hay claves incluidas en el repositorio. Configurá los secretos únicamente en el entorno de ejecución.