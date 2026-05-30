import PortfolioShell from '@/components/portfolio/shell'
import { pc } from '@/components/portfolio/classes'

const screenshots = [
  { src: '/assets/images/appointment_screenshot.png', alt: 'Appointment screen', caption: 'Appointments', w: 1080, h: 1920 },
  { src: '/assets/images/category_screenshot.png', alt: 'Category screen', caption: 'Categories', w: 1080, h: 1920 },
  { src: '/assets/images/healthbio_screenshot.png', alt: 'Health bio screen', caption: 'Health bio', w: 768, h: 1280 },
  { src: '/assets/images/ice_screenshot.png', alt: 'ICE emergency screen', caption: 'ICE emergency', w: 1080, h: 1920 },
  { src: '/assets/images/measurement_screenshot.png', alt: 'Measurement screen', caption: 'Measurements', w: 1080, h: 1920 },
  { src: '/assets/images/medicine_screenshot.png', alt: 'Medicine screen', caption: 'Medicines', w: 768, h: 1280 },
] as const

export default function MedtrackerPage() {
  return (
    <PortfolioShell
      slug="medtracker"
      category="Android"
      description="Android app for medication tracking and reminders"
      image="https://images.unsplash.com/photo-1573883429746-084be9b5cfca?q=80&w=2070&auto=format&fit=crop"
      date="2017"
      technologies={['Android', 'Java', 'SQLite', 'Material Design']}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            The MedTracker Application helps you track and record your health statistics and manage medications.
            It includes modules such as measurement, medicines, appointment, consumptions etc. A notification
            reminder is triggered to consume medicines, replace replenished medicines and for appointments with
            doctors. In case of emergency it helps to make SOS calls.
          </p>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Learnings</h2>
        <div className={pc.body}>
          <ol>
            <li>Core Android Development</li>
            <li>Job services to run background services</li>
            <li>Job Scheduler to create specific jobs with constraints</li>
          </ol>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Screenshots</h2>
        <div className={pc.body}>
          <div className={pc.gallery}>
            {screenshots.map(({ src, alt, caption, w, h }) => (
              <figure key={src} className={pc.figureBox}>
                <div className={pc.figureMedia}>
                  <img src={src} alt={alt} width={w} height={h} loading="lazy" decoding="async" className={pc.imgScreenshot} />
                </div>
                <figcaption className={pc.caption}>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </PortfolioShell>
  )
}
