import React from "react";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
          <ProductList />
        </div>
      </main>
    </ThemeProvider>
  );
}