'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function ContactAndFooter() {
  return (
    <>
      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full py-20 px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-righteous mb-12">Contact</h2>
          <a
            href="mailto:hello@kunaldrall.me"
            className="inline-flex items-center space-x-3 text-xl md:text-2xl hover:text-purple-400 transition-colors"
          >
            <FaEnvelope className="text-purple-400" />
            <span>hello@kunaldrall.me</span>
          </a>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="w-full bg-[#111111] py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="mailto:kunaldrall29@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kunaldrall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.github.com/kunal-drall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>

            {/* Copyright and Credit */}
            <div className="text-center space-y-2">
              <p className="text-gray-400">© 2025 Kunal Drall</p>
              <p className="text-gray-400">
                Design Inspired by{' '}
                <a
                  href="https://knevari.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  knevari.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}