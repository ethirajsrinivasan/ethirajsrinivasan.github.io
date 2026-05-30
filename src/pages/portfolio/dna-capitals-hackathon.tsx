import PortfolioShell from '@/components/portfolio/shell'
import { pc, externalLink } from '@/components/portfolio/classes'

export default function DnaCapitalsHackathonPage() {
  return (
    <PortfolioShell
      slug="dna-capitals-hackathon"
      category="Machine Learning"
      description="Hackathon project to extract structured company information from web sources"
      image="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      date="2018"
      technologies={['Ruby on Rails', 'Python', 'BeautifulSoup', 'Web Scraping']}
      links={[
        { href: 'https://github.com/ethirajsrinivasan/DNA-capitals-hackathon', label: 'Source code on GitHub' },
      ]}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            The aim of this hackathon is to extract the specific information about a company. The information
            has to be extracted using the training sample of company names and at the end of hackathon it is
            validated against test set of companies.
          </p>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Description</h2>
        <div className={pc.body}>
          <p className={pc.justify}>The project is divided into two division</p>
          <ul>
            <li>
              Company Info Crawler - Ruby on Rails application to extract generic information from the target
              website.
            </li>
            <li>
              Web Scrapper - Python Script with beautifulSoup to extract specific information from the target
              website.
            </li>
          </ul>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>WebScrapper</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            BeautifulSoup is used to extract specific information about companies from open source websites
            (wikipedia, pitchbook and bloomberg). The company website is identified by extracting website names
            from various browsers using different combinations of keywords and then the most relevant website is
            chosen. The information scrapped are
          </p>
          <ul>
            <li>Sector to which the belongs</li>
            <li>About the company</li>
            <li>Contact details</li>
            <li>Investors of the company</li>
            <li>News articles about the company</li>
          </ul>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Company Info Crawler</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            The website obtained from Web Scrapper is used to extract generic information about the company. The
            content extracted from the website using HttParty is parsed using Nokogiri and indexed using Elastic
            Search. This process is carried out as background task using sidekiq. Most informational content for
            a query is returned using context similarity (LSI, Carrot Clustering). Latent Dirichlet allocation
            is used to extract the topics from the content indexed based on the query.
          </p>
          <div className={pc.galleryStack}>
            <div className={pc.figure}>
              <img
                src="/assets/images/grab_metadata.png"
                alt="Company metadata extraction"
                className={pc.img}
              />
              <p className={pc.caption}>Meta Data of a Company</p>
            </div>
            <div className={pc.figure}>
              <img
                src="/assets/images/keyword_search.png"
                alt="Keyword search query results"
                className={pc.img}
              />
              <p className={pc.caption}>Query Results</p>
            </div>
          </div>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Appreciations</h2>
        <div className={pc.body}>
          <p>Won the first prize at the Hackathon</p>
        </div>
      </section>
    </PortfolioShell>
  )
}
