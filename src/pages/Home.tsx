import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import EducationSection from "@/components/EducationSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Award, 
  TrendingUp, 
  Globe,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import authorSarah from "@/assets/author-sarah.jpg";
import authorJames from "@/assets/author-james.jpg";
import authorMichael from "@/assets/author-michael.jpg";
import { PasswordStrengthTester } from "@/pages/articles/PasswordSecurity";
import React, { useState } from "react";

const stats = [
  // {
  //   icon: Users,
  //   value: "50K+",
  //   label: "Professionals Trained",
  // },
  // {
  //   icon: Award,
  //   value: "98%",
  //   label: "Success Rate",
  // },
  // {
  //   icon: TrendingUp,
  //   value: "200%",
  //   label: "Security Improvement",
  // },
  // {
  //   icon: Globe,
  //   value: "120+",
  //   label: "Countries Served",
  // },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSlider />
        
        {/* Stats Section */}
        <section className="py-16 bg-cyber-surface/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-cyber shadow-glow-cyber mb-4">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EducationSection />

        {/* Password Tips Section */}
        <section className="py-20 bg-cyber-surface/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Password Security
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Create Unbreakable Passwords
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strong passwords are your first line of defense. Learn how to create and manage passwords that keep hackers out.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Why Strong Passwords Matter</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">80% of data breaches</strong> involve weak or stolen passwords
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Hackers can crack</strong> simple passwords in seconds using automated tools
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Identity theft costs</strong> victims an average of $1,100 and 7 months to resolve
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-primary">Password Creation Tips</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-cyber-surface/50">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                      <span className="text-sm">Use at least 12 characters</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-cyber-surface/50">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                      <span className="text-sm">Mix uppercase, lowercase, numbers & symbols</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-cyber-surface/50">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                      <span className="text-sm">Avoid dictionary words & personal info</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-cyber-surface/50">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
                      <span className="text-sm">Use unique passwords for each account</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-cyber-surface/50">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">5</div>
                      <span className="text-sm">Consider using a password manager</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Password Strength Tester Section */}
        <section className="py-8 bg-cyber-surface/10">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card border-primary/30 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Test Your Password Strength</h3>
                <PasswordStrengthTester />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Expert Insights
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Latest Cybersecurity Articles
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay informed with the latest insights from cybersecurity experts and industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={authorSarah} alt="Dr. Sarah Mitchell" className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-semibold text-sm">Dr. Sarah Mitchell</h4>
                      <p className="text-xs text-muted-foreground">Cybersecurity Specialist</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    The Ultimate Guide to Creating Unbreakable Passwords
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Learn advanced techniques for creating and managing passwords that can withstand modern cyber attacks...
                  </p>
                  <Link 
                    to="/articles/password-security" 
                    className="inline-flex items-center text-primary hover:text-primary-glow transition-colors text-sm font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={authorJames} alt="James Rodriguez" className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-semibold text-sm">James Rodriguez</h4>
                      <p className="text-xs text-muted-foreground">Security Analyst</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Recognizing and Avoiding Phishing Attacks in 2024
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Discover the latest phishing techniques and learn how to protect yourself from sophisticated social engineering attacks...
                  </p>
                  <Link 
                    to="/articles/phishing-attacks" 
                    className="inline-flex items-center text-primary hover:text-primary-glow transition-colors text-sm font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={authorMichael} alt="Dr. Michael Chen" className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-semibold text-sm">Dr. Michael Chen</h4>
                      <p className="text-xs text-muted-foreground">Data Protection Expert</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Complete Guide to Personal Data Protection
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Master the fundamentals of data protection with encryption, privacy controls, and secure storage practices...
                  </p>
                  <Link 
                    to="/articles/data-protection" 
                    className="inline-flex items-center text-primary hover:text-primary-glow transition-colors text-sm font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Why Choose CyberGuard
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Industry-Leading Security Solutions Awareness
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive approach to cybersecurity education and protection ensures 
                your organization stays ahead of evolving threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-lg bg-gradient-cyber shadow-glow-cyber mb-6 group-hover:shadow-glow-purple transition-all duration-300">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Expert-Led Training</h3>
                  <p className="text-muted-foreground">
                    Learn from certified cybersecurity professionals with real-world experience in threat prevention and incident response.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-lg bg-gradient-cyber shadow-glow-cyber mb-6 group-hover:shadow-glow-purple transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground">
                    Stay updated with the latest security technologies, tools, and methodologies used by top organizations worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-lg bg-gradient-cyber shadow-glow-cyber mb-6 group-hover:shadow-glow-purple transition-all duration-300">
                    <Globe className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Global Awareness</h3>
                  <p className="text-muted-foreground">
                    Your location is not a barrier, get access to our cyber security awareness, news and articles wherever you are. 
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the cybersecurity revolution and protect what matters most. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-cyber text-primary-foreground rounded-lg font-semibold hover:shadow-glow-cyber transition-all duration-300 inline-flex items-center">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              {/* <button className="px-8 py-4 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
                Schedule Demo
              </button> */}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-cyber-surface border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
                  CyberGuard
                </h3>
                <p className="text-muted-foreground text-sm">
                  Leading cybersecurity education and awareness platform, empowering organizations worldwide.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>About Us</div>
                  <div>Resources</div>
                  <div>Training Programs</div>
                  <div>Certifications</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Security Assessment</div>
                  <div>Incident Response</div>
                  <div>Compliance Training</div>
                  <div>Risk Management</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    info@cyberguard.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +234 813 2631 222
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Kaduna, NG
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              © 2025 CyberGuard. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;