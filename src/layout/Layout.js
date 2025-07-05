import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollTriggerRefresh from "@/utils/ScrollTriggerRefresh";

function Layout({ children }) {
  return (
    <div>
      <ScrollTriggerRefresh />

      <Header />
      <main
        style={{
          marginTop: "var(--header-height)",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
