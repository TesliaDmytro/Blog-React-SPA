import { useState } from 'react';
import styles from './PostForm.module.css';
import Button from './UI/Button';
import Modal from './Modal';

const PostForm = ({ addNewPost, clearPosts, searchPosts, loadPosts }) => {
  const [newPost, setNewPost] = useState({
    id: Date.now(),
    title: '',
    body: '',
  });

  const [modalVisibility, setModalVisibility] = useState(false);

  const [searchWord, setSearchWord] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();

    if (newPost.title && newPost.body) {
      addNewPost(newPost);

      setNewPost({
        id: Date.now(),
        title: '',
        body: '',
      });
    }
    setModalVisibility(false);
  };

  return (
    <div className={styles.controls}>
      <Button onClick={() => setModalVisibility(true)}>Add New Post</Button>
      <Modal visibility={modalVisibility} setVisibility={setModalVisibility}>
        <form className={styles.postForm} onSubmit={formSubmit}>
          <h2>Enter your message</h2>
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(event) =>
              setNewPost({ ...newPost, title: event.target.value })
            }
          />
          <textarea
            type="text"
            placeholder="Message"
            value={newPost.body}
            onChange={(event) =>
              setNewPost({ ...newPost, body: event.target.value })
            }
          />

          <Button>Send</Button>
        </form>
      </Modal>
      <Button
        style={{ background: 'coral' }}
        type="button"
        onClick={() => clearPosts()}
      >
        Clear All Posts
      </Button>

      <Button
        style={{ background: '#4a4a95' }}
        type="button"
        onClick={() => loadPosts()}
      >
        Load Posts
      </Button>

      <input
        type="text"
        placeholder="Search"
        value={searchWord}
        onChange={(event) => {
          setSearchWord(event.target.value);
          searchPosts(searchWord);
        }}
      />

      {/* <Button
        style={{ background: '#ca8127' }}
        type="button"
        onClick={() => searchPosts(searchWord)}
      >
        Search
      </Button> */}
    </div>
  );
};

export default PostForm;
