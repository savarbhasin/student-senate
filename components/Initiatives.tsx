import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

const initiatives = [
  {
    title: 'Campus Sustainability Project',
    description: 'Implementation of recycling programs and renewable energy solutions across campus.',
    status: 'in-progress'
  },
  {
    title: 'Mental Health Resources',
    description: 'Expanding counseling services and mental health awareness programs.',
    status: 'completed'
  },
  {
    title: 'Student Housing Improvement',
    description: 'Advocating for better housing conditions and affordable options.',
    status: 'in-progress'
  },
  {
    title: 'Academic Support Services',
    description: 'Enhancing tutoring programs and study resources for all students.',
    status: 'in-progress'
  },
  {
    title: 'Campus Safety Initiative',
    description: 'Improving lighting, emergency response systems, and safety protocols.',
    status: 'completed'
  },
  {
    title: 'Diversity & Inclusion',
    description: 'Promoting inclusive campus culture and diverse student representation.',
    status: 'in-progress'
  }
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Current Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => (
            <div key={initiative.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{initiative.title}</h3>
                {initiative.status === 'completed' ? (
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : (
                  <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                )}
              </div>
              <p className="text-gray-600">{initiative.description}</p>
              <div className="mt-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  initiative.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {initiative.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}