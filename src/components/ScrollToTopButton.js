import React, { useState, useEffect } from 'react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const shouldBeVisible = scrollPosition > 200
      setIsVisible(shouldBeVisible)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible])
  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Scroll to Top
    </button>
  )
}

export default ScrollToTopButton
