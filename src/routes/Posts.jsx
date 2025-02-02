import React, { useRef, useState, useMemo, useEffect } from "react";
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import '../Styles/App.css';
import PostItem from "../components/PostItem";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import PostForm from "../components/PostForm";
import MySelect from "../components/UI/select/MySelect";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePosts";
import axios from 'axios';
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../components/utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";


function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  // хук обработки индикации загрузки и обработку ошибки запроса на получение данных
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
    console.log(page)
  });

  // () => { setPage(page + 1) } -- callback
  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })

  useEffect(() => {
    // Callback
    fetchPosts(limit, page);
  }, [page, limit])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
    // fetchPosts(limit, page);
  }

  return (
    <div className="App">
      {/* <button onClick={fetchPosts}>GET POSTS</button> */}
      <MyButton style={{ marginTop: "30px", marginLeft: "0px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      {/* Сортировка постов */}
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Количество элементов"
        options={[
          {value: 5, name: "5"},
          {value: 10, name: "10"},
          {value: 25, name: "25"},
          {value: -1, name: "Показать все"}
        ]}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      <div ref={lastElement} style={{ height: 20, background: 'white' }} />
      {isPostsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
      }
      {/* <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      /> */}

    </div>
  );
}

export default Posts;