import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'Sarah Johnson',
    position: 'President',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    email: 'president@studentsenate.edu',
    linkedin: '#'
  },
  {
    name: 'Michael Chen',
    position: 'Vice President',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    email: 'vp@studentsenate.edu',
    linkedin: '#'
  },
  {
    name: 'Aisha Patel',
    position: 'Secretary',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    email: 'secretary@studentsenate.edu',
    linkedin: '#'
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src={leader.image}
                alt={leader.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-gray-600">{leader.position}</p>
                <div className="mt-4 flex space-x-4">
                  <a href={`mailto:${leader.email}`} className="text-gray-600 hover:text-blue-900">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href={leader.linkedin} className="text-gray-600 hover:text-blue-900">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}