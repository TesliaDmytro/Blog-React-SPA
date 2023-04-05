import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './PostList.module.css';
import Post from './Post';
import Select from './UI/Select';
import Loader from './UI/Loader';

const PostList = ({
  posts,
  clearPost,
  sortPosts,
  value,
  isLoading,
  fetchError,
}) => {
  return isLoading ? (
    <div className={styles.postList}>
      <Loader />
    </div>
  ) : fetchError ? (
    <div className={[styles.postList, styles.center].join(' ')}>
      <h2>Error</h2>
      <p>{fetchError.message}</p>
    </div>
  ) : posts.length ? (
    <div className={styles.postList}>
      <Select
        title="Sort by"
        options={[
          { value: 'id', name: 'Id' },
          { value: 'title', name: 'Title' },
        ]}
        value={value}
        onChange={sortPosts}
      />
      <h2>Posts</h2>
      <TransitionGroup className={styles.posts}>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Post post={post} clearPost={clearPost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  ) : (
    <div className={[styles.postList, styles.center].join(' ')}>
      <h2>There are no posts</h2>
    </div>
  );
};

export default PostList;
