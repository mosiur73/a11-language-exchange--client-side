import React from 'react';
import Caroucel from '../../component/Caroucel/Caroucel';
import StateSection from '../../component/StateSection/StateSection';
import Category from '../LanguageCategory/Category';
import SectionOne from '../ExtraSection/SectionOne';
import SectionTwo from '../ExtraSection/SectionTwo';

const Home = () => {
    return (
        <div className=''>
           <Caroucel></Caroucel>
           <StateSection></StateSection>
           <Category></Category>
           <SectionOne></SectionOne>
           <SectionTwo></SectionTwo>
           
        </div>
    );
};

export default Home;