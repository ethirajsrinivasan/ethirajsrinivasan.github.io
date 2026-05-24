import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Code, Database, Brain, Smartphone, Globe, Package } from 'lucide-react'
import { blogIndex } from '@/data/blogIndex'
import { resolveImageSrc } from '@/lib/resolve-image-src'

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const skills = [
    'Python', 'Java', 'Scala', 'Ruby', 'JavaScript', 'TypeScript',
    'React', 'Next.js', 'Node.js', 'Spring Boot',
    'TensorFlow', 'PyTorch', 'Scikit-learn',
    'Apache Spark', 'Hadoop', 'Kafka',
    'PostgreSQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'AWS', 'GCP'
  ]

  const portfolioCategories = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Deep learning models for medical diagnostics, facial recognition, and social network analysis',
      projects: [
        { name: 'Deep Learning Models For Medical Image Diagnostics', slug: 'medical-image-diagnostics' },
        { name: 'Facial Recognition System', slug: 'facial-recognition-system' },
        { name: 'Social Community Expansion', slug: 'social-community-expansion' },
        { name: 'Smart Interactive Wall', slug: 'smart-interactive-wall' },
        { name: 'Spatio Temporal Analysis Of Students’ Travel', slug: 'spatio-temporal-analysis' },
        { name: 'Dna Capitals Hackathon', slug: 'dna-capitals-hackathon' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Android',
      description: 'Utility applications for personal productivity and health tracking',
      projects: [
        { name: 'Medtracker', slug: 'medtracker' },
        { name: 'U Ask', slug: 'u-ask' }
      ]
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern web applications with state-of-the-art technologies',
      projects: [
        { name: 'Tablizer', slug: 'tablizer' },
        { name: 'CSS To Inliner', slug: 'css-to-inliner' },
        { name: 'URL Shortener', slug: 'url-shortener' }
      ]
    },
    {
      icon: Package,
      title: 'Ruby Gems',
      description: 'Open source contributions and library development',
      projects: [
        { name: 'Table2 CSV', slug: 'table2-csv' },
        { name: 'Rails Protip', slug: 'rails-protip' },
        { name: 'Rails Fort', slug: 'rails-fort' },
        { name: 'Technology Icons', slug: 'technology-icons' },
        { name: 'Supercache', slug: 'supercache' },
        { name: 'Sunspot', slug: 'sunspot' },
        { name: 'Devise Foundation Views', slug: 'devise-foundation-views' },
        { name: 'Collection2 CSV', slug: 'collection2-csv' }
      ]
    }
  ]

  const recentBlogs = blogIndex.slice(0, 3)

  return (
    <>
      <Head>
        <title>Ethiraj Srinivasan - Data Engineer & ML Enthusiast</title>
        <meta name="description" content="Data Engineer and Machine Learning enthusiast with expertise in big data, ML, and software engineering." />
        <meta property="og:image" content="/assets/ai-6782a7d586827e3fe87b3b5907209c7f3bbf9c809841f139aa0bae2b9c5c0dd8.jpg" />
      </Head>

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50 opacity-70" />
          <div className="absolute inset-0 bg-[url('/assets/ai-6782a7d586827e3fe87b3b5907209c7f3bbf9c809841f139aa0bae2b9c5c0dd8.jpg')] bg-cover bg-center opacity-10" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div {...fadeIn}>
              <div className="mb-8 flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                  <Image
                    src="/assets/my_photo.jpeg"
                    alt="Ethiraj Srinivasan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Ethiraj Srinivasan</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Data Engineer & Machine Learning Enthusiast
              </p>
              
              <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto">
                Building intelligent systems with big data and machine learning. 
                Expert Data Engineer at Shopee, Singapore.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/#portfolio"
                  className="px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  View Portfolio
                </Link>
                <Link 
                  href="/about"
                  className="px-8 py-3 glass-effect rounded-full hover:shadow-xl transition-all"
                >
                  About Me
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold mb-8 text-center">About</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto text-center mb-12">
                I am Ethiraj Srinivasan, a Data Engineer and Machine Learning enthusiast with about a decade of experience 
                in the software industry. I specialize in developing applications that include Big Data or Machine Learning 
                components. With a Master's degree from the National University of Singapore, I extensively built my knowledge 
                on Data Science and Machine Learning.
              </p>

              {/* GitHub Contributions */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Open Source Contributions</h3>
                <div className="flex justify-center">
                  <img 
                    src="https://ghchart.rshah.org/409ba5/ethirajsrinivasan" 
                    alt="GitHub Contributions" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Skills</h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 glass-effect rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {portfolioCategories.map((category) => (
                  <div
                    key={category.title}
                    className="glass-effect rounded-2xl p-8 card-hover"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary-100 rounded-lg mr-4">
                        <category.icon className="text-primary-600" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-6">{category.description}</p>
                    <ul className="space-y-2">
                      {category.projects.map((project) => (
                        <li key={project.slug}>
                          <Link 
                            href={`/portfolio/${project.slug}`}
                            className="flex items-center text-slate-700 hover:text-primary-600 transition-colors group"
                          >
                            <ArrowRight size={16} className="mr-2 text-primary-600 group-hover:translate-x-1 transition-transform" />
                            {project.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn}>
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold">From the Blog</h2>
                <Link 
                  href="/blogs"
                  className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
                >
                  View All <ArrowRight size={20} />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {recentBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blogs/${blog.slug}`}
                    className="group"
                  >
                    <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={resolveImageSrc(blog.image)}
                          alt={blog.imageAlt || blog.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
              <p className="text-lg text-slate-600 mb-8">
                Follow me on social media to stay updated with my latest work
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
