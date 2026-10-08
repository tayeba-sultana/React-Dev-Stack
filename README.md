# React Dev Stack

## About

Dev Stack Builder is a React and TypeScript web app where users can explore development technologies and build their own personalized technology stack.

## Live Link
https://react-dev-stack-a5.netlify.app/

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React Toastify
* React Icons
* JSON

## Features

*  Browse and explore modern development technologies.
*  Add and remove technologies from your personal stack.
*  Responsive design for mobile, tablet, and desktop.

---

## React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React UI code easier to read and write.

### 2. What is the difference between props and state?

Props pass data from a parent to a child. State stores data inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in React. I used it for technologies, selected stack, loading, and the mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects in React. I used it to fetch the technology data from `data.json` when the app loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item and update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it for the empty stack message:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // selected technologies
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data and functions through props. The child can call a function received from the parent to send an action back.

Example:

```tsx
<TechCard
  tech={tech}
  stack={stack}
  handleAddToStack={handleAddToStack}
/>
```

---

## Project Structure

```text
react-dev-stack/
│
├── public/
│   ├── data.json
│   └── favicon.svg
|   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   ├── hero.png
│   │   ├── logo-text.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── MainLayout.tsx
│   │   ├── TechList.tsx
│   │   ├── TechCard.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
