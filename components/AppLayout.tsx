import Header from "./header";
import { Header as HeaderData } from "../constants"; // Import your Header data
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header HeaderNav={HeaderData.HeaderNav} />
      <div className="pt-32">{children}</div>
    </>
  );
};
export default AppLayout;