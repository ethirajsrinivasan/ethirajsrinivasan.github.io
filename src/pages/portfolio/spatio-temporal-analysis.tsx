import PortfolioShell from '@/components/portfolio/shell'
import { pc, externalLink } from '@/components/portfolio/classes'

export default function SpatioTemporalAnalysisPage() {
  return (
    <PortfolioShell
      slug="spatio-temporal-analysis"
      title="Spatio Temporal Analysis Of Students’ Travel"
      category="Machine Learning"
      description="Geospatial analysis to optimize NUS student travel times and surface nearby amenities"
      image="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=85&auto=format&fit=crop"
      date="2017"
      technologies={['R', 'Shiny', 'Spatial Statistics', 'Python', 'APIs']}
      links={[
        { href: 'https://sunilp.shinyapps.io/geospatialapp/', label: 'Interactive Shiny application' },
        { href: 'https://analyticsandintelligentsystems.wordpress.com/2017/05/05/spatio-temporal-analysis-of-students-travelling-behaviours/', label: 'Project overview (blog post)' },
      ]}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            Due to occasional train faults and poor knowledge of the best routes, students often spend
            longer times travelling to school. Another issue is that students who are new to Singapore may
            not be aware of amenities which are available in their immediate vicinity. The objectives of this
            project are to help optimise travel times for NUS students and provide helpful information about
            facilities near their home or travel routes.
          </p>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Data Source</h2>
        <div className={pc.body}>
          <p className={pc.justify}>We obtained data from these sources:</p>
          <ul>
            <li>Moves & OpenPaths</li>
            <li>Twitter API (Tweets on Reports of Train Disruptions, from SMRT’s Official Account)</li>
            <li>Yelp API (Ratings of Restaurants)</li>
            <li>Data.gov.sg (Shopping Mall & Hawker Centre Data)</li>
          </ul>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Analysis</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            Heatmaps, cluster maps and Anselin’s Local Moran’s I for Local Spatial Autocorrelation were used
            to analyze the students&apos; behaviour with their movement data.
          </p>
          <div className={pc.topicStack}>
            <div>
              <h3 className={pc.topicTitle}>HeatMap</h3>
              <p className={pc.justify}>
                The heatmap shows the frequently travelled paths of the students. One very visible hotspot is
                the area around NUS, at the southwest part of Singapore.
              </p>
              <div className={pc.figure}>
                <img src="/assets/images/heat.png" alt="Heat map of student travel paths" className={pc.img} />
              </div>
            </div>
            <div>
              <h3 className={pc.topicTitle}>Cluster Maps</h3>
              <p className={pc.justify}>
                This cluster map shows all the clusters formed and also serves as heatmap. Visit the interactive Shiny application to view the distribution within the clusters by clicking on each cluster.
              </p>
              <div className={pc.figure}>
                <img src="/assets/images/cluster.png" alt="Cluster map" className={pc.img} />
              </div>
            </div>
            <div>
              <h3 className={pc.topicTitle}>Anselin’s Local Moran’s I</h3>
              <p className={pc.justify}>
                With Anselin’s Local Moran’s I Index we can tell the time spent by the students at each
                location, as compared to their neighbours. Red points are high-high points, which tell us that
                these students spend a longer duration, as compared to their neighbours and that there is a
                high concentration of these students in this particular location. Blue points are low-low
                points and signify the contrary.
              </p>
              <div className={pc.figure}>
                <img src="/assets/images/moran_i.png" alt="Anselin's Local Moran's I" className={pc.img} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Application</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            After analyzing the movement pattern of NUS students, we made an attempt to address our
            objectives, by examining the impact of train faults on students’ travel plans and also to propose
            useful information on nearby amenities.
          </p>
          <div className={pc.topicStack}>
            <div>
              <h3 className={pc.topicTitle}>Train Faults</h3>
              <p className={pc.justify}>
                By plotting the lines where the disruptions have occurred, we can see which line is the most
                prone to train faults (in the past 2 years). We have also identified that train disruptions
                usually occur on Mondays and Thursdays. Although it is not practical to avoid travelling on
                those days, we advise that students be prepared for an increased probability of incidents or
                chose an alternate route.
              </p>
              <div className={pc.figure}>
                <img src="/assets/images/train.png" alt="Train fault disruption map" className={pc.img} />
              </div>
            </div>
            <div>
              <h3 className={pc.topicTitle}>Shopping Malls</h3>
              <p className={pc.justify}>
                Using medoid clustering to determine the centres of the clusters of students’ movements, we
                created a geofence with 3 km radius from the centre to highlight which shopping malls are
                closest to these clusters. As shown in the image below, we identified 3 main clusters– around
                NUS, CBD and one far east. There are not many shopping malls in these clusters, as these
                clusters are residential areas. We have also provided customer rating of these malls (extracted
                from yelp).
              </p>
              <div className={pc.figure}>
                <img
                  src="/assets/images/shopping.png"
                  alt="Shopping malls near student clusters"
                  className={pc.img}
                />
              </div>
            </div>
            <div>
              <h3 className={pc.topicTitle}>Hawker Centres</h3>
              <p className={pc.justify}>
                Hawker centres, on the other hand, tell a different story. There are an abundance and
                relatively equal distribution of hawker centres within the clusters. The government has made a
                conscientious effort to ensure that affordable food is available within a walking distance, to
                all residing in these residential districts. Customer ratings for these hawker centres are
                available too.
              </p>
              <div className={pc.figure}>
                <img src="/assets/images/hawker.png" alt="Hawker centres near student clusters" className={pc.img} />
              </div>
            </div>
            <div>
              <h3 className={pc.topicTitle}>Proposal of Alternative Travelling Route</h3>
              <p className={pc.justify}>
                We have attempted to propose an alternate route in the event of a train disruption, from
                Raffles Place to NUS ISS. As this route planning algorithm is in its infancy, we have only
                proposed this one alternative, which is only possible via car/taxi.
              </p>
              <div className={pc.figure}>
                <img src="/assets/images/alternative.png" alt="Alternative travel route" className={pc.img} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Conclusion</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            In this project, we achieved our objectives of proposing alternative routes and helping students
            plan their travel routes better in the event of train disruptions, as well as suggesting helpful
            information on nearby amenities.
          </p>
        </div>
      </section>
    </PortfolioShell>
  )
}
