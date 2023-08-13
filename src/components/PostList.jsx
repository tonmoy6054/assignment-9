import React, { useState, useEffect } from 'react';

const PostList = ({ handleClick }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setPosts(data.posts));
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
        margin: '0 auto',
        maxWidth: '1200px',
        padding: '50px 20px',
      }}
    >
      <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
          Explore Job Categories
        </h2>
        <p style={{ fontSize: '18px', color: '#777' }}>
          Browse through a variety of job categories to find your ideal career path.
        </p>
      </div>
      {posts.map(post => (
        <div
          key={post.id}
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
          }}
        >
          <img
            style={{ width: '80px', height: '80px', marginBottom: '15px' }}
            src={post.logo}
            alt={post.title}
          />
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            {post.title}
          </h2>
          <p style={{ color: '#777', marginBottom: '15px' }}>{post.body}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              style={{
                backgroundColor: '#3490dc',
                color: 'white',
                fontWeight: 'bold',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Remote
            </button>
            <button
              style={{
                backgroundColor: '#f59e0b',
                color: 'white',
                fontWeight: 'bold',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Full Time
            </button>
          </div>
          <p style={{ marginTop: '15px' }}>Salary: {post.salary}</p>
          <button
            onClick={handleClick}
            style={{
              backgroundColor: '#e53e3e',
              color: 'white',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '20px',
              width: '100%',
            }}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;

