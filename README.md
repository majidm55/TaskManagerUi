## **Task Manager Application**

This project was bootstrapped with Vite, using the React TypeScript template and uses Material UI, TanStack Query, TanStack Router, and Zustand state management.

## **Prerequisites**

- node v22
- npm v10

## **Available Scripts**

In the project directory, you can run:
`npm install`

Installs all the packages

`npm run dev`

Runs the app in the development mode. Open http://localhost:5173 to view it in the browser (port may vary based on availability).

The page will reload if you make edits.

## **Features**

- React components with Zustand state management
- Asynchronous operations handled using TanStack Query
- UI design using Material UI components and utilities
- Multi-status task management (Pending, In Progress, Completed, Archived)
- Task pagination for better performance and handling larger data
- Analytics dashboard with pie charts using Recharts
- Routing with TanStack Router
- Type safety using Typescript

## **Installation**

1. Navigate to project directory
2. Install dependencies: `npm install`
3. Ensure ASP.NET Core backend is running (port specified in project http://localhost:5157/api)

## **Usage**

1. Run the development server: `npm run dev`
2. Open your web browser and visit the URL shown in terminal (typically `http://localhost:5173`) to view the application.
3. Backend API should be running to run the main app

## **Project Structure**

- `src/`: Contains the application source code.
  - `api/`: Contains API service functions and HTTP client configuration.
  - `components/`: Contains reusable React components for tasks, forms, and analytics.
  - `layout/`: Contains large layout componenets for individual pages
  - `types/`: Contains TypeScript type definitions for globally used types.
  - `routes/`: Contains TanStack Router route definitions and page components.
  - `utils/`: Contains utility functions.
  - `queries`/: Contains query for fetching task data
  - `main.tsx`: Renders the React app into the root HTML element and entry point of the application with router and query configuration.

## **Extra Features**

- **Enhanced Task Management:**
  - Multiple status levels beyond just complete/incomplete
  - Status toggle buttons for quick status changes
  - Task pagination with configurable page sizes

- **Analytics Dashboard:**
  - Visual pie chart showing task distribution by status

## **Trade-offs**

- **State Management Choice:**
  - Chose Zustand over Redux for simpler API and less boilerplate
  - Trade-off: Less ecosystem tooling compared to Redux DevTools and less control over side effects

- **Query Management:**
  - Used TanStack Query instead of built-in fetch for better caching
  - Trade-off: Additional dependency and setup
- **Component Library:**
  - Material UI chosen for rapid development and consistent design
  - Trade-off: Larger bundle size but faster development time

- **Styles:**
  - Material UI styled components wihtout a central theme
  - Trade-off: Visually basic elements and styles but faster development time

- **Testing:**
  - No unit tests included per assignment requirements
  - Trade-off: Faster initial development but less confidence in refactoring

- **Backend Integration:**
  - Direct API calls without authentication layer
  - Trade-off: Simpler implementation but not production-ready for multi-user scenarios and access control
