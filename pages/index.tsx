import type { NextPage } from "next";
import { useEffect } from "react";
import HeaderAll from "../components/header-all";
import NewsComponent from "../components/news-component";
import NewsTopic from "../components/news-topic";
import AboutWellBeEarth from "../components/about-well-be-earth";
import ActivityContentAll from "../components/activity-content-all";
import WellbBeFamily from "../components/wellb-be-family";
import FrameIcon from "../components/frame-icon";
import Footer from "../components/footer";
import DonationBeneath from "../components/donation-beneath";
import styles from "./index.module.css";

const WellBeEarth: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.wellBeEarth} data-animate-on-scroll>
      <div className={styles.frame}>
        <HeaderAll />
        <a className={styles.newsGroup}>
          <div className={styles.frame01}>
            <div className={styles.frame01Child} />
            <div className={styles.frame01Item} />
            <div className={styles.frame01Inner} />
            <div className={styles.ellipseDiv} />
            <div className={styles.frame01Child1} />
          </div>
          <NewsComponent />
          <NewsTopic />
          <img className={styles.rightArrowIcon} alt="" src="/rightarrow.svg" />
          <img className={styles.leftArrowIcon} alt="" src="/leftarrow.svg" />
          <div className={styles.news}>
            <img className={styles.frameIcon} alt="" src="/frame8.svg" />
            <img className={styles.frameIcon1} alt="" src="/frame9.svg" />
            <img className={styles.frameIcon2} alt="" src="/frame10.svg" />
            <img className={styles.frameIcon3} alt="" src="/frame11.svg" />
            <img className={styles.frameIcon4} alt="" src="/frame12.svg" />
            <div className={styles.frame1}>
              <div className={styles.frame2}>
                <div className={styles.div}>NEWS</div>
              </div>
            </div>
            <div className={styles.frame3}>
              <div className={styles.frame4}>
                <div className={styles.div}>お知らせ</div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className={styles.frame5}>
        <div className={styles.frame6}>
          <AboutWellBeEarth />
          <ActivityContentAll />
        </div>
        <div className={styles.frame7}>
          <WellbBeFamily />
          <FrameIcon />
          <Footer />
          <DonationBeneath />
        </div>
      </div>
    </div>
  );
};

export default WellBeEarth;
