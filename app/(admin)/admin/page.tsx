import { signIn, auth, signOut } from "@/lib/auth";
import Sidebar from "./sidebar";
import { readSheet } from "@/lib/sheets";

export default async function SignIn() {
  const session = await auth();

  if (!session?.user)
    return (
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Sign in</button>
      </form>
    );
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Sidebar />
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">
            Hi, {session.user.name?.split(" ")[0]} 👋
          </h2>
          <p className="text-gray-600 font-medium">Good Evening</p>
        </div>
        <div className="flex flex-row space-x-8 items-center">
          {/* <div className="border-2 border-blue-800 hover:bg-blue-200 cursor-pointer p-2 rounded-md flex items-center flex-row gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            <span className="text-sm">Logout</span>
          </div> */}
          <div className="w-10 h-10 rounded-full bg-black" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-10">
        <div className="border-2 shadow-xl border-blue-800 p-2 rounded-md">
          <h2 className="font-semibold text-lg">Edit Gallery</h2>
          <div className="flex flex-row items-center space-x-5 mt-2">
            <button
              onClick={async () => {
                "use server";
                await signOut();
              }}
              className="p-2 px-4 bg-blue-200 rounded-md flex flex-row items-center space-x-2"
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
              onClick={() => {
                "use server";
                console.log(
                  readSheet(
                    "1bWN4v6DJB0emsQUU5pydxRhIH6ibIERe3ujFBV5luEI",
                    "Sheet1!A:Z"
                  )
                );
              }}
              className="p-2 px-4 bg-blue-200 rounded-md"
            >
              Open Sheet
            </button>
          </div>
        </div>
        <div className="border-2 border-blue-800 p-2 rounded-md">
          Edit Gallery
        </div>
        <div className="border-2 border-blue-800 p-2 rounded-md">
          Edit Gallery
        </div>

        <div className="border-2 border-blue-800 p-2 rounded-md">
          Edit Gallery
        </div>
      </div>
    </div>
  );
}
