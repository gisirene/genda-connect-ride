import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Safety First",
      description: "Every feature is designed with passenger and driver safety as the top priority.",
      color: "bg-destructive"
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "Building stronger communities through reliable and accessible transportation.",
      color: "bg-success"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to solve real-world transport challenges.",
      color: "bg-accent"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional service quality at every touchpoint.",
      color: "bg-warning"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "100+", label: "Routes Covered" },
    { number: "98%", label: "On-Time Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">About Genda</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Transforming Transportation
                <span className="block text-accent">One Journey at a Time</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                Genda is more than just a transport platform. We're building a ecosystem 
                that connects passengers, drivers, and law enforcement to create safer, 
                more efficient urban mobility for everyone.
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

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-accent">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-accent p-3 rounded-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To revolutionize urban transportation by creating a safe, reliable, and 
                    efficient platform that seamlessly connects passengers with drivers while 
                    maintaining the highest safety standards through police oversight and 
                    real-time monitoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-success">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-success p-3 rounded-lg">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading transport platform that sets the global standard 
                    for safety, innovation, and community-driven mobility solutions. We envision 
                    cities where transportation is not just efficient, but also contributes to 
                    stronger, safer communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These values guide every decision we make and every feature we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="border-0 shadow-card text-center hover:shadow-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-primary text-center mb-12">Our Story</h2>
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Genda was born from a simple observation: urban transportation needed to be 
                  safer, more reliable, and more connected. Our founders, coming from backgrounds 
                  in technology, transportation, and public safety, saw an opportunity to bridge 
                  the gap between these crucial sectors.
                </p>
                <p className="text-lg">
                  What started as a vision to improve bus booking and tracking has evolved into 
                  a comprehensive platform that brings together passengers, drivers, and law 
                  enforcement in an unprecedented way. By creating real-time connections and 
                  transparency, we're not just improving transportation – we're building safer communities.
                </p>
                <p className="text-lg">
                  Today, Genda serves thousands of users across multiple cities, but our mission 
                  remains the same: to make every journey safer, more predictable, and more 
                  connected to the community it serves.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;