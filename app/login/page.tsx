"use client";

import { Button } from "@/components/ui/button";
import Image from "@/node_modules/next/image";
import { useTheme } from "next-themes";
import Transaction from "@/network/lib/auth";
import pokemon from "@/public/pokemon.png";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { string } from "prop-types";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    confirmTransactionEvent(username, password);
    console.log("Form submitted:", { username, password });
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordModal(true);
  };

  const handleModalClose = () => {
    setShowForgotPasswordModal(false);
  };

  const handleRecoverPassword = (e) => {
    e.preventDefault();

    console.log("Recover password for email:", recoveryEmail);

    setRecoveryEmail("");
    setShowForgotPasswordModal(false);
  };

  const confirmTransactionEvent = async (
    username: string,
    password: string
  ) => {
    try {
      const response = await Transaction.login({
        email: username,
        password: password,
      });

      if (response) {
        toast.success("Login successfully");
        router.push("/")
        const accessToken = response.data.access_token;
        localStorage.setItem('accessToken', accessToken);

        console.log(response);
      }

      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="mb-6">
          <div className="flex justify-center items-center mb-4">
            <Image
              src={pokemon}
              loading="lazy"
              className="w-full h-16 rounded-full"
              alt="Pokemon Image"
            />
          </div>
        </div>
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
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
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6 text-right">
              <p className="text-sm text-gray-500">
                <span
                  className="underline cursor-pointer"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot Password?
                </span>
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-blue"
            >
              {loading ? "Loading. . ." : "Login"}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            <span
              className=" cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Belum punya akun ? daftar sekarang
            </span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      {showForgotPasswordModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-gray-800 opacity-50"></div>
          <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 z-10">
            <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
            <form onSubmit={handleRecoverPassword}>
              <div className="mb-4">
                <label
                  htmlFor="recoveryEmail"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="recoveryEmail"
                  name="recoveryEmail"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-blue"
              >
                Reset Password
              </button>
              <p className="mt-4 text-sm text-gray-500">
                <button
                  className="underline focus:outline-none"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
