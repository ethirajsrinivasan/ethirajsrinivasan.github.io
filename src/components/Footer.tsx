import { Github, Linkedin, Twitter, Instagram, Youtube, BookOpen } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: BookOpen, href: 'https://medium.com/@ethi', label: 'Medium' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCkdAJA03TJXhb_tNjTyl_nA?sub_confirmation=1', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/ethirajchandru/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/ethirajsrinivasan', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/ethirajsrinivasan', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/iamethi', label: 'Twitter' },
  ]

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ethiraj Srinivasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
