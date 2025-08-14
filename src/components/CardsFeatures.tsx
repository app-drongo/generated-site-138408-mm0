// Enhanced by AI on 2025-08-14T17:38:11.579Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"
import Link from "next/link"

export default function SarvoFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Livraison Rapide",
      description: "Performances optimisées avec des temps de chargement ultra-rapides et des interactions fluides.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Sécurité Entreprise",
      description: "Sécurité de niveau bancaire avec un chiffrement de bout en bout et des certifications de conformité.",
      badge: "Sécurité"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Conception responsive qui fonctionne parfaitement sur tous les appareils et tailles d'écran.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Réseau CDN Mondial",
      description: "Un réseau de diffusion de contenu mondial garantit un chargement rapide partout.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Analyses Avancées",
      description: "Informations approfondies et métriques en temps réel pour suivre votre succès.",
      badge: "Analyses"
    },
    {
      icon: Palette,
      title: "Personnalisation de Marque",
      description: "Personnalisation complète pour correspondre parfaitement à l'identité de votre marque.",
      badge: "Personnalisation"
    },
    {
      icon: Code2,
      title: "Convivial pour les Développeurs",
      description: "API propres, documentation complète et outils de développement puissants.",
      badge: "Développeur"
    },
    {
      icon: Headphones,
      title: "Assistance 24/7",
      description: "Assistance experte 24h/24 et 7j/7 chaque fois que vous en avez besoin.",
      badge: "Assistance"
    },
    {
      icon: Lock,
      title: "Priorité à la Confidentialité",
      description: "Vos données vous appartiennent. Nous ne vendons ni ne partageons jamais vos informations.",
      badge: "Confidentialité"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Tout ce dont vous avez besoin pour
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Réussir en Ligne
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Des fonctionnalités puissantes conçues pour vous aider à construire, 
            développer et faire évoluer votre entreprise avec confiance et facilité.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Prêt à découvrir toutes ces fonctionnalités ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Commencer l'Essai Gratuit
            </Link>
            <Link href="/features" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Voir Toutes les Fonctionnalités
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}