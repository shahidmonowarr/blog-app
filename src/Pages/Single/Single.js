import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import SinglePost from '../../components/SinglePost/SinglePost';
import './Single.css';

const Single = () => {
    return (
        <div className='single'>
            <SinglePost></SinglePost>
            <SideBar></SideBar>
        </div>
    );
};

export default Single;