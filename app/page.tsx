import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Coffee, Shield, BarChart3, ArrowRight, Play, Users, Award, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
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
            <Button variant="ghost" size="sm" className="text-black hover:bg-gray-50">
              Connexion
            </Button>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
              Essai Gratuit
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight text-balance">
            Arrêtez de Perdre 5000dh <span className="font-medium">Par Mois</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
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


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium"
            >
              Commencer l'essai gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" size="lg" className="text-black hover:bg-gray-50 rounded-full px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Voir comment ça Marche (2min)
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
  <div className="relative w-full" style={{ paddingTop: "56.25%" /* ratio 16:9 */ }}>
    <video
      className="absolute top-0 left-0 w-full h-full rounded-3xl shadow-2xl object-cover"
      controls
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/video%201.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la lecture de vidéos. desoleyyy ;((
    </video>
  </div>
</section>


   <section className="pb-32 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="relative">
      <img
        src="/modern-surveillance-cameras-in-restaurant-kitchen-.jpg"
        alt="Système de surveillance CaféWatch"
        className="max-w-md w-full rounded-3xl shadow-2xl mx-auto"
      />
      {/* Texte en haut à droite */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg" >
        Notre innovation arrive jusqu'à vous ;)
      </div>
      {/* Texte au centre à gauche */}
      <div
 
        className="absolute top-1/2 left-25 transform -translate-y-1/5 bg-black text-white px-4 py-2 rounded-lg"
      >
        ça ne vous coûte rien de tester
      </div>


      {/* Texte en bas à droite */}
      <div className="absolute bottom-4 right-30 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg"style={{ backgroundColor: "oklch(0.769 0.188 70.08);" }}>
        Ne perdez pas de temps !!!!!
      </div>
    </div>
  </div>
</section>




      <section id="features" className="py-32 px-6 bg-black rounded-3xl text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Fonctionnalités avancées</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Notre solution complète vous offre un contrôle total sur votre établissement
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4 text-gray-100">Comptage automatique</h3>

              <p className="text-gray-500  font-light leading-relaxed">
                Comptez précisément chaque café servi et identifiez les types de boissons
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4">Détection d'anomalies</h3>
              <p className="text-gray-500  font-light leading-relaxed">
                Alertes instantanées en cas de comportements suspects ou d'actions non conformes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4">Analytics temps réel</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Tableaux de bord détaillés avec statistiques de performance et tendances
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4">Vision 24/7</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Surveillance continue avec notifications mobiles et alertes personnalisées
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Choisissez votre abonnement</h2>
            <p className="text-xl text-gray-600 font-light">
              Des plans flexibles adaptés à la taille de votre établissement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
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

            <div className="bg-black text-white rounded-3xl p-8 relative scale-105">
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

            <div className="bg-white rounded-3xl p-8 border border-gray-100">
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
          </div>
        </div>
      </section>

      <section className="py-32 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Prêt à transformer votre restaurant ?</h2>
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

      <section id="about" className="py-32 px-6 bg-black rounded-3xl text-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Notre histoire</h2>
      <p className="text-xl max-w-2xl mx-auto font-light text-gray-300">
        L'innovation au service de la restauration depuis 2020
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-16">
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

      <div className="text-center">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Award className="h-10 w-10 text-black" />
        </div>
        <h3 className="text-2xl font-serif font-medium mb-4">2022</h3>
        <h4 className="text-lg font-medium mb-3">L'innovation</h4>
        <p className="text-gray-300 font-light leading-relaxed">
          Développement de notre IA propriétaire capable de reconnaître et compter automatiquement les boissons
          servies avec une précision de 99,7%.
        </p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Clock className="h-10 w-10 text-black" />
        </div>
        <h3 className="text-2xl font-serif font-medium mb-4">2024</h3>
        <h4 className="text-lg font-medium mb-3">L'expansion</h4>
        <p className="text-gray-300 font-light leading-relaxed">
          Aujourd'hui, plus de 5 établissements nous font confiance à travers l'Europe. Notre mission :
          démocratiser l'intelligence artificielle dans la restauration.
        </p>
      </div>
    </div>

    <div className="mt-20 bg-white backdrop-blur-lg border border-white rounded-3xl p-12 text-center">
  <blockquote className="text-2xl md:text-3xl font-serif font-light text-gray-800 mb-8 leading-relaxed">
    "Notre vision est simple : permettre à chaque restaurateur de se concentrer sur ce qu'il fait de mieux -
    créer des expériences culinaires exceptionnelles - pendant que notre technologie s'occupe du reste."
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
              <a href="#" className="hover:text-black transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-black transition-colors">
                CGU
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-100">
          <p>
            &copy; 2025 cafeee. Tous droits réservés.{" "}
            <span className="text-black">
              ce site est crée et designer pas sayeh ahmed ;)
            </span>{" "}
            <a
              href="https://www.sayehahmed.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 underline hover:text-gray-700"
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
