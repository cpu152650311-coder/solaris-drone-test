'use client';

import { memo, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

interface Hub {
  city: string;
  region: string;
  flag: string;
  coords: [number, number];
}

const MapChart = memo(({ hubs, onHover }: { hubs: Hub[]; onHover: (city: string | null) => void }) => (
  <ComposableMap projection="geoMercator" projectionConfig={{ scale: 160, center: [20, 20] }} style={{ width: '100%', height: 'auto' }}>
    <ZoomableGroup>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: '#e2e8f0', outline: 'none', stroke: '#cbd5e1', strokeWidth: 0.5 },
                hover: { fill: '#cbd5e1', outline: 'none' },
                pressed: { fill: '#94a3b8', outline: 'none' },
              }}
            />
          ))
        }
      </Geographies>
      {hubs.map(({ city, region, coords }) => (
        <Marker key={city} coordinates={coords}>
          <circle
            r={5}
            fill="#0d9488"
            stroke="#fff"
            strokeWidth={2}
            onMouseEnter={() => onHover(city)}
            onMouseLeave={() => onHover(null)}
            style={{ cursor: 'pointer' }}
          />
        </Marker>
      ))}
    </ZoomableGroup>
  </ComposableMap>
));
MapChart.displayName = 'MapChart';

export default function GlobalMapClient({ hubs }: { hubs: Hub[] }) {
  const [tooltip, setTooltip] = useState<string | null>(null);
  const activeHub = tooltip ? hubs.find((h) => h.city === tooltip) : null;

  return (
    <div style={{ position: 'relative', background: 'white', borderRadius: '14px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
      <MapChart hubs={hubs} onHover={setTooltip} />
      {activeHub && (
        <div style={{
          position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(8px)', color: 'white',
          borderRadius: '10px', padding: '0.75rem 1.25rem', textAlign: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)', pointerEvents: 'none', zIndex: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.2rem' }}>{activeHub.flag}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem' }}>{activeHub.city}</span>
          </div>
          <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.15rem' }}>{activeHub.region}</div>
        </div>
      )}
    </div>
  );
}
