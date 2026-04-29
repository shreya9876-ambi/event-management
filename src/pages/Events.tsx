import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import EventCard from "@/components/EventCard";
import { mockEvents, departments, eventTypes } from "@/data/mockEvents";
import { Search, Filter, Calendar, SlidersHorizontal } from "lucide-react";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedType, setSelectedType] = useState("All Types");
  const [sortBy, setSortBy] = useState("date");

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "All Departments" || 
                             event.department === selectedDepartment;
    const matchesType = selectedType === "All Types" || event.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "title":
        return a.title.localeCompare(b.title);
      case "popularity":
        return (b.registeredCount || 0) - (a.registeredCount || 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              All Events
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Campus Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find academic conferences, cultural celebrations, career fairs, and social gatherings
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-background rounded-xl p-6 shadow-md border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {filteredEvents.length} Events Found
              </h2>
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: "{searchQuery}"
                    <button onClick={() => setSearchQuery("")} className="ml-1 hover:bg-muted-foreground/20 rounded p-0.5">
                      ×
                    </button>
                  </Badge>
                )}
                {selectedDepartment !== "All Departments" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Dept: {selectedDepartment}
                    <button onClick={() => setSelectedDepartment("All Departments")} className="ml-1 hover:bg-muted-foreground/20 rounded p-0.5">
                      ×
                    </button>
                  </Badge>
                )}
                {selectedType !== "All Types" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Type: {selectedType}
                    <button onClick={() => setSelectedType("All Types")} className="ml-1 hover:bg-muted-foreground/20 rounded p-0.5">
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {sortedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No Events Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDepartment("All Departments");
                  setSelectedType("All Types");
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;