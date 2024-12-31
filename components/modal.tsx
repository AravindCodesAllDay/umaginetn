"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const onDismiss = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      router.push("/speakers", { scroll: false });
    }, 100);
  }, [router]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    setShowModal(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-50 inset-0 bg-black/60 p-2 flex items-center justify-center"
    >
      <div
        ref={wrapper}
        className={`bg-white rounded w-11/12 lg:w-4/5 xl:w-3/5 max-h-[calc(100vh-4rem)] transition-transform duration-300 ${
          showModal ? "scale-100 opacity-100" : "scale-85 opacity-0"
        }`}
      >
        <button
          className="absolute top-3 right-3 hover:rotate-12 transition-all duration-150 ease-in-out"
          onClick={onDismiss}
          aria-label="Close Modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
