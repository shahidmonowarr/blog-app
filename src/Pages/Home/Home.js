import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import SideBar from '../../components/SideBar/SideBar';
import './Home.css';

const Home = () => {
    return (
    <>
        <Header></Header>
        <div className='home '>
            <Posts></Posts> 
            <SideBar></SideBar>
        </div>
        
    </>
    );
};

export default Home;