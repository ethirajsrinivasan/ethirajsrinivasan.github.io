import PortfolioShell from "@/components/portfolio/shell";
import { pc, externalLink } from '@/components/portfolio/classes'

export default function TechnologyIconsPage() {
  return (
    <PortfolioShell
      slug="technology-icons"
      title="Technology Icons"
      category="Ruby Gem"
      description="Rails web font gem with a broad set of technology icons"
      image="/assets/images/technology-icons.svg"
      date="2016"
      technologies={["Ruby", "Rails", "Sass", "Web Fonts"]}
      links={[
        { href: 'https://rubygems.org/gems/technology-icons', label: 'RubyGems package' },
        { href: 'https://github.com/ethirajsrinivasan/technology-icons', label: 'Source code on GitHub' },
      ]}
      imageFit="contain"
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              technology-icons is a easy to use rails web font gem which
              includes many technology icons. There were less number of gems for
              web font and most of the gem did not support/include latest
              technology icons. I wanted to create one which includes latest
              technology icons. I came across
              <a href="https://github.com/websiddu/technology-icons" className={pc.link} {...externalLink}>
                {' '}
                this github repo{' '}
              </a>
              which included many technology icons. I created technology-icons
              as wrapper around this repo.
            </p>
        </div>
      </section>
    </PortfolioShell>
  );
}
