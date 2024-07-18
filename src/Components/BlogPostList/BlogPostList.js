import React from 'react';
import './BlogPostList.css';
import { Link } from 'react-router-dom';

import BlogPost from '../BlogPosts/BlogPost';

function BlogPostList({ posts }) {
  return (
    <div className='List'>     
    <h2>Blogging Platform</h2>
      <Link to="/addpost" className="btn btn-primary mb-3">Create Post</Link>
      <div className="row">
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          
          posts.map((post, index) => (
            <div className="ListItem col-md-4 mb-3" key={index}>
              <div className="card">
                <img src={post.photo} className="card-img-top" alt="Post" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default BlogPostList ;