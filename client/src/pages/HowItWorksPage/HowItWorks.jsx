import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorks.module.sass';
import CONSTANTS from '../../constants';

const HowItWorks = (props) => {
  const faqHeadingClick = (e) => {
    if (e.target.parentNode.className === styles.item) {
      e.target.parentNode.className = styles.itemActive;
    } else {
      e.target.parentNode.className = styles.item;
    }
  };
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <section className={styles.howHeader}>
            <div>
              <span>World's #1 Naming Platform</span>
              <h1>How Does Squadhelp Work?</h1>
              <p>
                Squadhelp helps you come up with a great name for your business
                by combining the power of crowdsourcing with sophisticated
                technology and Agency-level validation services.
              </p>
            </div>
            <div>
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}gif/1-compressed.gif`}
                alt="video"
              />
            </div>
          </section>

          <section className={styles.how3Ways}>
            <div className={styles.howContainer}>
              <span>Our Services</span>
              <h2>3 Ways To Use Squadhelp</h2>
              <p>
                Squadhelp offers 3 ways to get you a perfect name for your
                business.
              </p>
            </div>
            <div className={styles.waysArticle}>
              <article className={styles.howArticles}>
                <div>
                  <h3>Launch a Contest</h3>
                  <p>
                    Work with hundreds of creative experts to get custom name
                    suggestions for your business or brand. All names are
                    auto-checked for URL availability.
                  </p>
                </div>
                <button>Launch a Contest</button>
              </article>
              <article className={styles.howArticles}>
                <div>
                  <h3>Explore Names For Sale</h3>
                  <p>
                    Our branding team has curated thousands of pre-made names
                    that you can purchase instantly. All names include a
                    matching URL and a complimentary Logo Design
                  </p>
                </div>
                <button>Explore Names For Sale</button>
              </article>
              <article className={styles.howArticles}>
                <div>
                  <h3>Agency-level Managed Contests</h3>
                  <p>
                    Our Managed contests combine the power of crowdsourcing with
                    the rich experience of our branding consultants. Get a
                    complete agency-level experience at a fraction of Agency
                    costs
                  </p>
                </div>
                <button>Learn More</button>
              </article>
            </div>
          </section>

          <section className={styles.steps}>
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
                <p>
                  Our team helps you test your favorite names with your target
                  audience. We also assist with Trademark screening.
                </p>
              </div>
              <div className={styles.card}>
                <span>Step 4</span>
                <p>Pick a Winner. The winner gets paid for their submission.</p>
              </div>
            </article>
          </section>

          <section className={styles.faq}>
            <h3>Frequently Asked Question</h3>

            <ul className={styles.list}>
              <li>Launching A Contest</li>
              <li>Buying From Marketplace</li>
              <li>Managed Contests</li>
              <li>For Creatives</li>
            </ul>
          </section>

          <section className={styles.faqContent}>
            <h4>Launching A Contest</h4>
            <article className={styles.faqsContainer}>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  How long does it take to start receiving submissions?
                </div>
                <div className={styles.answer}>
                  For Naming contests, you will start receiving your submissions
                  within few minutes of launching your contest. Since our
                  creatives are located across the globe, you can expect to
                  receive submissions 24 X 7 throughout the duration of the
                  brainstorming phase.
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  How long do Naming Contests last?
                </div>
                <div className={styles.answer}>
                  You can choose a duration from 1 day to 7 days. We recommend a
                  duration of 3 Days or 5 Days. This allows for sufficient time
                  for entry submission as well as brainstorming with creatives.
                  If you take advantage of our validation services such as
                  Audience Testing and Trademark Research, both will be an
                  additional 4-7 days (3-5 business days for Audience Testing
                  and 1-2 business days for Trademark Research).
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  Where are the creatives located?
                </div>
                <div className={styles.answer}>
                  About 70% of our Creatives are located in the United States
                  and other English speaking countries (i.e. United Kingdom,
                  Canada, and Australia.). We utilize an advanced rating score
                  algorithm to ensure that high quality creatives receive more
                  opportunities to participate in our contests.
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  What if I do not like any submissions?
                </div>
                <div className={styles.answer}>
                  <p>
                    While it is unusually rare that you will not like any names
                    provided, we have a few options in case this problem occurs:
                  </p>
                  <ul>
                    <li>
                      If the contest ends and you have not yet found a name that
                      you’d like to move forward with, we can provide
                      complimentary extension of your contest as well as a
                      complimentary consultation with one of our branding
                      consultants (a $99 value).
                    </li>
                    <li>
                      By exploring our premium domain marketplace you can apply
                      the contest award towards the purchase of any name listed
                      for sale.
                    </li>
                    <li>
                      If you choose the Gold package or Platinum package and
                      keep the contest as 'Not Guaranteed', you can request a
                      partial refund if you choose not to move forward with any
                      name from you project. (Please note that the refund is for
                      the contest award). Here is a link to our Refund Policy
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  How much does it cost?
                </div>
                <div className={styles.answer}>
                  Our naming competitions start at $299, and our logo design
                  competitions start at $299. Also, there are three additional
                  contest level that each offer more features and benefits. See
                  our Pricing Page for details
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  I need both a Name and a Logo. Do you offer any discount for
                  multiple contests?
                </div>
                <div className={styles.answer}>
                  Yes! We have many contest bundles - our most popular being our
                  Name, Tagline, and Logo bundle. Bundles allow you to purchase
                  multiple contests at one time and save as much as from $75 -
                  $400. You can learn more about our bundle options on our
                  Pricing Page.
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  What if I want to keep my business idea private?
                </div>
                <div className={styles.answer}>
                  You can select a Non Disclosure Agreement (NDA) option at the
                  time of launching your competition. This will ensure that only
                  those contestants who agree to the NDA will be able to read
                  your project brief and participate in the contest. The contest
                  details will be kept private from other users, as well as
                  search engines.
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  Can you serve customers outside the US?
                </div>
                <div className={styles.answer}>
                  Absolutely. Atom services organizations across the globe. Our
                  customer come from many countries, such as the United States,
                  Australia, Canada, Europe, India, and MENA. We've helped more
                  than 25,000 customer around the world.
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  Can I see any examples?
                </div>
                <div className={styles.answer}>
                  <p>
                    Our creatives have submitted more than 6 Million names and
                    thousands of logos on our platform. Here are some examples
                    of Names, Taglines, and Logos that were submitted in recent
                    contests.
                  </p>
                  <ul>
                    <li>Name Examples</li>
                    <li>Tagline Examples</li>
                    <li>Logo Examples</li>
                  </ul>
                </div>
              </div>
            </article>

            <h4>Buying From Marketplace</h4>
            <article className={styles.faqsContainer}>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  What's included with a Domain Purchase?
                </div>
                <div className={styles.answer}>
                  When you purchase a domain from our premium domain
                  marketplace, you will receive the exact match .com URL, a
                  complimentary logo design (along with all source files), as
                  well as a complimentary Trademark report and Audience Testing
                  if you’re interested in validating your name.
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  How does the Domain transfer process work?
                </div>
                <div className={styles.answer}>
                  Once you purchase a Domain, our transfer specialists will
                  reach out to you (typically on the same business day). In most
                  cases we can transfer the domain to your preferred registrar
                  (such as GoDaddy). Once we confirm the transfer details with
                  you, the transfers are typically initiated to your account
                  within 1 business day.
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  If I purchase a Domain on installments, can I start using it
                  to setup my website?
                </div>
                <div className={styles.answer}>
                  We offer payment plans for many domains in our Marketplace. If
                  you purchase a domain on a payment plan, we hold the domain in
                  an Escrow account until it is fully paid off. However our team
                  can assist you with making any changes to the domains (such as
                  Nameserver changes), so that you can start using the domain
                  right away after making your first installment payment.
                </div>
              </div>
            </article>
            <h4>Managed Contests</h4>
            <article className={styles.faqsContainer}>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  What are Managed Contests?
                </div>
                <div className={styles.answer}>
                  The 'Managed' option is a fully managed service by Atom
                  Branding experts. It includes a formal brief preparation by
                  Atom team and management of your contest. Managed Contests are
                  a great fit for companies that are looking for an 'Agency'
                  like experience and they do not want to manage the contest
                  directly. Our branding team has directly managed hundreds of
                  branding projects and has learned several best practices that
                  lead to successful project outcomes. Our team will apply all
                  best practices towards the management of your branding
                  project. Learn more about our Managed Contest Service
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  What's a typical timeline for a Managed Contest?
                </div>
                <div className={styles.answer}>
                  The overall process takes 12-13 days.
                  <ul>
                    <li>
                      The Managed projects start with a project kick-off call
                      with your Branding Consultant. You can schedule this call
                      online immediately after making your payment.
                    </li>
                    <li>
                      After your kick-off call, the Branding consultant will
                      write your project brief and send for your approval within
                      1 business day.
                    </li>
                    <li>
                      Upon your approval, the contest will go live. The branding
                      consultant will help manage your project throughout the
                      brainstorming phase (typically 5 days).
                    </li>
                    <li>
                      Upon the completion of brainstorming phase, the branding
                      consultant will work with you to test the top 6 names from
                      your Shortlist (3-5 Days). In addition, the branding
                      consultant will coordinate the detailed Trademark
                      screening (1-3 days)
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  How much do Managed Contests cost?
                </div>
                <div className={styles.answer}>
                  We offer two levels of Managed Contests. Standard ($1499) and
                  Enterprise ($2999). The Enterprise managed contest includes:
                  <ul>
                    <li>
                      (1) a $500 award amount (instead of $300), which will
                      attract our top Creatives and provide more options to
                      choose from;
                    </li>
                    <li>
                      (2) we will ensure a senior member of our branding team is
                      assigned to your project and the branding team will invest
                      about 3X more time in the day-to-day management of your
                      project;
                    </li>
                    <li>
                      (3) you will receive more high-end trademark report and 5X
                      more responses for your audience test.
                    </li>
                    <li>
                      Here is a link to our Pricing page with a detailed
                      comparison of the two packages.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <h4>For Creatives</h4>
            <article className={styles.faqsContainer}>
              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  Can anyone join your platform?
                </div>
                <div className={styles.answer}>
                  We are open to anyone to signup. However, we have an extensive
                  'Quality Scoring' process which ensures that high quality
                  creatives have the ability to continue to participate in the
                  platform. On the other hand, we limit the participation from
                  those creatives who do not consistently receive high ratings.
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  Can I start participating immediately upon signing up?
                </div>
                <div className={styles.answer}>
                  When you initially signup, you are assigned few contests to
                  assess your overall quality of submissions. Based upon the
                  quality of your submissions, you will continue to be assigned
                  additional contests. Once you have received enough high
                  ratings on your submissions, your account will be upgraded to
                  'Full Access', so that you can begin participating in all open
                  contests.
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.question} onClick={faqHeadingClick}>
                  How Do I Get Paid?
                </div>
                <div className={styles.answer}>
                  We handle creative payouts via Paypal or Payoneer. Depending
                  upon your country of residence, we may require additional
                  documentation to verify your identity as well as your Tax
                  status.
                </div>
              </div>
            </article>
          </section>

          <section className={styles.steps}>
            <div className={styles.searchContainer}>
              <div className={styles.searchForm}>
                <input
                  className={styles.searchField}
                  placeholder="Search Over 200,000+ Premium Names"
                />
                <button className={styles.searchButton}></button>
              </div>
              <ul className={styles.list}>
                <span>Popular searches</span>
                <li>Tech</li>
                <li>Clothing</li>
                <li>Finance</li>
                <li>Real Estate</li>
                <li>Crypto</li>
                <li>Short</li>
                <li>One Word</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
