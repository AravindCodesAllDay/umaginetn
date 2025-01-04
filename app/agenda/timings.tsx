"use client";
import { useState } from "react";
import AnimateUp from "@/components/animate-up";
import { useRouter } from "next/navigation";

import { timing } from "@/agenda";
import { eventSpeakers } from "@/speakers";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex justify-center items-center border-b-4 border-secondary text-white">
      {halls.map(({ id, label, rounded }) => (
        <button
          key={id}
          onClick={() => onSelectHall(id as HallKey)}
          className={`px-4 md:px-6 py-2 font-bold ${rounded || ""} ${
            selectedHall === id ? "bg-secondary" : "bg-primary hover:opacity-75"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default function Timings() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedHall, setSelectedHall] = useState<HallKey>("hallD");

  const dayKey = `day${selectedDay === 1 ? "One" : "Two"}` as DayKey;

  const schedule = timing[dayKey]?.[selectedHall] || [];

  const getSpeakers = (speakerIds: string[]) => {
    return eventSpeakers.filter((speaker) => speakerIds.includes(speaker.id));
  };

  return (
    <div className="max-w-5xl mx-auto p-1 md:p-6" id="days">
      <DaySelection selectedDay={selectedDay} onSelectDay={setSelectedDay} />

      <HallSelection
        selectedHall={selectedHall}
        onSelectHall={setSelectedHall}
      />

      {/* Schedule Table */}
      <table className="min-w-full shadow-md">
        <tbody>
          {schedule.map((session, index) => {
            const speakers = getSpeakers(session.speakers);

            return (
              <tr
                key={index}
                className={`p-1 md:p-4 ${
                  index % 2 === 0
                    ? "bg-secondary hover:bg-opacity-75 text-white"
                    : "bg-white hover:bg-gray-50"
                } transition-all duration-150 ease-in-out`}
              >
                <td className={`p-1 md:p-4 text-sm`}>
                  {session.timing.join(" - ")}
                </td>
                <td className={`p-1 md:p-4 flex flex-col md:flex-row gap-4`}>
                  <div className="text-sm md:text-base">
                    <p className="font-bold">{session.title}</p>
                    <p>{session.tag.join(", ")}</p>
                    <p>{session.duration} mins</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {speakers.map((speaker) => (
                        <Image
                          key={speaker.id}
                          onClick={() => router.push(`/speakers/${speaker.id}`)}
                          src={speaker.photo}
                          alt={speaker.name}
                          className="w-8 h-8 rounded-full object-cover cursor-pointer hover:scale-105 hover:opacity-75 transition-all duration-150 ease-in-out"
                        />
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center gap-4 my-5">
        <Link
          href={"agenda/#days"}
          onClick={() => setSelectedDay(1)}
          className={`px-4 py-2 rounded font-bold ${
            selectedDay === 1
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Day 1
        </Link>
        <Link
          href={"agenda/#days"}
          onClick={() => setSelectedDay(2)}
          className={`px-4 py-2 rounded font-bold ${
            selectedDay === 2
              ? "bg-secondary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Day 2
        </Link>
      </div>
    </div>
  );
}
