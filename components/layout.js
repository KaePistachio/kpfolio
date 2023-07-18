import { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  // const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <main>
        <div className="content">
      <NavBar />
      {children}
      <Footer />
        </div>
      </main>
    </>
  )
}