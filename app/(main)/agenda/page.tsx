import { Calendar, Clock, MapPin, AlertCircle } from "lucide-react";
import { format } from "date-fns";

const upcomingMeetings = [
  {
    date: "2024-03-21",
    time: "18:00",
    location: "Student Union, Room 302",
    agenda: [
      "Budget Allocation Review",
      "New Sustainability Proposals",
      "Student Housing Updates",
    ],
  },
  {
    date: "2024-04-04",
    time: "18:00",
    location: "Student Union, Room 302",
    agenda: [
      "Academic Policy Discussion",
      "Campus Safety Report",
      "Event Planning",
    ],
  },
];

const updates = [
  {
    id: 1,
    title: "Emergency Meeting Called",
    date: "2024-03-18",
    type: "urgent",
    content:
      "Emergency session to discuss campus response to recent developments.",
  },
  {
    id: 2,
    title: "New Proposal Submissions",
    date: "2024-03-15",
    type: "info",
    content:
      "Deadline for new proposal submissions has been extended to March 25th.",
  },
];

export default function Agenda() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-[8rem]">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-black">
            Upcoming Meetings
          </h2>
          <div className="space-y-6">
            {upcomingMeetings.map((meeting, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-blue-900">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">
                      {format(new Date(meeting.date), "MMMM d, yyyy")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>{meeting.time}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span>{meeting.location}</span>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Agenda Items:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {meeting.agenda.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
          <div className="space-y-4">
            {updates.map((update) => (
              <div
                key={update.id}
                className={`p-4 rounded-lg ${
                  update.type === "urgent"
                    ? "bg-red-50 border-l-4 border-red-500"
                    : "bg-blue-50 border-l-4 border-blue-500"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold flex items-center">
                    <AlertCircle
                      className={`h-5 w-5 mr-2 ${
                        update.type === "urgent"
                          ? "text-red-500"
                          : "text-blue-500"
                      }`}
                    />
                    {update.title}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {format(new Date(update.date), "MMM d, yyyy")}
                  </span>
                </div>
                <p className="text-gray-600">{update.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
