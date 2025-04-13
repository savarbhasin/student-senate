"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const archives = [
  {
    year: 2024,
    category: "Proposal",
    title: "Campus Sustainability Initiative",
    date: "2024-03-15",
    description: "Comprehensive plan for reducing campus carbon footprint",
    status: "Approved",
  },
  {
    year: 2024,
    category: "Event",
    title: "Student Leadership Summit",
    date: "2024-02-20",
    description: "Annual gathering of student leaders",
    status: "Completed",
  },
];

export default function Archive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const years = [...new Set(archives.map((item) => item.year))];
  const categories = [...new Set(archives.map((item) => item.category))];

  const filteredArchives = archives.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear =
      selectedYear === "all" || item.year.toString() === selectedYear;
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    return matchesSearch && matchesYear && matchesCategory;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-[8rem]">
      <h1 className="text-3xl font-bold mb-8">Senate Archives</h1>

      <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search archives..."
            className="pl-10 pr-4 py-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex space-x-4">
          <select
            className="border rounded-md px-4 py-2"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            className="border rounded-md px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArchives.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === "Approved"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{item.category}</span>
              <span>{new Date(item.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
