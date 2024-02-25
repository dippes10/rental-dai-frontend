import Header from "./header";
import { loginHeader as loginHeaderData } from "./header/login-header/login-header-const"; // Import your Header data
import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header HeaderNav={loginHeaderData.HeaderNav} />
      <div className="pt-32">{children}</div>
    </>
  );
};
export default LoginLayout;