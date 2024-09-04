import styles from "./CommentModalStyles.module.css";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../../validation/loginValidation";
import * as commentService from "../../services/commentService";
import { setUserData } from "../../utils/utils";
import { commentValidator } from "../../validation/commentValidator";

const CommentModal = ({ show, closeModal }) => {
  const [registered, setRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const validationSchema = commentValidator();

  const handleOuterClick = () => {
    closeModal();
    setShowPassword(false);
    setShowRePassword(false);
    setRegistered(false);
  };

  const handleInnerClick = (e) => {
    e.stopPropagation();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const result = commentService.create(data);
    console.log(result);
  };

  return (
    <div onClick={handleOuterClick}>
      {show ? (
        <div className={styles.modalContainer}>
          <div onClick={handleInnerClick} className={styles.wrapper}>
            <div className={styles.closeBtn}>
              <button
                onClick={() => {
                  closeModal();
                  setRegistered(false);
                  reset();
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className={styles.titleText}>
              <div className={`${styles.title} ${styles.signup}`}>
                Добави коментар
              </div>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formInner}>
                <form
                  className={styles.login}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className={styles.field}>
                    <input
                      type="text"
                      placeholder="Име"
                      {...register("firstName")}
                    />
                  </div>
                  <div className={styles.field}>
                    <input
                      type="text"
                      placeholder="Фамилия"
                      {...register("lastName")}
                    />
                  </div>
                  <div className={styles.field}>
                    <textarea
                      placeholder="Коментар"
                      {...register("description")}
                      className={styles.textarea}
                    />
                  </div>
                  <div className={`${styles.field} ${styles.btn}`}>
                    <div className={styles.btnLayer}></div>
                    <input type="submit" value={"Изпрати"} />
                  </div>
                </form>
                {errors && (
                  <p className="errorMsg">
                    {errors[Object.keys(errors)[0]]?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CommentModal;