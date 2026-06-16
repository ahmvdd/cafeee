"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        { scale: 1 },
        {
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="pb-32 px-6">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-3xl shadow-2xl"
        style={{ paddingTop: "56.25%" }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ pointerEvents: "none", userSelect: "none", willChange: "transform" }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video%201.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
