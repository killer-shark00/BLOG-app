import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './blogPost';
import './Home.css';

const HomePage = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <div className="blog-post-box">
              <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
              <p className="blog-post-content">{post.content.substring(0, 50)}...</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
