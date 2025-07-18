import React, { useEffect, useState } from "react";
import productsData from "../data/products.json";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { useTheme } from "../context/ThemeContext";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "",
    brands: [],
    minPrice: "",
    maxPrice: ""
  });
  const itemsPerPage = 6;
  const { darkMode, toggleTheme } = useTheme();

  const filteredProducts = productsData
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) =>
      filters.category ? p.category === filters.category : true
    )
    .filter((p) =>
      filters.brands.length > 0 ? filters.brands.includes(p.brand) : true
    )
    .filter((p) =>
      filters.minPrice ? p.price >= parseInt(filters.minPrice) : true
    )
    .filter((p) =>
      filters.maxPrice ? p.price <= parseInt(filters.maxPrice) : true
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded px-3 py-2 w-full sm:w-1/2"
        />
        <div className="flex gap-2">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded px-3 py-2"
          >
            <option value="">Sort</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
          <button
            onClick={toggleTheme}
            className="border dark:border-gray-700 rounded px-3 py-2"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      <Filters filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-3 py-1 border rounded transition duration-150 hover:bg-blue-600 hover:text-white ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}