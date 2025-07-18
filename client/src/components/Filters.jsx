const categories = ["Mobile", "Laptop", "Tablet"];
const brands = ["Apple", "Samsung", "Dell", "Lenovo"];

function Filters({ filters, setFilters }) {
  const update = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleBrandChange = (brand) => {
    const updated = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    update("brands", updated);
  };

  const resetFilters = () => {
    setFilters({ category: "", brands: [], minPrice: "", maxPrice: "" });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold mb-2">Filters</h2>

      <div>
        <label className="block font-medium mb-1">Category</label>
        <select
          value={filters.category}
          onChange={(e) => update("category", e.target.value)}
          className="w-full border dark:border-gray-700 rounded px-2 py-1"
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center">
            <input
              type="checkbox"
              checked={filters.brands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
              className="mr-2"
            />
            <label>{brand}</label>
          </div>
        ))}
      </div>

      <div>
        <label className="block font-medium mb-1">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => update("minPrice", e.target.value)}
            className="w-full border dark:border-gray-700 rounded px-2 py-1"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => update("maxPrice", e.target.value)}
            className="w-full border dark:border-gray-700 rounded px-2 py-1"
          />
        </div>
      </div>

      <button
        onClick={resetFilters}
        className="mt-2 w-full bg-black dark:bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Reset Filters
      </button>
    </div>
  );
}

export default Filters;