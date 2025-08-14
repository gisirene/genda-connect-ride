import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Calendar,
  RefreshCw,
  Bell,
  Route,
  Users,
  Shield
} from "lucide-react";

export const ServicesSection = () => {
  const mainServices = [
    {
      icon: Calendar,
      title: "Book a Seat",
      description: "Reserve your preferred seat in advance to avoid missing a ride",
      features: ["Choose specific seats", "Advance booking", "Guaranteed spots", "Easy payment"],
      color: "bg-accent"
    },
    {
      icon: MapPin,
      title: "Map Integration", 
      description: "Select your routes and view live locations with real-time tracking",
      features: ["Interactive route selection", "Live GPS tracking", "Multiple route options", "Distance calculation"],
      color: "bg-success"
    },
    {
      icon: Smartphone,
      title: "Real-Time Bus Tracking",
      description: "Show the exact bus location on a map with live updates",
      features: ["Live bus positions", "ETA predictions", "Route progress", "Driver details"],
      color: "bg-info"
    },
    {
      icon: RefreshCw,
      title: "Flexible Cancellations",
      description: "Allow passengers to cancel or reschedule their bookings easily",
      features: ["Free cancellations", "Easy rescheduling", "Refund processing", "No hidden fees"],
      color: "bg-warning"
    }
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "Arrival Time Guaranteed",
      description: "Notify you when your bus will arrive so you will never miss it",
      color: "bg-success"
    },
    {
      icon: Shield,
      title: "Traffic Updates",
      description: "Get real-time alerts from our partnered traffic officers",
      color: "bg-accent"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Receive alerts about delays, route changes, and arrival times",
      color: "bg-info"
    },
    {
      icon: Route,
      title: "Route Optimization",
      description: "AI-powered route planning for fastest and safest journeys",
      color: "bg-warning"
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
            Complete Transport Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From seat reservations to real-time tracking, we provide comprehensive 
            transport services that ensure safe, reliable, and convenient travel.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={service.title} className="border-0 shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-accent mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Additional Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={service.title} className="border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-primary mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              How Genda Works
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Book Your Seat</h4>
                  <p className="text-muted-foreground text-sm">Choose your route, select preferred seats, and make secure payment</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-success w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Track in Real-Time</h4>
                  <p className="text-muted-foreground text-sm">Monitor your bus location and receive arrival notifications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-warning w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Travel Safely</h4>
                  <p className="text-muted-foreground text-sm">Enjoy your journey with police-monitored safety and traffic updates</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="text-center space-y-4">
                <Users className="h-16 w-16 text-primary mx-auto" />
                <h4 className="text-2xl font-bold text-primary">Ready to Start?</h4>
                <p className="text-muted-foreground">Join thousands of satisfied passengers</p>
                <Button variant="hero" size="lg" className="mt-4">
                  Book Your First Ride
                </Button>
              </div>
            </div>
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