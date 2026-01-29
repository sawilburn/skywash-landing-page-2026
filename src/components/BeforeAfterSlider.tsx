import { useState, useRef, useEffect } from 'react';
import { SupabaseImage } from './SupabaseImage';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before cleaning',
  afterAlt = 'After cleaning'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none bg-slate-200"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      <div className="absolute inset-0 w-full h-full">
        <SupabaseImage
          path={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
          fallback="After Cleaning"
        />
      </div>

      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <SupabaseImage
          path={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
          fallback="Before Cleaning"
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
          <div className="flex space-x-1">
            <div className="w-0.5 h-4 bg-slate-400"></div>
            <div className="w-0.5 h-4 bg-slate-400"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
        After
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-slate-700 shadow-lg">
        Drag to compare
      </div>
    </div>
  );
}
