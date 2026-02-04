# 🏢 Shell App - Aplicación Contenedora

## Descripción
Aplicación principal que integra los microfrontends de Productos y Usuarios mediante React Router.

## Características

### Navegación
- Sistema de rutas con React Router DOM
- Navegación entre microfrontends
- Indicador visual de ruta activa

### Integración
- Importa y renderiza componentes de ambos microfrontends
- Mantiene el aislamiento de estilos
- Proporciona un layout consistente

## Rutas

- `/` - Página de inicio
- `/productos` - Microfrontend de Productos
- `/usuarios` - Microfrontend de Usuarios

## Ejecutar

```bash
npm install
npm start
```

Puerto configurado: **3002**

## Stack Tecnológico
- React 18
- React Router DOM 6
- Styled Components
- Create React App

## Nota Importante
Esta es una aplicación simplificada que simula la integración de microfrontends. En producción, se usaría Module Federation (Webpack 5) o similar para una integración más robusta.
