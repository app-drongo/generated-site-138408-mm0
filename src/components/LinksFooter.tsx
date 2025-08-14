// Enhanced by AI on 2025-08-14T17:38:30.292Z
// Section: footer
// Category: footer

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Produits",
      links: [
        { name: "Restaurants", href: "/restaurants" },
        { name: "Épicerie", href: "/epicerie" },
        { name: "Pharmacie", href: "/pharmacie" },
        { name: "Fleurs", href: "/fleurs" },
        { name: "Autres", href: "/autres" },
        { name: "Promotions", href: "/promotions" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/a-propos" },
        { name: "Blog", href: "/blog" },
        { name: "Carrières", href: "/carrieres" },
        { name: "Presse", href: "/presse" },
        { name: "Partenaires", href: "/partenaires" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { name: "Centre d'aide", href: "/aide" },
        { name: "Communauté", href: "/communaute" },
        { name: "Tutoriels", href: "/tutoriels" },
        { name: "Webinaires", href: "/webinaires" },
        { name: "Études de cas", href: "/etudes-de-cas" },
        { name: "Statut", href: "/statut" }
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Politique de confidentialité", href: "/politique-de-confidentialite" },
        { name: "Conditions d'utilisation", href: "/conditions-d-utilisation" },
        { name: "Politique de cookies", href: "/politique-de-cookies" },
        { name: "RGPD", href: "/rgpd" },
        { name: "Sécurité", href: "/securite" },
        { name: "Conformité", href: "/conformite" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/sarvo" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/sarvo" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/sarvo" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/sarvo" },
    { name: "GitHub", icon: Github, href: "https://github.com/sarvo" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">S</span>
                </div>
                <span className="font-bold text-xl">Sarvo</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Sarvo, votre solution de livraison de repas et de courses à domicile. 
                Commandez en quelques clics et recevez vos produits rapidement.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@sarvo.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">123 Rue des Entrepreneurs, 75000 Paris</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Restez informé</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Recevez les dernières mises à jour et offres. Pas de spam, désabonnez-vous à tout moment.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Sarvo. Tous droits réservés.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Fait avec <Heart className="size-3 text-red-500 fill-current" /> par notre équipe
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Suivez-nous :</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/plan-du-site" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Plan du site
            </Link>
            <Link href="/accessibilite" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibilité
            </Link>
            <Link href="/politique-de-cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Paramètres des cookies
            </Link>
            <Link href="/assistance" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Assistance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}