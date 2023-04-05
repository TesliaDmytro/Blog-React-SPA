import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './SinglePostPage.module.css';

const SinglePostPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const POSTS_API = 'https://jsonplaceholder.typicode.com/posts/';

  async function fetchPosts(id) {
    const response = await axios.get(POSTS_API + id);
    setPost(response.data);
  }

  async function fetchComments(id) {
    const response = await axios.get(POSTS_API + id + '/comments');
    setComments(response.data);
  }

  useEffect(() => {
    fetchPosts(id);
    fetchComments(id);
  }, [id]);

  console.log(comments);
  return (
    <>
      <div className={styles.post}>
        <h3>{post.id}</h3>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className={styles.comments}>
        <h3>Comments:</h3>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className={styles.comment}>
              <h3>
                <span>Name:</span> {comment.name}
              </h3>
              <h4>
                <span>Mail:</span> {comment.email}
              </h4>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SinglePostPage;
