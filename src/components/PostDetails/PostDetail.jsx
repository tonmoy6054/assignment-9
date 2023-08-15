import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css'
import ToastMessage from './ToastMessage';
import { ToastContainer } from 'react-toastify';


const PostDetails = ({ posts }) => {
  const [showAppliedJobs, setShowAppliedJobs] = useState(false);
  const { postId } = useParams();
  const selectedPost = posts.find(post => post.id.toString() === postId);

  if (!selectedPost) {
    return <div>Post not found.</div>;
  }

  const handleApplyClick = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
  appliedJobs.push(selectedPost);
  localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    ToastMessage({ message: 'Applied successfully!' });
    setShowAppliedJobs(true);
  }

  return (
    <div className="post-details">
      <h2 className="post-details-title">{selectedPost.title}</h2>
      <p className="post-details-description">{selectedPost.job_description}</p>
      <h3 className="post-details-section-title">Job Responsibilities</h3>
      <p className="post-details-section-content">{selectedPost.job_reponsibilities}</p>
      <h3 className="post-details-section-title">Educational Requirements</h3>
      <p className="post-details-section-content">{selectedPost.educational_requirements}</p>
      
      <h3 className="post-details-section-title">Experience</h3>
      <p className="post-details-section-content">{selectedPost.experience}</p>
      <h3 className="post-details-section-title">Salary</h3>
      <p className="post-details-section-content">{selectedPost.salary}</p>
      <h3 className="post-details-section-title">contact info: </h3>
      <p className="post-details-section-content">{selectedPost.contact_info}</p>
      <button className="post-details-button" onClick={handleApplyClick}>Apply Now</button>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default PostDetails;
