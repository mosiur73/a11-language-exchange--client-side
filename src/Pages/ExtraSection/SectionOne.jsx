import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const SectionOne = () => {
    const courses = [
        {
            id: 1,
            image: "https://i.ibb.co.com/bL8S6sn/confident-applicant-smiling-job-interview-with-diverse-hr-managers.jpg",
            price: 360,
            title: "Crash Course for English",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/3zHH4kw/man-talking-with-female-sales-person-car-show-room.jpg",
            price: 420,
            title: "Spanish Grammar Basics",
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/bPbPcn3/meeting-creative-people.jpg",
            price: 400,
            title: "French Vocabulary Builder",
        },
        {
            id: 4,
            image: "https://i.ibb.co.com/wQz9Fm5/candidates-waiting-job-interview.jpg",
            price: 350,
            title: "German Speaking Skills",
        },
        {
            id: 5,
            image: "https://i.ibb.co.com/6wsSyq4/man-talking-with-female-sales-person-car-show-room.jpg",
            price: 500,
            title: "Japanese Language for Beginners",
        },
        {
            id: 6,
            image: "https://i.ibb.co.com/KrBKVG6/young-adult-dealing-with-imposter-syndrome.jpg",
            price: 450,
            title: "Italian Culture and Language",
        },
    ];
    return (
        <div>
             <div className="container max-w-7xl mx-auto px-4 mt-6">
            <h2 className="text-3xl font-bold text-center mb-6">Upcoming Courses</h2>
            <p className="text-center text-gray-500 mb-8">Wait For a While</p>
            
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Zoom>
            {
                courses.map((course) =>(
                    <div key={course.id} className="card rounded-none bg-base-100 w-96 shadow-2xl">
                    <figure className="">
                      <img
                        src={course.image}
                        alt="Shoes"
                        className="rounded-none" />
                    </figure>
                    <div className="card-body bg-slate-50 items-center text-center">
                      <h2 className="card-title">{course.price}$</h2>
                      <p>{course.title}</p>
                      <div className="card-actions">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Buy Now</button>
                      </div>
                    </div>
                               </div>
                ))
            }
            </Zoom>
         </div>
        </div>
        </div>
    );
};

export default SectionOne;