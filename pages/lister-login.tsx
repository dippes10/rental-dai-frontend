import { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../public/bg-header.jpg";
import AppLayout from "../components/AppLayout";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <AppLayout>
      <div
        className="absolute top-0 left-0 z-1 w-full min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="px-1 w-full min-h-screen mx-auto relative z-2">
        <div className="container">
          <div className="flex justify-center items-center h-screen">
            <div className="w-full sm:w-96 md:w-80 lg:w-96 xl:w-80">
              <div className="bg-white rounded-md shadow-md p-8">
                <div className="bg-info bg-gradient-to-r from-info to-info-light rounded-md mb-1 p-2 text-center">
                  <h4 className="text-white text-2xl font-medium mt-1">Sign in</h4>
                </div>
                <div className="flex justify-center space-x-2 mt-2">
                  {/* Social icons */}
                </div>
                <div className="pt-4 pb-3 px-4">
                  <form>
                    {/* Form inputs */}
                    <div className="mb-2">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex items-center ml-[-0.25rem]">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleSetRememberMe}
                        className="mr-2"
                      />
                      <p
                        onClick={handleSetRememberMe}
                        className="cursor-pointer text-sm text-gray-700"
                      >
                        Remember me
                      </p>
                    </div>
                    <div className="mt-4 mb-1">
                      <button className="w-full bg-gradient-to-r from-info to-info-dark text-white py-2 px-4 rounded-full">
                        Sign in
                      </button>
                    </div>
                    <div className="mt-3 mb-1 text-center">
                      <p className="text-sm text-gray-700">
                        Dont have an account?{" "}
                        <Link
                          to="/authentication/sign-up/cover"
                          className="text-info font-medium"
                        >
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute z-2 bottom-8">
        {/* Footer code here (if you have an alternative component) */}
      </div>
    </AppLayout>
  );
}

export default SignInBasic;
