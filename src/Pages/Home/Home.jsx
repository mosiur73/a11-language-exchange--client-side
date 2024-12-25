import React from 'react';
import Caroucel from '../../component/Caroucel/Caroucel';
import StateSection from '../../component/StateSection/StateSection';
import Category from '../LanguageCategory/Category';

const Home = () => {
    return (
        <div>
           <Caroucel></Caroucel>
           <StateSection></StateSection>
           <Category></Category>
           
        </div>
    );
};

export default Home;