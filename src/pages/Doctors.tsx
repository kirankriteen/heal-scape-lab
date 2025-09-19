import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { 
  Stethoscope,
  Plus,
  Star,
  Clock,
  Users,
  Phone,
  Mail,
  Search,
  Filter,
  Calendar,
  TrendingUp,
  Shield,
  Award,
  MoreVertical
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DoctorSchedule } from "@/components/doctors/DoctorSchedule"
import { DoctorPerformance } from "@/components/doctors/DoctorPerformance"
import { DutyRoster } from "@/components/doctors/DutyRoster"

const doctorsData = [
  { 
    id: 1, 
    name: "Dr. Sarah Smith", 
    specialization: "Cardiology", 
    experience: "15 years",
    rating: 4.9,
    patients: 142,
    availability: "available",
    phone: "+1 (555) 123-4567",
    email: "dr.smith@hospital.com",
    nextSlot: "2:00 PM"
  },
  { 
    id: 2, 
    name: "Dr. Michael Davis", 
    specialization: "Neurology", 
    experience: "12 years",
    rating: 4.8,
    patients: 98,
    availability: "busy",
    phone: "+1 (555) 234-5678",
    email: "dr.davis@hospital.com",
    nextSlot: "4:30 PM"
  },
  { 
    id: 3, 
    name: "Dr. Emily Johnson", 
    specialization: "Pediatrics", 
    experience: "8 years",
    rating: 4.9,
    patients: 187,
    availability: "available",
    phone: "+1 (555) 345-6789",
    email: "dr.johnson@hospital.com",
    nextSlot: "10:15 AM"
  },
  { 
    id: 4, 
    name: "Dr. James Wilson", 
    specialization: "Orthopedics", 
    experience: "20 years",
    rating: 4.7,
    patients: 156,
    availability: "off-duty",
    phone: "+1 (555) 456-7890",
    email: "dr.wilson@hospital.com",
    nextSlot: "Tomorrow 9:00 AM"
  },
]

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTab, setSelectedTab] = useState("overview")

  const filteredDoctors = doctorsData.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "available": return "bg-success text-success-foreground"
      case "busy": return "bg-warning text-warning-foreground"
      case "off-duty": return "bg-muted text-muted-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getAvailabilityText = (status: string) => {
    switch (status) {
      case "available": return "Available"
      case "busy": return "Busy"
      case "off-duty": return "Off Duty"
      default: return "Unknown"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Doctors Management</h2>
          <p className="text-muted-foreground mt-1">Comprehensive medical staff management and analytics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Duty Roster
          </Button>
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            Add Doctor
          </Button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="roster">Duty Roster</TabsTrigger>
          <TabsTrigger value="directory">Directory</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Doctors</p>
                    <p className="text-2xl font-bold text-foreground">67</p>
                    <p className="text-xs text-success mt-1">+3 this month</p>
                  </div>
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Available Now</p>
                    <p className="text-2xl font-bold text-success">23</p>
                    <p className="text-xs text-muted-foreground mt-1">Ready for patients</p>
                  </div>
                  <Clock className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">On Duty</p>
                    <p className="text-2xl font-bold text-warning">31</p>
                    <p className="text-xs text-muted-foreground mt-1">Active shifts</p>
                  </div>
                  <Users className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg Rating</p>
                    <p className="text-2xl font-bold text-accent">4.8</p>
                    <p className="text-xs text-success mt-1">
                      <TrendingUp className="h-3 w-3 inline mr-1" />
                      +0.2 this month
                    </p>
                  </div>
                  <Star className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Schedule Management</h3>
                    <p className="text-sm text-muted-foreground">Manage shifts and appointments</p>
                  </div>
                  <Button size="sm">Manage</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Performance Analytics</h3>
                    <p className="text-sm text-muted-foreground">Track doctor performance</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-success/20 bg-success/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                    <Shield className="h-5 w-5 text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Emergency Roster</h3>
                    <p className="text-sm text-muted-foreground">On-call duty management</p>
                  </div>
                  <Button size="sm" variant="outline">Setup</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <DoctorSchedule />
        </TabsContent>

        <TabsContent value="performance">
          <DoctorPerformance />
        </TabsContent>

        <TabsContent value="roster">
          <DutyRoster />
        </TabsContent>

        <TabsContent value="directory" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search doctors by name or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Doctors Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Stethoscope className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">{doctor.name}</CardTitle>
                        <p className="text-secondary font-medium">{doctor.specialization}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="text-sm text-foreground">{doctor.rating}</span>
                          <span className="text-sm text-muted-foreground">• {doctor.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getAvailabilityColor(doctor.availability)}>
                        {getAvailabilityText(doctor.availability)}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>View Schedule</DropdownMenuItem>
                          <DropdownMenuItem>Performance Report</DropdownMenuItem>
                          <DropdownMenuItem>Edit Information</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Active Patients:</span>
                        <span className="font-medium text-foreground ml-2">{doctor.patients}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Next Slot:</span>
                        <span className="font-medium text-foreground ml-2">{doctor.nextSlot}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-2 border-t border-border text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {doctor.phone}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {doctor.email}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary-hover">
                        View Schedule
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <Stethoscope className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No doctors found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchTerm ? "No doctors match your search criteria." : "Start by adding your first doctor."}
                  </p>
                  <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Doctor
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}