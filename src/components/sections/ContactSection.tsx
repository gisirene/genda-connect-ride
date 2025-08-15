import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send
} from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Transport Hub Street", "Central Business District", "City, Country 12345"],
      color: "bg-accent"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Emergency: 911"],
      color: "bg-success"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@genda.com", "support@genda.com", "safety@genda.com"],
      color: "bg-warning"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 8:00 PM", "Sat: 9:00 AM - 6:00 PM", "Sun: 10:00 AM - 4:00 PM"],
      color: "bg-info"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We'll get back to you soon.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  const handleFAQ = () => {
    toast({
      title: "FAQ Section",
      description: "Frequently Asked Questions section coming soon!",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Contact Us</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our services? Need support? We're here to help. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={item.title} className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${item.color} p-3 rounded-lg flex-shrink-0`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">
                          {item.title}
                        </h3>
                        <div className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="mt-6 border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageSquare className="h-5 w-5 text-destructive" />
                  <h3 className="font-semibold text-destructive">Emergency Support</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  For immediate safety concerns or emergencies during rides:
                </p>
                <Button variant="destructive" size="sm" className="w-full">
                  Emergency Hotline: 911
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-accent">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required 
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Note */}
        <div className="mt-16 text-center bg-gradient-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-muted-foreground mb-6">
            Looking for quick answers? Check out our FAQ section for common questions 
            about registration, safety protocols, and platform features.
          </p>
          <Button variant="outline" onClick={handleFAQ}>
            View FAQ
          </Button>
        </div>
      </div>
    </section>
  );
};