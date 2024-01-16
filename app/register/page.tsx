"use client";

import React, { useState } from "react";
import Image from "@/node_modules/next/image";
import pokemon from "@/public/pokemon.png";
import { useRouter } from "next/navigation";
import Transaction from "@/network/lib/auth";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword || !termsChecked) {
      console.log(
        "Please fill in all fields and accept the terms and conditions."
      );
      return;
    }

    if (password !== confirmPassword) {
      console.log("Password and confirmed password do not match.");
      return;
    }
    confirmTransactionEvent(name, email, password, confirmPassword);
  };

  const confirmTransactionEvent = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      const response = await Transaction.register({
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      });

      if (response) {
        console.log(response);
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex justify-center items-center mb-4">
        <Image
          src={pokemon}
          loading="lazy"
          className="w-full h-16 rounded-full"
          alt="Pokemon Image"
        />
      </div>
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              placeholder="Confirm your password"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={termsChecked}
                onChange={() => setTermsChecked(!termsChecked)}
              />
              <span className="ml-2 text-gray-700 text-sm">
                I accept the terms and conditions
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
          >
            Register
          </button>
        </form>
      </div>

      <div className="mt-6 text-right">
        <p className="text-sm text-gray-500">
          <span
            onClick={() => router.push("/login")}
            className="underline cursor-pointer"
          >
            Already have an account? Login here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
