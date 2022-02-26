import React from "react";
import { Post } from "../../types";
import styles from "./PostCard.module.css";
import { CommentLogo } from "../../assets/icons";

const PostCard: React.FC<Post> = ({ title, thumbnail }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={thumbnail} alt="" />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div>
          <button className={styles.commentsButton}>
            <CommentLogo width="16px" height="16px" color="#9CA3AF" />
            <span>Comments</span>
          </button>
          <span className={styles.commentsCount}>12k</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
