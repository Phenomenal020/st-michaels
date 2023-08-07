"use client";

import styles from "./page.module.css";
import Banner from "@/components/banner/Banner";
import About from "@/components/about/About";
import Glance from "@/components/glance/Glance";
import BlogSection from "@/components/blog/Blog";
import Admission from "@/components/admission/Admission";
import Testimonials from "@/components/testimonials/Testimonials";
import CalendarAlt from "@/components/calendar/CalendarAlt";

type Props = {};

function page({}: Props) {
  return (
    <div className={styles.container}>
      <Banner />
      <About />
      <Glance />
      <Admission />
      <BlogSection />
      <CalendarAlt />
      <Testimonials />
    </div>
  );
}
// 
export default page;
