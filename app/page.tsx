import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Coffee, Shield, BarChart3, ArrowRight, Play, Users, Award, Clock } from "lucide-react"
import Link from "next/link"
import { VideoSection } from "@/components/VideoSection"
import { InnovationSection } from "@/components/InnovationSection"
import { FadeIn } from "@/components/FadeIn"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="animate-header sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <Eye className="h-6 w-6 text-black" />
            <span className="text-xl font-medium text-black italic">cafeee</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-black transition-colors text-sm">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-black transition-colors text-sm">
              Tarifs
            </a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm">
              Notre histoire
            </a>
            <Link href="/signin">
              <Button variant="ghost" size="sm" className="text-black hover:bg-gray-50">
                Connexion
              </Button>
            </Link>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
              Demander une démo
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-hero delay-100 text-5xl md:text-7xl font-serif font-light mb-8 leading-tight text-balance">
            Surveillez votre restaurant avec{" "}
            <span className="font-medium">l'intelligence artificielle</span>
          </h1>
          <p className="animate-hero delay-300 text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            <span
              style={{
                backgroundColor: "oklch(0.769 0.188 70.08)",
                color: "black",
                padding: "2px 6px",
                borderRadius: "4px",
                fontStyle: "italic",
              }}
            >
              cafeee
            </span>{" "}
            utilise des caméras connectées et l'IA pour surveiller vos employés, compter automatiquement les
            cafés servis et détecter les comportements suspects.
          </p>
          <div className="animate-hero delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium"
            >
              Demander une démo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" size="lg" className="text-black hover:bg-gray-50 rounded-full px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Voir comment ça Marche (2min)
            </Button>
          </div>
        </div>
      </section>

      <VideoSection />

      <InnovationSection />

      <section id="features" className="py-32 px-6 bg-black rounded-3xl text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Fonctionnalités avancées</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                Notre solution complète vous offre un contrôle total sur votre établissement
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FadeIn delay={0}>
              <div className="text-center card-lift">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4 text-gray-100">Comptage automatique</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Comptez précisément chaque café servi et identifiez les types de boissons
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="text-center card-lift">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Détection d'anomalies</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Alertes instantanées en cas de comportements suspects ou d'actions non conformes
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="text-center card-lift">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Analytics temps réel</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Tableaux de bord détaillés avec statistiques de performance et tendances
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="text-center card-lift">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Vision 24/7</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Surveillance continue avec notifications mobiles et alertes personnalisées
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Choisissez votre abonnement</h2>
              <p className="text-xl text-gray-600 font-light">
                Des plans flexibles adaptés à la taille de votre établissement
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift h-full">
                <h3 className="text-2xl font-serif font-medium mb-2">Starter</h3>
                <p className="text-gray-600 mb-6 font-light">Parfait pour les petits cafés</p>
                <div className="text-4xl font-serif font-light mb-8">
                  29€<span className="text-lg text-gray-600">/mois</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="text-gray-600">2 caméras incluses</li>
                  <li className="text-gray-600">Comptage automatique</li>
                  <li className="text-gray-600">Alertes de base</li>
                  <li className="text-gray-600">Support email</li>
                </ul>
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3">Commencer</Button>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="bg-black text-white rounded-3xl p-8 relative scale-105 card-lift h-full">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-black">
                  Populaire
                </Badge>
                <h3 className="text-2xl font-serif font-medium mb-2">Professional</h3>
                <p className="text-gray-300 mb-6 font-light">Idéal pour les restaurants moyens</p>
                <div className="text-4xl font-serif font-light mb-8">
                  79€<span className="text-lg text-gray-300">/mois</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="text-gray-300">5 caméras incluses</li>
                  <li className="text-gray-300">IA avancée</li>
                  <li className="text-gray-300">Analytics détaillés</li>
                  <li className="text-gray-300">Support prioritaire</li>
                </ul>
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full py-3">Commencer</Button>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift h-full">
                <h3 className="text-2xl font-serif font-medium mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6 font-light">Pour les grandes chaînes</p>
                <div className="text-4xl font-serif font-light mb-8">
                  149€<span className="text-lg text-gray-600">/mois</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="text-gray-600">Caméras illimitées</li>
                  <li className="text-gray-600">API personnalisée</li>
                  <li className="text-gray-600">Multi-établissements</li>
                  <li className="text-gray-600">Support dédié</li>
                </ul>
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3">Nous contacter</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Prêt à transformer votre restaurant ?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Rejoignez plus de 3 restaurants qui font confiance à cafeee pour optimiser leurs opérations.
            </p>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-4 text-lg font-serif font-medium"
            >
              Démarrer votre essai gratuit de 14 jours
            </Button>
          </div>
        </section>
      </FadeIn>

      <section id="about" className="py-32 px-6 bg-black rounded-3xl text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Notre histoire</h2>
              <p className="text-xl max-w-2xl mx-auto font-light text-gray-300">
                L'innovation au service de la restauration depuis 2020
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-16">
            <FadeIn delay={0}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Users className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">2020</h3>
                <h4 className="text-lg font-medium mb-3">Les débuts</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  Fondée par une équipe d'ingénieurs passionnés de technologie et de restauration, CaféWatch naît de la
                  volonté d'aider les restaurateurs à optimiser leurs opérations.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Award className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">2024</h3>
                <h4 className="text-lg font-medium mb-3">L'innovation</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  Développement de notre IA propriétaire capable de reconnaître et compter automatiquement les boissons
                  servies avec une précision de 77,7%.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Clock className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">2025</h3>
                <h4 className="text-lg font-medium mb-3">L'expansion</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  Aujourd'hui, plus de 5 établissements nous font confiance à travers la France. Notre mission :
                  démocratiser l'intelligence artificielle dans la restauration.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="mt-20 bg-white backdrop-blur-lg border border-white rounded-3xl p-12 text-center">
              <blockquote className="text-2xl md:text-3xl font-serif font-light text-gray-800 mb-8 leading-relaxed">
                "Notre vision est simple : permettre à chaque restaurateur de se concentrer sur ce qu'il fait de mieux —
                créer des expériences culinaires exceptionnelles — pendant que notre technologie s'occupe du reste."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-serif text-xl">M</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-lg text-gray-900">Marc marc</p>
                  <p className="text-gray-700">Fondateur & CEO</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Eye className="h-6 w-6 text-black" />
              <span className="text-xl font-medium">cafeee</span>
            </div>
            <div className="flex space-x-8 text-gray-600">
              <a href="#" className="hover:text-black transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-black transition-colors">CGU</a>
              <a href="#" className="hover:text-black transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-100">
            <p>
              &copy; 2025 cafeee. Tous droits réservés.{" "}
              <span className="text-black">ce site est crée et designer pas sayeh ahmed ;)</span>{" "}
              <a
                style={{
                  backgroundColor: "oklch(0.769 0.188 70.08)",
                  color: "black",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontStyle: "italic",
                }}
                href="https://www.sayehahmed.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
