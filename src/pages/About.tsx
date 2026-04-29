import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  Trophy, 
  Heart, 
  Target, 
  Lightbulb,
  BookOpen,
  Globe,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Calendar,
      title: "Event Management",
      description: "Comprehensive tools for creating, managing, and discovering campus events with ease."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect students, faculty, and staff through shared interests and meaningful experiences."
    },
    {
      icon: Trophy,
      title: "Achievement Tracking",
      description: "Track participation, build portfolios, and showcase your campus involvement."
    },
    {
      icon: Heart,
      title: "Inclusive Environment",
      description: "Celebrating diversity and ensuring everyone finds their place in our community."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "500+", label: "Monthly Events" },
    { number: "50+", label: "Student Organizations" },
    { number: "15+", label: "Academic Departments" }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Platform Director", 
      department: "Student Affairs",
      bio: "Passionate about student engagement and building inclusive campus communities."
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      department: "IT Services", 
      bio: "Full-stack developer focused on creating seamless user experiences."
    },
    {
      name: "Emily Rodriguez",
      role: "Student Success Coordinator",
      department: "Academic Support",
      bio: "Dedicated to helping students discover opportunities for growth and connection."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4" variant="outline">
            <Globe className="mr-2 h-4 w-4" />
            About CampusEvents
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connecting Our Campus Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            CampusEvents is more than just an event platform—it's the digital heart of our university, 
            fostering connections, celebrating achievements, and creating lasting memories for our entire community.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower every member of our university community by providing seamless access to 
                  meaningful events, fostering connections across academic disciplines, and creating 
                  opportunities for personal and professional growth through shared experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-6 w-6 text-accent" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become the cornerstone of campus life, where every student, faculty member, and staff 
                  can discover their passion, build lasting relationships, and contribute to a vibrant, 
                  inclusive academic community that extends beyond graduation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Special</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed by students, for students, with features that truly matter to campus life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Dedicated professionals working to enhance your campus experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.department}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have questions, suggestions, or need support? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">General inquiries</p>
                <a href="mailto:events@college.edu" className="text-primary hover:underline">
                  events@college.edu
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Monday - Friday, 9AM-5PM</p>
                <a href="tel:+15551234567" className="text-primary hover:underline">
                  (555) 123-4567
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Office Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Student Center, Room 204<br/>
                  University Campus
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/events">
              <Button size="lg" className="mr-4">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Events
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;