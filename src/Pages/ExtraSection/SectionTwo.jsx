import React from 'react';

const FeaturedInstructors = () => {
  const instructors = [
     {
      name: "Danny Awesome",
      title: "MANAGER",
      description: "At verb eos et accusamus et lusto odio dignissimus ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores",
      image: "https://i.ibb.co/nhbnr7J/team-2.jpg"
    },
    {
      name: "Kimberly Richiez",
      title: "ENGLISH AND RUSSIAN",
      description: "At verb eos et accusamus et lusto odio dignissimus ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores",
      image: "https://i.ibb.co/Kx7XwTdk/team-6.jpg"
    },
    {
      name: "Dylan Taylor",
      title: "ENGLISH AND SPANISH",
      description: "At verb eos et accusamus et lusto odio dignissimus ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores",
      image: "https://i.ibb.co/LDxtmssg/young-happy-business-woman-sitting-260nw-2223351415.jpg"
    },
    {
      name: "Arny Clarke",
      title: "CHINESE AND JAPANESE",
      description: "At verb eos et accusamus et lusto odio dignissimus ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores",
      image: "https://i.ibb.co/R5k1DL3/young-man-is-ready-drawing-business-strategy.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      <h2 className="text-3xl font-bold text-center mb-10 uppercase text-gray-800">Featured Instructors</h2>
      
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((instructor, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100">
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "/images/default-instructor.jpg";
                }}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{instructor.name}</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">{instructor.title}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{instructor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedInstructors;