import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function RailsFortPage() {
  return (
    <PortfolioShell
      slug="rails-fort"
      category="Ruby Gem"
      description="Rails wrapper for a modern JavaScript progress bar for form completion"
      image="https://images.unsplash.com/photo-1756225802434-69951a36d99b?q=80&w=2070&auto=format&fit=crop"
      date="2015"
      technologies={["Ruby", "Rails", "JavaScript", "Asset Pipeline"]}
      links={[
        { href: 'https://rubygems.org/gems/rails-fort', label: 'RubyGems package' },
        { href: 'https://github.com/ethirajsrinivasan/rails-fort', label: 'Source code on GitHub' },
      ]}
      imageFit="cover"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              rails-fort is a wrapper on javascript plugin that comes with
              modern progress bar for form completion. This gem comes with a
              configurable file to set properties for the gem. Working on this
              gem also allowed me to contribute to
              <a href="https://github.com/idriskhenchil/Fort.js" className={pc.link} {...externalLink}>
                this plugin
              </a>
              . Stylesheets and Scripts are shared through the asset pipeline.
            </p>
        </div>
      </section>
    </PortfolioShell>
  );
}
