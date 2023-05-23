import React, { useState, useEffect } from "react"

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  })

  const handleScroll = () => {
    setScrollPosition({
      x: window.pageXOffset,
      y: window.pageYOffset,
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollPosition
}
