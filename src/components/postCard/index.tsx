import React from "react";
import { Post } from "../../types";
import styles from "./PostCard.module.css";
import { Comment } from "../../assets/icons";

const PostCard: React.FC<Post> = ({ title, thumbnail }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={thumbnail} alt="" />
      <div className={styles.content}>
        <p className={styles.title}>
          {title.length < 180
            ? title
            : title.substring(0, 180) + "... read more"}
        </p>
        <div>
          <button className={styles.commentsButton}>
            <Comment width="16px" height="16px" color="#9CA3AF" />
            <span>Comments</span>
          </button>
          <span className={styles.commentsCount}>12k</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
