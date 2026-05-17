import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function TablizerPage() {
  return (
    <PortfolioShell
      slug="tablizer"
      title="Tablizer"
      category="Web Application"
      description="Web tool for converting data tables between different formats"
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&auto=format&fit=crop"
      date="2020"
      technologies={["Ruby on Rails", "JavaScript", "PostgreSQL", "Bootstrap"]}
      links={[
        { href: 'http://delabs-tablizer.herokuapp.com/', label: 'Tablizer live application' },
        { href: 'https://github.com/ethirajsrinivasan/tablizer', label: 'Source code on GitHub' },
      ]}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              This project is my experiment on Sinatra framework. The
              application accepts either external URL or HTML input and scraps
              the tables from the input. User is provided with an option to
              select a particular table. This is a single page application which
              offers user to vary his/her input and see the table as csv
              instantly. Nokogiri is used as HTML parser to extract the table.
              Output can be download as CSV or Excel file.
            </p>
        </div>
      </section>
    </PortfolioShell>
  );
}
