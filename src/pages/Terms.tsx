import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Shield, AlertTriangle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Genda, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our services",
        "We may update these terms from time to time, and continued use constitutes acceptance",
        "You must be at least 18 years old to use our services independently"
      ]
    },
    {
      icon: Shield,
      title: "User Responsibilities",
      content: [
        "Provide accurate and truthful information when creating your account",
        "Maintain the security of your account credentials",
        "Follow all applicable laws and regulations while using our services",
        "Respect other users and maintain appropriate conduct during rides",
        "Report any safety concerns or incidents immediately"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Service Limitations",
      content: [
        "Genda is a platform connecting passengers with transportation services",
        "We do not own or operate the vehicles or employ the drivers",
        "Service availability may vary by location and time",
        "We reserve the right to suspend or terminate accounts for violations",
        "Real-time tracking depends on device and network connectivity"
      ]
    },
    {
      icon: Users,
      title: "Safety & Compliance",
      content: [
        "All drivers must meet our verification and safety requirements",
        "Police monitoring is provided for enhanced safety and security",
        "Emergency features are available but do not replace emergency services",
        "Users must comply with all safety guidelines and instructions",
        "Any illegal activities will be reported to appropriate authorities"
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
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Terms of Service</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Terms &
                <span className="block text-accent">Conditions</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                Please read these terms carefully before using our platform and services.
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

        {/* Terms Content */}
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
                        <div className="bg-success p-2 rounded-lg">
                          <section.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl">{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Terms */}
              <div className="mt-12 space-y-8">
                <Card className="border-warning/20 bg-warning/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Payment Terms</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• All payments are processed securely through our certified payment partners</li>
                      <li>• Refunds are subject to our cancellation policy</li>
                      <li>• Dynamic pricing may apply during peak hours or high demand</li>
                      <li>• Payment disputes should be reported within 48 hours</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Genda provides a platform service and is not liable for actions of drivers or other users. 
                      While we implement safety measures and police monitoring, users participate at their own risk. 
                      Our liability is limited to the extent permitted by law.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact for Terms */}
              <Card className="mt-12 border-accent/20 bg-accent/5">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Questions About Terms?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    If you have questions about these Terms of Service or need clarification, 
                    please contact our legal team.
                  </p>
                  <Link to="/contact">
                    <Button variant="accent">
                      Contact Legal Team
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

export default Terms;