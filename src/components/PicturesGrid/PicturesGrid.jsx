import { ssrImportKey } from "vite/runtime";
import styles from "./PicturesGridStyles.module.css";

export default function PicturesGrid() {
  return (
    <section>
      <div className={styles.infoBox}>
        <h1>
          <span className={styles.gradientText}>Our clients</span>
        </h1>
        <h3>
          <span className={styles.gradientText}>Our clients</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit
          quisquam nobis praesentium earum maxime, dolorum dolor fugit beatae
          quia?
        </p>
        <div className={styles.btnBox}>
          <button className={styles.btn}>Click</button>
          <button className={styles.btn}>Send Mail</button>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <div className={styles.box}>
            <div className={styles.innerBox}>
              <img
                src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className={styles.innerBox}>
              <img
                src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.innerBox}>
              <img
                src="https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className={styles.innerBox}>
              <img
                src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.innerBox}>
              <img
                src="https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className={styles.innerBox}>
              <img
                src="https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.colRight}>
          <div className={styles.box}>
            <iframe
              src="https://www.youtube.com/embed/?autoplay=1&iv_load_policy=3&showinfo=0&modestbranding=1&loop=1&controls=0&mute=1&playlist=i0cbasdBIKo"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
          <div className={styles.box}>
            <iframe
              className={styles.media}
              src="https://www.youtube.com/embed/?autoplay=1&iv_load_policy=3&showinfo=0&modestbranding=1&loop=1&controls=0&mute=1&playlist=yJq7u_yn8jw"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
