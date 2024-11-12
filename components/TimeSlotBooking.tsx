"use client";

import { useState } from "react";
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

const timeSlots = [
  { id: 1, time: "09:00 AM", available: true },
  { id: 2, time: "10:30 AM", available: false },
  { id: 3, time: "12:00 PM", available: true },
  { id: 4, time: "02:00 PM", available: true },
  { id: 5, time: "03:30 PM", available: true },
  { id: 6, time: "05:00 PM", available: false },
];

export default function TimeSlotBooking() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {timeSlots.map((slot) => (
          <Card
            key={slot.id}
            className={`p-4 ${
              !slot.available
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-md cursor-pointer"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">{slot.time}</span>
              </div>
              {slot.available ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedSlot(slot.id)}
                    >
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book Session for {slot.time}</DialogTitle>
                      <DialogDescription>
                        Fill in your details to book this time slot
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" />
                      </div>
                      <Button className="w-full">Confirm Booking</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <span className="text-sm text-muted-foreground">Booked</span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}