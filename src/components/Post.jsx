import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import Button from './UI/Button';

const Post = ({ post, clearPost }) => {
  return (
    <div className={styles.post}>
      <Link to={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Link>
      <div className={styles.service}>
        <p>{`id:${post.id}`}</p>
        <Button
          type="button"
          style={{ background: 'coral' }}
          onClick={() => clearPost(post)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Post;
