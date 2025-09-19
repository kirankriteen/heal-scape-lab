import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search,
  Plus,
  Filter,
  MoreVertical,
  User,
  Phone,
  Mail,
  Calendar
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const patientsData = [
  { id: 1, name: "Sarah Johnson", age: 32, phone: "+1 (555) 123-4567", email: "sarah.j@email.com", lastVisit: "2024-01-15", status: "active", condition: "Hypertension" },
  { id: 2, name: "Michael Brown", age: 45, phone: "+1 (555) 234-5678", email: "michael.b@email.com", lastVisit: "2024-01-12", status: "active", condition: "Diabetes" },
  { id: 3, name: "Emily Wilson", age: 28, phone: "+1 (555) 345-6789", email: "emily.w@email.com", lastVisit: "2024-01-10", status: "inactive", condition: "Allergies" },
  { id: 4, name: "David Lee", age: 51, phone: "+1 (555) 456-7890", email: "david.l@email.com", lastVisit: "2024-01-08", status: "active", condition: "Arthritis" },
  { id: 5, name: "Lisa Chen", age: 37, phone: "+1 (555) 567-8901", email: "lisa.c@email.com", lastVisit: "2024-01-05", status: "active", condition: "Migraine" },
]

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPatients = patientsData.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    return status === "active" 
      ? "bg-success text-success-foreground" 
      : "bg-muted text-muted-foreground"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Patients</h2>
          <p className="text-muted-foreground mt-1">Manage patient records and information</p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Add Patient
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search patients by name, email, or condition..."
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

      {/* Patients List */}
      <div className="grid gap-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-md transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-foreground">{patient.name}</h3>
                      <Badge className={getStatusColor(patient.status)}>
                        {patient.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Age: {patient.age}</span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {patient.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {patient.email}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{patient.condition}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Last visit: {patient.lastVisit}
                    </p>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                      <DropdownMenuItem>Edit Information</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete Patient</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No patients found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm ? "No patients match your search criteria." : "Start by adding your first patient."}
              </p>
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Add Patient
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}