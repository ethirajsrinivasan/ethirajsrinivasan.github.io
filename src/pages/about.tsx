import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, ExternalLink } from 'lucide-react'

export default function About() {
  const gadgets = [
    { name: 'MacBook Pro M2', link: 'https://amzn.to/3Mo79sP', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B3B5BWCT&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
    { name: 'iPad Pro', link: 'https://amzn.to/41bpqxL', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BJLFBYV1&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
    { name: 'iPhone 12', link: 'https://amzn.to/3nRxZzs', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08L5VJYV7&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
    { name: 'GoPro Hero11', link: 'https://amzn.to/3GpmAwS', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BVFKWNRK&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
    { name: 'Kindle', link: 'https://amzn.to/3Kg7aMU', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08N3RQZ51&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
    { name: 'Garmin Hybrid Watch', link: 'https://amzn.to/3UfuJK4', image: 'https://ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07VVLQPZL&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=ethigeek-21&language=en_IN' },
  ]

  const books = [
    { name: 'Peak: Secrets from the New Science of Expertise', link: 'https://amzn.to/3nV4pck' },
    { name: 'How to Become a Straight-A Student', link: 'https://amzn.to/3ZP3CGX' },
    { name: 'The Power of Your Subconscious Mind', link: 'https://amzn.to/3zDSbHx' },
    { name: 'Metaprogramming Ruby 2', link: 'https://amzn.to/3UkWgd9' },
    { name: 'Data Driven', link: 'https://amzn.to/43ewJq1' },
    { name: 'Warren Buffett: The Business and Life Lessons', link: 'https://amzn.to/3nVa2Y5' },
  ]

  return (
    <>
      <Head>
        <title>About - Ethiraj Srinivasan</title>
        <meta name="description" content="Learn more about Ethiraj Srinivasan - software developer, amateur cook, avid traveler and bibliophile." />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative h-64 rounded-3xl overflow-hidden mb-8">
              <Image
                src="/assets/mbs-339708eec2c88908d4321b7d4fb493943b2160c5ae32ec15e2f42f8c76ca709d.avif"
                alt="Singapore"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <h1 className="text-5xl font-bold mb-6">Hey, Reader</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed">
                My name is Ethiraj, I'm a software developer, amateur cook, avid traveler and bibliophile hailing from{' '}
                <a 
                  href="https://goo.gl/maps/7qdbjRtvJr6ASCt17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
                >
                  South Indian Metropolitan City <ExternalLink size={16} />
                </a>
                . I currently work as an Expert Data Engineer at Shopee living in the{' '}
                <a 
                  href="https://goo.gl/maps/RCyyqLajYy8Tpif28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
                >
                  Lion City <MapPin size={16} />
                </a>
                .
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Social</h2>
            <div className="glass-effect rounded-2xl p-8">
              <ul className="space-y-3">
                {[
                  { platform: 'Medium', username: 'ethi', link: 'https://medium.com/@ethi' },
                  { platform: 'YouTube', username: 'ethirajsrinivasan', link: 'https://www.youtube.com/channel/UCkdAJA03TJXhb_tNjTyl_nA?sub_confirmation=1' },
                  { platform: 'Instagram', username: 'ethirajchandru', link: 'https://www.instagram.com/ethirajchandru/' },
                  { platform: 'LinkedIn', username: 'ethirajsrinivasan', link: 'https://www.linkedin.com/in/ethirajsrinivasan/' },
                  { platform: 'GitHub', username: 'ethirajsrinivasan', link: 'https://github.com/ethirajsrinivasan/' },
                  { platform: 'Twitter', username: 'iamethi', link: 'https://twitter.com/iamethi' },
                  { platform: 'Reddit', username: 'ethirajsrinivasan', link: 'https://www.reddit.com/user/ethirajsrinivasan' },
                ].map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-700 hover:text-primary-600 transition-colors"
                    >
                      <span className="font-semibold w-32">{social.platform}:</span>
                      <span className="flex items-center gap-2">
                        {social.username} <ExternalLink size={14} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Gadgets */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Gadgets</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {gadgets.map((gadget) => (
                <a
                  key={gadget.name}
                  href={gadget.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect rounded-xl p-4 text-center card-hover"
                >
                  <div className="mb-3">
                    <img src={gadget.image} alt={gadget.name} className="w-full h-32 object-contain" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{gadget.name}</p>
                </a>
              ))}
            </div>
          </motion.section>

          {/* Books */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Books</h2>
            <div className="glass-effect rounded-2xl p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {books.map((book) => (
                  <li key={book.name}>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-700 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2 flex-shrink-0" />
                      <span>{book.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  )
}
