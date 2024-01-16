"use client";
import React, { useState, useEffect } from "react";

const AddEditPage = () => {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    types: "",
    classification: "",
    resistant: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const imageUrl = "https://placekitten.com/300/200";

  useEffect(() => {
    if (isEditing) {
      setFormData({
        number: "123",
        name: "Example Pokemon",
        types: "Fire",
        classification: "Legendary",
        resistant: "Water",
      });
    }
  }, [isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Save:", formData);

    setFormData({
      number: "",
      name: "",
      types: "",
      classification: "",
      resistant: "",
    });
  };

  const handleCancel = () => {
    console.log("Cancel");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      
      <div className="mr-8">
        <div className="w-64 h-40 bg-gray-300 rounded-md overflow-hidden">
          <img
            src={imageUrl}
            alt="Pokemon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            {isEditing ? "Edit Pokemon" : "Add Pokemon"}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Number
              </label>
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter number"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label
                htmlFor="types"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Types
              </label>
              <input
                type="text"
                id="types"
                name="types"
                value={formData.types}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter types"
              />
            </div>
            <div>
              <label
                htmlFor="classification"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Classification
              </label>
              <input
                type="text"
                id="classification"
                name="classification"
                value={formData.classification}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter classification"
              />
            </div>
            <div>
              <label
                htmlFor="resistant"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Resistant
              </label>
              <input
                type="text"
                id="resistant"
                name="resistant"
                value={formData.resistant}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter resistant"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mr-2"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditPage;
