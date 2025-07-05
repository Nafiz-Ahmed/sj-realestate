// Header.js
// This file is part of the sj-realestate project.
// It defines the header component with navigation links and a responsive menu.
"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
import Container from "../Container";
import { usePathname } from "next/navigation";
import Logo from "@/utils/Logo";
import Button from "@/layout/buttons/Button";
import * as Links from "@/utils/Links";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: Links.pageLinks.home },
  { name: "About", href: Links.pageLinks.about },
  { name: "Listings", href: Links.pageLinks.listings },
  { name: "Sold Homes", href: Links.pageLinks.soldHomes },
  { name: "Mortgage Calculator", href: Links.pageLinks.mortgageCalculator },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRef(null);

  const currentPath = usePathname();

  const handleClick = (e) => {
    e.preventDefault();

    menuOpen && setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, currentPath]);

  return (
    <nav
      ref={nav}
      className={`${styles.header} ${menuOpen ? styles.expandedHeader : ""}`}
    >
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Logo />
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>

          <ul
            className={`${styles.navLinks} ${
              menuOpen ? styles.navLinksMobileOpen : ""
            }`}
          >
            {navLinks.map((link) => (
              <li
                onClick={handleClick}
                key={link.name}
                className={styles.navItem}
              >
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    currentPath === link.href ? styles.activeMenu : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Button
              text="Contact me"
              link={Links.contactMe.googleMeet}
              style={{
                padding: "13px 10px",
              }}
            />
          </ul>
        </div>
      </Container>
    </nav>
  );
}
