import { signIn, auth, signOut } from "@/lib/auth";
import Sidebar from "./sidebar";
import { handler } from "@/lib/sheets";

export default async function SignIn() {
  const session = await auth();

  if (!session?.user)
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
        style={{
          backgroundImage: "url('/adminbg.png')",
        }}
      >
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-10 text-center space-y-6 max-w-xl shadow-2xl border border-white/30">
          <h1 className="text-5xl sm:text-6xl font-bold text-white">
            Welcome to Admin Panel
          </h1>
          <p className="text-gray-100 text-lg font-medium">
            of the Student Senate Website
          </p>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button
              type="submit"
              className="mt-4 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    );

  // Keep the same dashboard UI for logged-in users
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#f9f9f9] min-h-screen">
      <Sidebar />
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold text-blue-900">
            Hi, {session.user.name?.split(" ")[0]} 👋
          </h2>
          <p className="text-gray-600 font-medium">Good Evening</p>
        </div>
        <div className="flex flex-row space-x-8 items-center">
          <div className="w-10 h-10 rounded-full bg-black" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-10">
        <div className="border-2 shadow-xl border-blue-800 p-4 rounded-md bg-white">
          <h2 className="font-semibold text-lg text-blue-900">Admin Panel</h2>
          <div className="flex flex-row items-center space-x-5 mt-4">
            <button
              onClick={async () => {
                "use server";
                await signOut();
              }}
              className="p-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex flex-row items-center space-x-2 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span>Add New Record</span>
            </button>

            <button
              onClick={async () => {
                "use server";
                console.log(handler());
              }}
              className="p-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
            >
              Open Sheet
            </button>
          </div>
        </div>

        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="border-2 border-blue-800 p-4 rounded-md bg-white text-blue-800 font-medium shadow-md"
          >
            Edit Gallery Section {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
