import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function SupercachePage() {
  return (
    <PortfolioShell
      slug="supercache"
      category="Ruby Gem"
      description="Rails caching addon for ActiveRecord queries and HTTP requests in development"
      image="https://images.unsplash.com/photo-1776801475781-b0797398b145?q=80&w=2070&auto=format&fit=crop"
      date="2016"
      technologies={["Ruby", "Rails", "RSpec", "Caching"]}
      links={[
        { href: 'https://rubygems.org/gems/supercache', label: 'RubyGems package' },
        { href: 'https://github.com/bragboy/supercache', label: 'Supercache on GitHub' },
      ]}
      imageFit="cover"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              Supercache is a totally unobtrusive addon that runs along your
              Rails application rapidly improving your development time by
              caching ActiveRecord Queries and HTTP requests (unlike
              ActiveRecord QueryCache which happens only within a single
              request). This is especially helpful when your local database is
              located elsewhere and avoids costly DNS lookups for each and every
              query. Being a collaborator i developed some of the important
              modules such as HTTP request cache , Rspec Integration etc. Rails
              Instrumentation principle is yet to be implemented in this gem.
            </p>
        </div>
      </section>
      <section className={pc.section}>
        <h2 className={pc.heading}>Learnings</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              The learning curve was very steep for this project.
            </p>
            <ol>
              <li>
                I digged deep into source code of Ruby, Honeybadger, New Relic,
                Sunspot to understand the HTTP request made.
              </li>
              <li>
                I overcame a problem of using Alias Method Chain Vs Prepend and
                about which i have described in my{' '}
                <a href="/blogs/mutually-exclusive-alias-method-and-prepend" className={pc.link} {...externalLink}>
                  blog
                </a>
                .
              </li>
            </ol>
        </div>
      </section>
    </PortfolioShell>
  );
}
