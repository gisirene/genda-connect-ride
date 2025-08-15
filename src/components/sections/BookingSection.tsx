import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// For now, we'll create a placeholder map component
// In production, you would add Mapbox integration here
const MapPlaceholder = () => {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-success/20 rounded-lg flex items-center justify-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-success rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-warning rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-info rounded-full animate-pulse delay-1500"></div>
      </div>
      
      <div className="text-center z-10">
        <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-primary mb-2">Interactive Map</h3>
        <p className="text-muted-foreground mb-4">Real-time bus tracking and route selection</p>
        <Badge className="bg-accent text-accent-foreground">Live Tracking Active</Badge>
      </div>
      
      {/* Simulated bus icons */}
      <div className="absolute top-1/3 left-1/4 flex items-center space-x-2 bg-white/90 rounded-full px-3 py-1 shadow-lg">
        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
        <span className="text-xs font-medium">Bus #101</span>
      </div>
      
      <div className="absolute bottom-1/3 right-1/3 flex items-center space-x-2 bg-white/90 rounded-full px-3 py-1 shadow-lg">
        <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
        <span className="text-xs font-medium">Bus #205</span>
      </div>
    </div>
  );
};

export const BookingSection = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { toast } = useToast();

  const handleSearchRoutes = () => {
    if (!fromLocation || !toLocation) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please enter both pickup and destination locations.",
      });
      return;
    }
    
    toast({
      title: "Searching Routes",
      description: "Finding the best routes for your journey...",
    });
  };

  const handleSelectSeats = (routeId: string) => {
    toast({
      title: "Seat Selection",
      description: "Opening seat selection for this route...",
    });
  };

  const availableRoutes = [
    {
      id: "route-1",
      from: "City Center",
      to: "Airport",
      duration: "45 min",
      price: "$12.50",
      busNumber: "101",
      nextDeparture: "14:30",
      availableSeats: 23
    },
    {
      id: "route-2", 
      from: "University",
      to: "Downtown",
      duration: "25 min",
      price: "$8.00",
      busNumber: "205",
      nextDeparture: "14:45",
      availableSeats: 15
    },
    {
      id: "route-3",
      from: "Mall District",
      to: "Business Hub",
      duration: "35 min", 
      price: "$10.00",
      busNumber: "312",
      nextDeparture: "15:00",
      availableSeats: 31
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Book & Track</Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Your Journey Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select your route, book your seat, and track your bus in real-time. 
            Experience the future of public transportation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="shadow-accent border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Navigation className="h-5 w-5 mr-2" />
                Book Your Seat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from">From</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="from"
                      placeholder="Pickup location"
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <div className="relative">
                    <Navigation className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="to"
                      placeholder="Destination"
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Travel Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>
              </div>

              <Button 
                variant="hero" 
                className="w-full" 
                size="lg"
                onClick={handleSearchRoutes}
              >
                Search Routes
              </Button>

              {/* Available Routes */}
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">Available Routes</h4>
                {availableRoutes.map((route) => (
                  <Card key={route.id} className="border border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h5 className="font-semibold text-primary">
                            {route.from} → {route.to}
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Bus #{route.busNumber} • {route.duration}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-success">{route.price}</div>
                          <Badge variant="secondary" className="text-xs">
                            {route.availableSeats} seats left
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Next: {route.nextDeparture}</span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleSelectSeats(route.id)}
                        >
                          Select Seats
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Map Section */}
          <div className="space-y-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="h-5 w-5 mr-2" />
                  Live Tracking Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MapPlaceholder />
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <Users className="h-8 w-8 text-success mx-auto mb-2" />
                    <div className="text-2xl font-bold text-success">12</div>
                    <div className="text-sm text-muted-foreground">Active Buses</div>
                  </div>
                  
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-sm text-muted-foreground">On-Time Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card border-0 bg-gradient-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4">Today's Service</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Routes</span>
                    <span className="font-semibold text-primary">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Completed Trips</span>
                    <span className="font-semibold text-success">342</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Average Delay</span>
                    <span className="font-semibold text-accent">2.3 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};