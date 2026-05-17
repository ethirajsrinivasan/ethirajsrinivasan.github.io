import PortfolioShell from '@/components/portfolio/shell'
import { pc, externalLink } from '@/components/portfolio/classes'

export default function SmartInteractiveWallPage() {
  return (
    <PortfolioShell
      slug="smart-interactive-wall"
      title="Smart Interactive Wall"
      category="Machine Learning"
      description="Avatar-based conversational smart wall for NUS visitors using computer vision and NLP"
      image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=85&auto=format&fit=crop"
      date="2018"
      technologies={['Python', 'TensorFlow', 'Dialogflow', 'Unity', 'Kinect', '.NET']}
      links={[
        { href: 'https://www.youtube.com/watch?v=lv5bLhFmaWs', label: 'Demo video on YouTube' },
      ]}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            A Smart wall is an avatar based open domain conversational chatbot built to engage the visitors
            of NUS. When a user comes in proximity with the smart wall, the smart wall gets activated. It
            captures the general information of the users such as age, gender and also identifies the
            emotional state of the user. It then begins to have conversation with the user.
          </p>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Architecture</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            Smart interactive wall identifies the user when he comes in proximity wall using kinect based
            .Net application. The smart wall operates in two modes - Information mode and generative mode.
            The green flow shown below shows the generative mode and orange flow represents the informative
            mode. In generative mode a deep learning model is trained to respond to user&apos;s voice input.
            The model is build using{' '}
            <a
              href="https://pythonprogramming.net/chatbot-deep-learning-python-tensorflow/"
              className={pc.link}
              {...externalLink}
            >
              this
            </a>{' '}
            tutorial. In informative mode a set of 10 basic categories were identified and trained on
            DialogFLow to respond to user&apos;s queries. To obtain general information the content is
            scraped from the search engines and natural language processing techniques are applied to answer
            users. The response are shown visually using an avatar which renders itself in the Unity
            framework.
          </p>
          <div className={pc.grid2}>
            <div className={pc.figure}>
              <img
                src="/assets/images/smart_wall_architecture1.png"
                alt="Two modes of Smart Wall"
                className={pc.img}
              />
              <p className={pc.caption}>Two modes of Smart Wall</p>
            </div>
            <div className={pc.figure}>
              <img
                src="/assets/images/smart_wall_architecture2.png"
                alt="Flow of information in Smart Wall"
                className={pc.img}
              />
              <p className={pc.caption}>Flow of information</p>
            </div>
          </div>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Demo</h2>
        <div className={pc.body}>
          <div className={pc.video}>
            <iframe
              className={pc.iframe}
              src="https://www.youtube.com/embed/lv5bLhFmaWs"
              title="Smart Interactive Wall demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </PortfolioShell>
  )
}
