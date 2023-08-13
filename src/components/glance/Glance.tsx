"use client"

import styles from "./glance.module.css";
import { FiHome } from "react-icons/fi";
import React, { useState, useEffect } from 'react';

import { Glance } from "@/types/interface";

export default function Glance() {
  const [glance, setGlance] = useState<Glance>({
    campuses: 0,
    foundingYear: 0,
    classrooms: 0,
    parents: 0,
    passRate: 0,
});

useEffect(() => {
    const campusesTimer = setInterval(() => {
        if (glance.campuses < 2) {
            setGlance((prevGlance:Glance) => ({
                ...prevGlance,
                campuses: prevGlance.campuses + 0.02,
            }));
        }
    }, 40);

    const foundingYearTimer = setInterval(() => {
        if (glance.foundingYear < 2017) {
            setGlance((prevGlance:Glance) => ({
                ...prevGlance,
                foundingYear: prevGlance.foundingYear + 20.17,
            }));
        }
    }, 40); 

    const classroomsTimer = setInterval(() => {
        if (glance.classrooms < 40) {
            setGlance((prevGlance:Glance) => ({
                ...prevGlance,
                classrooms: prevGlance.classrooms + 0.4,
            }));
        }
    }, 40); 

    const parentsTimer = setInterval(() => {
        if (glance.parents < 100) {
            setGlance((prevGlance:Glance) => ({
                ...prevGlance,
                parents: prevGlance.parents + 1,
            }));
        }
    }, 40);

    const passRateTimer = setInterval(() => {
        if (glance.passRate < 100) {
            setGlance((prevGlance:Glance) => ({
                ...prevGlance,
                passRate: prevGlance.passRate + 10,
            }));
        }
    }, 40); 

    return () => {
        clearInterval(campusesTimer);
        clearInterval(foundingYearTimer);
        clearInterval(classroomsTimer);
        clearInterval(parentsTimer);
        clearInterval(passRateTimer);
    };
}, [glance]);
  return (
    <section
      className={styles.container}
      style={{
        background: `url(${"/images/admission-process.png"})`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.backgroundImg}></div>

      <h4 className={styles.header}>At a glance</h4>

      <div className={styles.row}>
        <p className={styles.para}>
          <span className={styles.iconHeader}>
            <FiHome size={48} color="#fff" />
          </span>
          <span className={styles.textBody}>
            No.4 Aliade street High level Makurdi.
          </span>
        </p>
        <p className={styles.para}>
          <span className={styles.iconHeader}>{Math.floor(glance.campuses)}</span>
          <span className={styles.textBody}>Campuses</span>
        </p>
        <p className={styles.para}>
          <span className={styles.iconHeader}>{Math.floor(glance.foundingYear)}</span>
          <span className={styles.textBody}>founding year</span>
        </p>

        <p className={styles.para}>
          <span className={styles.iconHeader}>{Math.floor(glance.classrooms)}</span>
          <span className={styles.textBody}>classrooms</span>
        </p>
        <p className={styles.para}>
          <span className={styles.iconHeader}>{Math.floor(glance.parents)}%</span>
          <span className={styles.textBody}>satisfied parents</span>
        </p>
        <p className={styles.para}>
          <span className={styles.iconHeader}>{Math.floor(glance.passRate)}%</span>
          <span className={styles.textBody}>pass rate</span>
        </p>
      </div>
    </section>
  );
}
