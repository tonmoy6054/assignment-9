import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        padding: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Job Coach</h3>
      <p style={{ margin: '0 20px 20px', fontSize: '16px' }}>
        A job coach supports individuals with disabilities and barriers with the goal of building skills,
        workplace relationships, job retention, and independence. This is a customized service so Job Coaches
        can work with a client as much or as little as needed.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src="/public/imgs/fb.png" alt="Facebook" style={{ width: '40px', height: '40px', margin: '0 10px' }} />
        <img src="/public/imgs/twitter.png" alt="Twitter" style={{ width: '40px', height: '40px', margin: '0 10px' }} />
        <img src="/public/imgs/youtube.png" alt="YouTube" style={{ width: '40px', height: '40px', margin: '0 10px' }} />
      </div>
      <p style={{ margin: '0 20px', fontSize: '16px' }}>
        Address (Head Office): 20/5A Malibag, Dhaka, Bangladesh
      </p>
      <p style={{ fontSize: '14px', marginTop: '10px' }}>© 2023 Job Coach. All rights reserved.</p>
    </div>
  );
};

export default Footer;
