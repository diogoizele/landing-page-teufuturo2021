import classes from "./BannerWaves.module.css";
import React from "react";

function BannerWaves(props) {
  return (
    <section className={`${props.className} ${classes.waves}`}>
      <div className={`${classes.wave} ${classes.wave1}`}></div>
      <div className={`${classes.wave} ${classes.wave2}`}></div>
      <div className={`${classes.wave} ${classes.wave3}`}></div>
      <div className={`${classes.wave} ${classes.wave4}`}></div>
    </section>
  );
}

export default BannerWaves;
