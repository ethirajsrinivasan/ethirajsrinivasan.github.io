import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function UAskPage() {
  return (
    <PortfolioShell
      slug="u-ask"
      title="U Ask"
      category="Android"
      description="Social Q&A mobile app for NUS students to get answers about university life"
      image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=85&auto=format&fit=crop"
      date="2015"
      technologies={["Android", "Java", "Social Networking"]}
      links={[
        { href: 'https://github.com/Navi-nk/uAsk', label: 'uAsk on GitHub' },
        { href: 'https://www.youtube.com/watch?v=poZ0JIMNDbY', label: 'Demo video on YouTube' },
      ]}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              uAsk is an utilitarian mobile app whose core is social networking
              between NUS students. uAsk is a one stop place for all students of
              the university to get answers to questions regarding anything and
              everything about student life. The target audience would be
              students but this app can be used by anyone associated with the
              university.
            </p>
        </div>
      </section>
      <section className={pc.section}>
        <h2 className={pc.heading}>Demo</h2>
        <div className={pc.body}>
            <div className={pc.video}>
              <iframe
                className={pc.iframe}
                src="https://www.youtube.com/embed/poZ0JIMNDbY"
                title="uAsk demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
        </div>
      </section>
    </PortfolioShell>
  );
}
