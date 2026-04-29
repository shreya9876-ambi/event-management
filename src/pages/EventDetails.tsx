import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockEvents } from "@/data/mockEvents";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Mail, 
  ArrowLeft, 
  Share2, 
  BookmarkPlus,
  Building2,
  Tag
} from "lucide-react";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const event = mockEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-6">The event you're looking for doesn't exist.</p>
          <Link to="/events">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isEventPast = new Date(event.date) < new Date();
  const registrationProgress = event.maxCapacity ? 
    ((event.registeredCount || 0) / event.maxCapacity) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/events">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Image */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl overflow-hidden">
              {event.poster ? (
                <img 
                  src={event.poster} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Calendar className="h-24 w-24 text-primary/40" />
                </div>
              )}
            </div>

            {/* Event Title and Badges */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary">{event.type}</Badge>
                <Badge variant="outline">{event.department}</Badge>
                {isEventPast && <Badge variant="destructive">Past Event</Badge>}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
              
              {/* Event Tags */}
              {event.tags && (
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Event Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>

            {/* Organizer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Event Organizer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{event.organizer}</div>
                    <div className="text-sm text-muted-foreground">{event.department}</div>
                  </div>
                </div>
                {event.contact && (
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a 
                      href={`mailto:${event.contact}`}
                      className="text-primary hover:underline"
                    >
                      {event.contact}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details Card */}
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{formatDate(event.date)}</div>
                    <div className="text-sm text-muted-foreground">Date</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{event.time}</div>
                    <div className="text-sm text-muted-foreground">Time</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{event.venue}</div>
                    <div className="text-sm text-muted-foreground">Location</div>
                  </div>
                </div>
                
                {event.registeredCount !== undefined && (
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium">
                        {event.registeredCount} / {event.maxCapacity || "∞"} registered
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">Attendees</div>
                      {event.maxCapacity && (
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all ${
                              registrationProgress > 80 ? 'bg-warning' : 
                              registrationProgress > 60 ? 'bg-accent' : 'bg-primary'
                            }`}
                            style={{ width: `${Math.min(registrationProgress, 100)}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              {!isEventPast && (
                <Button className="w-full" size="lg">
                  <Users className="mr-2 h-5 w-5" />
                  Register for Event
                </Button>
              )}
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {isEventPast && (
              <Card className="border-warning">
                <CardContent className="pt-6">
                  <div className="text-center text-warning-foreground">
                    <div className="text-2xl mb-2">📝</div>
                    <h3 className="font-semibold mb-2">Leave Feedback</h3>
                    <p className="text-sm mb-4">Help us improve future events</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Submit Feedback
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;