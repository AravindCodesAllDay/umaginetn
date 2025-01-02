"use client";

import { useState } from "react";
import AnimateUp from "@/components/animate-up";
import { timing } from "@/agenda";

type DayKey = "dayOne" | "dayTwo";
type HallKey = "hallA" | "hallB" | "hallC" | "hallD";

function DaySelection({
  selectedDay,
  onSelectDay,
}: {
  selectedDay: number;
  onSelectDay: (day: number) => void;
}) {
  const days = [
    { day: 1, label: "9th Jan 2025", css: "translate-x-3" },
    { day: 2, label: "10th Jan 2025", css: "translate-y-3" },
  ];

  return (
    <div className="flex justify-center items-center mb-8 font-bold text-lg scale-75 md:scale-100">
      {days.map(({ day, label, css }) => (
        <AnimateUp direction={day === 1 ? "left" : "right"} key={day}>
          <button
            onClick={() => onSelectDay(day)}
            aria-selected={selectedDay === day}
            className={`size-44 rounded-full flex justify-center items-center cursor-pointer transition-all duration-150 ease-in-out ${css} ${
              selectedDay === day
                ? day === 1
                  ? "bg-primary text-white"
                  : "bg-secondary text-white"
                : "bg-gray-200 border-4 hover:border-primary"
            }`}
          >
            {label}
          </button>
        </AnimateUp>
      ))}
    </div>
  );
}

function HallSelection({
  selectedHall,
  onSelectHall,
}: {
  selectedHall: HallKey;
  onSelectHall: (hall: HallKey) => void;
}) {
  const halls = [
    { id: "hallD", label: "Hall D", rounded: "rounded-tl" },
    { id: "hallA", label: "Hall A" },
    { id: "hallB", label: "Hall B" },
    { id: "hallC", label: "Hall C", rounded: "rounded-tr" },
  ];

  return (
    <div className="flex justify-center items-center border-b-4 border-primary text-white">
      {halls.map(({ id, label, rounded }) => (
        <button
          key={id}
          onClick={() => onSelectHall(id as HallKey)}
          className={`px-4 md:px-6 py-2 font-bold ${rounded || ""} ${
            selectedHall === id ? "bg-primary" : "bg-secondary hover:opacity-75"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default function Timings() {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedHall, setSelectedHall] = useState<HallKey>("hallD");

  const dayKey = `day${selectedDay === 1 ? "One" : "Two"}` as DayKey;

  const schedule = timing[dayKey]?.[selectedHall] || [];

  return (
    <div className="max-w-5xl mx-auto p-1 md:p-6">
      {/* Day Selection */}
      <DaySelection selectedDay={selectedDay} onSelectDay={setSelectedDay} />

      {/* Hall Selection */}
      <HallSelection
        selectedHall={selectedHall}
        onSelectHall={setSelectedHall}
      />

      {/* Schedule Table */}
      <table className="min-w-full">
        <tbody>
          {schedule.map((session, index) => (
            <tr key={index}>
              <td
                className={`p-2 md:p-4 text-white ${
                  index % 2 === 0 ? "bg-primary" : "bg-secondary"
                } transition-all duration-150 ease-in-out`}
              >
                {session.timing.join(" - ")}
              </td>
              <td
                className={`p-2 md:p-4 flex flex-col md:flex-row items-center gap-4 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition-all duration-150 ease-in-out`}
              >
                <div>
                  <p className="font-bold text-lg">{session.title}</p>
                  <p className="text-sm text-gray-500">
                    {session.tag.join(", ")}
                  </p>
                  <p className="text-gray-600">{session.duration} mins</p>
                  {/* <ul className="text-sm text-gray-700">
                    {session.speakers.map((speaker, speakerIndex) => (
                      <li key={speakerIndex}>
                        {speaker.name} - {speaker.designation}
                      </li>
                    ))}
                  </ul> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center gap-4 my-5">
        <button
          onClick={() => setSelectedDay(1)}
          className={`px-4 py-2 rounded font-bold ${
            selectedDay === 1
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setSelectedDay(2)}
          className={`px-4 py-2 rounded font-bold ${
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
