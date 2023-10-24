"use client";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// import { cookies } from "next/headers";
import {
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

import Logout from "./Logout";

export default function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const showOverlay = () => {
    setIsOverlayOpen(true);
  };

  const hideOverlay = () => {
    setIsOverlayOpen(false);
  };

  const showAboutDropdown = () => {
    setIsAboutDropdownOpen((prev) => true);
  };

  const hideAboutDropdown = () => {
    setIsAboutDropdownOpen((prev) => false);
  };

  // Define animations
  const dropdownVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const getUser = async () => {
      const supabase = createClientComponentClient();
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
    };
    getUser();
  }, []); 

  // console.log("checking user", user);

  return (
    <>
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

      {!user ? (
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
          <ul className={styles.linkWrapper}>
            <li className={styles.navList}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li
              className={styles.navList}
              onMouseOver={showAboutDropdown}
              onMouseOut={hideAboutDropdown}
            >
              <div className={styles.dropdownWrapper}>
                <span className={styles.navLink}>
                  About
                  {isAboutDropdownOpen ? (
                    <FaAngleUp style={{ marginLeft: ".25em" }} />
                  ) : (
                    <FaAngleDown style={{ marginLeft: ".25em" }} />
                  )}
                </span>
                {isAboutDropdownOpen && (
                  <motion.ul
                    className={styles.dropdownMenu}
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ duration: 0.33 }}
                  >
                    <motion.li
                      className={styles.navListDrop}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link href="/about" className={styles.navLink}>
                        The School
                      </Link>
                    </motion.li>
                    <motion.li
                      className={styles.navListDrop}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link href="/welcome" className={styles.navLink}>
                        Founder&apos;s Note
                      </Link>
                    </motion.li>
                  </motion.ul>
                )}
              </div>
            </li>
            <li className={styles.navList}>
              <Link href="/admission-process" className={styles.navLink}>
                Admissions
              </Link>
            </li>
            <li className={styles.navList}>
              <Link href="/blog" className={styles.navLink}>
                News/Blog
              </Link>
            </li>
            <li className={styles.navList}>
              <Link href="/contact" className={styles.navLink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
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

          <ul className={styles.linkWrapper}>
            <li className={styles.navList}>
              <Link
                href="/blog/smaan/create"
                className={styles.navLink}
              >
                Create
              </Link>
            </li>
            <Logout />
          </ul>
        </nav>
      )}

      {!user && (
        <AnimatePresence>
          {isOverlayOpen && (
            <motion.div
              initial={{ width: 0 }} // Initial width of 0
              animate={{ width: "100%" }} // Animate to full width
              exit={{ width: 0 }} // Animate to width 0 on exit
              transition={{ duration: 0.3 }} // Animation duration
              className={styles.overlay}
            >
              <div className={styles.closeIcon}>
                <FaTimes size={24} onClick={hideOverlay} />
              </div>
              <div className={styles.overlayLinkWrapper}>
                <Link
                  href="/"
                  className={styles.overlayLink}
                  onClick={hideOverlay}
                >
                  Home
                </Link>
                <li
                  className={styles.overlayLinkDrop}
                  onClick={hideOverlay}
                  onMouseOver={showAboutDropdown}
                  onMouseOut={hideAboutDropdown}
                >
                  About
                  {isAboutDropdownOpen ? (
                    <FaAngleUp style={{ marginLeft: ".75em" }} />
                  ) : (
                    <FaAngleDown style={{ marginLeft: ".75em" }} />
                  )}
                  {isAboutDropdownOpen && (
                    <motion.ul
                      className={styles.dropdownAccordion}
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{ duration: 0.33 }}
                    >
                      <motion.li
                        className={styles.navListOverlay}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link href="/about" className={styles.navLinkDrop}>
                          The School
                        </Link>
                      </motion.li>
                      {/* <hr /> */}
                      <motion.li
                        className={styles.navListOverlay}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link href="/welcome" className={styles.navLinkDrop}>
                          Founder&apos;s Note
                        </Link>
                      </motion.li>
                    </motion.ul>
                  )}
                </li>

                <Link
                  href="/admission-process"
                  className={styles.overlayLink}
                  onClick={hideOverlay}
                >
                  Admissions
                </Link>
                <Link
                  href="/blog"
                  className={styles.overlayLink}
                  onClick={hideOverlay}
                >
                  News/Blog
                </Link>
                <Link
                  href="/contact"
                  className={styles.overlayLink}
                  onClick={hideOverlay}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
