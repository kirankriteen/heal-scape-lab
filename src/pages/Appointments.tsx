import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar,
  Plus,
  Clock,
  User,
  Stethoscope,
  Filter,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"

const appointmentsData = [
  { id: 1, patient: "Sarah Johnson", doctor: "Dr. Smith", time: "09:00 AM", date: "2024-01-19", type: "Consultation", status: "confirmed", duration: "30 min" },
  { id: 2, patient: "Michael Brown", doctor: "Dr. Davis", time: "10:30 AM", date: "2024-01-19", type: "Follow-up", status: "pending", duration: "15 min" },
  { id: 3, patient: "Emily Wilson", doctor: "Dr. Johnson", time: "11:15 AM", date: "2024-01-19", type: "Checkup", status: "confirmed", duration: "45 min" },
  { id: 4, patient: "David Lee", doctor: "Dr. Wilson", time: "02:00 PM", date: "2024-01-19", type: "Treatment", status: "completed", duration: "60 min" },
  { id: 5, patient: "Lisa Chen", doctor: "Dr. Anderson", time: "03:30 PM", date: "2024-01-19", type: "Consultation", status: "confirmed", duration: "30 min" },
  { id: 6, patient: "John Doe", doctor: "Dr. Smith", time: "10:00 AM", date: "2024-01-20", type: "Surgery", status: "scheduled", duration: "120 min" },
  { id: 7, patient: "Jane Smith", doctor: "Dr. Davis", time: "02:30 PM", date: "2024-01-20", type: "Consultation", status: "pending", duration: "30 min" },
]

export default function Appointments() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("today")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-success text-success-foreground"
      case "pending": return "bg-warning text-warning-foreground"
      case "completed": return "bg-muted text-muted-foreground"
      case "scheduled": return "bg-primary text-primary-foreground"
      case "cancelled": return "bg-destructive text-destructive-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getTodayAppointments = () => {
    return appointmentsData.filter(apt => apt.date === "2024-01-19")
  }

  const getUpcomingAppointments = () => {
    return appointmentsData.filter(apt => new Date(apt.date) > new Date("2024-01-19"))
  }

  const filterAppointments = (appointments: typeof appointmentsData) => {
    return appointments.filter(appointment =>
      appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const todayAppointments = filterAppointments(getTodayAppointments())
  const upcomingAppointments = filterAppointments(getUpcomingAppointments())

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Appointments</h2>
          <p className="text-muted-foreground mt-1">Manage patient appointments and scheduling</p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Appointment
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search appointments by patient, doctor, or type..."
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

      {/* Appointment Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="today">Today ({todayAppointments.length})</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming ({upcomingAppointments.length})</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          {todayAppointments.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No appointments today</h3>
                  <p className="text-muted-foreground">The schedule is clear for today.</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            todayAppointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-foreground">{appointment.time}</h3>
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-3 w-3" />
                            <span className="font-medium">{appointment.patient}</span>
                            <span>•</span>
                            <Stethoscope className="h-3 w-3" />
                            <span>{appointment.doctor}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Type: {appointment.type}</span>
                            <span>•</span>
                            <span>Duration: {appointment.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      {appointment.status === "pending" && (
                        <Button size="sm" className="bg-success hover:bg-success/90">
                          Confirm
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingAppointments.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No upcoming appointments</h3>
                  <p className="text-muted-foreground">Schedule new appointments to see them here.</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                        <Calendar className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-foreground">{appointment.date} at {appointment.time}</h3>
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-3 w-3" />
                            <span className="font-medium">{appointment.patient}</span>
                            <span>•</span>
                            <Stethoscope className="h-3 w-3" />
                            <span>{appointment.doctor}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Type: {appointment.type}</span>
                            <span>•</span>
                            <span>Duration: {appointment.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                      <Button size="sm" variant="destructive">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Appointment History</h3>
                <p className="text-muted-foreground">View past appointments and records here.</p>
                <Button className="mt-4" variant="outline">
                  Load History
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}