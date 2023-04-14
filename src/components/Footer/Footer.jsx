import React from 'react';

const Footer = () => {
    return (
        <div className='m-5 bg-red-500 bg-opacity-50'>
            <h3 className='justify-center text-3xl ml-5'>Job Coach</h3>
            <p className='m-5'> A job coach supports individuals with disabilities and barriers with the goal of building skills, workplace relationships, job retention, and independence. This is a customized service so Job Coaches can work with a client as much or as little as needed.</p>
            <img src="/public/imgs/fb.png" className='m-5'></img>
            <img src="/public/imgs/twitter.png"className='m-5'></img>
            <img src="/public/imgs/youtube.png"className='m-5'></img>
            <p className='m-5'>Address(Head Office) : 20/5A Malibag,Dhaka,Bangladesh</p>
        </div>
    );
};

export default Footer;