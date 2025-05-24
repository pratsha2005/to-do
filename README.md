# React Todo Application

A modern, responsive todo application built with React, Redux Toolkit, and Tailwind CSS. Features a clean interface with persistent data storage and full CRUD operations.

![Todo App Preview]("https://to-do-kohl-delta.vercel.app/")

## 🚀 Features

- ✅ **Create, Read, Update, Delete** todos
- 📱 **Fully responsive** design for all device sizes
- 💾 **Persistent storage** using Redux Persist
- 🎨 **Modern UI** with Tailwind CSS
- ✨ **Interactive animations** and hover effects
- 🔄 **Toggle completion** status
- 📝 **Rich text descriptions** with textarea support
- 🎯 **Intuitive navigation** with React Router
- 🔍 **Clean component architecture**

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Persistence:** Redux Persist
- **Icons:** Lucide React Icons
- **Build Tool:** Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pratsha2005/to-do.git
   cd react-todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📱 Usage

### Adding a Todo
1. Click the **"Add Todo"** button (floating button in bottom-right corner)
2. Fill in the **title** and **description** fields
3. Click **"Add Task"** to save

### Managing Todos
- **✅ Mark Complete:** Click the "Done" button to toggle completion status
- **✏️ Edit:** Click the "Edit" button to modify title and description
- **🗑️ Delete:** Click the "Delete" button to remove the todo

### Navigation
- **Home:** View all todos in a responsive grid layout
- **Add Todo:** Modal dialog for creating new todos
- **Update Todo:** Modal dialog for editing existing todos

## 🏗️ Project Structure

```
src/
├── components/
│   ├── AddTodo.jsx          # Floating action button
│   ├── Dialog.jsx           # Add todo modal
│   ├── Display.jsx          # Todo grid display
│   ├── Layout.jsx           # Main layout wrapper
│   ├── PageTitle.jsx        # Header component
│   ├── Todo.jsx             # Individual todo card
│   └── Update.jsx           # Update todo modal
├── stateManagement/
│   ├── store.js             # Redux store configuration
│   └── todoSlice.js         # Todo slice with reducers
├── index.css                # Tailwind CSS imports
└── main.jsx                 # Application entry point
```

## 🔧 State Management

The application uses Redux Toolkit for state management with the following structure:

### Todo State Schema
```javascript
{
  todos: [
    {
      id: number,          // Unique timestamp ID
      title: string,       // Todo title
      task: string,        // Todo description
      completed: boolean   // Completion status
    }
  ]
}
```

### Available Actions
- `addTodo(payload)` - Add new todo
- `deleteTodo(id)` - Remove todo by ID
- `updateTodo(payload)` - Update existing todo
- `toggleTodo(id)` - Toggle completion status

## 🎨 Responsive Design

The application is fully responsive across all device sizes:

### Mobile (< 640px)
- Single column grid layout
- Stacked action buttons
- Compact header design
- Touch-friendly button sizes

### Tablet (640px - 1024px)
- Two column grid layout
- Inline action buttons
- Medium header size

### Desktop (> 1024px)
- Multi-column grid layout (3-4 columns)
- Full-size header
- Enhanced hover effects

## 🔄 Data Persistence

Todo data is automatically saved to browser localStorage using Redux Persist:
- **Automatic saving** on every state change
- **Restoration** on app reload
- **Cross-session** persistence

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Made with ❤️ using React and modern web technologies**