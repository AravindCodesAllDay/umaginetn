"use client";

import { useMemo, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import Modal from "@/components/modal";
import { eventSpeakers } from "@/speakers";
import { timing } from "@/agenda";

export default function SpeakerPage() {
  const { id } = useParams();
  const router = useRouter();

  const speakerIndex = useMemo(() => {
    return eventSpeakers.findIndex((speaker) => speaker.id === id);
  }, [id]);

  const speakerDetails = useMemo(() => {
    return eventSpeakers[speakerIndex] || null;
  }, [speakerIndex]);

  const filteredAgenda = useMemo(() => {
    if (!speakerDetails) return [];

    const agendaTitles = Object.values(timing).flatMap((day) =>
      Object.values(day).flatMap((sessions) =>
        sessions.filter((session) =>
          session.speakers.includes(speakerDetails.id)
        )
      )
    );

    return agendaTitles;
  }, [speakerDetails]);

  const goToSpeaker = useCallback(
    (index: number) => {
      const targetSpeaker = eventSpeakers[index];
      if (targetSpeaker) {
        router.push(`/speakers/${targetSpeaker.id}`, { scroll: false });
      }
    },
    [router]
  );

  const goToPrevious = useCallback(() => {
    const prevIndex =
      (speakerIndex - 1 + eventSpeakers.length) % eventSpeakers.length;
    goToSpeaker(prevIndex);
  }, [speakerIndex, goToSpeaker]);

  const goToNext = useCallback(() => {
    const nextIndex = (speakerIndex + 1) % eventSpeakers.length;
    goToSpeaker(nextIndex);
  }, [speakerIndex, goToSpeaker]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

  useEffect(() => {
    if (id && speakerIndex === -1) {
      router.push("/speakers");
    }
  }, [id, speakerIndex, router]);

  if (!id) {
    return <p>Loading...</p>;
  }

  if (!speakerDetails) {
    return null;
  }

  return (
    <Modal>
      <div className="flex flex-col gap-5 items-center justify-around p-5">
        <div className="flex flex-col gap-3 max-h-[calc(100vh-4rem)] md:p-6">
          <div className="flex flex-col md:flex-row text-center items-center justify-center gap-3 md:gap-12 md:text-left">
            <Image
              src={speakerDetails.photo}
              alt={speakerDetails.name}
              className="rounded-full size-60 object-cover"
            />
            <div>
              <h2 className="font-bold text-xl mb-2">{speakerDetails.name}</h2>
              <p className="text-primary text-sm md:text-base">
                {speakerDetails.role}
              </p>
              <p className="text-primary mb-4 text-sm md:text-base">
                {speakerDetails.company}
              </p>
            </div>
          </div>
          <p>{speakerDetails.bio}</p>
          {filteredAgenda.length > 0 && (
            <ul>
              {filteredAgenda.map((session) => (
                <li
                  key={session.id}
                  className="mb-4 cursor-pointer border-2 p-1 rounded"
                  onClick={() => router.push(`/agenda/${session.id}`)}
                >
                  <h4 className="font-semibold text-lg">{session.title}</h4>
                  <p>Timing: {session.timing.join(" - ")}</p>
                  <p>Duration: {session.duration} minutes</p>
                  <ul className="flex gap-1 text-xs">
                    {session.tag.map((tag, index) => (
                      <li
                        key={index}
                        className="bg-secondary rounded text-white p-0.5"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex w-full absolute justify-between p-1">
          <button
            onClick={goToPrevious}
            className="bg-slate-300 bg-opacity-60 hover:bg-opacity-90 transition-all duration-150 ease-in-out text-white p-1 py-6 rounded-md"
          >
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="bg-slate-300 bg-opacity-60 hover:bg-opacity-90 transition-all duration-150 ease-in-out text-white p-1 py-6 rounded-md"
          >
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </Modal>
  );
}
