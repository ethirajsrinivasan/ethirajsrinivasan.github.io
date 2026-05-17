import type { BlogPost } from '@/types/blog'
import BlogShell from '@/components/blog/shell'
import MarkdownBody from '@/components/blog/MarkdownBody'

const post: BlogPost = {
  slug: "east-java-wonders-the-water-md",
  title: "East Java Wonders The Water Md",
  date: "Unknown",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  excerpt: "[](east-java-wonders-the-water-md.html#a-journey-of-awe-and-wonder-through-the-majestic-beauty-of-javas-highest-waterfall)A Journey of Awe and Wonder ...",
  readTime: "5 min read",
  content: `[](east-java-wonders-the-water-md.html#a-journey-through-fire-and-water-immersed-in-javas-nature-wonders-thewater)A Journey Through Fire and Water, Immersed in Java's Nature Wonders: The Water

[](east-java-wonders-the-water-md.html#a-journey-of-awe-and-wonder-through-the-majestic-beauty-of-javas-highest-waterfall)A Journey of Awe and Wonder Through the Majestic Beauty of Java's Highest Waterfall

Growing up as a child who loves to admire nature, I dream of traveling to many natural wonders when I grow up. I was incredibly crazy about the volcanoes and life around them. After years of endurance, nature gave me an opportunity to fulfill my childhood dream of visiting the volcanoes with my family. In this story, I am going to take you through my journey.

[](east-java-wonders-the-water-md.html#the-start-of-thejourney)The Start of the Journey

We started our journey at about 3 AM on a fine day to reach Changi Internation Airport, Singapore to catch our flight. After 2 hours of flight journey, we reached Juanda International Airport, Surabaya, Indonesia at about 9 AM. Visa was on arrival and Immigration was quick. Our local guide welcomed us with the placard. Then we purchased a mobile sim card from Telkomsel at the airport since the places are remote and it is difficult to get a sim card once we leave the airport. Then we started our journey by car. Had a quick lunch on the way at a local Indonesian restaurant. At around 3 PM, we reached the Madakaripura waterfall.

[![Madakaripura Waterfalls Entrance](https://user-images.githubusercontent.com/7569031/257066237-874fdecb-2de0-4698-af5e-9049113bb76c.jpg)](https://user-images.githubusercontent.com/7569031/257066237-874fdecb-2de0-4698-af5e-9049113bb76c.jpg)

Madakaripura Waterfalls Entrance (Photo By Author)

[](east-java-wonders-the-water-md.html#the-journey-ofwater)The Journey of Water

Madakaripura waterfall is the highest on Java Island and the second highest in Indonesia. We were taken by the local guide on the bike from the car parking to the entrance of the waterfall. It was a 10–15 minute bike ride. The roads were lonely but the views were breathtaking. If you are looking not to soak yourself in the waterfalls you can get raincoats at the entrance. It is highly recommended to wear sandals or waterproof shoes as it will be very slippery. We then started walking through the valley of the mountains and a stream was flowing beside us. The weather was so pleasant. It took about 1 hour to walk through the valley. We saw a bunch of small waterfalls dripping water all along the cliff and a river stream flowing along with about knee level of water. My eyesight was filled with bright greenery. We have to walk through all of these to reach the main waterfalls. I was so excited.

[![A Bunch of Waterfalls In Madakaripura](https://user-images.githubusercontent.com/7569031/257066312-395cc65a-97cd-48b1-be41-3737c8b3573b.jpg)](https://user-images.githubusercontent.com/7569031/257066312-395cc65a-97cd-48b1-be41-3737c8b3573b.jpg)

A Bunch of Waterfalls In Madakaripura (Photo by Author)

[](east-java-wonders-the-water-md.html#the-everlasting-moment)The Everlasting Moment

Walking through the stream and rocks we reached the main waterfalls. The waterfalls were so majestic. I witnessed the moment. A permanent memory made in my mind. I needed no smart device to capture it. I could revisit those moments even when I close my eyes now such was the view. We were surrounded by waterfalls on every side. It looked like we were in a circular bottle. When I looked at the water from down to the top I felt a divine connection and thanked nature for such a gift.

                    ![](https://i.ytimg.com/vi/hchtg-IPiJY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGF0gXShdMA8=&rs=AOn4CLAMGNj1UBbTQ2GKuLfhSw-FEuxUeA)
                    
                    The Madakaripura Waterfall | East Java | Indonesia - YouTube
                    Madakaripura Waterfall, nestled amidst the enchanting Bromo Tengger Semeru National Park in East Jav...

[](east-java-wonders-the-water-md.html#the-journeyawaits)The Journey awaits

After spending a few hours at the waterfalls we returned back to our car. I was so excited about the journey ahead as my first day was such a great experience for me. Stay tuned for my update on my journey to the volcano.

                    ![](https://images.unsplash.com/photo-1691510420384-33956404ac03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)
                    
                    A Journey through Fire and Water, Immersed in Java's Nature Wonders: The Fire
                    As shared in my previous story visiting a volcano is my childhood dream. My journey to the volcanoes...

    &#x2022;     &#x2022;     &#x2022;

      Follow Me on:
      [ Medium ](https://medium.com/@ethi)
      [ Youtube ](https://www.youtube.com/channel/UCkdAJA03TJXhb_tNjTyl_nA?sub_confirmation=1)
      [ Instagram ](https://www.instagram.com/ethirajchandru/)
      
      LinkedIn 
      [ Github ](https://github.com/ethirajsrinivasan/)
      [ Twitter ](https://twitter.com/iamethi)

        A Journey through Fire and Water, Immersed in Java's Nature Wonders: The Fire

        How a Simple Investing Hack Can Turn Pennies into Dollars`,
}

export default function EastJavaWondersTheWaterMdPage() {
  return (
    <BlogShell
      slug={post.slug}
      title={post.title}
      excerpt={post.excerpt}
      image={post.image}
      date={post.date}
      readTime={post.readTime}
    >
      <MarkdownBody content={post.content} />
    </BlogShell>
  )
}
