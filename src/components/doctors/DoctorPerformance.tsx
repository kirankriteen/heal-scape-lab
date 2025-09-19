import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  Star,
  Award,
  Activity,
  Heart
} from "lucide-react"

const performanceData = {
  patientsThisMonth: 142,
  patientsLastMonth: 128,
  averageConsultationTime: 28,
  targetConsultationTime: 30,
  patientSatisfaction: 4.8,
  onTimeAppointments: 94,
  completedSurgeries: 23,
  certifications: 8,
  researchPapers: 12,
  awards: 3
}

export function DoctorPerformance() {
  const patientGrowth = ((performanceData.patientsThisMonth - performanceData.patientsLastMonth) / performanceData.patientsLastMonth * 100).toFixed(1)
  const isPatientGrowthPositive = Number(patientGrowth) > 0

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-foreground">Performance Overview</h3>
        <p className="text-sm text-muted-foreground">Monthly performance metrics and achievements</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Patients This Month</p>
                <p className="text-2xl font-bold text-foreground">{performanceData.patientsThisMonth}</p>
                <div className="flex items-center gap-1 mt-1">
                  {isPatientGrowthPositive ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={`text-xs ${isPatientGrowthPositive ? 'text-success' : 'text-destructive'}`}>
                    {patientGrowth}% from last month
                  </span>
                </div>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Consultation</p>
                <p className="text-2xl font-bold text-foreground">{performanceData.averageConsultationTime}m</p>
                <p className="text-xs text-success mt-1">2m under target</p>
              </div>
              <Clock className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Patient Rating</p>
                <p className="text-2xl font-bold text-foreground">{performanceData.patientSatisfaction}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="text-xs text-muted-foreground">Excellent</span>
                </div>
              </div>
              <Heart className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">On-Time Rate</p>
                <p className="text-2xl font-bold text-foreground">{performanceData.onTimeAppointments}%</p>
                <p className="text-xs text-success mt-1">Above average</p>
              </div>
              <Activity className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Breakdown */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Monthly Goals Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Patient Consultations</span>
                <span className="text-sm text-muted-foreground">{performanceData.patientsThisMonth}/150</span>
              </div>
              <Progress value={(performanceData.patientsThisMonth / 150) * 100} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Surgeries Completed</span>
                <span className="text-sm text-muted-foreground">{performanceData.completedSurgeries}/25</span>
              </div>
              <Progress value={(performanceData.completedSurgeries / 25) * 100} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">On-Time Appointments</span>
                <span className="text-sm text-muted-foreground">{performanceData.onTimeAppointments}%</span>
              </div>
              <Progress value={performanceData.onTimeAppointments} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Achievements & Credentials</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Active Certifications</p>
                  <p className="text-xs text-muted-foreground">Board certified specializations</p>
                </div>
              </div>
              <span className="text-lg font-bold text-accent">{performanceData.certifications}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Research Papers</p>
                  <p className="text-xs text-muted-foreground">Published this year</p>
                </div>
              </div>
              <span className="text-lg font-bold text-primary">{performanceData.researchPapers}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm font-medium text-foreground">Awards Received</p>
                  <p className="text-xs text-muted-foreground">Professional recognition</p>
                </div>
              </div>
              <span className="text-lg font-bold text-success">{performanceData.awards}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}