import React from 'react';
import { Facebook, Twitter, Instagram, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Student Senate</span>
            </div>
            <p className="text-gray-300">
              Representing and advocating for students since 1950. Working together to create positive change on campus.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#leadership" className="text-gray-300 hover:text-white">Leadership</a></li>
              <li><a href="#initiatives" className="text-gray-300 hover:text-white">Initiatives</a></li>
              <li><a href="#meetings" className="text-gray-300 hover:text-white">Meetings</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Student Senate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}