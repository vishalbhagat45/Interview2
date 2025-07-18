import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="bg-white dark:bg-gray-800 rounded shadow-md hover:shadow-lg cursor-pointer transition p-4"
        onClick={() => setOpen(true)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded mb-3"
        />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm">₹{product.price}</p>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 relative max-w-md w-full">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg font-medium mb-2">₹{product.price}</p>
            <p className="text-sm">{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}