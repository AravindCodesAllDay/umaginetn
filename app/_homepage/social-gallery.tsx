"use client";

export default function SocialGallery() {
  return (
    <div className="flex flex-col gap-5 my-6 w-full sm:w-5/6 mx-auto overflow-hidden p-1">
      <h2 className="text-2xl sm:text-3xl font-bold">
        Social <span className="text-primary">Gallery</span>
      </h2>
      <iframe
        src="https://cdn.lightwidget.com/widgets/1198042b6b2b5a12a37b224bce7ce384.html"
        scrolling="no"
        className="lightwidget-widget w-full border-0 overflow-hidden"
        title="Social Media Gallery"
      ></iframe>
    </div>
  );
}
