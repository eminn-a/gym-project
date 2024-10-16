import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import styles from "./TestemonialsStyles.module.css";
import ErrorMessage from "../shared/ErrorMessage/ErrorMessage";
import Spiner from "../shared/spiner/Spiner";
import { Link } from "react-router-dom";

export default function Testemonials({ testemonials, error, isLoading }) {
  const [commentIndex, setCommentIndex] = useState(0);

  const { comments = [] } = testemonials;

  function showNextComment() {
    if (comments.length > 1) {
      setCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (comments.length > 1) {
      const timer = setTimeout(showNextComment, 8000);
      return () => clearTimeout(timer);
    }
  }, [commentIndex, comments.length]);

  return (
    <div className={styles.trip} id="testemonials">
      <div>
        <h1>
          <span className={styles.gradientText}>Отзиви</span>
        </h1>
        <p>Мнения на нашите клиенти</p>
      </div>
      <Link to="allComments">
        <div onClick={() => scrollToTop()} className={styles.btnMain}>
          Виж всички коментари
        </div>
      </Link>

      {isLoading && <Spiner />}
      {error && (
        <ErrorMessage message={"Възникна грешка, моля опитайте по-късно!"} />
      )}

      <div className={styles.tripCardContainer} onClick={showNextComment}>
        {comments.map((x, index) => (
          <SingleCard key={index} data={x} comment={commentIndex} />
        ))}
      </div>
    </div>
  );
}
