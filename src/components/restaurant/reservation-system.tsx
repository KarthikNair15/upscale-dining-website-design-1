"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Calendar, Clock, Users, MessageSquare, User, Mail, Phone, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const timeSlots = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", 
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
]

const partySizes = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5 Guests" },
  { value: "6", label: "6 Guests" },
  { value: "7", label: "7 Guests" },
  { value: "8", label: "8+ Guests" }
]

interface FormData {
  date: string
  time: string
  partySize: string
  specialRequests: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface FormErrors {
  [key: string]: string
}

export default function ReservationSystem() {
  const [formData, setFormData] = useState<FormData>({
    date: "",
    time: "",
    partySize: "",
    specialRequests: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.date) newErrors.date = "Please select a date"
    if (!formData.time) newErrors.time = "Please select a time"
    if (!formData.partySize) newErrors.partySize = "Please select party size"
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const generateCalendarDays = () => {
    const today = new Date()
    const days = []
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push(date)
    }
    
    return days
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  if (isSubmitted) {
    return (
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-card rounded-lg p-12 border border-border">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              
              <h2 className="text-3xl font-display mb-4">Reservation Confirmed!</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Thank you for your reservation. We've sent a confirmation email with all the details.
              </p>
              
              <div className="bg-background p-6 rounded-lg mb-8 text-left">
                <h3 className="font-display text-xl mb-4 text-primary">Reservation Details</h3>
                <div className="space-y-2 text-foreground">
                  <p><span className="text-muted-foreground">Date:</span> {formData.date}</p>
                  <p><span className="text-muted-foreground">Time:</span> {formData.time}</p>
                  <p><span className="text-muted-foreground">Party Size:</span> {formData.partySize} {parseInt(formData.partySize) === 1 ? 'Guest' : 'Guests'}</p>
                  <p><span className="text-muted-foreground">Name:</span> {formData.firstName} {formData.lastName}</p>
                </div>
              </div>
              
              <Button 
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    date: "",
                    time: "",
                    partySize: "",
                    specialRequests: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: ""
                  })
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Make Another Reservation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl font-display mb-4">Reserve Your Table</h2>
                <p className="text-foreground/90 mb-6 text-lg leading-relaxed">
                  Experience an unforgettable evening of culinary excellence in our intimate dining room. Each dish is crafted with seasonal ingredients and paired with exceptional wines.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Dinner served 5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Parties of 8+ please call directly</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    <span>24-hour cancellation policy</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <h3 className="text-2xl font-display mb-6">Make a Reservation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Selection */}
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Date
                </Label>
                <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal transition-all duration-200 ${
                        errors.date ? 'border-destructive' : 'focus:border-primary focus:ring-primary'
                      }`}
                    >
                      {formData.date || "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                    <div className="p-3">
                      <div className="grid grid-cols-3 gap-2">
                        {generateCalendarDays().map((date, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              updateFormData('date', formatDate(date))
                              setShowCalendar(false)
                            }}
                            className="h-auto p-2 text-center hover:bg-primary hover:text-primary-foreground"
                          >
                            <div className="text-xs">{formatDate(date)}</div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                {errors.date && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm"
                  >
                    {errors.date}
                  </motion.p>
                )}
              </div>

              {/* Time & Party Size Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Time
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => updateFormData('time', value)}>
                    <SelectTrigger className={`transition-all duration-200 ${
                      errors.time ? 'border-destructive' : 'focus:border-primary focus:ring-primary'
                    }`}>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="hover:bg-primary hover:text-primary-foreground">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.time && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm"
                    >
                      {errors.time}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Party Size
                  </Label>
                  <Select value={formData.partySize} onValueChange={(value) => updateFormData('partySize', value)}>
                    <SelectTrigger className={`transition-all duration-200 ${
                      errors.partySize ? 'border-destructive' : 'focus:border-primary focus:ring-primary'
                    }`}>
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {partySizes.map((size) => (
                        <SelectItem key={size.value} value={size.value} className="hover:bg-primary hover:text-primary-foreground">
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.partySize && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm"
                    >
                      {errors.partySize}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className={`transition-all duration-200 ${
                      errors.firstName ? 'border-destructive' : 'focus:border-primary focus:ring-primary'
                    }`}
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm"
                    >
                      {errors.firstName}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    className={`transition-all duration-200 ${
                      errors.lastName ? 'border-destructive' : 'focus:border-primary focus:ring-primary'
                    }`}
                    placeholder="Your last name"
                  />
                  {errors.lastName && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm"
                    >
                      {errors.lastName}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className={`transition-all duration-200 ${
                    errors.email ? 'border-destructive' : 'focus:border-primary focus:ring-primary'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className={`transition-all duration-200 ${
                    errors.phone ? 'border-destructive' : 'focus:border-primary focus:ring-primary'
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="specialRequests" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Special Requests (Optional)
                </Label>
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => updateFormData('specialRequests', e.target.value)}
                  className="min-h-[100px] transition-all duration-200 focus:border-primary focus:ring-primary"
                  placeholder="Dietary restrictions, special occasions, seating preferences..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 text-lg font-medium transition-all duration-200"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                      Confirming Reservation...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="submit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Reserve Table
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}