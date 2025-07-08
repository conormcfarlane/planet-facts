import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";

export default function Layout({ children }) {
  return (
    <div className=" text-white " >
      <Header />
      <Tabs />
      <main>{children}</main>
    </div>
  );
}
