import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Zap, Globe } from "lucide-react";

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
            Revolutionizing Transport in Our Country
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Genda is more than just a transport platform. We're building a comprehensive ecosystem 
            that connects passengers, drivers, and law enforcement to create safer, more efficient 
            transportation solutions for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={feature.title} className="border-0 shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that safe, reliable transportation should be accessible to everyone. 
              By integrating law enforcement oversight with modern technology, we're creating 
              a transport ecosystem that prioritizes safety, efficiency, and community trust.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Comprehensive safety protocols</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground">Real-time monitoring and support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-foreground">Community-focused approach</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-accent">
            <h4 className="text-2xl font-bold text-primary mb-4">
              Why Choose Genda?
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Police-verified drivers for maximum safety</li>
              <li>✓ Real-time tracking and emergency support</li>
              <li>✓ Fair pricing with transparent fare structure</li>
              <li>✓ 24/7 customer service and assistance</li>
              <li>✓ Contributing to safer communities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};