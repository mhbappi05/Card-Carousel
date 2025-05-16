import React, { useState } from 'react';

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    label: 'Nature Landscape',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80',
    label: 'Forest Path',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
    label: 'Mountain Snow',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80',
    label: 'Sunset View',
  },
];

export default function CardCarousel() {
  const [activeId, setActiveId] = useState(1); // default active is first card

  return (
    <>
      <style>{`
        .container {
          display: flex;
          align-items: flex-end;
          gap: 15px;
          padding: 20px;
          background: #121212;
          border-radius: 16px;
          max-width: 900px;
          margin: 50px auto;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
        }

        .card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #333;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: white;
        }

        /* Small cards */
        .card:not(.active) {
          width: 80px;
          height: 140px;
          box-shadow: 0 0 10px rgba(255,255,255,0.1);
        }

        /* Active card expanded */
        .card.active {
          width: 320px;
          height: 180px;
          box-shadow: 0 0 20px #ff6680;
          font-weight: bold;
          font-size: 18px;
          text-shadow: 0 0 5px rgba(0,0,0,0.7);
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
          user-select: none;
        }

        .label {
          position: absolute;
          bottom: 12px;
          left: 15px;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card.active .label {
          opacity: 1;
          position: relative;
          padding: 10px 15px;
          background: rgba(0,0,0,0.4);
          border-radius: 12px;
          margin-bottom: 10px;
        }

        .circle {
          position: absolute;
          bottom: 10px;
          left: 10px;
          width: 28px;
          height: 28px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          user-select: none;
          transition: opacity 0.3s ease;
        }

        .card.active .circle {
          opacity: 0;
        }

        .circle svg {
          width: 16px;
          height: 16px;
          fill: #121212;
        }
      `}</style>

      <div className="container" role="list" aria-label="Card carousel with expandable cards">
        {images.map(({ id, src, label }) => (
          <div
            key={id}
            className={`card ${id === activeId ? 'active' : ''}`}
            role="listitem"
            tabIndex={0}
            onClick={() => setActiveId(id)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveId(id);
              }
            }}
            aria-label={`${label} card ${id === activeId ? '(expanded)' : '(collapsed)'}`}
            title={`Show ${label} expanded`}
          >
            <img src={src} alt={label} />
            <div className="label">{label}</div>
            <div className="circle" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
