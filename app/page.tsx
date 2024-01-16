"use client";

import ListPoke from "@/network/lib/list";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Homepage = () => {
  const router = useRouter();

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  const getList = async () => {
    try {
      const response = await ListPoke.list(limit, page);

      if (response) {
        setData(response.data.data);
        console.log(response);
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
    }
    if (accessToken) {
      getList();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-end ">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
        >
          Logout
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-6">Pokemon</h1>
      <div className="flex justify-start mb-6 ">
        <button
          onClick={() => router.push("/add")}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
        >
          Tambah Pokemon Baru
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((imageUrl, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={imageUrl.image}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
