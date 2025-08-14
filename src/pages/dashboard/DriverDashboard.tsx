import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Car,
  DollarSign,
  Clock,
  Star,
  MapPin,
  Users,
  Navigation as NavigationIcon,
  Phone,
  MessageSquare,
  TrendingUp,
  Calendar
} from "lucide-react";

export const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);

  const todayStats = {
    earnings: 156.75,
    trips: 12,
    hours: 8.5,
    rating: 4.9
  };

  const recentTrips = [
    {
      id: "1",
      passenger: "Emily Johnson",
      from: "Downtown Plaza",
      to: "Airport Terminal 2",
      time: "2:30 PM",
      fare: "$25.50",
      rating: 5,
      status: "completed"
    },
    {
      id: "2",
      passenger: "Michael Chen",
      from: "University Campus",
      to: "Shopping Mall",
      time: "1:15 PM",
      fare: "$12.80",
      rating: 5,
      status: "completed"
    }
  ];

  const pendingRides = [
    {
      id: "1",
      passenger: "Sarah Wilson",
      pickup: "City Center Mall",
      destination: "Business District",
      distance: "2.3 mi",
      eta: "5 min",
      fare: "$18.50"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Driver Dashboard</h1>
              <p className="text-primary-foreground/80">Manage your rides and earnings</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Label htmlFor="online-status" className="text-primary-foreground">
                  {isOnline ? "Online" : "Offline"}
                </Label>
                <Switch
                  id="online-status"
                  checked={isOnline}
                  onCheckedChange={setIsOnline}
                />
              </div>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <MessageSquare className="h-4 w-4 mr-2" />
                Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Card */}
            <Card className={`shadow-card border-2 ${isOnline ? 'border-success bg-success/5' : 'border-muted'}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${isOnline ? 'bg-success animate-pulse' : 'bg-muted'}`}></div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {isOnline ? "You're Online" : "You're Offline"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isOnline ? "Ready to accept rides" : "Turn online to start earning"}
                      </p>
                    </div>
                  </div>
                  {!isOnline && (
                    <Button 
                      variant="hero" 
                      onClick={() => setIsOnline(true)}
                    >
                      Go Online
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Today's Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 text-success mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">${todayStats.earnings}</div>
                  <div className="text-sm text-muted-foreground">Today's Earnings</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Car className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{todayStats.trips}</div>
                  <div className="text-sm text-muted-foreground">Trips Completed</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-warning mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{todayStats.hours}h</div>
                  <div className="text-sm text-muted-foreground">Hours Online</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-warning mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{todayStats.rating}</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </CardContent>
              </Card>
            </div>

            {/* Pending Ride Requests */}
            {pendingRides.length > 0 && (
              <Card className="shadow-card border-accent/20 bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-accent flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Ride Requests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {pendingRides.map((ride) => (
                    <div key={ride.id} className="border border-accent/20 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-primary">
                            Pickup: {ride.passenger}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {ride.pickup} → {ride.destination}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {ride.distance} • {ride.eta} away
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-success text-lg">{ride.fare}</div>
                          <Badge variant="secondary">Pending</Badge>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="hero" className="flex-1">
                          Accept Ride
                        </Button>
                        <Button variant="outline">
                          Decline
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Recent Trips */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <NavigationIcon className="h-5 w-5 mr-2" />
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
                            Passenger: {trip.passenger} • {trip.time}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-success">{trip.fare}</div>
                          <Badge variant="secondary">
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
            {/* Vehicle Status */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Vehicle Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Vehicle Verified</span>
                  <Badge variant="secondary" className="bg-success text-success-foreground">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Insurance</span>
                  <Badge variant="secondary" className="bg-success text-success-foreground">
                    Valid
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">License</span>
                  <Badge variant="secondary" className="bg-success text-success-foreground">
                    Verified
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Update Vehicle Info
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Summary */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Earnings</span>
                  <span className="font-semibold text-success">$892.40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Trips</span>
                  <span className="font-semibold text-primary">67</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Hours Online</span>
                  <span className="font-semibold text-primary">42.5h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Average Rating</span>
                  <span className="font-semibold text-warning">4.9</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Earnings Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Navigation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* Driver Performance */}
            <Card className="shadow-card border-warning/20 bg-warning/5">
              <CardHeader>
                <CardTitle className="text-warning flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-warning">Gold</div>
                  <div className="text-sm text-muted-foreground">Driver Status</div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">85% to Platinum</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;