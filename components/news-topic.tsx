import type { NextPage } from "next";
import styles from "./news-topic.module.css";

const NewsTopic: NextPage = () => {
  return (
    <div className={styles.newsTopic}>
      <div className={styles.day}>
        <p className={styles.p}>
          <a
            className={styles.a}
            href="https://wonder-challenge-academy.business.site/posts/3703410611801553203?hl=ja"
            target="_blank"
          >
            <span className={styles.span}>2022/12/11 – 2022/12/11</span>
          </a>
        </p>
        <p className={styles.p}>
          12/11㈰ 今年ラスト自然調和企画[間]Day
          心の余白をつくり心地良いつながりを実感自然とたわむれ、(何もしない)をするニクセン火起こし、焚き火、食育を通して本物と自分の本質への気づきへ
        </p>
      </div>
      <div className={styles.a31500010000Container}>
        <p className={styles.p}>
          <a
            className={styles.a}
            href="https://wonder-challenge-academy.business.site/posts/7802091699495165117?hl=ja"
            target="_blank"
          >
            <span className={styles.span}>投稿日: 2022/12/31</span>
          </a>
        </p>
        <p className={styles.p}>
          お年玉キャンペーンAチケット 3回分 15000円→10000円 先着10名Bチケット
          6回分30000円→20000円 先着3名予約フォームから申込ください。
        </p>
      </div>
      <div className={styles.div}>
        <p className={styles.p}>
          <a
            className={styles.a}
            href="https://wonder-challenge-academy.business.site/posts/6002237686473010654?hl=ja"
            target="_blank"
          >
            <span className={styles.span}>投稿日: 2023/02/03</span>
          </a>
        </p>
        <p className={styles.p}>
          2/11㈯10:00-15:00木造のお家作ろう！🐤ピョ今回は鳥の巣箱を作っちゃうよ！食育は空き缶飯盒で、ワイルド米炊き
        </p>
      </div>
      <img className={styles.newsTopicChild} alt="" src="/frame-81.svg" />
      <img
        className={styles.linkedEllipse6}
        alt=""
        src="/linked-ellipse-6@2x.png"
      />
      <img className={styles.newsTopicItem} alt="" src="/frame-79.svg" />
      <img className={styles.newsTopicInner} alt="" src="/frame-80.svg" />
    </div>
  );
};

export default NewsTopic;
