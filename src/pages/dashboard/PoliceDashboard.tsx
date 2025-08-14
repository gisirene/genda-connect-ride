import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Shield,
  AlertTriangle,
  Users,
  Car,
  MapPin,
  Clock,
  Phone,
  Search,
  CheckCircle,
  XCircle,
  Eye,
  FileText,
  TrendingUp
} from "lucide-react";

export const PoliceDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const todayStats = {
    activeDrivers: 342,
    totalTrips: 1567,
    incidents: 3,
    verifications: 12
  };

  const recentIncidents = [
    {
      id: "INC-001",
      type: "Traffic Violation",
      driver: "John Smith",
      location: "Main St & 5th Ave",
      time: "14:30",
      status: "investigating",
      severity: "medium"
    },
    {
      id: "INC-002",
      type: "Emergency Stop",
      driver: "Sarah Johnson",
      location: "Airport Road",
      time: "13:45",
      status: "resolved",
      severity: "low"
    },
    {
      id: "INC-003",
      type: "Route Deviation",
      driver: "Mike Wilson",
      location: "Downtown Plaza",
      time: "12:20",
      status: "reviewing",
      severity: "high"
    }
  ];

  const pendingVerifications = [
    {
      id: "VER-001",
      driver: "David Chen",
      licenseNumber: "DL-12345678",
      submitDate: "2024-01-15",
      status: "pending",
      documents: ["License", "Insurance", "Vehicle Registration"]
    },
    {
      id: "VER-002",
      driver: "Lisa Martinez",
      licenseNumber: "DL-87654321",
      submitDate: "2024-01-14",
      status: "review",
      documents: ["License", "Background Check", "Vehicle Inspection"]
    }
  ];

  const activeDrivers = [
    {
      id: "DRV-001",
      name: "Michael Johnson",
      vehicle: "Honda Civic - ABC-123",
      location: "Downtown Area",
      status: "on-trip",
      lastUpdate: "2 min ago"
    },
    {
      id: "DRV-002",
      name: "Sarah Williams",
      vehicle: "Toyota Camry - XYZ-789",
      location: "Airport Zone",
      status: "available",
      lastUpdate: "1 min ago"
    },
    {
      id: "DRV-003",
      name: "David Brown",
      vehicle: "Nissan Altima - DEF-456",
      location: "University District",
      status: "on-trip",
      lastUpdate: "5 min ago"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved": return "bg-success text-success-foreground";
      case "investigating": return "bg-warning text-warning-foreground";
      case "reviewing": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Police Monitoring Dashboard</h1>
              <p className="text-primary-foreground/80">Real-time transport safety oversight</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-destructive hover:bg-destructive/90">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Emergency Alert
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        {/* Today's Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Car className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{todayStats.activeDrivers}</div>
              <div className="text-sm text-muted-foreground">Active Drivers</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{todayStats.totalTrips}</div>
              <div className="text-sm text-muted-foreground">Total Trips Today</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-8 w-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{todayStats.incidents}</div>
              <div className="text-sm text-muted-foreground">Active Incidents</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-info mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{todayStats.verifications}</div>
              <div className="text-sm text-muted-foreground">Pending Verifications</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="incidents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="incidents">Incidents</TabsTrigger>
            <TabsTrigger value="drivers">Active Drivers</TabsTrigger>
            <TabsTrigger value="verifications">Verifications</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="incidents" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Recent Incidents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentIncidents.map((incident) => (
                    <div key={incident.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-primary">{incident.type}</h4>
                            <Badge className={getSeverityColor(incident.severity)}>
                              {incident.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Driver: {incident.driver} • ID: {incident.id}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3 inline mr-1" />
                            {incident.location} • <Clock className="h-3 w-3 inline mr-1" />{incident.time}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(incident.status)}>
                            {incident.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drivers" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-primary">
                    <Car className="h-5 w-5 mr-2" />
                    Active Drivers
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search drivers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeDrivers.map((driver) => (
                    <div key={driver.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                            {driver.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary">{driver.name}</h4>
                            <p className="text-sm text-muted-foreground">{driver.vehicle}</p>
                            <p className="text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3 inline mr-1" />
                              {driver.location}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={driver.status === 'on-trip' ? 'bg-success text-success-foreground' : 'bg-accent text-accent-foreground'}>
                            {driver.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{driver.lastUpdate}</p>
                          <div className="flex space-x-2 mt-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3 mr-1" />
                              Track
                            </Button>
                            <Button variant="outline" size="sm">
                              <Phone className="h-3 w-3 mr-1" />
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verifications" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Shield className="h-5 w-5 mr-2" />
                  Driver Verifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingVerifications.map((verification) => (
                    <div key={verification.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-primary">{verification.driver}</h4>
                          <p className="text-sm text-muted-foreground">
                            License: {verification.licenseNumber} • ID: {verification.id}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Submitted: {verification.submitDate}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {verification.documents.map((doc, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {doc}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={verification.status === 'pending' ? 'bg-warning text-warning-foreground' : 'bg-accent text-accent-foreground'}>
                            {verification.status}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="text-success border-success hover:bg-success hover:text-success-foreground">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Approve
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                              <XCircle className="h-3 w-3 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Weekly Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Trips</span>
                    <span className="font-semibold text-success">+12.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Safety Incidents</span>
                    <span className="font-semibold text-destructive">-8.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Driver Verifications</span>
                    <span className="font-semibold text-accent">+15.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Time</span>
                    <span className="font-semibold text-success">-5.1%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Safety Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Incident Resolution Rate</span>
                      <span>96.5%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-success h-2 rounded-full w-[96.5%]"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Driver Compliance</span>
                      <span>98.2%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-success h-2 rounded-full w-[98.2%]"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Emergency Response</span>
                      <span>94.8%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-warning h-2 rounded-full w-[94.8%]"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PoliceDashboard;