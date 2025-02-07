"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface AuthFormProps {
  isSignUp: boolean;
}

export default function AuthForm({ isSignUp }: AuthFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isSignUp ? "/v1/auth/register" : "/v1/auth/login";
      const body = isSignUp
        ? {
            email: formData.email,
            firstname: formData.firstName,
            lastname: formData.lastName,
            phone: formData.phone,
            password: formData.password,
            confirmpassword: formData.confirmPassword,
            referrer: "",
          }
        : {
            email: formData.email,
            password: formData.password,
          };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    router.push(isSignUp ? "/auth/login" : "/auth/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161616] p-10">
      <div className="bg-[#1f1f1f] rounded-lg shadow-lg w-full max-w-lg p-10">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 pb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2a2a] text-white"
            />
          </div>

          {isSignUp && (
            <>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-1/2 p-2 border border-gray-600 rounded-md bg-[#2a2a2a] text-white"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-1/2 p-2 border border-gray-600 rounded-md bg-[#2a2a2a] text-white"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2a2a] text-white"
                required
              />
            </>
          )}

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 pb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2a2a] text-white"
            />
          </div>

          {isSignUp && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 pb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2a2a] text-white"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center px-4 py-2 transition-transform ease-in-out transform hover:scale-105 bg-custom2 text-white rounded-full"
          >
            {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-300">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={toggleAuthMode}
              className="text-custom2 hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
