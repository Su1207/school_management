"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center h-full gap-[26px] items-center p-6 min-h-screen w-full mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        School Management System
      </h1>
      <p className="text-lg text-center max-w-2xl">
        A simple and efficient school management system to manage schools,
        students, and staff with ease.
      </p>
      <div className=" flex items-center gap-4">
        <button
          onClick={() => router.push("/addSchool")}
          className="bg-purple-700 text-white px-4 py-2 border text-sm cursor-pointer rounded-lg hover:bg-white hover:text-black hover:animate-bounce transition-all duration-200 ease-in-out"
        >
          Add School
        </button>
        <button
          onClick={() => router.push("/showSchools")}
          className="bg-purple-700 text-white px-4 py-2 border text-sm cursor-pointer rounded-lg hover:bg-white hover:text-black hover:animate-bounce transition-all duration-200 ease-in-out"
        >
          View Schools
        </button>
      </div>
    </main>
  );
}
