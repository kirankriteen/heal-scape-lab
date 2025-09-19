import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  CreditCard,
  Plus,
  Search,
  DollarSign,
  TrendingUp,
  Calendar,
  User,
  FileText,
  Download,
  Eye
} from "lucide-react"
import { useState } from "react"

const billingData = [
  { 
    id: "INV-001", 
    patient: "Sarah Johnson", 
    amount: 450.00, 
    date: "2024-01-19", 
    status: "paid", 
    service: "Cardiology Consultation",
    dueDate: "2024-01-19"
  },
  { 
    id: "INV-002", 
    patient: "Michael Brown", 
    amount: 1250.00, 
    date: "2024-01-18", 
    status: "pending", 
    service: "MRI Scan + Analysis",
    dueDate: "2024-01-25"
  },
  { 
    id: "INV-003", 
    patient: "Emily Wilson", 
    amount: 320.00, 
    date: "2024-01-17", 
    status: "paid", 
    service: "Pediatric Checkup",
    dueDate: "2024-01-17"
  },
  { 
    id: "INV-004", 
    patient: "David Lee", 
    amount: 890.00, 
    date: "2024-01-16", 
    status: "overdue", 
    service: "Orthopedic Treatment",
    dueDate: "2024-01-10"
  },
  { 
    id: "INV-005", 
    patient: "Lisa Chen", 
    amount: 275.00, 
    date: "2024-01-15", 
    status: "pending", 
    service: "Neurology Consultation",
    dueDate: "2024-01-22"
  },
]

export default function Billing() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBilling = billingData.filter(bill =>
    bill.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.service.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-success text-success-foreground"
      case "pending": return "bg-warning text-warning-foreground"
      case "overdue": return "bg-destructive text-destructive-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const totalRevenue = billingData.reduce((sum, bill) => sum + bill.amount, 0)
  const pendingAmount = billingData.filter(bill => bill.status === "pending").reduce((sum, bill) => sum + bill.amount, 0)
  const overdueAmount = billingData.filter(bill => bill.status === "overdue").reduce((sum, bill) => sum + bill.amount, 0)
  const paidAmount = billingData.filter(bill => bill.status === "paid").reduce((sum, bill) => sum + bill.amount, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Billing & Payments</h2>
          <p className="text-muted-foreground mt-1">Manage invoices, payments, and financial records</p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      {/* Financial Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold text-foreground">${totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Paid</p>
                <p className="text-2xl font-bold text-success">${paidAmount.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-warning">${pendingAmount.toLocaleString()}</p>
              </div>
              <Calendar className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overdue</p>
                <p className="text-2xl font-bold text-destructive">${overdueAmount.toLocaleString()}</p>
              </div>
              <CreditCard className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Actions */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search invoices by patient, ID, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Billing Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredBilling.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No invoices found</h3>
                <p className="text-muted-foreground">
                  {searchTerm ? "No invoices match your search criteria." : "Start by creating your first invoice."}
                </p>
              </div>
            ) : (
              filteredBilling.map((bill) => (
                <div key={bill.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-foreground">{bill.id}</h3>
                        <Badge className={getStatusColor(bill.status)}>
                          {bill.status}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span className="font-medium">{bill.patient}</span>
                          <span>•</span>
                          <span>{bill.service}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Date: {bill.date}</span>
                          <span>•</span>
                          <span>Due: {bill.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">${bill.amount.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      {bill.status === "pending" && (
                        <Button size="sm" className="bg-success hover:bg-success/90">
                          Mark Paid
                        </Button>
                      )}
                      {bill.status === "overdue" && (
                        <Button size="sm" variant="destructive">
                          Send Reminder
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}