import PortfolioShell from '@/components/portfolio/shell'
import { pc, externalLink } from '@/components/portfolio/classes'

function GalleryFigure({
  src,
  alt,
  caption,
  imgClass,
  wide,
  expand,
}: {
  src: string
  alt: string
  caption: string
  imgClass: string
  wide?: boolean
  expand?: boolean
}) {
  return (
    <figure className={`${pc.figureBox} ${wide ? pc.figureWide : ''}`}>
      <div className={expand ? pc.figureMediaExpansion : pc.figureMedia}>
        <img src={src} alt={alt} className={imgClass} loading="lazy" />
      </div>
      <figcaption className={pc.caption}>{caption}</figcaption>
    </figure>
  )
}

export default function SocialCommunityExpansionPage() {
  return (
    <PortfolioShell
      slug="social-community-expansion"
      title="Social Community Expansion"
      category="Machine Learning"
      description="Graph-based analysis for social network community detection and expansion"
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85&auto=format&fit=crop"
      date="2022"
      technologies={['Python', 'NetworkX', 'Gephi', 'Scikit-learn', 'Pandas']}
      links={[
        { href: 'https://prezi.com/view/sT1tLt2YNfpOTrr6F7cd/', label: 'Project presentation (Prezi)' },
        { href: 'https://github.com/YixuanLi/LEMON', label: 'LEMON algorithm on GitHub' },
      ]}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            The idea of this project is to expand the community in Social Networks. The data was extracted
            using lost circles. The three major steps of the projects are community detection, identifying
            influencers in the community and expanding the community with a seed set of influencers. The
            community expansion was implemented using{' '}
            <a href="https://github.com/YixuanLi/LEMON" className={pc.link} {...externalLink}>
              LEMON
            </a>{' '}
            algorithm.
          </p>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Data Extraction</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            Graph data of facebook users were extracted using{' '}
            <a href="https://lostcircles.com/" className={pc.link} {...externalLink}>
              LostCircle
            </a>
            , a chrome extension. Data was extracted in graphml format.
          </p>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Visualistation</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            Graph was visualised with{' '}
            <a href="https://lostcircles.com/" className={pc.link} {...externalLink}>
              Lost Circle
            </a>{' '}
            and{' '}
            <a href="https://gephi.org/" className={pc.link} {...externalLink}>
              Gephi
            </a>
            .
          </p>
          <div className={pc.gallery}>
            <GalleryFigure
              src="/assets/images/lost_circle_visualization.jpg"
              alt="Lost circle social network visualization"
              caption="Social Network Visulaization in lost circle"
              imgClass={pc.imgGraph}
            />
            <GalleryFigure
              src="/assets/images/lost_circle_visualization1.png"
              alt="Lost circle expanded view"
              caption="Expanded View"
              imgClass={pc.imgGraph}
            />
            <GalleryFigure
              src="/assets/images/gephi_visualisation.jpg"
              alt="Gephi Fruchterman Reingold view"
              caption="Fruchterman Reingold View in Gephi"
              imgClass={pc.imgGraph}
            />
            <GalleryFigure
              src="/assets/images/gephi_visualisation1.png"
              alt="Gephi MultiGravity ForceAtlas2 view"
              caption="MultiGravity ForceAtlas2 View in Gephi"
              imgClass={pc.imgGraph}
            />
          </div>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Community</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            Communities were detected using modularity class in Gephi. Communities visualized manually, in
            lost circle was in correspondence with the communities obtained from gephi.
          </p>
          <div className={pc.gallery}>
            <GalleryFigure
              src="/assets/images/gephi_visualisation1.png"
              alt="Communities in Gephi"
              caption="Communties identified in Gephi"
              imgClass={pc.imgGraph}
            />
            <GalleryFigure
              src="/assets/images/modularity_class.png"
              alt="Community distribution in Gephi"
              caption="Distribution of community in Gephi"
              imgClass={pc.imgPanel}
            />
            <GalleryFigure
              src="/assets/images/lost_circle_community.jpg"
              alt="Communities in Lost Circle"
              caption="Communities identified in Lost Circle"
              imgClass={pc.imgGraph}
              wide
            />
          </div>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Key Players</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            Out of 8 communties obtained 2 communities were studied extensively. Community Statistics and Key
            Players were identified for each of the communities. Key Players were also visualised in lost circle
            Network.
          </p>
          <p className={pc.caption}>Community 1</p>
          <div className={pc.gallery}>
            <GalleryFigure
              src="/assets/images/community_statistics.png"
              alt="Community statistics in Gephi"
              caption="Community Statistics in Gephi"
              imgClass={pc.imgPanel}
            />
            <GalleryFigure
              src="/assets/images/community_statistics_graph.jpg"
              alt="Key player identification in Gephi"
              caption="Key Player Identification in Gephi"
              imgClass={pc.imgPanel}
            />
            <GalleryFigure
              src="/assets/images/key_player.jpg"
              alt="Key player in Lost Circle"
              caption="Key Player visualised in Lost Circle"
              imgClass={pc.imgGraph}
              wide
            />
          </div>
          <p className={`${pc.caption} mt-8`}>Community 2</p>
          <div className={pc.gallery}>
            <GalleryFigure
              src="/assets/images/community_statistics1.png"
              alt="Community statistics for second community"
              caption="Community Statistics in Gephi"
              imgClass={pc.imgPanel}
            />
            <GalleryFigure
              src="/assets/images/community_statistics_graph1.jpg"
              alt="Key player identification for second community"
              caption="Key Player Identification in Gephi"
              imgClass={pc.imgPanel}
            />
            <GalleryFigure
              src="/assets/images/key_player_1.jpg"
              alt="Key player for second community in Lost Circle"
              caption="Key Player visualised in Lost Circle"
              imgClass={pc.imgGraph}
              wide
            />
          </div>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Expansion</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            This{' '}
            <a
              href="https://github.com/GraphProcessor/CommunityDetectionCodes#algorithms"
              className={pc.link}
              {...externalLink}
            >
              link
            </a>{' '}
            provides various algorithms for seed set expansion of which{' '}
            <a href="https://github.com/YixuanLi/LEMON" className={pc.link} {...externalLink}>
              LEMON
            </a>{' '}
            algorithm achieved the state of the art. The two communities studied above were expanded using this
            algorithm. The expanded communities are shown in the images below.
          </p>
          <div className={pc.galleryStack}>
            <GalleryFigure
              src="/assets/images/iss_lemon.png"
              alt="LEMON seed expansion for community 1"
              caption="Seed Expansion for Community 1"
              imgClass={pc.imgExpansion}
              expand
            />
            <GalleryFigure
              src="/assets/images/friend_lemon.png"
              alt="LEMON seed expansion for community 2"
              caption="Seed Expansion for Community 2"
              imgClass={pc.imgExpansion}
              expand
            />
          </div>
        </div>
      </section>
    </PortfolioShell>
  )
}
