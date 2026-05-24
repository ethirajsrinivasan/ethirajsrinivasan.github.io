import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function Collection2CsvPage() {
  return (
    <PortfolioShell
      slug="collection2-csv"
      title="Collection2 Csv"
      category="Ruby Gem"
      description="Export ActiveRecord collections to CSV with minimal syntax, including associations"
      image="/assets/images/code-banner.svg"
      date="2015"
      technologies={["Ruby", "Rails", "ActiveRecord", "CSV"]}
      links={[
        { href: 'https://rubygems.org/gems/collection2csv', label: 'RubyGems package' },
        { href: 'https://github.com/ethirajsrinivasan/collection2csv', label: 'Source code on GitHub' },
      ]}
      imageFit="contain"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              collection2csv is a lightweight engine on top of rails which lets
            you download active record collection to CSV with minimal syntax and
            provides support across associations. The initial version of the gem
            supported only single class collection.Later support was added to
            include associations. This gem was designed with the thought that it
            should allow developers to use it with just a single line of code
            after its integration. At present this gem has activerecord as its
            dependency. Future plans exists to provide support for mongoid and
            to extract its dependency from rails so that it can be used as a
            pure ruby library.
            </p>
        </div>
      </section>
    </PortfolioShell>
  );
}
