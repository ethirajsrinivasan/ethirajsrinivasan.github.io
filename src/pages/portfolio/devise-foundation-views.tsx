import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function DeviseFoundationViewsPage() {
  return (
    <PortfolioShell
      slug="devise-foundation-views"
      title="Devise Foundation Views"
      category="Ruby Gem"
      description="Custom Devise authentication views built on the Foundation CSS framework"
      image="/assets/images/devise-foundation-views.svg"
      date="2015"
      technologies={["Ruby", "Rails", "Devise", "Foundation", "Slim", "Haml"]}
      links={[
        { href: 'https://rubygems.org/gems/devise-foundation-views', label: 'RubyGems package' },
        { href: 'https://github.com/ethirajsrinivasan/devise-foundation-views', label: 'Source code on GitHub' },
      ]}
      imageFit="contain"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              Devise Foundation Views got its root from
              <a href="https://github.com/hisea/devise-bootstrap-views" className={pc.link} {...externalLink}>
                devise-bootstrap-views
              </a>
              which uses devise and bootstrap framework as its base. Foundation
              being my favorite Front-end CSS framework i wanted to create
              custom views for devise on top of foundation framework. This gem
              comes with its own generator and supports slim and Haml templates
              as well. Responsive design is followed while creating views.
              Supporting multiple themes is in TODO list.
            </p>
        </div>
      </section>
    </PortfolioShell>
  );
}
