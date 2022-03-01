import React, { useState } from "react";
import { Post } from "../../types";
import styles from "./PostCard.module.css";
import { CommentIcon } from "../../assets/icons";
import { upsFormatter } from "../../helpers";

const PostCard: React.FC<Post> = ({ title, thumbnail, ups }) => {
  const [commentHover, setCommentHover] = useState<boolean>(false);

  return (
    <div className={styles.card}>
      <img className={styles.image} src={thumbnail} alt="" />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div>
          <button
            className={styles.commentsButton}
            onMouseEnter={() => {
              setCommentHover(true);
            }}
            onMouseLeave={() => {
              setCommentHover(false);
            }}
          >
            <CommentIcon
              width="16px"
              height="16px"
              color={commentHover ? "#FF4600" : "#9CA3AF"}
            />
            <span>Comments</span>
          </button>
          <span className={styles.ups}>{upsFormatter(ups)}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
