import { Calendar, Clock, MapPin } from "lucide-react";

export default function Meetings() {
  return (
    <section id="meetings" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Senate Meetings
        </h2>

        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Next Meeting</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-900 mr-2" />
              <span>Thursday, March 21, 2024</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-900 mr-2" />
              <span>6:00 PM - 7:30 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-900 mr-2" />
              <span>Student Union, Room 302</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Meeting Information</h3>
          <div className="prose max-w-none">
            <ul className="space-y-4">
              <li>Meetings are held bi-weekly during the academic year</li>
              <li>All students are welcome to attend and participate</li>
              <li>Meeting minutes are posted within 48 hours</li>
              <li>Submit agenda items 72 hours before the meeting</li>
            </ul>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-blue-900 text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors"
            >
              View Past Meeting Minutes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
