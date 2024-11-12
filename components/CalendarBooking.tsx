"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const availableTimeSlots = {
  "2024-01-15": ["09:00 AM", "02:00 PM", "04:30 PM"],
  "2024-01-16": ["10:30 AM", "01:00 PM", "03:30 PM"],
  "2024-01-17": ["09:30 AM", "11:30 AM", "05:00 PM"],
};

export default function CalendarBooking() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setSelectedTime(null);
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  const getAvailableSlots = (date: Date | undefined): string[] => {
    if (!date) return [];
    return availableTimeSlots[formatDate(date) as keyof typeof availableTimeSlots] || [];
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="rounded-md border"
        />
      </Card>

      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">
          {date ? `Available Times for ${date.toLocaleDateString()}` : "Select a date"}
        </h3>
        <div className="grid gap-4">
          {getAvailableSlots(date).map((time) => (
            <Card
              key={time}
              className="p-4 hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">{time}</span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedTime(time)}
                    >
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Book Session for {date?.toLocaleDateString()} at {time}
                      </DialogTitle>
                      <DialogDescription>
                        Fill in your details to book this time slot
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="calendar-name">Name</Label>
                        <Input id="calendar-name" placeholder="Your name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="calendar-email">Email</Label>
                        <Input
                          id="calendar-email"
                          type="email"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="calendar-phone">Phone</Label>
                        <Input
                          id="calendar-phone"
                          type="tel"
                          placeholder="Your phone number"
                        />
                      </div>
                      <Button className="w-full">Confirm Booking</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
          {getAvailableSlots(date).length === 0 && date && (
            <p className="text-center text-muted-foreground">
              No available slots for this date
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}