# Astra Frontend

A modern, standalone Angular 19 web application for the Astra Academic Portal with PrimeNG 19 UI components and Tailwind CSS.

## Tech Stack
- **Framework**: Angular 19 (Standalone Components)
- **UI Components**: PrimeNG 19 (@primeuix/themes Aura theme)
- **Styling**: Tailwind CSS, PrimeIcons
- **Routing**: Angular Router with functional Auth Guards

## Prerequisites
- Node.js (v18+)
- Angular CLI (`npm install -g @angular/cli`)

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   # or
   ng serve
   ```

3. **Navigate to the application:**
   Open your browser at `http://localhost:4200/`.

4. **Production Build:**
   ```bash
   npm run build
   ```
   Build artifacts will be stored in the `dist/` directory.

## Features
- **Google OAuth Login**: Direct integration with Astra Backend Google authentication flow.
- **Role-Based Access Control**: Protected routes for Student, Faculty, and Admin dashboards.
- **Responsive Layout**: Designed for mobile and desktop screens.
