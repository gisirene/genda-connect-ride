import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Shield, 
  Clock, 
  MapPin, 
  Users, 
  Smartphone,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Passenger Services",
      icon: Users,
      color: "bg-accent",
      features: [
        "Safe ride booking with verified drivers",
        "Real-time GPS tracking",
        "Emergency panic button",
        "Fare estimation and payment",
        "Trip history and receipts"
      ]
    },
    {
      title: "Driver Services",
      icon: Car,
      color: "bg-success",
      features: [
        "Police verification process",
        "Flexible earning opportunities",
        "Route optimization",
        "Driver safety tools",
        "Performance analytics"
      ]
    },
    {
      title: "Police Monitoring",
      icon: Shield,
      color: "bg-warning",
      features: [
        "Real-time transport monitoring",
        "Driver verification system",
        "Incident reporting tools",
        "Emergency response coordination",
        "Traffic pattern analysis"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service for all your transport needs"
    },
    {
      icon: MapPin,
      title: "City-Wide Coverage",
      description: "Serving all major areas with comprehensive coverage"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Easy-to-use app for seamless booking and tracking"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Strict quality standards for vehicles and drivers"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Comprehensive Transport Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From safe passenger rides to driver support and police monitoring, 
            we provide end-to-end transport solutions for everyone.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="border-0 shadow-card hover:shadow-primary transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6" 
                  variant="outline"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-accent">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Why Our Platform Stands Out
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Features */}
        <div className="mt-16 bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-destructive mb-3">
                Emergency & Safety Features
              </h4>
              <p className="text-muted-foreground mb-4">
                Your safety is our top priority. Our platform includes comprehensive emergency features 
                to ensure help is always available when you need it.
              </p>
              <ul className="grid md:grid-cols-2 gap-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm">One-touch emergency button</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm">Direct police connection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm">Automatic incident reporting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm">Real-time location sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};