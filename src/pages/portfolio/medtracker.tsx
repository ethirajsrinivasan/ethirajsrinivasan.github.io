import PortfolioShell from '@/components/portfolio/shell'
import { pc, externalLink } from '@/components/portfolio/classes'

export default function MedtrackerPage() {
  return (
    <PortfolioShell
      slug="medtracker"
      title="Medtracker"
      category="Android"
      description="Android app for medication tracking and reminders"
      image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=85&auto=format&fit=crop"
      date="2021"
      technologies={['Android', 'Java', 'SQLite', 'Material Design']}
      links={[
        { href: 'https://play.google.com/store/apps/details?id=com.ethigeek.medtracker', label: 'MedTracker on Google Play' },
        { href: 'https://github.com/ethirajnus/Medtracker', label: 'Source code on GitHub' },
      ]}
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
          <div className={pc.grid2}>
            <div className={pc.figure}>
              <img src="/assets/images/appointment_screenshot.png" alt="Appointment screen" className={pc.img} />
            </div>
            <div className={pc.figure}>
              <img src="/assets/images/category_screenshot.png" alt="Category screen" className={pc.img} />
            </div>
            <div className={pc.figure}>
              <img src="/assets/images/healthbio_screenshot.png" alt="Health bio screen" className={pc.img} />
            </div>
            <div className={pc.figure}>
              <img src="/assets/images/ice_screenshot.png" alt="ICE emergency screen" className={pc.img} />
            </div>
            <div className={pc.figure}>
              <img
                src="/assets/images/measurement_screenshot.png"
                alt="Measurement screen"
                className={pc.img}
              />
            </div>
            <div className={pc.figure}>
              <img src="/assets/images/medicine_screenshot.png" alt="Medicine screen" className={pc.img} />
            </div>
          </div>
        </div>
      </section>
    </PortfolioShell>
  )
}
