import React from 'react';
import Caroucel from '../../component/Caroucel/Caroucel';
import StateSection from '../../component/StateSection/StateSection';
import Category from '../LanguageCategory/Category';
import SectionOne from '../ExtraSection/SectionOne';
import SectionTwo from '../ExtraSection/SectionTwo';
import ServicesSection from '../../component/Service/Service';
import LanguagesSection from '../../component/Language/LanguageSection';
import StatsCard from '../../component/StateSection/Card';

const Home = () => {
    return (
        <div className=''>
           <Caroucel></Caroucel>
           <ServicesSection></ServicesSection>
           <LanguagesSection></LanguagesSection>
           {/* <StateSection></StateSection> */}
           {/* <Category></Category> */}
           <StatsCard></StatsCard>
           <SectionOne></SectionOne>
           <SectionTwo></SectionTwo>
           
        </div>
    );
};

export default Home;