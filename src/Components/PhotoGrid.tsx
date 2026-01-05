import { useMemo } from "react";
import MagicBento from "./MagicBento";

export default function PhotoGrid() {
  const photos = [
    {
      content: (
        <img src="/img18.jpg" alt="1" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img2.jpg" alt="2" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img3.jpg" alt="3" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img4.jpg" alt="4" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img21.jpg" alt="5" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vid1.mp4" type="video/mp4" />
        </video>
      ),
    },
    {
      content: (
        <img src="/img6.jpg" alt="6" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img7.jpg" alt="7" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img8.jpg" alt="8" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img9.jpg" alt="9" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img23.jpg" alt="10" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img10.jpg" alt="11" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vid2.mp4" type="video/mp4" />
        </video>
      ),
    },
    {
      content: (
        <img src="/img24.jpg" alt="12" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img12.jpg" alt="13" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img11.jpg" alt="15" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img1.jpg" alt="21" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img22.jpg" alt="16" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img19.jpg" alt="22" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img17.jpg" alt="19" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vid4.mp4" type="video/mp4" />
        </video>
      ),
    },
    {
      content: (
        <img src="/img14.jpg" alt="17" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img5.jpg" alt="14" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img15.jpg" alt="20" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <img src="/img16.jpg" alt="18" className="w-full h-full object-cover" />
      ),
    },
    {
      content: (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vid3.mp4" type="video/mp4" />
        </video>
      ),
    },
    {
      content: (
        <img src="/img20.jpg" alt="23" className="w-full h-full object-cover" />
      ),
    },
  ];

  const assignSizes = (items: any[]) => {
    // Simple repeating pattern that works well with 2-row grid
    // Pattern ensures items fill both rows nicely
    const patterns = [
      { colSpan: 1, rowSpan: 1 }, // Regular
      { colSpan: 1, rowSpan: 2 }, // Tall (fills both rows)
      { colSpan: 1, rowSpan: 1 }, // Regular
      { colSpan: 1, rowSpan: 1 }, // Regular
      { colSpan: 2, rowSpan: 1 }, // Wide
      { colSpan: 1, rowSpan: 1 }, // Regular
    ];

    return items.map((item, index) => ({
      ...item,
      ...patterns[index % patterns.length],
    }));
  };

  const sizedItems = useMemo(() => assignSizes(photos), []);

  // Double the array for seamless loop
  const loopingItems = useMemo(
    () => [...sizedItems, ...sizedItems],
    [sizedItems]
  );

  return (
    <div className="w-full overflow-hidden">
      <div className="bento-scroll-wrapper">
        <MagicBento
          items={loopingItems}
          gridClassName="card-grid-scroll"
          enableStars={false}
          enableSpotlight={true}
          spotlightRadius={300}
          enableBorderGlow={true}
          enableTilt={false}
          clickEffect={true}
          enableMagnetism={true}
          glowColor="204, 89, 77"
        />
      </div>
    </div>
  );
}
