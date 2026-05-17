import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, ArrowRight } from 'lucide-react'
import { blogIndex } from '@/data/blogIndex'

export default function Blogs() {
  const blogs = blogIndex

  return (
    <>
      <Head>
        <title>Blog - Ethiraj Srinivasan</title>
        <meta name="description" content="Technical articles on software engineering, machine learning, and data engineering" />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-16 pb-12">
        {/* Hero Section */}
        <section className="relative py-20 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50" />
          <div className="absolute inset-0 bg-[url('/assets/blogs-0020dfff94e6226e29a9ca89b01908cc19991bf0437b75007f2fc29ea8fcd182.jpg')] bg-cover bg-center opacity-10" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Thoughts on software engineering, machine learning, and technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blogs/${blog.slug}`} className="group block h-full">
                  <div className="glass-effect rounded-2xl overflow-hidden h-full flex flex-col card-hover">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <Calendar size={16} className="mr-2" />
                        {blog.date}
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                      <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center text-primary-600 font-medium">
                        Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
