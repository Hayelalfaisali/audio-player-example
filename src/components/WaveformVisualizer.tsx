import React, { useEffect, useRef } from 'react';

interface WaveformVisualizerProps {
  progress: number;
}

export default function WaveformVisualizer({ progress }: WaveformVisualizerProps) {
  const totalBars = 50;
  const bars = Array.from({ length: totalBars }, (_, i) => {
    const height = Math.random() * 0.5 + 0.5; // Random height between 0.5 and 1
    return height;
  });

  return (
    <div className="flex items-center h-8 gap-[2px]">
      {bars.map((height, index) => (
        <div
          key={index}
          className="w-1 rounded-full"
          style={{
            height: `${height * 100}%`,
            backgroundColor: (index / totalBars) * 100 <= progress * 100 
              ? '#3B82F6' // blue-500
              : '#E5E7EB', // gray-200
          }}
        />
      ))}
    </div>
  );
}