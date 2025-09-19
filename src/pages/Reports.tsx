import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText,
  Download,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
  Clock
} from "lucide-react"

const reportsData = [
  {
    id: 1,
    title: "Monthly Patient Report",
    description: "Comprehensive overview of patient admissions, treatments, and outcomes",
    type: "Patient Analytics",
    lastGenerated: "2024-01-19",
    status: "ready",
    icon: Users,
    color: "text-primary"
  },
  {
    id: 2,
    title: "Revenue Analysis",
    description: "Financial performance, billing statistics, and payment tracking",
    type: "Financial Report",
    lastGenerated: "2024-01-18",
    status: "ready",
    icon: DollarSign,
    color: "text-success"
  },
  {
    id: 3,
    title: "Doctor Performance Dashboard",
    description: "Medical staff productivity, patient satisfaction, and schedule efficiency",
    type: "Staff Analytics",
    lastGenerated: "2024-01-17",
    status: "generating",
    icon: Activity,
    color: "text-secondary"
  },
  {
    id: 4,
    title: "Appointment Trends",
    description: "Scheduling patterns, peak hours, and capacity utilization analysis",
    type: "Operations Report",
    lastGenerated: "2024-01-16",
    status: "ready",
    icon: Calendar,
    color: "text-accent"
  },
  {
    id: 5,
    title: "Treatment Outcomes Report",
    description: "Success rates, recovery times, and clinical effectiveness metrics",
    type: "Clinical Report",
    lastGenerated: "2024-01-15",
    status: "pending",
    icon: TrendingUp,
    color: "text-warning"
  },
  {
    id: 6,
    title: "Equipment Utilization",
    description: "Medical equipment usage, maintenance schedules, and efficiency tracking",
    type: "Asset Report",
    lastGenerated: "2024-01-14",
    status: "ready",
    icon: BarChart3,
    color: "text-muted-foreground"
  }
]

const quickStats = [
  { title: "Reports Generated", value: "156", change: "+12%", icon: FileText, color: "text-primary" },
  { title: "Data Points Analyzed", value: "2.4M", change: "+18%", icon: PieChart, color: "text-secondary" },
  { title: "Avg Generation Time", value: "2.3 min", change: "-8%", icon: Clock, color: "text-accent" },
  { title: "Report Accuracy", value: "99.7%", change: "+0.2%", icon: TrendingUp, color: "text-success" }
]

export default function Reports() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready": return "bg-success text-success-foreground"
      case "generating": return "bg-warning text-warning-foreground"
      case "pending": return "bg-muted text-muted-foreground"
      case "error": return "bg-destructive text-destructive-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "ready": return "Ready"
      case "generating": return "Generating..."
      case "pending": return "Pending"
      case "error": return "Error"
      default: return "Unknown"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Reports & Analytics</h2>
          <p className="text-muted-foreground mt-1">Generate insights and track hospital performance metrics</p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
          <FileText className="h-4 w-4 mr-2" />
          Create Report
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-success">{stat.change} from last month</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover:shadow-md transition-all duration-300 cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Patient Summary</h3>
                <p className="text-sm text-muted-foreground">Generate monthly patient report</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-300 cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                <DollarSign className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Financial Overview</h3>
                <p className="text-sm text-muted-foreground">Revenue and billing analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-300 cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Activity className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Performance Metrics</h3>
                <p className="text-sm text-muted-foreground">Staff and operational analytics</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground">Available Reports</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {reportsData.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${report.color.replace('text-', '')}/10`}>
                    <report.icon className={`h-6 w-6 ${report.color}`} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-foreground">{report.title}</h3>
                      <Badge className={getStatusColor(report.status)}>
                        {getStatusText(report.status)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Type: {report.type}</span>
                      <span>•</span>
                      <span>Last generated: {report.lastGenerated}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    disabled={report.status === "generating"}
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary-hover"
                    disabled={report.status === "generating"}
                  >
                    {report.status === "generating" ? "Generating..." : "Regenerate"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Report Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <PieChart className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-foreground">Custom Analytics Dashboard</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Create custom reports with specific metrics and date ranges</p>
              <Button size="sm" variant="outline" className="w-full">
                Create Custom Report
              </Button>
            </div>

            <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="h-5 w-5 text-secondary" />
                <h4 className="font-medium text-foreground">Scheduled Reports</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Set up automated report generation and email delivery</p>
              <Button size="sm" variant="outline" className="w-full">
                Schedule Reports
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}