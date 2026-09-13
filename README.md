# Dev Stack Builder

Dev Stack Builder is a React and TypeScript website where users can explore different web development technologies and create their own technology stack.

## Live Site

https://ph-assignment-5-delta.vercel.app/

## GitHub Repository

https://github.com/ariandesu/PH-Assignment-5

## Technologies Used

- React.js
- TypeScript
- Vite
- React-Toastify
- CSS
- JSON

## Features

1. Users can explore different technologies with their name, category, description, rating, difficulty, and badge.
2. Users can add technologies to their own stack and remove them when needed.
3. The website shows toast notifications when adding, removing, trying to add a duplicate technology, or removing all technologies.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand. React uses JSX to describe what the UI should look like.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only.

State is data that belongs to a component and can change over time. When state changes, React updates the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store and update data in a React component.

In this project, I used `useState` to store the selected technologies in the user's stack and update the stack when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to run code after a component renders.

I used `useEffect` to load the technology data from the JSON file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item was changed, added, or removed. This makes updating the UI more efficient.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used conditional rendering in the Your Stack section. When no technology is selected, an empty message is shown. When technologies are selected, the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using props.

A child can send information back to the parent by calling a function that the parent passes to the child through props.

For example, the parent can pass an `onAdd` function to a technology card. When the user clicks the Add to Stack button, the child calls that function and sends the selected technology back to the parent.

## Project Overview

Dev Stack Builder helps users explore popular development technologies and build a custom technology stack. The project uses React components, TypeScript, JSON data, state management, and React-Toastify notifications.