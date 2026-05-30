import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function RailsProtipPage() {
  return (
    <PortfolioShell
      slug="rails-protip"
      category="Ruby Gem"
      description="Configurable Rails tooltip gem built on a modern jQuery tooltip plugin"
      image="/assets/images/code-banner.svg"
      date="2015"
      technologies={["Ruby", "Rails", "JavaScript", "Asset Pipeline"]}
      links={[
        { href: 'https://rubygems.org/gems/rails-protip', label: 'RubyGems package' },
        { href: 'https://github.com/ethirajsrinivasan/rails-protip', label: 'Source code on GitHub' },
      ]}
      imageFit="contain"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              rails-protip is a configurable tooltip gem written on top of a
              next-generation
              <a href="http://protip.rocks/" className={pc.link} {...externalLink}>
                jquery tooltip plugin
              </a>
              . I created this gem as i was overwhelmed by the features of the
              jquery plugin. Scripts and stylesheets are shared through asset
              pipeline. The gem comes with default properties and can be
              manually configured as well. Easy to use tooltip gem with data
              attributes.
            </p>
        </div>
      </section>
    </PortfolioShell>
  );
}
