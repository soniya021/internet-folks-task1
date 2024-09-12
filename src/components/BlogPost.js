import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, description, date }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="date">{date}</span>
    </div>
  );
};

export default BlogPost;
