# Assignment Dev V : Rachelle van Uden

## Project Description
This project involves gathering and visualizing data collected from Lost Ark's DPS (Damage Per Second) Meter. The goal is to provide insights into player performance, skill usage, and efficiency based on user data. This will help players analyze their gameplay and improve their performance.

## Project Structure
- **`src/`** - Application code (components, services)
  - **`backend/`** - Backend logic, including API endpoints and database interactions.
  - **`frontend/`** - React-based frontend for displaying visualizations.
- **`public/`** - Static files such as images, icons, and the HTML entry point (`index.html`).
- **`docs/`** - Documentation including progress reports, technical decisions, and design notes.
- **`config/`** - Configuration files such as ESLint, Vite, etc.

## Getting Started 
To run the project locally, follow these steps:

**Clone the repository**:<br>
git clone https://github.com/je-naam/assignment-2-RachellevanUden.git

**Navigate to the project directory**: <br>
`cd assignment-2-RachellevanUden`

**Install dependencies for both frontend and backend**: 
- Frontend (React + Vite):<br>
`cd src/frontend`<br>
`npm install`

- Backend (Express + Nodemon):<br>
`cd ../../src/backend`<br>
`npm install`

**Start the project (runs both frontend and backend simultaneously)**:<br>
`cd ../..`<br>
`npm run dev`

This will run the frontend on `http://localhost:5174` and the backend on `http://localhost:3000`.

## Available Scripts
**`npm run dev`**: Start both the frontend and backend simultaneously. <br>
**`npm run dev:frontend`**: Start the frontend (Vite). <br>
**`npm run dev:backend`**: Start the backend (with Nodemon).

## Project Dependencies
- **Frontend**:
    - React, React-DOM
    - Vite (for bundling and development)
    - ESLint (for linting)
- **Backend**:
    - Express (for the API)
    - Nodemon (for live reloading during development)

## Folder Structure
Here’s a breakdown of the main folders:

**`src/`**: Contains all the source code, split into frontend and backend. <br>
**`public/`**: Contains static files served directly to the user. <br>
**`docs/`**: Contains documentation related to the project.<br>
**`config/`**: Contains configuration files like ESLint, Vite, etc.

## Gitignore
The project uses a **`.gitignore`** file to exclude unnecessary files from version control, such as **`node_modules`**, build directories, and IDE settings.<br>

Here is an overview of the ignored files:<br>

**`node_modules/`**: Automatically generated by npm, contains installed dependencies.<br>
**`dist/`**: Build files generated during the development process.<br>
IDE-specific files: **`.vscode/`**, **`.idea/`**, etc.
