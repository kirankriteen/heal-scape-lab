import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Stethoscope,
  Plus,
  Star,
  Clock,
  Users,
  Phone,
  Mail
} from "lucide-react"

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
          <h2 className="text-3xl font-bold text-foreground">Doctors</h2>
          <p className="text-muted-foreground mt-1">Manage medical staff and schedules</p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Add Doctor
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Doctors</p>
                <p className="text-2xl font-bold text-foreground">67</p>
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
              </div>
              <Users className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold text-accent">4.8</p>
              </div>
              <Star className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Doctors Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {doctorsData.map((doctor) => (
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
                <Badge className={getAvailabilityColor(doctor.availability)}>
                  {getAvailabilityText(doctor.availability)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Active Patients:</span>
                  <span className="font-medium text-foreground">{doctor.patients}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Next Available:</span>
                  <span className="font-medium text-foreground">{doctor.nextSlot}</span>
                </div>
                
                <div className="flex items-center gap-4 pt-2 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    {doctor.phone}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
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
    </div>
  )
}