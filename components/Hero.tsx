import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://apnaaddafest.in/blog/content/images/2024/01/IIITD.jpeg"
          alt="University campus"
        />
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Voice on Campus
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-100">
            We represent the student body and work tirelessly to improve campus life, advocate for student rights, and create positive change in our university community.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}