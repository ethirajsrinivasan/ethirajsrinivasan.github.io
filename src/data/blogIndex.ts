import type { BlogIndexEntry } from '@/types/blog'
import { formatBlogDate } from '@/lib/format-blog-date'
import { normalizeBlogBannerUrl } from '@/lib/blog-image'

type BlogDbRow = {
  slug: string
  title: string
  publishedAt: string
  picture: string
  pictureAlt?: string
  excerpt: string
}

/** Slugs, dates, banners from ethigeek_development.blogs */
const blogDbRows: BlogDbRow[] = [
  {
    slug: 'looking-back-at-2023',
    title: 'Looking Back At 2023',
    publishedAt: '2024-01-14',
    picture:
      'https://images.unsplash.com/photo-1702660490615-e5ab7a52e1ce?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pictureAlt: 'Looking Back At 2023',
    excerpt:
      'Last year, I started my [first yearly review](https://medium.com/illumination/looking-back-at-2022-38f95c52ba4a), which gave me a good self-realization. I will continue the same this year and in the years to come.',
  },
  {
    slug: 'manage-your-trading-risks-with-support-and-resistance',
    title: 'Manage Your Trading Risks with Support and Resistance',
    publishedAt: '2023-10-24',
    picture:
      'https://images.unsplash.com/photo-1642543348745-03b1219733d9?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt:
      'In stock market analysis, Support and Resistance levels are fundamental concepts that help traders determine the price points that change market behavior. In this story, we will discover support and resistance, their significance, and how to find them using Python.',
  },
  {
    slug: 'penny-wise-pound-foolish-the-costly-consequence',
    title: 'Penny Wise, Pound Foolish: The Costly Consequence',
    publishedAt: '2023-09-26',
    picture: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf',
    excerpt:
      '"Penny Wise, pound foolish"-An essential reminder that prioritizing small savings in the short term can lead to a significant loss in the long run. In this blog post, we will look into the concept of penny wise pound foolish, embrace its importance and how it can help in our financial journey.',
  },
  {
    slug: 'demystifying-sitemaps-your-pathway-to-seamless-website-exploration',
    title: 'Demystifying Sitemaps Your Pathway To Seamless Website Exploration',
    publishedAt: '2023-08-28',
    picture:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2920&q=80',
    excerpt:
      "In the vast world of the internet, navigating a website can sometimes be hard. That's where the sitemap comes into the picture. Sitemap is an essential tool to help visitors navigate your website easily. It also helps search engines to help index your websites efficiently. In this blog post, we will look in detail at sitemaps, their benefits, formats, and a practical example of how to generate them.",
  },
  {
    slug: 'from-budget-to-bliss-crafting-your-ideal-east-java-travel-itinerary',
    title: 'From Budget to Bliss: Crafting Your Ideal East Java Travel Itinerary',
    publishedAt: '2023-08-21',
    picture:
      'https://images.unsplash.com/photo-1691858439160-26dce126ad1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    excerpt:
      'In my previous [stories](/blogs/east-java-wonders-the-water-md/), I have shared my experiences of visiting the mighty volcanoes and majestic waterfall of East Java island. In this story, I will share my financial plans and some pro tips that will be useful if you are planning to visit East Java Island.',
  },
  {
    slug: 'a-journey-through-fire-and-water-immersed-in-java-s-nature-wonders-the-fire',
    title: "A Journey through Fire and Water, Immersed in Java's Nature Wonders: The Fire",
    publishedAt: '2023-08-08',
    picture:
      'https://images.unsplash.com/photo-1691510420384-33956404ac03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    excerpt:
      'As shared in my [previous story](/blogs/east-java-wonders-the-water-md/) visiting a volcano is my childhood dream. My journey to the volcanoes had begun and I was filled with so much excitement and anticipation. Before reaching the volcanoes, I explored the beautiful Madakaripura waterfall on my way. My first day at the Madakaripura waterfall went so well. I was so much satisfied. The cascading waters amidst the green surroundings were awe-inspiring. A perfect beginning to my volcanic adventure.',
  },
  {
    slug: 'east-java-wonders-the-water-md',
    title: "A Journey through Fire and Water, Immersed in Java's Nature Wonders: The Water",
    publishedAt: '2023-07-31',
    picture: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
    excerpt:
      "A Journey of Awe and Wonder Through the Majestic Beauty of Java's Highest Waterfall",
  },
  {
    slug: 'from-blueprint-to-reality-unleashing-the-potential-of-creational-patterns',
    title: 'From Blueprint to Reality: Unleashing the Potential of Creational Patterns',
    publishedAt: '2023-06-27',
    picture: 'https://images.unsplash.com/photo-1529690840038-f38da8894ff6',
    excerpt:
      'A Comprehensive Exploration of Design Patterns for Crafting Objects with Precision and Elegance',
  },
  {
    slug: 'demystifying-creational-patterns-a-roadmap-to-effective-object-creation',
    title: 'Demystifying Creational Patterns: A Roadmap to Effective Object Creation',
    publishedAt: '2023-06-02',
    picture: 'https://images.unsplash.com/photo-1594585098652-21c58491eb0e',
    pictureAlt: 'Design patterns for object creation',
    excerpt:
      'Harnessing the Power of Design Patterns for Streamlined and Scalable Object Instantiation',
  },
  {
    slug: '6-valuable-life-lessons-i-learned-in-my-early-30s',
    title: '6 Valuable Life Lessons I Learned In My Early 30s',
    publishedAt: '2023-05-09',
    picture: 'https://images.unsplash.com/photo-1610269373215-0b733db966f9',
    pictureAlt: 'Life lessons in 30s , Personal development and self-improvement',
    excerpt:
      'Insights and Advice on Finance, Health, Investing, Digital Presence, and Growth Skills',
  },
  {
    slug: 'custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring',
    title: 'Custom Actuator Prometheus Metric For Better Spring Boot Application Monitoring',
    publishedAt: '2023-04-28',
    picture: 'https://images.unsplash.com/photo-1589935447067-5531094415d1',
    pictureAlt:
      'Spring boot application monitoring using custom actuator prometheus metrics',
    excerpt:
      'This article describes a elegant way to add custom actuator prometheus metric to spring boot applications. Spring boot, a powerful java based framework to develop micro services web application provides many easy to configure solutions for developers need. Developing a microservices application is complete only when we can monitor these microservices. Spring boot provides Actuator to help monitor these microservices. Actuator uses HTTP endpoints to provide information about the application. Actuator provides lot of metrics like the database connections , thread information, memory information, HTTP client and server requests etc. Below are the 3 steps to add custom actuator prometheus metrics in spring boot',
  },
  {
    slug: 'jdk-variants-from-sun-microsystems-to-oracle-and-beyond',
    title: 'JDK variants: From Sun MicroSystems to Oracle and Beyond',
    publishedAt: '2023-04-17',
    picture: 'https://images.unsplash.com/photo-1618422168181-177d9d0a1fca',
    pictureAlt: 'JDK Variants and its History',
    excerpt:
      'Java was originally developed by Sun Microsystems, a technology company that was founded in 1982. Sun Microsystems released the first version of Java in 1995, and it quickly gained popularity as a versatile and platform-independent programming language.',
  },
  {
    slug: 'how-to-generate-kubernetes-deploy-manifests-for-rails-application-in-simple-steps',
    title: 'Generation of Kubernetes Deploy Manifests For a Rails Application',
    publishedAt: '2023-04-04',
    picture: 'https://images.unsplash.com/photo-1667372459510-55b5e2087cd0',
    pictureAlt: 'Kubernetes deployment manifests and Helm chart for Rails application',
    excerpt:
      'A very simple and easy way to generate kubernetes deployment manifests for a rails application is through the Helm chart. Helm is simply a package manager for Kubernetes. Helm Chart is a collection of kubernetes resource files like deployments, services and ingress rules also the values that is used to configure these resources.',
  },
  {
    slug: 'a-simple-tensorflow-classification-model-in-ruby',
    title: 'A Simple Tensorflow Classification Model In Ruby',
    publishedAt: '2018-07-24',
    picture: 'https://images.unsplash.com/photo-1476789668825-c16c51c46ac3',
    pictureAlt: 'Building a linear classification model in Ruby',
    excerpt:
      'The main objective of this blog is to build a simple linear classification model in ruby using Tensorflow architecture. The main tensorflow compenents required to build and test the model are Operation, Placeholder, Variable and Session. These components are written as ruby classes. Lets start with the Operation class.',
  },
  {
    slug: 'know-about-yourself-from-google',
    title: 'Know About Yourself from Google',
    publishedAt: '2018-07-09',
    picture:
      'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?fm=avif',
    pictureAlt: 'How Google tracks your online activities',
    excerpt:
      'It all started with this website - [https://camelcamelcamel.com](https://camelcamelcamel.com/). This website is a free Amazon price tracker. I was looking at the price of a product from Amazon. I was annoyed by one particular ad in this website since it was following me wherever I go on the internet. So I closed that ad and it appeared as below',
  },
  {
    slug: 'set-up-google-pub-sub-in-vert-x3',
    title: 'Set Up Google Pub Sub in Vert-x3',
    publishedAt: '2018-07-04',
    picture:
      'https://raw.githubusercontent.com/ethirajsrinivasan/blogs/master/vertx-pubsub/vertx3-pubsub.png',
    pictureAlt: 'Setting up Google Pub Sub in Vertx',
    excerpt: 'Here are the quick steps to set up Google Pub Sub in vert-x3',
  },
  {
    slug: 'normalize-emails-for-devise',
    title: 'Normalize Emails For Devise',
    publishedAt: '2016-12-22',
    picture: 'https://images.unsplash.com/photo-1506440905961-0ab11f2ed5bc',
    pictureAlt: 'Devise authentication failure with email normalization',
    excerpt:
      'Devise - a flexible authentication solution for Rails based on Warden says [plataformatec](https://github.com/plataformatec/devise). Yes it is and is my favorite authentication gem. Due to its flexible nature it does have some issues pouring down. I got a chance to view this [issue](https://github.com/plataformatec/devise/issues/4309). The issue as stated by the author',
  },
  {
    slug: 'configure-solr-for-rspec-and-travis-ci',
    title: 'Configure Solr For Rspec And Travis Ci',
    publishedAt: '2016-12-15',
    picture: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8',
    pictureAlt: 'Configuring Solr for RSpec , Travis CI Solr configuration',
    excerpt:
      'Configuring solr for your local Rspec suite and in travis CI can sometimes be tedious task. In most of the projects i have come across methods using solr was tested by stubing the solr result. However i wanted to test my methods based on the actual solr session and i did not want my solr session to run always. So here is how i configured solr for Rspec and travis',
  },
  {
    slug: 'how-to-use-includes-in-rails',
    title: 'How to use Includes in Rails',
    publishedAt: '2016-12-08',
    picture: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    pictureAlt: 'Rails associations and includes, Rails eager loading associations',
    excerpt:
      'Includes is a handy method to do eager loading on your associations as stated in the rails documentation — "With includes, Active Record ensures that all of the specified associations are loaded using the minimum possible number of queries."',
  },
  {
    slug: 'mutually-exclusive-alias-method-and-prepend',
    title: 'Mutually Exclusive Alias Method And Prepend',
    publishedAt: '2016-12-01',
    picture: 'https://images.unsplash.com/photo-1611090285001-86450e05822e',
    pictureAlt: 'Ruby alias_method and prepend',
    excerpt:
      '`Module#alias_method` was one of the earliest solution to overwrite a method in ruby. With an alias method in place you can redefine a method to anything you want and call the old method using the alias_method.',
  },
]

export const blogIndex: BlogIndexEntry[] = blogDbRows.map((row) => ({
  slug: row.slug,
  title: row.title,
  date: formatBlogDate(row.publishedAt),
  image: normalizeBlogBannerUrl(row.picture),
  imageAlt: row.pictureAlt,
  excerpt: row.excerpt,
  readTime: '5 min read',
}))

export function getBlogIndexEntry(slug: string): BlogIndexEntry | undefined {
  return blogIndex.find((post) => post.slug === slug)
}
