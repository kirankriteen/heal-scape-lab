import { StatsCard } from "@/components/dashboard/StatsCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Stethoscope, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Clock,
  Plus
} from "lucide-react"

export default function Dashboard() {
  const stats = [
    {
      title: "Total Patients",
      value: "2,847",
      change: "12%",
      changeType: "increase" as const,
      icon: Users,
      iconColor: "text-primary"
    },
    {
      title: "Active Doctors",
      value: "67",
      change: "3%",
      changeType: "increase" as const,
      icon: Stethoscope,
      iconColor: "text-secondary"
    },
    {
      title: "Today's Appointments",
      value: "124",
      change: "8%",
      changeType: "increase" as const,
      icon: Calendar,
      iconColor: "text-accent"
    },
    {
      title: "Monthly Revenue",
      value: "$847,290",
      change: "15%",
      changeType: "increase" as const,
      icon: DollarSign,
      iconColor: "text-success"
    }
  ]

  const recentAppointments = [
    { id: 1, patient: "Sarah Johnson", doctor: "Dr. Smith", time: "09:00 AM", status: "confirmed" },
    { id: 2, patient: "Michael Brown", doctor: "Dr. Davis", time: "10:30 AM", status: "pending" },
    { id: 3, patient: "Emily Wilson", doctor: "Dr. Johnson", time: "11:15 AM", status: "confirmed" },
    { id: 4, patient: "David Lee", doctor: "Dr. Wilson", time: "02:00 PM", status: "completed" },
    { id: 5, patient: "Lisa Chen", doctor: "Dr. Anderson", time: "03:30 PM", status: "confirmed" },
  ]

  const quickActions = [
    { title: "Add New Patient", icon: Users, color: "bg-primary" },
    { title: "Schedule Appointment", icon: Calendar, color: "bg-secondary" },
    { title: "Doctor Availability", icon: Stethoscope, color: "bg-accent" },
    { title: "Generate Report", icon: TrendingUp, color: "bg-success" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-success text-success-foreground"
      case "pending": return "bg-warning text-warning-foreground"
      case "completed": return "bg-muted text-muted-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Quick Add
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Appointments */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-foreground">Recent Appointments</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{appointment.patient}</p>
                      <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-foreground">{appointment.time}</span>
                    <Badge className={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start h-auto p-4 hover:bg-muted"
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${action.color} mr-3`}>
                    <action.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">{action.title}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}