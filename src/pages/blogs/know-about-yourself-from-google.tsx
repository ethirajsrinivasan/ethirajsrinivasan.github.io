import type { BlogPost } from '@/types/blog'
import BlogShell from '@/components/blog/shell'
import MarkdownBody from '@/components/blog/MarkdownBody'

const post: BlogPost = {
  slug: "know-about-yourself-from-google",
  title: "Know About Yourself from Google",
  date: "Jul 09, 2018",
  image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?fm=avif",
  excerpt:
    'It all started with this website - [https://camelcamelcamel.com](https://camelcamelcamel.com/). This website is a free Amazon price tracker. I was looking at the price of a product from Amazon. I was annoyed by one particular ad in this website since it was following me wherever I go on the internet. So I closed that ad and it appeared as below',
  readTime: '5 min read',
  content: `It all started with this website - https://camelcamelcamel.com. This website is a free Amazon price tracker. I was looking at the price of a product from Amazon. I was annoyed by one particular ad in this website since it was following me wherever I go on the internet. So I closed that ad and it appeared as below

[![](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/google_ads.png)](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/google_ads.png)

In the first place why do I see Google ads being published here. The reason is the publisher of this website is using Google Adsense to monetize website. You could see that the material design of Google urges you to click on \`Stop seeing this ad\` and not \`why this ad\`. Google gives preference to the former due to its revenue principle which i will explain in the later half. I clicked on \`why this ad\`. It took me to a page where i further clicked on Control your ad settings to go to ad personlisation page

[![](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/ad_personalisation.png)](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/ad_personalisation.png)

I scrolled down and I could see various websites that I have visited for the past few days and various factors on how my ad is personalised. Each page that I have visited is categorised into a factor in the backend. Some of the few factors are listed below

[![](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/google_factors_ad.png)](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/google_factors_ad.png)

I cliked on a factor and further linked on Manage your activity. I could see all my activities being tracked under 5 major categories namely

- youtube

- search

- ads

- android

- image search

These 5 categories can be individually tracked. I clicked on \`Android\` and I could see that my activities on my mobile phone is tracked. It shows the time I have opened my apps like WhatsApp and youtube

[![](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/app_activity5.png)](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/app_activity5.png)

I further explored on each app and landed at this pop up.

[![](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/activity_pop_up4.png)](https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/googleu/activity_pop_up4.png)

I was very fictious about UdcList Setting which I googled and ended up with improper information. I also tried to filter my activity in [Manage your activity](https://myactivity.google.com/myactivity) and could see list of Google product under which I was tracked. This is a small glimpse of how I am tracked under Google. You can also explore yours and find about yourself. To answer the question why is google giving preference to \`Stop seeing this ad\` than \`why this ad\` is because by clicking on \`Stop seeing this ad\` we can only stop one specific ad from display whereas clicking on \`why this ad\` we could explore much more about ourself and could turn off ad personalisaton. This personlised ad is so important to google because it earns more money from the advertiser for every click on personlised ad. Is Google the only company showing personalised ad on your browser ? No. Click on this link to explore further. Happy Exploring !!!`,
}

export default function KnowAboutYourselfFromGooglePage() {
  return (
    <BlogShell
      slug={post.slug}
      title={post.title}
      excerpt={post.excerpt}
      image={post.image}
    >
      <MarkdownBody content={post.content} />
    </BlogShell>
  )
}
