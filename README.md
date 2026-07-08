# NovaBeats

![Version](https://img.shields.io/badge/version-1.2.5-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Reproductor de música local para Linux desarrollado con Electron.

---

## Capturas

> Interfaz principal del reproductor

![NovaBeats main](/docs/screenshots/main.png)

![NovaBeats playlist](/docs/screenshots/playlist.png)

![NovaBeats list](/docs/screenshots/list.png)

![NovaBeats compact](/docs/screenshots/compact.png)

---

## Tabla de contenidos

- Descripción
- Estado del proyecto
- Características
- Cómo usar
- Tecnologías utilizadas
- Instalación para desarrollo
- Generar build
- Instalación (Flatpak)
- Estructura del proyecto
- Próximos objetivos
- Feedback
- Autor

---

## Descripción

NovaBeats es un reproductor de música local diseñado para usuarios que prefieren tener control total sobre su biblioteca musical sin depender de servicios de streaming.

Permite cargar carpetas completas o archivos individuales, crear y gestionar playlists, reproducir música con controles avanzados y visualizar metadatos de las pistas.

Construido con Electron y tecnologías web modernas, ofrece una experiencia de escritorio ligera, rápida y personalizable.

---

## Estado del proyecto

**Versión actual:** 1.2.5

NovaBeats es una aplicación funcional y estable para uso diario.

El proyecto sigue en desarrollo activo, con mejoras progresivas.

---

## Características

### Reproducción de audio
- Archivos locales de música
- Carga de carpetas o archivos individuales
- Controles: reproducir, pausar, anterior, siguiente
- Shuffle
- Repetición (una canción, lista completa, desactivado)
- Control de volumen persistente
- Barra de progreso
- Media Session API

### Gestión de playlists
- Creación de playlists personalizadas
- Guardado en almacenamiento local
- Eliminación de playlists
- Cambio entre listas

### Interfaz
- Modo compacto
- Visualizador de audio
- Animaciones CSS
- Persistencia de configuración

### Metadatos
- Título, artista y carátula
- Actualización dinámica

---

## Cómo usar

1. Abrir NovaBeats
2. Seleccionar música
3. Reproducir
4. Crear playlists
5. Ajustar volumen

---

## Tecnologías utilizadas

- Electron
- Node.js
- JavaScript
- HTML5
- CSS3
- music-metadata

---

## Instalación para desarrollo

```bash
git clone https://github.com/Alejandro-Elias/novaBeats.git
cd novaBeats
npm install
npm start
```

---

## Generar build

```bash
npm run build
```

Salida:

```text
dist/
```

---

## Instalación (Flatpak)

> Próximamente en Flathub

Actualmente solo disponible desde código fuente o builds locales.

---

## Estructura del proyecto

```text
src/
├── main.js
├── index.html
├── modules/
├── renderer/
├── css/
└── assets/
```

---

## Próximos objetivos

- Publicación en Flathub
- Personalización de interfaz
- Mejoras de rendimiento
- Nuevas funciones de biblioteca musical

---

## Feedback

Issues y sugerencias son bienvenidas en GitHub.

---

## Autor

**Alejandro Elias**

Desarrollador Web Full Stack

