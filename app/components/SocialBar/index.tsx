'use client'

import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import { IoLanguage } from 'react-icons/io5'

const socialLinks = [
  { url: 'https://github.com/kunal-drall', network: 'github' },
  { url: 'https://linkedin.com/in/kunaldrall', network: 'linkedin' },
  { url: 'https://codepen.io/kunal-drall', network: 'codepen' },
  { url: 'https://discord.com/users/kunaldrall', network: 'discord' },
]

export default function SocialBar() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-0 z-50 p-4 md:left-4 md:bottom-4 w-full md:w-auto"
    >
      <div className="max-w-[320px] mx-auto md:mx-0">
        <div className="flex items-center justify-center gap-2 p-3 backdrop-blur-sm bg-white/10 rounded-full">
          {socialLinks.map((social) => (
            <SocialIcon 
              key={social.network}
              url={social.url}
              network={social.network as any}
              fgColor="white"
              bgColor="transparent"
              style={{ height: 32, width: 32 }} // Fixed size for icons
              className="hover:scale-110 transition-transform"
            />
          ))}
          <div className="w-px h-4 bg-white/20" />
          <button className="p-1.5 hover:scale-110 transition-transform">
            <IoLanguage className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}