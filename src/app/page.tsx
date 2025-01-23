"use client";

import { useState } from "react";
import { videos } from "../../public/videos/index.js";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8 flex flex-col">
      <main className="container mx-auto flex-grow">
        <h1 className="text-4xl font-bold mb-12 text-center text-white tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Demos
          </span>
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard 
              key={video.id}
              title={video.title}
              videoSrc={video.src}
              posterSrc={video.poster}
            />
          ))}
        </div>
      </main>
      <footer className="text-center text-white py-4 mt-auto">
        All Rights Reserved | Meeami Technologies
      </footer>
    </div>
  );
}

interface VideoCardProps {
  title: string;
  videoSrc: string;
  posterSrc: string;
}

function VideoCard({ title, videoSrc, posterSrc }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gray-800"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative">
          <video 
            className="w-full h-56 object-cover"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="w-full max-w-4xl p-4 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-4 text-white/80 hover:text-white"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video 
              className="w-full rounded-xl shadow-2xl"
              controls
              autoPlay
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

