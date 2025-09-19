import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change?: string
  changeType?: "increase" | "decrease"
  icon: LucideIcon
  iconColor?: string
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  changeType = "increase", 
  icon: Icon,
  iconColor = "text-primary"
}: StatsCardProps) {
  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {change && (
          <p className={`text-xs ${
            changeType === "increase" ? "text-success" : "text-destructive"
          }`}>
            {changeType === "increase" ? "+" : "-"}{change} from last month
          </p>
        )}
      </CardContent>
    </Card>
  )
}