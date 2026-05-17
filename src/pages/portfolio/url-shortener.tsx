import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function UrlShortenerPage() {
  return (
    <PortfolioShell
      slug="url-shortener"
      title="Url Shortner"
      category="Web Application"
      description="URL shortening service with usage stats and browser analytics"
      image="/assets/images/url_shortner.svg"
      date="2017"
      technologies={["Ruby on Rails", "PostgreSQL", "REST API"]}
      links={[
        { href: 'http://urlshortner-ethigeek.herokuapp.com/', label: 'URL shortener live application' },
        { href: 'https://github.com/ethirajsrinivasan/UrlShortner', label: 'Source code on GitHub' },
      ]}
      imageFit="contain"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              This application provides a shortened URL of the original URL.
              This app gives a quick stats about the shortened url used. It also
              tracks browser stats. This application provides both web based and
              API based services.
            </p>
        </div>
      </section>
    </PortfolioShell>
  );
}
