import { Card } from "@/components/ui/card";
import { Award, BookOpen, Users } from "lucide-react";

export default function TeacherIntro() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Meet Your English Expert
        </h2>
        <p className="text-lg text-muted-foreground">
          With over 10 years of experience teaching English to 11th and 12th-grade students,
          I specialize in helping students excel in their academic journey and prepare for
          their future endeavors.
        </p>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <span>Certified Educator</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>500+ Students Taught</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>Custom Curriculum</span>
          </div>
        </div>
      </div>
      <Card className="aspect-square relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80"
          alt="English Teacher"
          className="object-cover w-full h-full"
        />
      </Card>
    </div>
  );
}