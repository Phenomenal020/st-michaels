"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

interface LinkInterface {
  id: number;
  title: string;
  url: string;
}

const links: LinkInterface[] = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Welcome",
    url: "/welcome",
  },
  {
    id: 3,
    title: "Admissions",
    url: "/admission-process",
  },
  {
    id: 4,
    title: "News/Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

export default function Navbar({}: Props) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // const toggleOverlay = () => {
  //   setIsOverlayOpen((prev: boolean) => !prev);
  // };

  const showOverlay = () => {
    setIsOverlayOpen(true);
  };

  const hideOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
      {/* <div className={styles.sticky}> */}
      <div className={styles.top}>
        <span className={styles.phone}>
          <BsFillTelephoneFill size={14} style={{ marginRight: "6px" }} />
          08069371264
        </span>
        <span className={styles.email}>
          <MdEmail size={14} style={{ marginRight: "6px" }} />{" "}
          St.michaelthearchangelacademymakurdi2@gmail.com
        </span>
      </div>

      <nav className={styles.container}>
        <Link href="/" className={styles.navInfoWrapper}>
          {/* logo */}
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo.jpg"
              alt="logo"
              fill={true}
              className={styles.logoImage}
            />
          </div>
          {/* school name */}
          <div className={styles.schoolNameWrapper}>
            <p className={styles.schoolName}>St. michael the archangel</p>
            <p className={styles.schoolLocation}>academy, makurdi</p>
          </div>
        </Link>

        {/* Hamburger Icon */}
        {!isOverlayOpen && (
          <div className={styles.hamburger} onClick={showOverlay}>
            <FaBars size={20} className={styles.hamburgerIcon} />
          </div>
        )}

        {/* nav links */}
        <div className={styles.linkWrapper}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.navLink}>
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
      {/* </div> */}

      {/* Overlay */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            initial={{ width: 0 }} // Initial width of 0
            animate={{ width: "100%" }} // Animate to full width
            exit={{ width: 0 }} // Animate to width 0 on exit
            transition={{ duration: 0.5 }} // Animation duration
            className={styles.overlay}
          >
            <div className={styles.closeIcon}>
              <FaTimes size={24} onClick={hideOverlay} />
            </div>
            <div className={styles.overlayLinkWrapper}>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className={styles.overlayLink}
                  onClick={hideOverlay}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}