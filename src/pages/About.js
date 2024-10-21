import React from "react";
import styles from "./../assets/styles/pages/About.module.css";

function About() {
  return (
    <div className={styles.body}>
      <section className={styles.header}>
        <h1>About Me</h1>
      </section>

      <section className={styles.section}>
        <h3>Personal Introduction</h3>
        <p>Hi! I'm Braiden Larson, a student at the University of Nebraska-Lincoln.</p>
      </section>

      <section className={styles.section}>
        <h3>Passions and Interests</h3>
        <ul>
          <li>Video Games</li>
          <li>Airsoft</li>
          <li>Programming</li>
          <li>Learning</li>
          <li>Helping out the Community</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Fun Facts</h3>
        <ul>
          <li>I a big fan of linux and the freedom it gives to users.</li>
          <li>I like pineapple on pizza.</li>
          <li>I am a night owl.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Goals and Aspirations</h3>
        <div className={styles.descriptive_list}>
          <h5>Short-term goals</h5>
          <div className={styles.list_item}>
            <dl>
              <dt>Get an intership or summer job related to software engineering.</dt>
              <dd>I have limited experience in the software industry, and securing an internship or job would provide valuable hands-on learning that a classroom setting cannot offer. Additionally, the Software Engineering program at UNL requires students to complete an internship to graduate.</dd>
            </dl>
          </div>
        </div>
        <div className={styles.descriptive_list}>
          <h5>Long-term goals</h5>
          <div className={styles.list_item}>
            <dl>
              <dt>Graduate from the University of Nebraska-Lincoln with a degree in Software Engineering.</dt>
              <dd>I have been passionate about the software industry for some time and enjoy solving problems, which led me to pursue a degree in Software Engineering at UNL. This degree will help build a solid foundation for my career in the field.</dd>
            </dl>
          </div>
        </div>
        <div className={styles.descriptive_list}>
          <h5>Aspirations for the future</h5>
          <div className={styles.list_item}>
            <dl>
              <dt>Work at a tech company that puts its users first.</dt>
              <dd>I have a deep passion for technology, and working as a Software Engineer for a tech company would be a dream come true. However, it’s essential for me to be part of an organization that truly values its users. A significant part of my love for technology stems from its potential to improve people’s lives and solve real-world problems. I aspire to contribute to projects that prioritize user needs and enhance everyday experiences through innovative solutions.</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Connect with Me</h3>
        <p>Feel free to connect with me on social media:</p>
        <ul>
          <li>LinkedIn: <a href="www.linkedin.com/in/braiden-larson-6b759724b">www.linkedin.com/in/braiden-larson-6b759724b</a></li>
          <li>Email: <a href="mailto:bplcoder14@gmail.com">bplcoder14@gmail.com</a></li>
        </ul>
      </section>
    </div>
  );
}

export default About;