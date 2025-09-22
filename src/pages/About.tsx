import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Award, 
  Users,
  Shield,
  TrendingUp,
  Globe2,
  Heart
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize robust security measures in everything we do, ensuring the highest standards of protection."
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Continuously evolving our methods and technologies to stay ahead of emerging cyber threats."
  },
  {
    icon: Globe2,
    title: "Global Impact",
    description: "Making cybersecurity accessible and understandable for organizations worldwide."
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building a supportive community of cybersecurity professionals and learners."
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "Chief Security Officer",
    bio: "15+ years in cybersecurity with expertise in enterprise security architecture and threat intelligence."
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Education",
    bio: "Former CISO with a passion for teaching cybersecurity best practices to the next generation."
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Director",
    bio: "PhD in Computer Science, specializing in blockchain security and fintech protection strategies."
  },
  {
    name: "James Thompson",
    role: "Training Coordinator",
    bio: "Certified ethical hacker and security consultant with expertise in hands-on security training."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                About CyberGuard
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Securing Digital Futures
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're on a mission to make cybersecurity accessible, understandable, and actionable 
                for organizations and individuals worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-cyber shadow-glow-cyber group-hover:shadow-glow-purple transition-all duration-300">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower individuals and organizations with the knowledge, tools, and confidence 
                    needed to navigate the digital world safely. We believe that cybersecurity education 
                    should be accessible to everyone, regardless of their technical background or 
                    organizational size.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-cyber shadow-glow-cyber group-hover:shadow-glow-purple transition-all duration-300">
                      <Eye className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every digital interaction is secure, trusted, and protected. 
                    We envision a future where cybersecurity awareness is as fundamental as digital 
                    literacy, creating a safer digital ecosystem for generations to come.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-cyber-surface/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our mission and shape our approach to cybersecurity education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-lg bg-gradient-cyber shadow-glow-cyber mb-6 group-hover:shadow-glow-purple transition-all duration-300">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cybersecurity experts and educators dedicated to protecting the digital world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-cyber shadow-glow-cyber mb-4 mx-auto group-hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Our Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Numbers that reflect our commitment to cybersecurity education excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Organizations Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Professionals Certified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">120+</div>
                <div className="text-muted-foreground">Countries Reached</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;