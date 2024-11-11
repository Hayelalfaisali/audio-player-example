import React from 'react';
import AudioPlayer from './components/AudioPlayer';

function App() {
  // Example audio URL - replace with your actual audio file URL
  const audioUrl = "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
      
        <AudioPlayer audioUrl={audioUrl} />
      </div>
    </div>
  );
}

export default App;