import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.tonarinoMicchanlnc}>
        <span className={styles.span}>{`©2023 `}</span>tonarino_micchan.lnc
      </div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-20.svg" />
        <div className={styles.instagram}>Instagram</div>
        <iframe className={styles.youtube} frameBorder="0" allowFullScreen />
        <div className={styles.youtube1}>Youtube</div>
      </div>
      <img className={styles.icon} alt="" src="/-13@2x.png" />
      <div className={styles.tonarinoMicchanlnc1}>
        <span className={styles.span}>{`©2023 `}</span>tonarino_micchan.lnc
      </div>
    </footer>
  );
};

export default Footer;
