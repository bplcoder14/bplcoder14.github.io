import React from "react";
import styles from "./../assets/styles/components/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <h4 class="text-center">Quote of the week</h4>
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>Perseverance is failing 19 times and succeeding the 20th</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          <cite title="Source Title">Julie Andrews</cite>
        </figcaption>
      </figure>
    </div>
  );
}

export default Footer;
