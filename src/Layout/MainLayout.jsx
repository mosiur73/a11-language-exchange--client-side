import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <main className='mt-24'>
           <Outlet></Outlet>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;