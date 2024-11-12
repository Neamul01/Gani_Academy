"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, GraduationCap, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import HeroSlider from "@/components/HeroSlider";
import TeacherIntro from "@/components/TeacherIntro";
import TimeSlotBooking from "@/components/TimeSlotBooking";
import CalendarBooking from "@/components/CalendarBooking";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSlider />
      
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Why Choose Our English Program?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-muted-foreground">
                Tailored lessons designed to meet your specific needs and goals
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-muted-foreground">
                Choose from various time slots that fit your schedule
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Instruction</h3>
              <p className="text-muted-foreground">
                Learn from experienced educators specialized in 11th and 12th grade English
              </p>
            </Card>
          </div>
        </div>

        <TeacherIntro />

        <div id="booking-section" className="mt-16 scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-primary text-center mb-8">
            Book Your Session
          </h2>
          <Tabs defaultValue="slots" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="slots">Available Time Slots</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            <TabsContent value="slots">
              <TimeSlotBooking />
            </TabsContent>
            <TabsContent value="calendar">
              <CalendarBooking />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}