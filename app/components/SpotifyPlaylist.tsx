'use client'

import { motion } from 'framer-motion'

export default function SpotifyPlaylist() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full h-full"
    >
      <div className="space-y-4 mt-[70px]"> {/* Added margin-top to align with stack card */}
        {/* Spotify Playlist */}
        <iframe
          src="https://open.spotify.com/embed/playlist/7nntcJHAnSkO5Zg0fkct3U?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        ></iframe>
      </div>
    </motion.div>
  )
}