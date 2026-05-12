import type { Metadata } from 'next';
import Image from 'next/image';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Technology — 3D SLAM, Onboard AI, Modular Sensors, Fleet Platform',
  description: 'Three autonomous systems powering Solaris drones: 3D SLAM GPS-denied navigation, NVIDIA Jetson onboard AI inference, and interchangeable modular sensor payloads. Plus Fleet Management Platform.',
};

const SYSTEMS = [
  {
    title: '3D SLAM Navigation Engine', sub: 'GPS-denied. Autonomous. Real-time.',
    body: 'Proprietary Simultaneous Localization and Mapping fuses LiDAR point clouds, visual-inertial odometry (VIO), and ultrasonic range data through an Extended Kalman Filter. The drone builds a real-time 3D map with sub-cm resolution, plans collision-free paths, and executes fully autonomous missions inside GPS-denied environments — storage tanks, pipeline interiors, under-deck zones, ballast tanks, and confined spaces.',
    specs: [
      { l: 'Sensor Fusion', v: 'LiDAR + Stereo VIO + Ultrasonic + 9-DOF IMU' },
      { l: 'Map Resolution', v: 'Sub-cm 3D point cloud, 300K points/sec' },
      { l: 'Max Indoor Range', v: '500m autonomous per mission leg' },
      { l: 'Map Persistence', v: 'Saved for differential comparison over time' },
      { l: 'Update Rate', v: '30 Hz SLAM, 200 Hz IMU' },
      { l: 'Drift', v: '<0.5% of distance traveled (loop closure)' },
    ],
  },
  {
    title: 'Onboard AI Defect Detection', sub: 'Classify before landing.',
    body: 'Convolutional neural networks trained on 50,000+ annotated industrial inspection images run on a dedicated NVIDIA Jetson Orin NX edge processor (100 TOPS). Defect detection and classification — corrosion grade 1–5, cracks down to 0.1mm, coating failure area in cm², thermal anomaly ΔT alerts, structural deformation — all happen during flight. Zero cloud upload delay. Zero analyst backlog.',
    specs: [
      { l: 'Inference Hardware', v: 'NVIDIA Jetson Orin NX (100 TOPS, 16GB)' },
      { l: 'Defect Categories', v: 'Corrosion, cracks, coating, thermal, deformation' },
      { l: 'Detection Resolution', v: 'Cracks down to 0.1mm surface width' },
      { l: 'Training Dataset', v: '50,000+ annotated inspection images' },
      { l: 'Model Update', v: 'Federated learning across fleet, OTA deployment' },
      { l: 'Human Verification', v: 'Every AI finding links to source imagery' },
    ],
  },
  {
    title: 'Modular Sensor Architecture', sub: 'Swap in the field. No tools.',
    body: 'Four interchangeable payload modules mount to a common MIL-SPEC interface rail with blind-mate electrical and data connectors. The drone auto-detects the installed payload via CAN bus handshake, loads the corresponding mission profile and calibration table, and is ready for flight in under 60 seconds. Custom payloads developed on request.',
    specs: [
      { l: 'Thermal', v: '640×512 FLIR Boson+, -20°C to +2000°C, ≤50mK NEDT' },
      { l: 'LiDAR', v: '200m range, ±1cm accuracy, 300K pts/sec, IP65' },
      { l: 'Ultrasonic', v: 'Wall-loss 1–100mm range, ±0.01mm, no couplant' },
      { l: 'Gas Detection', v: 'CH4, H2S, CO, VOCs, real-time ppm readout' },
      { l: 'Swap Time', v: '<60 seconds, auto-detect and auto-calibrate' },
      { l: 'Custom Payloads', v: 'Radiation, hyperspectral, EMAT — available on request' },
    ],
  },
];

const COMPARISON = [
  { feature: 'ATEX Zone 1 Certified', solaris: true, skydio: false, flyability: 'Partial', voliro: false },
  { feature: 'GPS-Denied 3D SLAM', solaris: true, skydio: false, flyability: true, voliro: true },
  { feature: 'Onboard AI Classification', solaris: true, skydio: 'Cloud', flyability: false, voliro: false },
  { feature: 'Ultrasonic Thickness (UT)', solaris: true, skydio: false, flyability: 'Optional', voliro: true },
  { feature: 'Gas Detection Payload', solaris: true, skydio: false, flyability: false, voliro: false },
  { feature: 'Pay-Per-Inspection Model', solaris: true, skydio: false, flyability: false, voliro: false },
  { feature: '24hr Global Deployment', solaris: true, skydio: false, flyability: false, voliro: false },
  { feature: 'Fleet Management Platform', solaris: true, skydio: true, flyability: true, voliro: false },
];

