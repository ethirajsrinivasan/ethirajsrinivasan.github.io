import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function CssToInlinerPage() {
  return (
    <PortfolioShell
      slug="css-to-inliner"
      title="Css To Inliner"
      category="Web Application"
      description="Rails app to benchmark and analyze converting external stylesheets to inline CSS for email"
      image="/assets/images/css2inliner.svg"
      date="2018"
      technologies={["Ruby on Rails", "Premailer", "Nokogiri", "JavaScript"]}
      links={[
        { href: 'http://css2inliner.ethigeek.com/', label: 'CSS2Inliner application' },
        { href: 'https://github.com/ethirajsrinivasan/css-to-inliner', label: 'Source code on GitHub' },
      ]}
      imageFit="contain"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              I was working on the performance of delivering mails for one of my
              client project. The major time lag for delivering mails was in
              conversion of external stylesheets to inline css for mails. We
              used premailer to do the conversion process. I created this
              project to fasten my analysis and show benchmark for the
              conversion. The project is a single page application built on Ruby
              on rails.
            </p>
        </div>
      </section>
      <section className={pc.section}>
        <h2 className={pc.heading}>Learnings</h2>
        <div className={pc.body}>
            <ol>
              <li>
                Gave me knowledge on conversion of external stylesheets to
                inline which is very helpful for email templates
              </li>
              <li>
                Got a chance to analyse the source of premailer and nokogiri and
                found that the entire delay was in the searching mechanism of
                Nokogiri
              </li>
            </ol>
        </div>
      </section>
    </PortfolioShell>
  );
}
