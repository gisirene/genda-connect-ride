import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Clock,
  Car,
  Shield,
  Star,
  Navigation as NavigationIcon,
  Phone,
  MessageSquare,
  CreditCard,
  History
} from "lucide-react";

export const PassengerDashboard = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const recentTrips = [
    {
      id: "1",
      driver: "John Doe",
      from: "Downtown Plaza",
      to: "Airport Terminal 2",
      date: "Today, 2:30 PM",
      rating: 5,
      fare: "$25.50",
      status: "completed"
    },
    {
      id: "2",
      driver: "Sarah Wilson",
      from: "University Campus",
      to: "Shopping Mall",
      date: "Yesterday, 4:15 PM",
      rating: 5,
      fare: "$12.80",
      status: "completed"
    }
  ];

  const nearbyDrivers = [
    { id: "1", name: "Mike Johnson", rating: 4.9, eta: "3 min", distance: "0.2 mi" },
    { id: "2", name: "Lisa Chen", rating: 4.8, eta: "5 min", distance: "0.4 mi" },
    { id: "3", name: "David Brown", rating: 5.0, eta: "7 min", distance: "0.6 mi" }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-primary-foreground/80">Where would you like to go today?</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <MessageSquare className="h-4 w-4 mr-2" />
                Support
              </Button>
              <Button className="bg-destructive hover:bg-destructive/90">
                <Shield className="h-4 w-4 mr-2" />
                Emergency
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Booking Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Book a Ride */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Car className="h-5 w-5 mr-2" />
                  Book Your Ride
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="pickup"
                      placeholder="Enter pickup location"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <div className="relative">
                    <NavigationIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="destination"
                      placeholder="Where are you going?"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="hero" className="flex-1">
                    <Car className="h-4 w-4 mr-2" />
                    Find Ride
                  </Button>
                  <Button variant="outline">
                    <Clock className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Drivers */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Available Drivers Nearby</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyDrivers.map((driver) => (
                    <div key={driver.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                          {driver.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{driver.name}</h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span>{driver.rating}</span>
                            <span>•</span>
                            <span>{driver.distance}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-success">{driver.eta}</div>
                        <div className="text-sm text-muted-foreground">ETA</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Trips */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <History className="h-5 w-5 mr-2" />
                  Recent Trips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTrips.map((trip) => (
                    <div key={trip.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-primary">
                            {trip.from} → {trip.to}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Driver: {trip.driver} • {trip.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-primary">{trip.fare}</div>
                          <Badge variant="secondary" className="text-xs">
                            {trip.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(trip.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {trip.rating}.0
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Payment Methods
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Saved Places
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <History className="h-4 w-4 mr-2" />
                  Trip History
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Contacts
                </Button>
              </CardContent>
            </Card>

            {/* Safety Features */}
            <Card className="shadow-card border-success/20 bg-success/5">
              <CardHeader>
                <CardTitle className="text-success flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Safety First
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>All drivers are police-verified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Real-time GPS tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>24/7 emergency support</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full border-success text-success hover:bg-success hover:text-success-foreground">
                  Safety Guidelines
                </Button>
              </CardContent>
            </Card>

            {/* Current Balance */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Wallet Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">$47.50</div>
                <Button variant="accent" className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Funds
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDashboard;