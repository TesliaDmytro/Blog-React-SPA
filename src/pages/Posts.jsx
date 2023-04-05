import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsLoading(true);

    try {
      const response = await axios.get(POSTS_API);
      setPosts(response.data);
    } catch (error) {
      setFetchError(error);
    }
    setIsLoading(false);
  }

  const loadPosts = () => fetchPosts();

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const clearAllPosts = () => {
    setPosts([]);
  };

  const clearPost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    if (sort) {
      return sort === 'title'
        ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        : [...posts].sort((a, b) => a[sort] - b[sort]);
    }
    return posts;
  }, [sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortedPosts]);

  const sortPosts = (sort) => {
    setSort(sort);
  };

  const searchPosts = (searchWord) => {
    setSearch(searchWord);
  };

  return (
    <div className="Posts">
      <PostForm
        addNewPost={addNewPost}
        clearPosts={clearAllPosts}
        searchPosts={searchPosts}
        loadPosts={loadPosts}
      />
      <PostList
        posts={sortedAndSearchedPosts}
        clearPost={clearPost}
        sortPosts={sortPosts}
        value={sort}
        isLoading={isLoading}
        fetchError={fetchError}
      />
    </div>
  );
}

export default Posts;
