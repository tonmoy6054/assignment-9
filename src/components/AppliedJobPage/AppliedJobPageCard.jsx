import React from 'react';

const AppliedJobPageCard = ({ job }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const imgStyle = {
    width: '80px',
    height: '80px',
    marginBottom: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#3490dc',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Title: {job.title}</h2>
      <img style={imgStyle} src={job.logo} alt={job.title} />
      <p>{job.body}</p>
      <h2>Address: {job.address}</h2>
      <h2>Salary: {job.salary}</h2>
      <button style={buttonStyle}>Remote</button>
      <button style={buttonStyle}>Full Time</button>
      <button style={buttonStyle}>View Details</button>
    </div>
  );
};

export default AppliedJobPageCard;
