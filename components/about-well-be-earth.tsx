import type { NextPage } from "next";
import styles from "./about-well-be-earth.module.css";

const AboutWellBeEarth: NextPage = () => {
  return (
    <div className={styles.aboutWellBeEarth}>
      <img
        className={styles.grandmotherIcon}
        alt=""
        src="/grandmother@2x.png"
      />
      <div className={styles.frame}>
        <div className={styles.frameChild} />
        <img className={styles.tIcon} alt="" src="/t@2x.png" />
        <div className={styles.frameItem} />
        <div className={styles.ellipseParent}>
          <div className={styles.frameInner} />
          <div className={styles.ellipseDiv} />
          <div className={styles.frameChild1} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.div}>
          <p className={styles.p}> 孤立や孤独という感情、</p>
          <p className={styles.p}>
            　　 　誰かと居たい、誰かに認められたいという気持ち
          </p>
          <p className={styles.p}>
            それらは誰もが潜在意識の中に秘めているのではないでしょうか
          </p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>お金では得られない幸福感</p>
          <p className={styles.p}> 不便の中で知る便利の幸せ</p>
          <p className={styles.p}>血縁関係以外で認め合えるコミュニティ</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>そんな思いから拡大家族をテーマに</p>
          <p className={styles.p}>
            　人と人との繋がりを大切にできる環境づくりを行っています
          </p>
        </div>
        <div className={styles.div1}>
          私たちは、自然体験をベースにいろんな地域に拡大家族を作りたいと思っています。
        </div>
        <div className={styles.wellBeEarthContainer}>
          <span>Well be Earth</span>
          <span className={styles.span}>ってどんな会社</span>
        </div>
        <div className={styles.div2}>ウェルビーアース</div>
      </div>
      <div className={styles.frame1}>
        <img className={styles.ellipseIcon} alt="" src="/ellipse-43.svg" />
        <div className={styles.div3}>私はいつも幸せよ</div>
      </div>
    </div>
  );
};

export default AboutWellBeEarth;
