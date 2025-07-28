Task Manager Application

## **Getting Started with Vite**

This project was bootstrapped with Vite, using the React TypeScript template with Material UI, TanStack Query, and Zustand state management.

## **Available Scripts**

In the project directory, you can run:

`npm run dev`

Runs the app in the development mode. Open http://localhost:5173 to view it in the browser (port may vary based on availability).

The page will reload if you make edits. You will also see any lint errors in the console.

## **Features**

- React components with Zustand state management
- Asynchronous operations handled using TanStack Query
- Responsive UI design using Material UI components and utilities
- Task CRUD operations with ASP.NET Core backend
- SQLite database for data persistence
- Multi-status task management (Pending, In Progress, Completed, Cancelled)
- Task pagination for better performance
- Analytics dashboard with pie charts using Recharts
- Type-safe routing with TanStack Router

## **Prerequisites**

- node v18+
- npm v8+
- .NET Core SDK (for backend)

## **Installation**

1. Navigate to project directory
2. Install dependencies: `npm install`
3. Ensure ASP.NET Core backend is running with SQLite database

## **Usage**

1. Run the development server: `npm run dev`
2. Open your web browser and visit the URL shown in terminal (typically `http://localhost:5173`) to view the application.
3. Backend API should be running to enable full functionality

## **Project Structure**

- `src/`: Contains the application source code.
  - `components/`: Contains reusable React components for tasks, forms, and analytics.
  - `stores/`: Contains Zustand state management stores.
  - `types/`: Contains TypeScript type definitions and Zod schemas.
  - `routes/`: Contains TanStack Router route definitions and page components.
  - `utils/`: Contains utility functions and API helpers.
  - `App.tsx`: Entry point of the application with router configuration.
  - `main.tsx`: Renders the React app into the root HTML element.

## **Configuration**

- **Zustand configuration:**
  - Global state stores for task management and UI state
  - Persist middleware for local storage integration
  - Type-safe state management with TypeScript

- **TanStack Query configuration:**
  - API call management with caching and background updates
  - Optimistic updates for better user experience
  - Error handling and retry logic

- **Material UI configuration:**
  - The project uses Material UI components and theming system
  - Custom theme configuration with consistent design tokens
  - Responsive breakpoints and component customization

- **TanStack Router configuration:**
  - Type-safe routing with automatic route generation
  - Nested routes and layout components
  - Route-based code splitting for performance

## **Backend Integration**

- **ASP.NET Core Web API** endpoints:
  - `GET /api/tasks` - Fetch paginated tasks
  - `POST /api/tasks` - Create new task
  - `PUT /api/tasks/{id}` - Update task status/details
  - `DELETE /api/tasks/{id}` - Delete task

- **SQLite Database** for persistent storage of tasks and user data

## **Extra Features**

- **Enhanced Task Management:**
  - Multiple status levels beyond just complete/incomplete
  - Status toggle buttons for quick status changes
  - Task pagination with configurable page sizes

- **Analytics Dashboard:**
  - Visual pie chart showing task distribution by status
  - Real-time updates as tasks change
  - Interactive chart components with hover effects

- **Modern Development Experience:**
  - Full TypeScript implementation with strict type checking
  - Zod schemas for runtime type validation
  - Hot module replacement with Vite for fast development

- **User Experience Enhancements:**
  - Responsive design for mobile and desktop
  - Loading states and error handling
  - Optimistic UI updates for better perceived performance

## **Trade-offs**

- **State Management Choice:**
  - Chose Zustand over Redux for simpler API and less boilerplate
  - Trade-off: Less ecosystem tooling compared to Redux DevTools

- **Query Management:**
  - Used TanStack Query instead of built-in fetch for better caching
  - Trade-off: Additional dependency but significant DX improvements

- **Component Library:**
  - Material UI chosen for rapid development and consistent design
  - Trade-off: Larger bundle size but faster development time

- **Testing:**
  - No unit tests included per assignment requirements
  - Trade-off: Faster initial development but less confidence in refactoring

- **Backend Integration:**
  - Direct API calls without authentication layer
  - Trade-off: Simpler implementation but not production-ready for multi-user scenarios

- **Database Choice:**
  - SQLite for simplicity in development
  - Trade-off: Easy setup but not suitable for production scale or concurrent users
