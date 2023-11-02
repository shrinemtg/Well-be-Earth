import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./header-all.module.css";

const HeaderAll: NextPage = () => {
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
    <div className={styles.headerAll}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <div className={styles.frame2}>
            <img
              className={styles.wellBeEarthRogo1Icon}
              alt=""
              src="/wellbeearthrogo1@2x.png"
            />
          </div>
          <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
          <div className={styles.frame3}>
            <div className={styles.div}>黄色</div>
          </div>
          <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
          <div className={styles.frame4}>
            <div className={styles.div}>みどり</div>
          </div>
          <img className={styles.frameIcon3} alt="" src="/frame3.svg" />
          <div className={styles.frame5}>
            <div className={styles.div}>赤の言葉</div>
          </div>
          <img className={styles.frameIcon4} alt="" src="/frame4.svg" />
          <div className={styles.frame6}>
            <div className={styles.div}>人と人との繋がりを</div>
          </div>
          <img className={styles.frameIcon5} alt="" src="/frame5.svg" />
          <div className={styles.frame7}>
            <img
              className={styles.headerPic03Icon}
              alt=""
              src="/headerpic03@2x.png"
            />
          </div>
          <img className={styles.frameIcon6} alt="" src="/frame6.svg" />
          <img className={styles.frameIcon7} alt="" src="/frame7.svg" />
          <div className={styles.frame8}>
            <div className={styles.div4}>今日の占い</div>
          </div>
          <div className={styles.frame9}>
            <header className={styles.headerBerParent}>
              <img
                className={styles.headerBerIcon}
                alt=""
                src="/headerber.svg"
              />
              <div className={styles.fortuneTellingFruit}>
                <img className={styles.uranaiIcon} alt="" src="/uranai.svg" />
              </div>
              <img
                className={styles.wellBeEarthIcon}
                alt=""
                src="/wellbeearth@2x.png"
              />
            </header>
          </div>
          <div className={styles.frame10}>
            <div className={styles.headerText02}>
              <div className={styles.wellBeEarth}>仲間紹介</div>
              <div className={styles.wellBeEarth}>寄付金で応援する</div>
              <div className={styles.wellBeEarth}>お問い合わせ</div>
            </div>
          </div>
          <div className={styles.frame11} data-animate-on-scroll>
            <div className={styles.headerText01}>
              <div className={styles.top}>TOP</div>
              <div className={styles.wellBeEarth}>Well be Earthについて</div>
              <div className={styles.wellBeEarth}>事業内容</div>
            </div>
          </div>
        </div>
        <img
          className={styles.fruitLineIcon}
          alt=""
          src="/fruit-line.svg"
          data-animate-on-scroll
        />
      </div>
      <div className={styles.div9}>
        <p className={styles.p}>あなたにとっての幸せを</p>
        <p className={styles.p}>私たちと見つけてみませんか？</p>
      </div>
    </div>
  );
};

export default HeaderAll;
