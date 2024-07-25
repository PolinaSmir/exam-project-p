import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorks.module.sass';

const HowItWorks = (props) => {
  const { isFetching } = props;
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <section className={styles.howHeader}>
            <h1>How Does Squadhelp Work?</h1>
            <p>
              Squadhelp helps you come up with a great name for your business by
              combining the power of crowdsourcing with sophisticated technology
              and Agency-level validation services.
            </p>
          </section>
          <div className={styles.divHow3Ways}>
            <section className={styles.how3Ways}>
              <div>
                <h2>3 Ways To Use Squadhelp</h2>
                <p>
                  Squadhelp offers 3 ways to get you a perfect name for your
                  business.
                </p>
              </div>
              <article className={styles.waysArticle}>
                <div>
                  <h3>Launch a Contest</h3>
                  <hr></hr>
                  <p>
                    Work with hundreds of creative experts to get custom name
                    suggestions for your business or brand. All names are
                    auto-checked for URL availability.
                  </p>
                </div>
                <div>
                  <h3>Explore Names For Sale </h3>
                  <hr></hr>
                  <p>
                    Our branding team has curated thousands of pre-made names
                    that you can purchase instantly. All names include a
                    matching URL and a complimentary Logo Design
                  </p>
                </div>
                <div>
                  <h3>Or Become A Creator Yourself</h3>
                  <hr></hr>
                  <p>
                    Submit name ideas, Logo designs or sell names in Domain
                    Marketplaces.
                  </p>
                </div>
              </article>
            </section>
          </div>
          <section class={styles.steps}>
            <h3>How Do Naming Contests Work?</h3>
            <article>
              <div className={styles.card}>
                <span>Step 1</span>
                <p>
                  Fill out your Naming Brief and begin receiving name ideas in
                  minutes
                </p>
              </div>
              <div className={styles.card}>
                <span>Step 2</span>
                <p>
                  Rate the submissions and provide feedback to creatives.
                  Creatives submit even more names based on your feedback.
                </p>
              </div>
              <div className={styles.card}>
                <span>Step 3</span>
                <p>Pick a Winner. The winner gets paid for their submission.</p>
              </div>
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
