import React, { useState, useRef, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImg,
  afterImg,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      id="before-after-container"
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-slate-100"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Before Image (Background) */}
      <img
        src={beforeImg}
        alt="Before dental condition"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">
        {beforeLabel}
      </div>

      {/* After Image (Foreground Clip) */}
      <div
        id="after-overlay"
        className="absolute inset-0 w-full h-full object-cover overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={afterImg}
          alt="After Smilyx treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute bottom-4 right-4 bg-brand-600/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 pointer-events-none">
        {afterLabel}
      </div>

      {/* Slider Line Divider */}
      <div
        id="slider-line"
        className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center text-brand-600 cursor-ew-resize before-after-handle hover:scale-110 active:scale-95 transition-transform duration-150 shadow-lg">
          <ChevronsLeftRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
