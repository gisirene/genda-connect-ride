import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Shield
} from "lucide-react";

export const Footer = () => {
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  const handleComingSoon = (feature: string) => {
    toast({
      title: "Coming Soon",
      description: `${feature} will be available soon!`,
    });
  };

  const footerLinks = {
    platform: [
      { name: "For Passengers", href: "/auth", type: "link" },
      { name: "For Drivers", href: "/auth", type: "link" },
      { name: "For Police", href: "/auth", type: "link" },
      { name: "Safety Features", href: "/services", type: "link" },
    ],
    company: [
      { name: "About Us", href: "/about", type: "link" },
      { name: "Our Mission", href: "/about", type: "link" },
      { name: "Careers", href: "#", type: "coming-soon" },
      { name: "Press", href: "#", type: "coming-soon" },
    ],
    support: [
      { name: "Help Center", href: "#", type: "coming-soon" },
      { name: "Contact Us", href: "/contact", type: "link" },
      { name: "Emergency", href: "#", type: "coming-soon" },
      { name: "Report Issue", href: "/contact", type: "link" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy", type: "link" },
      { name: "Terms of Service", href: "/terms", type: "link" },
      { name: "Driver Agreement", href: "#", type: "coming-soon" },
      { name: "Safety Guidelines", href: "#", type: "coming-soon" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-3xl font-bold">Genda</h2>
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Connecting passengers, drivers, and police to create a safer, 
              more efficient transport ecosystem for everyone in our country.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@genda.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">123 Transport Hub Street, City</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  {link.type === "link" ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleComingSoon(link.name)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.type === "link" ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleComingSoon(link.name)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.type === "link" ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleComingSoon(link.name)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.type === "link" ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleComingSoon(link.name)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-primary-foreground/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80">
                Get the latest updates on new features, safety improvements, and service expansions.
              </p>
            </div>
            <form onSubmit={handleNewsletterSignup} className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <Button type="submit" variant="accent">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 bg-destructive/10 border border-destructive/20 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-destructive" />
            <div>
              <span className="font-semibold text-destructive">Emergency:</span>
              <span className="text-primary-foreground/80 ml-2">
                For immediate safety concerns during rides, call 911 or use the emergency button in the app.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <Separator className="bg-primary-foreground/20" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 Genda. All rights reserved. Making transport safer for everyone.
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};