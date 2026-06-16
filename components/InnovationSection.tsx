"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle, Zap, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Détection instantanée",
    desc: "Alertes en moins de 2 secondes dès qu'une anomalie est détectée.",
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Précision à 77,7 %",
    desc: "Notre IA reconnaît et compte chaque boisson servie avec une fiabilité prouvée.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Données chiffrées",
    desc: "Flux vidéo et données analytiques sécurisés de bout en bout.",
  },
]

export function InnovationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(textRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="pb-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <div className="flex justify-center mb-16">
          <span
            className="text-sm font-medium tracking-widest uppercase px-4 py-1.5 rounded-full border border-gray-200 text-gray-500"
          >
            Notre Innovation
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div ref={imgRef} className="relative">
            {/* Decorative background block */}
            <div
              className="absolute -inset-4 rounded-3xl"
              style={{ background: "oklch(0.769 0.188 70.08 / 0.12)", transform: "rotate(-2deg)" }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/modern-surveillance-cameras-in-restaurant-kitchen-.jpg"
                alt="Système de surveillance cafeee"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating stat badge */}
            <div
              ref={badgeRef}
              className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(0.769 0.188 70.08)" }}
              >
                <span className="text-black text-lg font-bold">↑</span>
              </div>
              <div>
                <p className="text-2xl font-serif font-semibold text-black leading-none">77,7%</p>
                <p className="text-xs text-gray-500 mt-0.5">précision de l'IA</p>
              </div>
            </div>

            {/* Live badge */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Surveillance en direct
            </div>
          </div>

          {/* Text side */}
          <div ref={textRef} className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-5">
                Une technologie qui{" "}
                <span className="font-medium italic">ne dort jamais</span>
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                cafeee connecte vos caméras existantes à une couche d'intelligence artificielle qui surveille,
                analyse et vous alerte — 24h/24, 7j/7, sans interruption.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "oklch(0.769 0.188 70.08 / 0.15)", color: "oklch(0.6 0.18 70.08)" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-medium text-black">{f.title}</p>
                    <p className="text-gray-500 font-light text-sm mt-0.5">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-2">
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8">
                Demander une démo
              </Button>
              <Button variant="ghost" className="text-black hover:bg-gray-50 rounded-full px-6">
                En savoir plus →
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
