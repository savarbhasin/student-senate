import { Calendar } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Student Leadership Summit 2024",
    date: "2024-03-15",
    images: [
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    ],
    description:
      "Annual gathering of student leaders discussing campus initiatives",
  },
  {
    id: 2,
    title: "Campus Sustainability Week",
    date: "2024-02-20",
    images: [
      "https://images.unsplash.com/photo-1536825211030-094de935f680?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
    ],
    description: "Week-long events promoting environmental awareness",
  },
];

export default function Gallery() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Event Gallery</h1>

      <div className="space-y-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
              </div>
              <p className="text-gray-600">{event.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              {event.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video relative overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    alt={`${event.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
