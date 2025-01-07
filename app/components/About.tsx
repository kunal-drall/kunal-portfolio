'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center relative z-10">
      <div className="w-full px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-righteous mb-12"
          >
            About Me
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl leading-relaxed opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'm a <span className="text-purple-400">blockchain developer</span> with a passion for creating impactful and innovative solutions. Currently pursuing a <span className="text-purple-400">BTech in Computer Science</span>, I am always striving to learn and grow both personally and professionally.
          </motion.p>

          <motion.p 
            className="text-xl md:text-2xl leading-relaxed opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I enjoy participating in <span className="text-purple-400">hackathons</span>, where I get to solve challenging problems, collaborate with like-minded individuals, and push the boundaries of my skills. I've been fortunate to win bounties in a few hackathons and was proud to achieve the position of second runner-up in the prestigious ISA Solarthon <span className="inline-flex items-center">
              <span className="text-purple-400">ISA Solarthon</span> 
              <span className="ml-2">🏆</span>
            </span>.
          </motion.p>

          <motion.p 
            className="text-xl md:text-2xl leading-relaxed opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Driven by a love for <span className="text-purple-400">continuous learning</span> and a desire to <span className="text-purple-400">share knowledge</span>, I aim to contribute to the <span className="text-purple-400">blockchain ecosystem</span> while inspiring and helping others on their journey.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}