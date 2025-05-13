import React from 'react';

const AboutUs = () =>{
    return(
        <section className="bg-white relative z-0 py-16 md:px-10 lg:px-20">
            <div className=" bg-white p-10 mx-auto max-w-7xl text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    About Us
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                We make living simple, safe, and affordable for both students and employees.
                 Our platform connects them with trusted, comfortable, 
                 and budget-friendly accommodations—conveniently located near campuses, offices, markets, and malls.
                </p>
                <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Mision
                        </h3>
                        <p className="text-md text-left text-gray-600 mb-8">
                        To provide safe, affordable, and accessible accommodations for students and employees,
                         empowering them to live comfortably and focus on their goals.
                        </p>
                    </div>
                    <div className="bg-white-100 p-4 rounded-xl shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Vision
                        </h3>
                        <p className="text-md text-left text-gray-600 mb-8">
                        To become the most trusted housing platform for students and
                         employees across the country—offering convenience, community, 
                         and comfort at every stage of their journey.
                        </p>
                    </div>
                    <div className="bg-white-100 p-4 rounded-xl shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Values
                        </h3>
                        <p className="text-md text-left text-gray-600 mb-8">
                        To be the leading platform for student and employee housing, known for reliability,
                         convenience, and a commitment to making everyday living easier and more secure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutUs;