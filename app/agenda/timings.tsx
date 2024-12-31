"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateUp from "@/components/animate-up";
import { timing } from "@/agenda";

type HallKey = "hallA" | "hallB" | "hallC" | "hallD";

export default function Timings() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedHall, setSelectedHall] = useState<HallKey>("hallA");

  const schedule =
    selectedDay === 1
      ? timing.dayOne[selectedHall]
      : timing.dayTwo[selectedHall];

  return (
    <div className="max-w-5xl mx-auto p-1 md:p-6">
      {/* Event Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold my-2">
          Information of Event Schedules
        </h2>
        <p className="text-gray-600">
          Immerse yourself in an unparalleled gathering of distinguished
          policymakers, thought leaders, CXOs, start-up mavericks, tech
          virtuosos, skill developers, academia, and representatives from
          diverse technology sectors.
        </p>
      </div>

      {/* Day Selection */}
      <div className="flex justify-center items-center mb-8 font-bold scale-75 md:scale-100">
        <AnimateUp direction="left">
          <div
            onClick={() => setSelectedDay(1)}
            className={`size-44 rounded-full flex justify-center items-center cursor-pointer transition-all duration-150 ease-in-out ${
              selectedDay === 1
                ? "bg-primary text-white"
                : "bg-gray-200 border-4 hover:border-primary"
            }`}
          >
            9th Jan 2025
          </div>
        </AnimateUp>
        <AnimateUp direction="right">
          <div
            onClick={() => setSelectedDay(2)}
            className={`size-44 rounded-full flex justify-center items-center cursor-pointer -translate-x-4 -translate-y-4 transition-all duration-150 ease-in-out ${
              selectedDay === 2
                ? "bg-secondary text-white"
                : "bg-gray-200 border-4 hover:border-secondary"
            }`}
          >
            10th Jan 2025
          </div>
        </AnimateUp>
      </div>

      {/* Hall Selection */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSelectedHall("hallA")}
          className={`px-4 py-2 rounded-md font-bold ${
            selectedHall === "hallA"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Hall A
        </button>
        <button
          onClick={() => setSelectedHall("hallB")}
          className={`px-4 py-2 rounded-md font-bold ${
            selectedHall === "hallB"
              ? "bg-secondary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Hall B
        </button>
        <button
          onClick={() => setSelectedHall("hallC")}
          className={`px-4 py-2 rounded-md font-bold ${
            selectedHall === "hallC"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Hall C
        </button>
        <button
          onClick={() => setSelectedHall("hallD")}
          className={`px-4 py-2 rounded-md font-bold ${
            selectedHall === "hallD"
              ? "bg-secondary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Hall D
        </button>
      </div>

      {/* Schedule Table */}
      <div>
        <table className="table-auto w-full text-left border-collapse">
          <tbody>
            {schedule.map((session, index) => (
              <tr key={index}>
                <td
                  className={`px-4 py-4 text-white ${
                    index % 2 === 0 ? "bg-primary" : "bg-secondary"
                  } transition-all duration-150 ease-in-out`}
                >
                  {session.timing}
                </td>
                <td
                  className={`px-4 py-4 flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-all duration-150 ease-in-out`}
                >
                  <div>
                    <p className="font-bold text-lg">{session.title}</p>
                    <p className="text-sm text-gray-500">
                      {session.tag.join(", ")}
                    </p>
                    <p className="text-gray-600">{session.duration} mins</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sticky Bottom Buttons for Day Selection */}
      <div className="flex justify-center gap-4 my-5">
        <button
          onClick={() => setSelectedDay(1)}
          className={`px-4 py-2 rounded-md font-bold ${
            selectedDay === 1
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setSelectedDay(2)}
          className={`px-4 py-2 rounded-md font-bold ${
            selectedDay === 2
              ? "bg-secondary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Day 2
        </button>
      </div>
    </div>
  );
}
