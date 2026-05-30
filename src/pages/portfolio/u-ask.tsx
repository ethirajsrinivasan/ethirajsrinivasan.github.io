import PortfolioShell from '@/components/portfolio/shell'
import { pc } from '@/components/portfolio/classes'

export default function UAskPage() {
  return (
    <PortfolioShell
      slug="u-ask"
      category="Android"
      description="Social Q&A mobile app for NUS students to get answers about university life"
      image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=85&auto=format&fit=crop"
      date="2017"
      technologies={['Android', 'Java', 'REST API', 'RecyclerView', 'Material Design']}
      links={[
        { href: 'https://github.com/Navi-nk/uAsk', label: 'uAsk on GitHub' },
        { href: 'https://www.youtube.com/watch?v=poZ0JIMNDbY', label: 'Demo video on YouTube' },
      ]}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            uAsk is a utilitarian mobile app whose core is social networking between NUS students. It is a
            one-stop place for students to get answers about university life. Built for the NUS IDEAS
            competition, the app targets students and anyone associated with the university.
          </p>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Features</h2>
        <div className={pc.body}>
          <ul>
            <li>User registration, login, and persistent sessions (faculty stored per user)</li>
            <li>Main question-and-answer feed with expandable threads</li>
            <li>Post questions with category selection and an optional private (faculty-only) flag</li>
            <li>Submit and browse answers for each question</li>
            <li>Search across questions from the action bar</li>
            <li>
              Category feeds: Getting Around, Food &amp; Beverages, Faculties/Departments, Sports &amp;
              Recreation, Residences, and General
            </li>
            <li>
              Profile views: your questions, your Q&amp;A history, and a faculty-exclusive private feed
            </li>
            <li>Campus map viewer for Kent Ridge, Bukit Timah, and Outram with tabbed navigation</li>
            <li>Navigation drawer with account toggle between main menu and profile actions</li>
          </ul>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Architecture</h2>
        <div className={pc.body}>
          <div className={pc.figure}>
            <img
              src="/assets/images/uask_architecture.svg"
              alt="uAsk architecture: Android client, HTTP JSON API, and UaskServiceProvider backend"
              className={pc.img}
              width={920}
              height={440}
            />
          </div>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Demo</h2>
        <div className={pc.body}>
          <div className={pc.video}>
            <iframe
              className={pc.iframe}
              src="https://www.youtube.com/embed/poZ0JIMNDbY"
              title="U Ask demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </PortfolioShell>
  )
}
