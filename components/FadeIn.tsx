"use client"
import { useEffect, useRef, useState, ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const initialTransform = {
    up: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    none: "none",
  }[direction]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform,
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
