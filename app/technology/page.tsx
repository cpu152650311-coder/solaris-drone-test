import type { Metadata } from 'next';
import Image from 'next/image';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Technology — 3D SLAM, Onboard AI, Modular Sensors, Fleet Platform',
  description: 'Three autonomous systems: 3D SLAM GPS-denied navigation, NVIDIA Jetson onboard AI, interchangeable sensor payloads. Plus Fleet Management Platform with REST API.',
};

const SYSTEMS = [
  { n: '01', title: '3D SLAM Navigation', sub: 'GPS-Denied. Autonomous. Real-Time.', body: 'Proprietary SLAM fuses LiDAR point clouds, stereo visual-inertial odometry, and 9-DOF IMU through an Extended Kalman Filter. The drone builds a real-time sub-cm 3D map, plans collision-free paths, and flies fully autonomous missions inside GPS-denied environments — storage tanks, pipeline interiors, under-deck zones, ballast tanks.', specs: [['Sensor Fusion', 'LiDAR + Stereo VIO + Ultrasonic + 9-DOF IMU'], ['Map Resolution', 'Sub-cm 3D point cloud · 300K pts/sec'], ['Indoor Range', '500m autonomous per mission leg'], ['Update Rate', '30 Hz SLAM · 200 Hz IMU'], ['Drift', '<0.5% of distance (loop closure)'], ['Persistence', 'Saved for differential comparison']] },
  { n: '02', title: 'Onboard AI Inference', sub: 'Classify Before Landing.', body: 'Convolutional neural networks trained on 50,000+ annotated industrial inspection images run on NVIDIA Jetson Orin NX (100 TOPS, 16GB). Defect detection and classification — corrosion grade 1–5, cracks ≥0.1mm, coating failure area cm², thermal ΔT alerts, deformation — all happening during flight. Every finding linked to source imagery for human verification.', specs: [['Hardware', 'NVIDIA Jetson Orin NX · 100 TOPS · 16GB'], ['Categories', 'Corrosion / Cracks / Coating / Thermal / Deformation'], ['Resolution', 'Cracks down to 0.1mm surface width'], ['Dataset', '50,000+ annotated inspection images'], ['Model Update', 'Federated learning · OTA deployment'], ['Verification', 'Every AI finding → source imagery link']] },
  { n: '03', title: 'Modular Sensor Payloads', sub: 'Swap in the Field. No Tools.', body: 'Four interchangeable payloads mount to a common MIL-SPEC rail with blind-mate connectors. Drone auto-detects via CAN bus handshake, loads mission profile and calibration in under 60 seconds. Custom payloads — radiation, hyperspectral, EMAT — developed on request.', specs: [['Thermal', 'FLIR Boson+ 640×512 · ≤50mK NEDT · −20 to +2000°C'], ['LiDAR', '200m range · ±1cm · 300K pts/sec · IP65'], ['Ultrasonic', 'Wall-loss 1–100mm · ±0.01mm · no couplant'], ['Gas Detection', 'CH₄ / H₂S / CO / VOCs · real-time ppm'], ['Swap Time', '<60 sec · auto-detect · auto-calibrate'], ['Custom', 'Radiation · Hyperspectral · EMAT — on request']] },
];

const COMPARISON = [
  ['Capability', 'Solaris', 'Skydio X10', 'Elios 3', 'Voliro T'],
  ['ATEX Zone 1', 'YES', '—', 'Partial', '—'],
  ['3D SLAM (GPS-Denied)', 'YES', '—', 'YES', 'YES'],
  ['Onboard AI Classification', 'YES', 'Cloud', '—', '—'],
  ['Ultrasonic UT', 'YES', '—', 'Optional', 'YES'],
  ['Gas Detection', 'YES', '—', '—', '—'],
  ['Pay-Per-Inspection', 'YES', '—', '—', '—'],
  ['24hr Global Deploy', 'YES', '—', '—', '—'],
  ['Fleet Mgmt Platform', 'YES', 'YES', 'YES', '—'],
];

export default function TechnologyPage() {
  return (
    <>
      <section className="section-dark" style={{ padding: 'var(--space-24) 0 var(--space-16)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-200px', left: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-tag label-tag-dark">Technology Deep-Dive</span>
          <h1 style={{ color: 'white', marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>Three Systems.<br /><span style={{ color: 'var(--color-primary)' }}>One Autonomous Platform.</span></h1>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-dark-text-secondary)', fontSize: 'var(--text-lg)', maxWidth: '56ch' }}>Navigation, intelligence, and sensing — three technology layers that make Solaris the only inspection drone operating where humans and conventional drones cannot.</p>
        </div>
      </section>

      <section className="section-pad bg-grid">
        <div className="container-wide">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {SYSTEMS.map((s) => (
              <div key={s.n} className="card" style={{ padding: 'var(--space-8)', position: 'relative', borderLeft: '3px solid var(--color-primary)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: 'var(--space-3)', display: 'block' }}>SYSTEM {s.n}</span>
                <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: 'var(--space-2)' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>{s.sub}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)', maxWidth: '72ch' }}>{s.body}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-3)' }}>
                  {s.specs.map(([l, v]) => (
                    <div key={l} style={{ background: 'var(--color-background)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3) var(--space-4)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-1)' }}>{l}</div>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.4 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
        <div className="container-wide">
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span className="label-tag">Competitive Landscape</span>
            <h2 style={{ marginTop: 'var(--space-4)' }}>How Solaris Compares</h2>
          </div>
          <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <table className="compare-table">
              <thead>
                <tr>{COMPARISON[0].map((h, i) => <th key={h} className={i === 1 ? 'col-highlight' : ''} style={i === 1 ? { color: 'var(--color-primary)' } : {}}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {COMPARISON.slice(1).map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={i === 1 ? 'col-highlight' : ''} style={{ fontWeight: i === 0 ? 500 : (cell === 'YES' ? 700 : 400), color: cell === 'YES' ? 'var(--color-primary)' : (cell === '—' ? 'var(--color-text-muted)' : 'var(--color-text-secondary)'), fontFamily: cell === 'YES' ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: cell === 'YES' ? '12px' : 'var(--text-sm)', letterSpacing: cell === 'YES' ? '0.04em' : '0' }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}><PageCTA label="See the Platform Live" /></div>
        </div>
      </section>

      {/* Fleet platform image */}
      <section className="section-pad section-dark" style={{ textAlign: 'center' }}>
        <div className="container-wide">
          <span className="label-tag label-tag-dark">Fleet Management Platform</span>
          <h2 style={{ color: 'white', marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>Every Mission.<br /><span style={{ color: 'var(--color-primary)' }}>Every Metric.</span></h2>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.4)', marginBottom: 'var(--space-10)', border: '1px solid var(--color-dark-border)' }}>
            <Image src="/generated/detail_ai_dashboard.webp" alt="Fleet management platform with live telemetry and AI defect annotations" width={1280} height={560} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)', textAlign: 'left' }}>
            {['Mission Planning & Scheduling', 'Live Multi-Drone Telemetry', 'Automated ISO 19232 Reports', 'REST API & Webhooks', 'Role-Based Access Control', 'Cryptographic Audit Trail'].map((f) => (
              <div key={f} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-dark-text)', fontWeight: 500, padding: 'var(--space-3) var(--space-4)', background: 'var(--color-dark-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-dark-border)' }}>{f}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
