# 🚀 Brandon Acevedo — Portafolio Web

Portafolio profesional de **Brandon Alberto Acevedo Pabón**, desarrollador junior especializado en **backend, APIs y contenedores**. Construido con HTML, CSS y JavaScript puro, optimizado para **rendimiento, accesibilidad y experiencia de usuario**.

## 🔗 Despliegues en Vivo

- **GitHub Pages**: [https://brandon-ac.github.io/](https://brandon-ac.github.io/)
- **Vercel**: [https://brandon-ac-github-io.vercel.app/](https://brandon-ac-github-io.vercel.app/)

---

## ✨ Características Principales

✅ **Diseño moderno y responsivo** — Experiencia visual impactante en desktop, tablet y móvil  
✅ **Optimizado para accesibilidad (A11y)** — Soporte para lectores de pantalla, navegación por teclado y `prefers-reduced-motion`  
✅ **SEO básico implementado** — Meta tags, Open Graph, JSON-LD (schema.org) para mejor indexación  
✅ **Animaciones sutiles y transiciones elegantes** — Sin sacrificar rendimiento ni accesibilidad  
✅ **Formulario de contacto** — Envío seguro con FormSubmit + fallback AJAX  
✅ **Secciones dinámicas** — Hero, About, Proyectos, Tecnologías, Experiencia, Logros y Contacto  
✅ **Proyectos destacados** — Tarjetas enriquecidas con impacto, rol y tecnologías utilizadas  
✅ **Skip-to-content** — Enlace de accesibilidad para usuarios de teclado  

---

## 🛠️ Stack Técnico

### Frontend
- **HTML5** — Semántica, landmarks, ARIA roles
- **CSS3** — Grid, Flexbox, Custom Properties, Media Queries, `clamp()` para tipografía responsiva
- **JavaScript** — Vanilla JS (sin frameworks), animaciones al scroll, menú responsive, manejo de formularios

### Herramientas & Servicios
- **Font Awesome 6.4** — Iconografía
- **Google Fonts** — Tipografía Inter (variable)
- **FormSubmit** — Recepción de emails del formulario
- **GitHub Pages & Vercel** — Despliegue estático

---

## 📋 Estructura del Proyecto

```
CV_WEB/
├── index.html              # Archivo principal (HTML semántico)
├── styles.css              # Estilos globales y componentes
├── script.js               # Lógica interactiva (menú, scroll, formulario)
├── README.md               # Este archivo
├── LICENSE                 # Licencia MIT
├── assets/
│   ├── Imagen_principal.jpeg
│   └── proyectos/
│       ├── LogiTrack.png
│       ├── Cartas_Misticas.png
│       ├── chatbot-citas.png
│       ├── Proyecto_SER.png
│       └── Bank_Acme.png
└── .gitignore              # Archivos ignorados por Git
```

---

## 🚀 Instalación & Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/Brandon-Ac/brandon-ac.github.io
cd CV_WEB
```

### 2. Abrir localmente
**Opción A:** Doble-click en `index.html` (no recomendado por limitaciones CORS)

**Opción B:** Usar un servidor local (recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server .

# Con Live Server (VS Code extension)
# Abre el archivo y haz clic en "Go Live"
```

Luego abre `http://localhost:8000` en tu navegador.

### 3. Ver en producción
Visita cualquiera de los links de despliegue:
- [https://brandon-ac.github.io/](https://brandon-ac.github.io/)
- [https://brandon-ac-github-io.vercel.app/](https://brandon-ac-github-io.vercel.app/)

---

## 📄 Contenido del Portafolio

### 🏠 **Hero**
Introducción impactante con nombre, subtitle, propuesta de valor y CTAs principales.

### 👤 **Sobre mí**
Biografía, fortalezas clave, tecnologías principales y foto de perfil.

### 💼 **Proyectos Destacados**
5 proyectos con:
- **LogiTrack** — Sistema de gestión de bodegas (Java, Spring Boot, PostgreSQL, Docker)
- **Cartas Místicas** — App interactiva de cartas (HTML, CSS, JavaScript)
- **ChatBot IA** — Bot de citas médicas (Python, JavaScript)
- **Proyecto SER** — Cuestionario psicológico interactivo (HTML, CSS, JS, APIs)
- **Banco ACME** — Plataforma financiera simulada (Java, Spring Boot, APIs)

Cada tarjeta incluye descripción, impacto, rol, tecnologías y enlaces (Demo + GitHub).

### 🔧 **Tecnologías**
Grid visual con iconos de todas las tech que manejo: Java, Python, JavaScript, HTML5, CSS3, Git, PostgreSQL, Docker, APIs REST.

### 📈 **Experiencia & Logros**
Timeline de roles relevantes y logros clave en desarrollo backend y web.

### 📧 **Contacto**
- Email, ubicación y datos personales
- Formulario funcional con validación y mensajes accesibles

---

## ♿ Accesibilidad

✅ **WCAG 2.1 Nivel A/AA**
- Contraste de colores suficiente (4.5:1 en textos)
- Navegación por teclado completa (Tab, Enter, Space)
- Skip-to-content link visible al tabbing
- ARIA roles y labels en elementos interactivos
- `aria-expanded`, `aria-live`, `role="status"` donde corresponde

✅ **Respeto a preferencias del usuario**
- `prefers-reduced-motion` — Desactiva animaciones si el usuario lo prefiere
- `prefers-color-scheme` — Adaptable a tema claro/oscuro (actualmente dark)

---

## 🎨 Paleta de Colores

| Variable | Valor | Uso |
|----------|-------|-----|
| `--dark-bg` | `#0a0a0a` | Fondo principal |
| `--darker-bg` | `#050505` | Fondo secundario (header, footer) |
| `--card-bg` | `#111111` | Cards y contenedores |
| `--accent-red` | `#e63946` | Colores acentos (botones, iconos) |
| `--text-primary` | `#f8f8f8` | Texto principal |
| `--text-secondary` | `#aaaaaa` | Texto secundario |

---

## 📱 Responsividad

El sitio es **mobile-first** con breakpoints en:
- **768px** — Tablet (ajustes de menú, grid, layout)
- **480px** — Mobile (reducción de tamaños, stacks verticales)

Usa `clamp()` para tipografía fluida que se adapta automáticamente al viewport.

---

## 🔍 SEO & Metadata

- ✅ Meta description optimizada
- ✅ Open Graph tags (Facebook, LinkedIn, Twitter)
- ✅ JSON-LD (schema.org) para Person y ProjectList
- ✅ Canonical URL
- ✅ Keywords relevantes
- ✅ Alt text descriptivo en imágenes

---

## 📞 Formulario de Contacto

- **Método**: POST a FormSubmit
- **Validación**: HTML5 nativa + JavaScript
- **Mensajes accesibles**: `aria-live="polite"` para confirmaciones
- **Fallback**: Si fetch falla, intenta envío tradicional

---

## 🔄 Cómo Actualizar el Portafolio

### Añadir un nuevo proyecto
1. Sube la imagen a `assets/proyectos/`
2. Añade una nueva `.project-card` en `index.html` dentro de `.projects-container`
3. Actualiza el JSON-LD de proyectos si es importante para SEO

### Cambiar información personal
- Edita `index.html` secciones de Hero y About
- Actualiza meta description y JSON-LD con tu info

### Personalizar colores
- Modifica las variables en `styles.css` `:root`

---

## 📊 Performance & Lighthouse

Optimizaciones incluidas:
- Lazy loading en imágenes no críticas
- Preload de Google Fonts
- CSS y JS minificables (usar herramientas de build si deseas)
- SVG icons (via Font Awesome) sin peso significativo
- Tamaños de imagen optimizados

**Nota**: Ejecuta Lighthouse en Chrome DevTools para auditoría completa.

---

## 🤝 Contribución

Este es un portafolio personal, pero si encuentras bugs o tienes sugerencias:
1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/mejora`
3. Commit cambios: `git commit -m "Añade mejora X"`
4. Push: `git push origin feature/mejora`
5. Abre un Pull Request

---

## 📜 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Eres libre de usar, modificar y distribuir este código, siempre que incluyas la nota de copyright.

Ver [`LICENSE`](./LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Brandon Alberto Acevedo Pabón**  
Desarrollador Junior | Backend | APIs | Docker  

- 📧 Email: [brandonacevedo698@gmail.com](mailto:brandonacevedo698@gmail.com)
- 🔗 GitHub: [@Brandon-Ac](https://github.com/Brandon-Ac)
- 💼 LinkedIn: [brandon-acevedo](https://www.linkedin.com/in/brandon-acevedo-326850374/)
- 🌍 Ubicación: Cúcuta, Colombia

---

## 📝 Notas Finales

- Este portafolio es **open source** con MIT License.
- Siéntete libre de adaptarlo a tu estilo personal.
- Recuerda actualizar las URLs canónicas en meta tags si despliegas en otro dominio.
- Usa el archivo `.gitignore` para evitar subir archivos innecesarios.

---

**Última actualización**: Diciembre 2025  
**Versión**: 1.0.0  

Hecho por Brandon Acevedo