const boolIcon = (v: boolean | string) => {
  if (v === true) return <span style={{ color: '#0d9488', fontWeight: 700 }}>✓</span>;
  if (v === false) return <span style={{ color: '#cbd5e1' }}>—</span>;
  return <span style={{ color: '#64748b', fontSize: '0.8rem' }}>{v}</span>;
};

export default function TechnologyPage() {
  return (
    <>
      <section style={{ background: '#0f172a', padding: 'clamp(3.5rem, 7vw, 5rem) 0 clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div className="container-wide">
          <span className="label-tag" style={{ color: '#5eead4', background: 'rgba(13,148,136,0.15)' }}>Technology Deep-Dive</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Three Systems.<br /><span style={{ color: '#0d9488' }}>One Autonomous Platform.</span>
          </h1>
          <p style={{ fontFamily: 'Geist, sans-serif', color: '#94a3b8', fontSize: '1.05rem', maxWidth: '56ch' }}>
            Navigation, intelligence, and sensing — three technology layers that make Solaris the only inspection drone capable of operating where humans and conventional drones cannot.
          </p>
        </div>
      </section>

      {/* Systems */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: '#f8fafc' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3rem)' }}>
            {SYSTEMS.map((s, i) => (
              <div key={s.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px', padding: 'clamp(1.5rem, 3vw, 2.5rem)', position: 'relative' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: i === 1 ? '#0d9488' : '#2563eb', borderRadius: '3px 0 0 3px', opacity: 0.5 }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(1.5rem, 3vw, 3rem)', alignItems: 'start' }}>
                  <div style={{ paddingLeft: '0.5rem' }}>
                    <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0d9488', marginBottom: '0.5rem', display: 'block' }}>System {String(i + 1).padStart(2, '0')}</span>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', fontWeight: 700, color: '#1e293b', marginBottom: '0.3rem', letterSpacing: '-0.02em' }}>{s.title}</h2>
                    <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.88rem', color: '#0d9488', fontWeight: 600, marginBottom: '1rem' }}>{s.sub}</p>
                    <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.88rem', color: '#64748b', lineHeight: 1.75 }}>{s.body}</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {s.specs.map(({ l, v }) => (
                      <div key={l} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.75rem 1rem' }}>
                        <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '0.3rem' }}>{l}</div>
                        <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '0.82rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.4 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', background: 'white' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <span className="label-tag">Competitive Landscape</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>How Solaris Compares</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Geist, sans-serif', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#64748b', fontWeight: 600, fontSize: '0.75rem' }}>Capability</th>
                  <th style={{ textAlign: 'center', padding: '0.75rem 1rem', background: '#f0fdfa', fontWeight: 700, color: '#0d9488' }}>Solaris</th>
                  <th style={{ textAlign: 'center', padding: '0.75rem 1rem', color: '#64748b', fontWeight: 600, fontSize: '0.8rem' }}>Skydio X10</th>
                  <th style={{ textAlign: 'center', padding: '0.75rem 1rem', color: '#64748b', fontWeight: 600, fontSize: '0.8rem' }}>Flyability Elios 3</th>
                  <th style={{ textAlign: 'center', padding: '0.75rem 1rem', color: '#64748b', fontWeight: 600, fontSize: '0.8rem' }}>Voliro T</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: '1px solid #f1f5f9', background: i % 2 === 0 ? 'transparent' : '#f8fafc' }}>
                    <td style={{ padding: '0.75rem 1rem', color: '#1e293b', fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', background: '#f0fdfa' }}>{boolIcon(row.solaris)}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{boolIcon(row.skydio)}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{boolIcon(row.flyability)}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{boolIcon(row.voliro)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <PageCTA label="See the Platform Live" />
          </div>
        </div>
      </section>
    </>
  );
}
