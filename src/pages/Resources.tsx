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
import OnlineResourcesSection from "@/components/OnlineResourcesSection";

const resourceCategories = [
  {
    title: "Whitepapers & Reports",
    icon: FileText,
    resources: [
      {
        title: "African Cybersecurity & Awareness Report 2025",
        description: "This report by KnowBe4 examines cybersecurity awareness levels across Africa, with a dedicated section on Nigeria highlighting low awareness in rural areas, phishing vulnerabilities, and recommendations for training programs.",
        type: "PDF",
        size: "715.4 KB",
        link: "https://www.knowbe4.com/hubfs/Africa-Annual-Survey_Whitepaper_US_EN-F.pdf"
      },
      {
        title: "Cybersecurity Awareness amongst University Students: Legal Remedies",
        description: "Published in Unity Journal, this study assesses awareness levels among Nigerian university students, revealing gaps in knowledge of cyber threats and advocating for mandatory courses and legal reforms under the Cybercrimes Act",
        type: "PDF",
        size: "1.01 MB",
        link: "https://www.nepjol.info/index.php/unityj/article/download/75557/57924/219256"
      },
      {
        title: "Cyber Security in Nigeria: Issues, Challenges and Way Forward",
        description: "From IRJAES, this paper outlines awareness challenges amid Nigeria's digital growth, proposing solutions like NITDA-led public campaigns and school integrations to address issues like phishing and data leaks.",
        type: "PDF",
        size: "112 KB",
        link: "http://irjaes.com/wp-content/uploads/2020/10/IRJAES-V3N2P959Y18.pdf"
      }
    ]
  },
  {
    title: "Video Tutorials",
    icon: Video,
    resources: [
      {
        title: "National Blockchain Policy, Cybersecurity Awareness | Tech Trends",
        description: "National Blockchain Policy, Cybersecurity Awareness | Tech Trends",
        type: "Video",
        duration: "25 min",
        link: "https://youtu.be/LjNyZ5wTyQU?si=2o9it7gxLALfs0Y7"
      },
      {
        title: "Mobile Payment Security Setup What You Need to Know",
        description: "Configure secure mobile payment applications for Safer use",
        type: "Video",
        duration: "3 min",
        link: "https://youtu.be/hKGCKZ2z9CQ?si=i1_BZIvgxzRlgFjt"
      },
      {
        title: "How to use a Password Manager (BEGINNERS GUIDE)",
        description: "A password manager is vital in today’s current cyber-climate. Yet, they aren’t all built the same. So - let’s put how to use a password manager simply, in this Nordpass beginners guide. ",
        type: "Video",
        duration: "12 min",
        link: "https://youtu.be/xZ-oMYpIz-E?si=Bfm4gBuT0kmByTak"
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
                          {resource.link ? (
                            resource.type === "Video" ? (
                              <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 text-sm font-medium rounded hover:bg-primary/10 transition-colors text-primary"
                              >
                                <Video className="h-4 w-4 mr-2" />
                                Watch
                              </a>
                            ) : (
                              <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 text-sm font-medium rounded hover:bg-primary/10 transition-colors text-primary"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </a>
                            )
                          ) : (
                            <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                              {resource.type === "Video" ? <Video className="h-4 w-4 mr-2" /> : <Download className="h-4 w-4 mr-2" />}
                              {resource.type === "Video" ? "Watch" : "Get"}
                            </Button>
                          )}
                        </div>
                        {/* Embed YouTube video if available */}
                        {resource.type === "Video" && resource.link && resource.link.includes("youtube.com") && (
                          <div className="mt-4">
                            <iframe
                              width="100%"
                              height="215"
                              src={resource.link.replace("watch?v=", "embed/")}
                              title={resource.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Resources Section */}
        <OnlineResourcesSection />

        {/* Upcoming Webinars */}
        {/* <section className="py-20 bg-cyber-surface/30">
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
        </section> */}

        {/* Certifications */}
        {/* <section className="py-20 bg-background">
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
        </section>*/}
      </main>
    </div>
  );
};

export default Resources;