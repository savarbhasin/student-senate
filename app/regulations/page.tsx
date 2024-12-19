'use client'
import React, { useState } from 'react';
import { Book, ChevronDown, ChevronRight } from 'lucide-react';

const regulations = [
  {
    id: 1,
    title: 'Academic Programs',
    sections: [
      {
        id: 'ap1',
        title: 'Undergraduate Degree Requirements',
        content: 'Students must complete 120 credit hours...'
      },
      {
        id: 'ap2',
        title: 'Graduate Program Guidelines',
        content: 'Masters degree candidates must maintain a GPA of 3.0...'
      }
    ]
  },
  {
    id: 2,
    title: 'Student Conduct',
    sections: [
      {
        id: 'sc1',
        title: 'Code of Conduct',
        content: 'All students are expected to maintain...'
      },
      {
        id: 'sc2',
        title: 'Academic Integrity',
        content: 'The university maintains a zero-tolerance policy...'
      }
    ]
  }
];

export default function Regulations() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-[8rem]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Degree Regulations & Guidelines</h1>
        <p className="mt-2 text-gray-600">
          Comprehensive information about academic policies and procedures
        </p>
      </div>

      <div className="space-y-6">
        {regulations.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold flex items-center">
                <Book className="h-5 w-5 mr-2 text-blue-900" />
                {category.title}
              </h2>
            </div>

            <div className="divide-y">
              {category.sections.map(section => (
                <div key={section.id} className="p-6">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="font-medium">{section.title}</span>
                    {expandedSections.includes(section.id) 
                      ? <ChevronDown className="h-5 w-5 text-gray-500" />
                      : <ChevronRight className="h-5 w-5 text-gray-500" />
                    }
                  </button>
                  
                  {expandedSections.includes(section.id) && (
                    <div className="mt-4 pl-4 text-gray-600 prose">
                      <p>{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}