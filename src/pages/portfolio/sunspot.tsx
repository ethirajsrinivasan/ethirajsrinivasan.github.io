import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function SunspotPage() {
  return (
    <PortfolioShell
      slug="sunspot"
      title="Sunspot"
      category="Ruby Gem"
      description="Collaboration on the Ruby Solr search library with expressive indexing and query DSL"
      image="/assets/images/sunspot.svg"
      date="2015"
      technologies={["Ruby", "Solr", "RSolr", "Search"]}
      links={[
        { href: 'http://sunspot.github.io/', label: 'Sunspot documentation' },
        { href: 'https://github.com/sunspot/sunspot', label: 'Sunspot on GitHub' },
      ]}
      imageFit="contain"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              Sunspot is a Ruby library for expressive, powerful interaction
              with the Solr search engine. Sunspot is built on top of the RSolr
              library, which provides a low-level interface for Solr
              interaction; Sunspot provides a simple, intuitive, expressive DSL
              backed by powerful features for indexing objects and searching for
              them. Sunspot is designed to be easily plugged in to any ORM, or
              even non-database-backed objects such as the filesystem. Being a
              collaborator i solve issues, review code and addresses comments.
            </p>
        </div>
      </section>
      <section className={pc.section}>
        <h2 className={pc.heading}>Learnings</h2>
        <div className={pc.body}>
            <p className={pc.justify}>It is very steep</p>
            <ol>
              <li>Each and every issue i am looking into is a learning</li>
              <li>Gives a good understanding of how solr library works</li>
            </ol>
        </div>
      </section>
    </PortfolioShell>
  );
}
