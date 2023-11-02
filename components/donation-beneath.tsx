import type { NextPage } from "next";
import styles from "./donation-beneath.module.css";

const DonationBeneath: NextPage = () => {
  return (
    <div className={styles.donationBeneath}>
      <img
        className={styles.donationBeneathChild}
        alt=""
        src="/vector-15.svg"
      />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.div}>
            <div className={styles.child} />
            <div className={styles.div1}>寄付金応募フォーム</div>
            <div className={styles.div2}>^</div>
            <div className={styles.item} />
          </div>
          <div className={styles.div3}>
            <p className={styles.p}>
              ウェルビーアースは、こども達の居場所作りや
            </p>
            <p className={styles.p}>空き家を使ってのフリースクール等</p>
            <p className={styles.p}>
              おとなもこどもも関係なくコミュニケーションをとり
            </p>
            <p className={styles.p}>
              人と人が繋がっていけるような環境づくりを目指しています
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationBeneath;
