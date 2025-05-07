import { readSpreadsheet } from "@/lib/sheets";
import { Mail, Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Sarah Johnson",
    position: "President",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    email: "president@studentsenate.edu",
    linkedin: "#",
  },
  {
    name: "Michael Chen",
    position: "Vice President",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    email: "vp@studentsenate.edu",
    linkedin: "#",
  },
  {
    name: "Aisha Patel",
    position: "Secretary",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    email: "secretary@studentsenate.edu",
    linkedin: "#",
  },
];

export default async function Leadership() {
  const data = await readSpreadsheet(
    "1bWN4v6DJB0emsQUU5pydxRhIH6ibIERe3ujFBV5luEI",
    "Sheet1!A1:D4"
  );
  data?.shift();
  return (
    <section id="leadership" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.map((leader) => (
            <div
              key={leader[0]}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                alt={leader[0]}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{leader[0]}</h3>
                <p className="text-gray-600">{leader[1]}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={`mailto:${leader[2]}`}
                    className="text-gray-600 hover:text-blue-900"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={leader[2]}
                    className="text-gray-600 hover:text-blue-900"
                  >
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
