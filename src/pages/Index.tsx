import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import EventCard from "@/components/EventCard";
import { mockEvents } from "@/data/mockEvents";
import { Link } from "react-router-dom";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const Index = () => {
  const upcomingEvents = mockEvents.slice(0, 3);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCampus})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <Badge className="mb-4 bg-background/10 backdrop-blur-sm text-white border-white/20" variant="outline">
            🎓 College Event Management System
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Amazing 
            <span className="block bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
              Campus Events
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of students in exciting academic, cultural, and social events. 
            Never miss an opportunity to learn, connect, and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Browse Events
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Events This Month</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">1,200+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-success mb-2">15+</div>
              <div className="text-muted-foreground">Departments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Upcoming Events</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss These Exciting Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join your fellow students in these carefully curated academic and social experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/events">
              <Button size="lg" variant="outline" className="group">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Create your account today and start discovering events that match your interests
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg">
              <Users className="mr-2 h-5 w-5" />
              Join Now - It's Free!
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;