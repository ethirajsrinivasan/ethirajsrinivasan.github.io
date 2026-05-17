import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function Table2CsvPage() {
  return (
    <PortfolioShell
      slug="table2-csv"
      title="Table2 Csv"
      category="Ruby Gem"
      description="Ruby gem for converting HTML tables to CSV format"
      image="/assets/images/table2csv.svg"
      date="2019"
      technologies={["Ruby", "Nokogiri", "RSpec"]}
      links={[
        { href: 'https://rubygems.org/gems/table2csv', label: 'RubyGems package' },
        { href: 'https://github.com/ethirajsrinivasan/table2csv', label: 'Source code on GitHub' },
      ]}
      imageFit="contain"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              Table2csv is my first gem. This gem had its necessity when i
              wanted to download HTML table to csv file for one of my client
              project and my vision to automate the HTML to CSV conversion with
              ease. I carefully chose
              <a href="http://www.jqueryscript.net/table/jQuery-Plugin-To-Convert-HTML-Table-To-CSV-tabletoCSV.html" className={pc.link} {...externalLink}>
                this Jquery plugin
              </a>
              to serve the conversion process. table2csv acted as a wrapper
              around the plugin to do the conversion on the client side and
              script being shared through the Assets Pipeline.
            </p>
        </div>
      </section>
    </PortfolioShell>
  );
}
