import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-blue-900">
      <Header />
      <main>{children}</main>
    </div>
  );
}
