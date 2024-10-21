import React from "react";
import styles from "./../assets/styles/components/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>It always seems impossible until it's done</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          <cite title="Source Title">Nelson Mandela</cite>
        </figcaption>
      </figure>
    </div>
  );
}

export default Footer;
