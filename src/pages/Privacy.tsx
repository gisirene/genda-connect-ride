import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, phone number)",
        "Location data when using our services for route planning and tracking",
        "Payment information processed securely through our payment partners",
        "Usage data to improve our services and user experience",
        "Device information for security and optimization purposes"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our transportation services",
        "Process bookings and payments securely",
        "Send important service updates and notifications",
        "Ensure safety through our police monitoring system",
        "Comply with legal requirements and safety regulations"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "All personal data is encrypted both in transit and at rest",
        "We use industry-standard security measures to protect your information",
        "Regular security audits and updates to maintain data protection",
        "Limited access to personal data on a need-to-know basis",
        "Secure payment processing through certified payment providers"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access and review your personal data at any time",
        "Request corrections to inaccurate information",
        "Delete your account and associated data",
        "Opt-out of non-essential communications",
        "Receive a copy of your data in a portable format"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Privacy Policy</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Your Privacy
                <span className="block text-accent">Matters</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                We're committed to protecting your personal information and being transparent about how we use it.
              </p>
              <Link to="/">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <Card key={section.title} className="border-0 shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-primary">
                        <div className="bg-accent p-2 rounded-lg">
                          <section.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl">{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact for Privacy */}
              <Card className="mt-12 border-accent/20 bg-accent/5">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Questions About Privacy?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    If you have any questions about this Privacy Policy or how we handle your data, 
                    please don't hesitate to contact us.
                  </p>
                  <Link to="/contact">
                    <Button variant="accent">
                      Contact Privacy Team
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;