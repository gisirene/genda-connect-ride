import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daily Commuter",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "Genda has completely changed how I commute. The safety features and reliable drivers make me feel secure every time I travel. The police verification gives me extra peace of mind.",
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Professional Driver",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "As a driver, I appreciate the thorough verification process. It ensures all of us on the platform are legitimate, which creates a safer environment for everyone. Great earning opportunities too!",
      initials: "MC"
    },
    {
      name: "Officer Maria Rodriguez",
      role: "Traffic Police",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "The monitoring tools provided by Genda help us ensure transport safety across the city. The real-time data and incident reporting features are invaluable for maintaining order.",
      initials: "MR"
    },
    {
      name: "David Thompson",
      role: "Business Traveler",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "Professional, reliable, and safe. Genda delivers on all fronts. The app is intuitive and the service is consistently excellent. I recommend it to all my colleagues.",
      initials: "DT"
    },
    {
      name: "Lisa Wang",
      role: "University Student",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "Perfect for students! The fare structure is transparent and affordable. The safety features are especially important when traveling late from campus. Parents love the real-time tracking too.",
      initials: "LW"
    },
    {
      name: "Captain James Miller",
      role: "Police Captain",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "Genda's cooperation with law enforcement sets a new standard for transport platforms. The verification system and monitoring tools significantly improve public safety.",
      initials: "JM"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "5K+", label: "Verified Drivers" },
    { number: "100+", label: "Police Partners" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from passengers, drivers, and police officers who are part of the Genda community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="border-0 shadow-card hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Join Our Growing Community
          </h3>
          <p className="text-muted-foreground mb-6">
            Experience the future of safe, reliable transportation
          </p>
        </div>
      </div>
    </section>
  );
};