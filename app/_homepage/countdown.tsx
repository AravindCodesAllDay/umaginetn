"use client";
import { useEffect, useState } from "react";

const targetDate = new Date("2025-01-09T00:00:00");
targetDate.setHours(9, 30, 0);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex gap-8 scale-75 lg:scale-100">
      <p className="flex flex-col items-center justify-center rounded-full">
        <span className="text-3xl font-bold">{timeLeft.days}</span>
        <span className="text-xs font-semibold">DAYS</span>
      </p>
      <p className="flex flex-col items-center justify-center rounded-full">
        <span className="text-3xl font-bold">{timeLeft.hours}</span>
        <span className="text-xs font-semibold">HOURS</span>
      </p>
      <p className="flex flex-col items-center justify-center rounded-full">
        <span className="text-3xl font-bold">{timeLeft.minutes}</span>
        <span className="text-xs font-semibold">MINUTES</span>
      </p>
      <p className="flex flex-col items-center justify-center rounded-full">
        <span className="text-3xl font-bold">{timeLeft.seconds}</span>
        <span className="text-xs font-semibold">SECONDS</span>
      </p>
    </div>
  );
}
