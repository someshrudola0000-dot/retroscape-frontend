# RetroScape – AI-Powered 3D and AR Reconstruction of Historical Monuments

RetroScape is a web-based project focused on exploring historical monuments through interactive 3D visualization and Augmented Reality (AR).

The project currently focuses on Qutub Minar, allowing users to explore its historical information, timeline, and 3D model.

## Features

- Interactive homepage and navigation.
- Qutub Minar monument information.
- Historical timeline.
- Then vs Now comparison.
- Interactive 3D Qutub Minar model.
- 3D rotation, zoom, and reset controls.
- Web-based AR experience using Google Model Viewer.
- Responsive design for desktop and mobile devices.

## Technology Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### 3D Rendering
- Three.js
- React Three Fiber
- Drei

### AR Integration
- Google Model Viewer
- GLB/GLTF 3D model format
- Supported AR modes: Scene Viewer, WebXR, and Quick Look (device-dependent).

## Project Structure

```text
retroscape-frontend/
├── app/
│   ├── explore/
│   │   ├── 3d/
│   │   ├── ar/
│   │   ├── timeline/
│   │   └── then-vs-now/
│   ├── monuments/
│   │   └── qutub-minar/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   └── models/
│       └── new-qutub-minar.glb
├── custom-elements.d.ts
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js installed
- npm installed
- Visual Studio Code (recommended)

### Installation

Clone the repository:

```bash
git clone https://github.com/someshrudola0000-dot/retroscape-frontend.git
```

Open the project directory:

```bash
cd retroscape-frontend
```

Install dependencies:

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open your browser and visit:

http://localhost:3000

## 3D Model

The current New Qutub Minar 3D model is stored at:

`public/models/new-qutub-minar.glb`

The model is displayed using Three.js and React Three Fiber, with interactive rotation, zoom, and reset controls.

## AR Experience

The project uses Google Model Viewer to display the 3D model and provide supported AR viewing options on compatible devices.

AR availability depends on device compatibility, browser support, and the selected AR mode.

## Future Improvements

- Integration of the Old Qutub Minar 3D model.
- Backend and AI integration.
- Further improvements to the AR experience.

## GitHub Repository

[RetroScape Frontend Repository](https://github.com/someshrudola0000-dot/retroscape-frontend)

**Project:** RetroScape

**Focus:** Historical Monument Exploration using 3D and AR Technology