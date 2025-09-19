import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar,
  Clock,
  AlertTriangle,
  Moon,
  Sun,
  Sunset,
  Phone,
  Shield
} from "lucide-react"

const rosterData = [
  {
    date: "Today",
    day: "Tuesday",
    shift: "morning",
    time: "6:00 AM - 2:00 PM",
    ward: "Cardiology",
    type: "regular",
    onCall: false
  },
  {
    date: "Tomorrow",
    day: "Wednesday", 
    shift: "evening",
    time: "2:00 PM - 10:00 PM",
    ward: "Emergency",
    type: "regular",
    onCall: true
  },
  {
    date: "Jan 18",
    day: "Thursday",
    shift: "night",
    time: "10:00 PM - 6:00 AM",
    ward: "ICU",
    type: "oncall",
    onCall: true
  },
  {
    date: "Jan 19",
    day: "Friday",
    shift: "morning",
    time: "6:00 AM - 2:00 PM",
    ward: "Cardiology",
    type: "regular",
    onCall: false
  },
  {
    date: "Jan 20",
    day: "Saturday",
    shift: "off",
    time: "Off Duty",
    ward: "-",
    type: "off",
    onCall: false
  },
  {
    date: "Jan 21",
    day: "Sunday",
    shift: "emergency",
    time: "On Call",
    ward: "Emergency",
    type: "emergency",
    onCall: true
  }
]

const upcomingOnCall = [
  { date: "Jan 18", time: "10:00 PM", duration: "8 hours", department: "ICU" },
  { date: "Jan 21", time: "All Day", duration: "24 hours", department: "Emergency" },
  { date: "Jan 28", time: "6:00 PM", duration: "12 hours", department: "Surgery" }
]

export function DutyRoster() {
  const getShiftIcon = (shift: string) => {
    switch (shift) {
      case "morning": return <Sun className="h-4 w-4" />
      case "evening": return <Sunset className="h-4 w-4" />
      case "night": return <Moon className="h-4 w-4" />
      case "emergency": return <AlertTriangle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const getShiftColor = (shift: string, type: string) => {
    if (type === "off") return "bg-muted text-muted-foreground"
    if (type === "emergency") return "bg-destructive/10 text-destructive border-destructive/20"
    if (type === "oncall") return "bg-warning/10 text-warning border-warning/20"
    
    switch (shift) {
      case "morning": return "bg-success/10 text-success border-success/20"
      case "evening": return "bg-primary/10 text-primary border-primary/20"  
      case "night": return "bg-secondary/10 text-secondary border-secondary/20"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "emergency": return "bg-destructive text-destructive-foreground"
      case "oncall": return "bg-warning text-warning-foreground"
      case "off": return "bg-muted text-muted-foreground"
      default: return "bg-primary text-primary-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">Duty Roster</h3>
          <p className="text-sm text-muted-foreground">Your upcoming shifts and on-call duties</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            View Full Calendar
          </Button>
          <Button size="sm">
            Request Shift Change
          </Button>
        </div>
      </div>

      {/* Weekly Roster */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">This Week's Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {rosterData.map((shift, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-medium text-foreground">{shift.date}</div>
                    <div className="text-xs text-muted-foreground">{shift.day}</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={getShiftColor(shift.shift, shift.type)}>
                      {getShiftIcon(shift.shift)}
                      {shift.shift === "off" ? "Off" : shift.shift}
                    </Badge>
                    {shift.onCall && (
                      <Badge className="bg-warning text-warning-foreground">
                        <Phone className="h-3 w-3 mr-1" />
                        On Call
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">{shift.time}</div>
                    <div className="text-xs text-muted-foreground">{shift.ward}</div>
                  </div>
                </div>
                
                <Badge className={getTypeColor(shift.type)}>
                  {shift.type === "off" ? "Off Duty" : shift.type === "oncall" ? "On Call" : shift.type === "emergency" ? "Emergency" : "Regular"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming On-Call Duties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Shield className="h-5 w-5" />
            Upcoming On-Call Duties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingOnCall.map((duty, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/20">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <AlertTriangle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{duty.date} - {duty.time}</div>
                    <div className="text-xs text-muted-foreground">{duty.department} • {duty.duration}</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}