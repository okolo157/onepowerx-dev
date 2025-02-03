import Link from "next/link";

interface AuthFormProps {
  isSignUp: boolean;
}

export default function AuthForm({ isSignUp }: AuthFormProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-custom p-10">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex">
        {/* {isSignUp && (
          <div className="w-1/3 bg-black rounded-l-lg flex flex-col items-center justify-center ">
         
            <Image
              src="/images/1power.png"
              alt="Welcome"
              className="w-full h-auto"
              width={100}
              height={100}
            />
          </div>
        )} */}

        <div className={`w-${isSignUp ? "full" : "full"} p-10`}>
          <h2 className="text-2xl font-bold mb-6 text-center text-custom">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom focus:border-custom"
              />
            </div>

            {isSignUp && (
              <>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom focus:border-custom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom focus:border-custom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom focus:border-custom"
                  />
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom focus:border-custom"
              />
            </div>

            {isSignUp && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom focus:border-custom"
                />
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom hover:bg-custom2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <Link
                href={isSignUp ? "/auth/login" : "/auth/register"}
                className="font-medium text-custom hover:text-custom2"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
