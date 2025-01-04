"use client";

import { useMemo, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import Modal from "@/components/modal";
import { eventSpeakers } from "@/speakers";
import { timing } from "@/agenda";

interface AgendaItem {
  id: string;
  title: string;
  timing: string[];
  tag: string[];
  speakers: string[];
  hallName?: string;
  day?: string;
}

interface Speaker {
  id: string;
  name: string;
  photo: StaticImageData;
  bio: string;
}

export default function AgendaPage() {
  const { id } = useParams();
  const router = useRouter();

  const agendaDetails = useMemo<AgendaItem | null>(() => {
    let agendaItem: AgendaItem | null = null;
    let hallName = "";
    let day = "";

    Object.entries(timing).forEach(([dayKey, dayValue]) => {
      Object.entries(dayValue).forEach(([hallKey, hallValue]) => {
        hallValue.forEach((item) => {
          if (item.id === id) {
            agendaItem = item as AgendaItem;
            hallName = hallKey;
            day = dayKey;
          }
        });
      });
    });

    if (agendaItem !== null) {
      return { ...(agendaItem as AgendaItem), hallName, day };
    }
    return null;
  }, [id]);

  const speakerDetails = useMemo<Speaker[]>(() => {
    if (!agendaDetails) return [];
    return agendaDetails.speakers
      .map((speakerId) =>
        eventSpeakers.find((speaker) => speaker.id === speakerId)
      )
      .filter(Boolean) as Speaker[];
  }, [agendaDetails]);

  useEffect(() => {
    if (id && !agendaDetails) {
      router.push("/agenda", { scroll: false });
    }
  }, [id, agendaDetails, router]);

  if (!id) {
    return <p>Loading...</p>;
  }

  if (!agendaDetails) {
    return null;
  }

  return (
    <Modal>
      <div className="flex flex-col gap-5 items-center justify-around p-5">
        <div className="flex flex-col gap-3 w-full max-h-[calc(100vh-4rem)] md:p-6">
          <div className="text-center">
            <h2 className="font-bold text-2xl mb-2">{agendaDetails.title}</h2>

            <p className="text-sm text-primary md:text-base flex justify-between">
              <span className="font-semibold">{agendaDetails.hallName}</span>
              <span>
                {agendaDetails.day === "dayOne"
                  ? "9th Jan 2025"
                  : "10th Jan 2025"}
              </span>
            </p>
            <p className="text-lg font-semibold">
              {agendaDetails.timing.join(" - ")}
            </p>
            <p className="text-primary mb-4 text-sm md:text-base">
              {agendaDetails.tag.join(", ")}
            </p>
          </div>
          <div className="flex flex-wrap w-full justify-center gap-3">
            {speakerDetails.map((speaker) => (
              <Image
                onClick={() => router.push(`/speakers/${speaker.id}`)}
                key={speaker.id}
                src={speaker.photo}
                alt={speaker.name}
                className="rounded-full size-8 object-cover cursor-pointer hover:opacity-65"
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
