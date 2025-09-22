import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Video, 
  BookOpen, 
  Download,
  ExternalLink,
  Calendar,
  Users,
  Trophy,
  Zap
} from "lucide-react";

const resourceCategories = [
  {
    title: "Whitepapers & Reports",
    icon: FileText,
    resources: [
      {
        title: "2024 Cybersecurity Threat Landscape",
        description: "Comprehensive analysis of emerging threats and attack vectors",
        type: "PDF",
        size: "2.5 MB"
      },
      {
        title: "Fintech Security Best Practices Guide",
        description: "Essential security measures for financial technology companies",
        type: "PDF",
        size: "1.8 MB"
      },
      {
        title: "Blockchain Security Framework",
        description: "Security considerations for blockchain implementations",
        type: "PDF",
        size: "3.2 MB"
      }
    ]
  },
  {
    title: "Video Tutorials",
    icon: Video,
    resources: [
      {
        title: "Digital Banking Security Fundamentals",
        description: "Step-by-step guide to securing online banking transactions",
        type: "Video",
        duration: "25 min"
      },
      {
        title: "Mobile Payment Security Setup",
        description: "Configure secure mobile payment applications",
        type: "Video",
        duration: "18 min"
      },
      {
        title: "Password Manager Implementation",
        description: "Choose and deploy enterprise password management",
        type: "Video",
        duration: "32 min"
      }
    ]
  },
  {
    title: "Interactive Guides",
    icon: BookOpen,
    resources: [
      {
        title: "Phishing Detection Training",
        description: "Interactive simulation to identify phishing attempts",
        type: "Interactive",
        level: "Beginner"
      },
      {
        title: "Incident Response Playbook",
        description: "Step-by-step cybersecurity incident response procedures",
        type: "Interactive",
        level: "Advanced"
      },
      {
        title: "Risk Assessment Toolkit",
        description: "Tools and templates for cybersecurity risk evaluation",
        type: "Interactive",
        level: "Intermediate"
      }
    ]
  }
];

const webinars = [
  {
    title: "Future of Cybersecurity in Fintech",
    date: "Dec 15, 2024",
    time: "2:00 PM EST",
    speaker: "Dr. Sarah Chen",
    attendees: 1200
  },
  {
    title: "Zero Trust Security Architecture",
    date: "Dec 22, 2024",
    time: "3:00 PM EST",
    speaker: "Michael Rodriguez",
    attendees: 850
  },
  {
    title: "AI in Cybersecurity Defense",
    date: "Jan 8, 2025",
    time: "1:00 PM EST",
    speaker: "Dr. Emily Watson",
    attendees: 950
  }
];

const certifications = [
  {
    title: "Certified Cybersecurity Fundamentals",
    level: "Beginner",
    duration: "40 hours",
    badge: "CCF"
  },
  {
    title: "Fintech Security Specialist",
    level: "Intermediate",
    duration: "60 hours",
    badge: "FSS"
  },
  {
    title: "Advanced Threat Hunter",
    level: "Advanced",
    duration: "80 hours",
    badge: "ATH"
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Resource Library
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Knowledge Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access comprehensive cybersecurity resources, training materials, and expert insights 
                to enhance your security posture and knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {resourceCategories.map((category, index) => (
              <div key={index} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-lg bg-gradient-cyber shadow-glow-cyber mr-4">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card key={resourceIndex} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {resource.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {resource.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {resource.type}
                            </Badge>
                            <span>
                              {resource.size || resource.duration || resource.level}
                            </span>
                          </div>
                          <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                            <Download className="h-4 w-4 mr-2" />
                            Get
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20 bg-cyber-surface/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our expert-led sessions on the latest cybersecurity trends and technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Webinar
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {webinar.attendees}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {webinar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {webinar.date} at {webinar.time}
                      </div>
                      <div className="text-sm">
                        Speaker: <span className="text-primary">{webinar.speaker}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-cyber hover:shadow-glow-cyber transition-all duration-300">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Professional Certifications
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advance your career with industry-recognized cybersecurity certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-lg bg-gradient-cyber shadow-glow-cyber mb-6 group-hover:shadow-glow-purple transition-all duration-300">
                      <Trophy className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <div className="flex justify-center gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        {cert.level}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {cert.duration}
                      </Badge>
                    </div>
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-primary mb-2">{cert.badge}</div>
                      <div className="text-sm text-muted-foreground">Certification Badge</div>
                    </div>
                    <Button className="w-full bg-gradient-cyber hover:shadow-glow-cyber transition-all duration-300">
                      <Zap className="h-4 w-4 mr-2" />
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resources;