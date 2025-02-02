import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import '../Styles/App.css';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostsById, isLoading, postsError] = useFetching(async (id) => {
      const response = await PostService.getById(id);
      setPost(response.data);
    });
  
    const [fetchComments, isComLoading, commentsError] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
    });
  
    useEffect(() => {
      fetchPostsById(params.id);
      fetchComments(params.id);
    }, []);
    return (
        <div className="postIdPage">
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div className="post">
                    {post.id}. {post.title}
                  </div>
            }
            <hr style={{marginTop: "20px", marginBottom: "20px"}}/>
            <h1>
                Комментарии
            </h1>
            {isComLoading
            ? <Loader/>
            : <div>
                {comments.map(comm => 
                    <div 
                        className="postComment"
                        key={comm.id}>
                        <div className="avatar">
                            <img 
                                src="https://avatars.mds.yandex.net/i?id=fd1463087a84bcfb1bbff39d7cd90b2b_l-5307715-images-thumbs&n=13"
                                style={{width: "14px"}}
                            />
                            <h5 style={{marginLeft: "5px"}}>{comm.email}</h5>
                        </div>

                        <div>{comm.body}</div>
                    </div>
                )}
            </div>
            }
        </div>
    )
}

export default PostIdPage;