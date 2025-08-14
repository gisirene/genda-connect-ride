import { Button } from "@/components/ui/button";
import { Car, Shield, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-transport.jpg";

export const HeroSection = () => {
  const userTypes = [
    {
      icon: Users,
      title: "Passengers",
      description: "Safe, reliable rides at your fingertips",
      color: "bg-accent",
    },
    {
      icon: Car,
      title: "Drivers",
      description: "Earn with flexible driving opportunities",
      color: "bg-success",
    },
    {
      icon: Shield,
      title: "Police",
      description: "Monitor and ensure transport safety",
      color: "bg-warning",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connecting
              <span className="text-accent block">Transport</span>
              Excellence
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Genda bridges passengers, drivers, and law enforcement to create a 
              safer, more efficient transport ecosystem for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - User Type Cards */}
          <div className="grid gap-6">
            {userTypes.map((type, index) => (
              <div
                key={type.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`${type.color} p-3 rounded-lg`}>
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {type.title}
                    </h3>
                    <p className="text-white/80">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};