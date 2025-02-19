import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom"

const PostItem = (props) => {
  // console.log(props);
  const navigate = useNavigate();
  
  // console.log(router);
  return (
    <div className="post">
      <div className="post_content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
}

export default PostItem;