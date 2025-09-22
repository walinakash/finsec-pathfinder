import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Smartphone, 
  Link2, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const educationTopics = [
  {
    id: 1,
    icon: CreditCard,
    title: "Digital Banking Security",
    description: "Learn essential security practices for online banking and digital financial services.",
    steps: [
      "Enable two-factor authentication on all banking accounts",
      "Use strong, unique passwords for each financial service",
      "Regularly monitor account statements and transactions",
      "Avoid banking on public Wi-Fi networks",
      "Keep banking apps and software updated",
    ],
    color: "cyber-blue",
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Money Protection",
    description: "Secure your mobile payment apps and digital wallet transactions effectively.",
    steps: [
      "Set up app-specific PINs and biometric locks",
      "Link only necessary payment methods to mobile wallets",
      "Review transaction history regularly",
      "Use official app stores for payment app downloads",
      "Report suspicious activities immediately",
    ],
    color: "cyber-purple",
  },
  {
    id: 3,
    icon: Link2,
    title: "Blockchain & Crypto Security",
    description: "Understand blockchain technology and secure cryptocurrency management.",
    steps: [
      "Use hardware wallets for long-term cryptocurrency storage",
      "Verify wallet addresses before making transactions",
      "Keep private keys secure and never share them",
      "Research exchanges thoroughly before using them",
      "Enable all available security features on crypto platforms",
    ],
    color: "cyber-green",
  },
  {
    id: 4,
    icon: Shield,
    title: "Online Security Practices",
    description: "Master fundamental cybersecurity practices for everyday internet use.",
    steps: [
      "Use a reputable password manager for all accounts",
      "Keep software and operating systems updated",
      "Be cautious with email attachments and links",
      "Use secure, encrypted connections (HTTPS)",
      "Regularly backup important data securely",
    ],
    color: "cyber-blue",
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Financial Technology Education
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Master Fintech Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed and protected with comprehensive guides on digital banking, 
            mobile payments, blockchain technology, and essential cybersecurity practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationTopics.map((topic, index) => (
            <Card 
              key={topic.id} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-glow-cyber"
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-cyber shadow-glow-cyber group-hover:shadow-glow-purple transition-all duration-300`}>
                    <topic.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {topic.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {topic.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Essential Steps:
                  </h4>
                  {topic.steps.map((step, stepIndex) => (
                    <div 
                      key={stepIndex}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-cyber-surface/50 hover:bg-cyber-surface-hover/50 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-cyber-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
                Ready to Strengthen Your Digital Security?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of professionals who have enhanced their cybersecurity knowledge 
                through our comprehensive training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-cyber text-primary-foreground rounded-lg font-semibold hover:shadow-glow-cyber transition-all duration-300">
                  Start Free Course
                </button>
                <button className="px-6 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
                  Download Guide
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;