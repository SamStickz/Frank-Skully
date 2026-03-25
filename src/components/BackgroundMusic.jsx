import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio
      .play()
      .then(() => {
        const fadeIn = setInterval(() => {
          if (audio.volume < 1) {
            audio.volume = Math.min(1, audio.volume + 0.05);
          } else {
            clearInterval(fadeIn);
          }
        }, 200);
      })
      .catch(() => {
        // Browser blocked autoplay — silently fail
      });
  }, []);

  return <audio ref={audioRef} src="/audio/background.mp3" preload="auto" />;
}
