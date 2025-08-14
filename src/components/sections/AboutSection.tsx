import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Zap, Globe, Clock, CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Integrated police monitoring ensures maximum safety for all users",
      color: "bg-warning"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building stronger connections between passengers, drivers, and authorities",
      color: "bg-accent"
    },
    {
      icon: Zap,
      title: "Efficient Service",
      description: "Smart routing and real-time updates for optimal transport experience",
      color: "bg-success"
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Expanding across the country to serve every community",
      color: "bg-info"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">About Genda</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Our Mission & Vision
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-lg text-muted-foreground">
                To make public transport safe, faster, and more reliable for every passenger in Rwanda by connecting all stakeholders through innovative technology.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-lg text-muted-foreground">
                To become Rwanda's leading smart transport platform, connecting passengers, drivers, and traffic authorities seamlessly for a better tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-destructive w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-primary mb-2">Safety First</h4>
              <p className="text-sm text-muted-foreground">Your journey's security is our priority</p>
            </div>
            <div className="text-center">
              <div className="bg-success w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-primary mb-2">Punctuality</h4>
              <p className="text-sm text-muted-foreground">We keep time so you can keep yours</p>
            </div>
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-primary mb-2">Transparency</h4>
              <p className="text-sm text-muted-foreground">Clear pricing and open communication</p>
            </div>
            <div className="text-center">
              <div className="bg-warning w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-primary mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">Using technology to solve transport challenges</p>
            </div>
            <div className="text-center">
              <div className="bg-info w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-primary mb-2">Community</h4>
              <p className="text-sm text-muted-foreground">Building trust and connections among all stakeholders</p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We began with a single goal: to transform public transport into a service people can trust. 
              By connecting passengers, drivers, and traffic officers through one platform, we've reduced delays, 
              improved safety, and simplified travel.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Today, we continue to grow — driven by technology, commitment, and the belief that every journey matters.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-foreground">Reduced transport delays by 40%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-foreground">Improved safety incidents response by 60%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span className="text-foreground">Simplified travel for 50,000+ passengers</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-accent">
            <h4 className="text-2xl font-bold text-primary mb-6">
              Why Choose Genda?
            </h4>
            <div className="grid gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Police-verified drivers for maximum safety</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Real-time tracking and emergency support</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Fair pricing with transparent fare structure</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">24/7 customer service and assistance</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Contributing to safer communities nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};