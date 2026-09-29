# Dev Test: Todo App & User Directory

A React application featuring a task management app and a user directory that fetches live data from the JSONPlaceholder API.

## Features

### 1. Todo Application
- Add new tasks
- Toggle task completion status
- Filter tasks by **All**, **Active**, and **Completed**
- Delete individual tasks
- Empty state messaging and active task counter

### 2. User Directory
- Fetches live user data from `https://jsonplaceholder.typicode.com/users`
- Real-time search by user name
- Loading and error states with a retry button
- Architecture built with **React Context API** and custom service abstractions

---

## React Concepts Demonstrated

- **`useState`**: Managed component state for inputs, filters, user arrays, loading, and error handling.
- **`useEffect`**: Handled initial data fetching on component mount.
- **`useContext` & Context API**: Provided global user data without prop drilling.
- **Props**: Passed user objects down to reusable `UserCard` components.
- **Service Abstraction**: Separated network requests (`userService.js`) from UI components.

---

## API Used

- **JSONPlaceholder API**: `https://jsonplaceholder.typicode.com/users`

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone: https://github.com/Arniode/dev-test
   cd dev-test