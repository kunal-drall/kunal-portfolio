'use client'

import SpaceScene from './SpaceScene'
import StarField from './StarField'

export default function Background() {
  return (
    <>
      {/* Full screen star field */}
      <div className="fixed inset-0 bg-black">
        <StarField />
        {/* Planet animation container */}
        <div className="fixed top-0 right-0 w-1/2 h-full md:block hidden">
          <SpaceScene />
        </div>
      </div>
    </>
  )
}