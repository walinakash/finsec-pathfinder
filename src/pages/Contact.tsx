import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Users,
  HeadphonesIcon,
  Globe
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@cyberguard.com",
    description: "Get in touch via email for general inquiries"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "++234 813 2631 222",
    description: "Speak directly with our support team"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "NO. 23, Garki Road, Kura, Abuja, Nigeria",
    description: "Our headquarters location"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 9AM-5PM WAT",
    description: "When our team is available"
  }
];

const supportTypes = [
  {
    icon: Users,
    title: "General Inquiries",
    description: "Questions about our services and programs"
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description: "Help with our platform and training materials"
  },
  {
    icon: Globe,
    title: "Partnership Opportunities",
    description: "Collaborate with us on cybersecurity initiatives"
  },
  {
    icon: MessageSquare,
    title: "Media & Press",
    description: "Press inquiries and media relations"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Get In Touch
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about cybersecurity? Need training for your organization? 
                We're here to help protect your digital future.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-cyber shadow-glow-cyber mb-4 group-hover:shadow-glow-purple transition-all duration-300">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    <p className="text-primary font-semibold mb-2">{info.content}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Support Types */}
        <section className="py-20 bg-cyber-surface/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Organization</label>
                    <Input placeholder="Your company or organization" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="What is this regarding?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-cyber hover:shadow-glow-cyber transition-all duration-300">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Support Types */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  How Can We Help?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Choose the category that best matches your inquiry for faster assistance.
                </p>
                
                <div className="space-y-4">
                  {supportTypes.map((type, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-gradient-cyber shadow-glow-cyber group-hover:shadow-glow-purple transition-all duration-300">
                            <type.icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                              {type.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quick answers to common questions about our cybersecurity services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What types of training do you offer?</h3>
                  <p className="text-muted-foreground">
                    We offer comprehensive cybersecurity training including digital banking security, 
                    mobile payment protection, blockchain security, and general online safety practices. 
                    Our programs range from beginner to advanced levels.
                  </p>
                </CardContent>
              </Card>

             

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Do you offer Awareness enterprise training?</h3>
                  <p className="text-muted-foreground">
                    Yes, we provide customized enterprise training solutions for organizations of all sizes. 
                    Our enterprise packages include on-site training, custom curriculum development, and 
                    ongoing support for your security team.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What is your support response time?</h3>
                  <p className="text-muted-foreground">
                    We respond to all inquiries within 24 hours during business days. For enterprise 
                    clients, we offer priority support with response times as fast as 2 hours for 
                    critical security matters.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Contact;