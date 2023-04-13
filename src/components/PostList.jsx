import React, { useState, useEffect } from 'react';


const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('/public/data.json')
          .then(response => response.json())
          .then(data => setPosts(data.posts));
      }, []);




    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-5'>
            
      {posts.map(post => (
       <li key={post.id}>
            <img className='w-10 h-9' src="{post.logo}"></img>
          <h2 className='text-3xl font-bold'>{post.title}</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 mr-2 rounded">
 Remote
</button>
          
<button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Full Time
</button>
          <p>{post.body}</p>
          <p>{post.address}</p>
          <p>Salary: {post.salary}</p>
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
      View Details
        </button>
        </li>
        
      ))}
 <button className='bg-violate-500 font-bold text-3xl'>See All Jobs</button>
        </div>
    );
};

export default PostList;