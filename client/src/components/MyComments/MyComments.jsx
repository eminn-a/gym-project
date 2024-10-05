import { useMutation, useQueryClient } from "@tanstack/react-query";
import CommentModal from "../CommentModal/CommentModal";
import Comment from "./Comment";
import styles from "./MyCommentsStyles.module.css";
import { useState } from "react";
import * as commentService from "../../services/commentService";
import toast from "react-hot-toast";
import Spiner from "../../components/shared/spiner/Spiner";
import ErrorMessage from "../shared/ErrorMessage/ErrorMessage";

export default function MyComments({ data, isLoading, error }) {
  const [showModal, setShowModal] = useState(false);

  const { comments = [] } = data || {};

  const queryClient = useQueryClient();

  const toggleModal = () => setShowModal((prev) => !prev);
  const closeModal = () => setShowModal(false);

  const deleteCommentMutation = useMutation({
    mutationFn: (id) => commentService.deleteById(id),
    onSuccess: () => {
      queryClient.invalidateQueries("userComments");
      toast.success("Коментарът беше изтрит успешно.");
    },
    onError: (err) => {
      toast.error(`Грешка: ${err.message}`);
    },
  });

  const onDeleteHandler = (id, firstName, lastName) => {
    if (
      confirm(`Искате ли да изтриете коментара на ${firstName} ${lastName}?`)
    ) {
      deleteCommentMutation.mutate(id);
    }
  };

  //add paggionation here

  return (
    <>
      <CommentModal show={showModal} closeModal={closeModal} />
      <div className={styles.trip} id="testimonials">
        <div>
          <h1>
            <span className={styles.gradientText}>Отзиви</span>
          </h1>
          <p>Мнения на нашите клиенти</p>
          <div onClick={toggleModal} className={styles.btn}>
            Напиши коментар
          </div>
        </div>

        {isLoading ? (
          <Spiner />
        ) : error ? (
          <ErrorMessage message={"Възникна грешка, моля опитайте по-късно!"} />
        ) : (
          <div className={styles.tripCardContainer}>
            {comments.map((comment, index) => (
              <Comment key={index} data={comment} onDelete={onDeleteHandler} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
