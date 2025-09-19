import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar,
  Clock,
  User,
  MapPin,
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react"

const scheduleData = [
  {
    time: "8:00 AM",
    duration: "30 min",
    type: "appointment",
    patient: "John Smith",
    room: "Room 201",
    status: "confirmed",
    notes: "Follow-up consultation"
  },
  {
    time: "9:00 AM",
    duration: "45 min",
    type: "surgery",
    patient: "Sarah Johnson",
    room: "OR 3",
    status: "in-progress",
    notes: "Cardiac procedure"
  },
  {
    time: "11:00 AM",
    duration: "30 min",
    type: "appointment",
    patient: "Michael Brown",
    room: "Room 205",
    status: "pending",
    notes: "Initial consultation"
  },
  {
    time: "2:00 PM",
    duration: "60 min",
    type: "rounds",
    patient: "Ward A Patients",
    room: "Ward A",
    status: "scheduled",
    notes: "Daily rounds"
  },
  {
    time: "4:00 PM",
    duration: "30 min",
    type: "appointment",
    patient: "Emily Davis",
    room: "Room 203",
    status: "confirmed",
    notes: "Medication review"
  }
]

export function DoctorSchedule() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed": return <CheckCircle className="h-4 w-4 text-success" />
      case "in-progress": return <Clock className="h-4 w-4 text-warning" />
      case "pending": return <AlertCircle className="h-4 w-4 text-secondary" />
      case "cancelled": return <XCircle className="h-4 w-4 text-destructive" />
      default: return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-success/10 text-success border-success/20"
      case "in-progress": return "bg-warning/10 text-warning border-warning/20"
      case "pending": return "bg-secondary/10 text-secondary border-secondary/20"
      case "cancelled": return "bg-destructive/10 text-destructive border-destructive/20"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "surgery": return "bg-destructive/10 text-destructive border-destructive/20"
      case "appointment": return "bg-primary/10 text-primary border-primary/20"
      case "rounds": return "bg-accent/10 text-accent border-accent/20"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">Today's Schedule</h3>
          <p className="text-sm text-muted-foreground">Tuesday, January 16, 2024</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            View Calendar
          </Button>
          <Button size="sm">
            Add Appointment
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {scheduleData.map((item, index) => (
          <Card key={index} className="border border-border hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[60px]">
                    <div className="text-sm font-medium text-foreground">{item.time}</div>
                    <div className="text-xs text-muted-foreground">{item.duration}</div>
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getTypeColor(item.type)}>
                        {item.type}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(item.status)}>
                        {getStatusIcon(item.status)}
                        {item.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3 text-muted-foreground" />
                        <span className="font-medium text-foreground">{item.patient}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{item.room}</span>
                      </div>
                    </div>
                    
                    {item.notes && (
                      <p className="text-xs text-muted-foreground">{item.notes}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    Edit
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