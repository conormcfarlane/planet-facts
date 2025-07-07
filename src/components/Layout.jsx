import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";

export default function Layout({ children }) {
  return (
    <div
      className=" text-white px-6 py-4"
      style={{ backgroundColor: "#070724" }}
    >
      <Header />
      <Tabs />
      <main>{children}</main>
    </div>
  );
}
