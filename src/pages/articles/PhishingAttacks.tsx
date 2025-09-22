import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, AlertTriangle, Mail, Link2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import authorJames from "@/assets/author-james.jpg";

const PhishingAttacks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Article Header */}
        <section className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-glow mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Phishing Prevention
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Recognizing and Avoiding Phishing Attacks in 2024
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <img src={authorJames} alt="James Rodriguez" className="w-10 h-10 rounded-full" />
                  <span>James Rodriguez</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 10, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Phishing attacks have evolved dramatically, becoming more sophisticated and harder to detect. 
                  In 2024, cybercriminals are using AI-powered techniques to create convincing fake communications 
                  that can fool even security-conscious individuals.
                </p>

                <Card className="bg-gradient-card border-border/50 mb-8">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <AlertTriangle className="h-8 w-8 text-destructive" />
                      <h2 className="text-2xl font-bold">Phishing Statistics 2024</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2 text-primary">Attack Frequency:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• 1 in 4,200 emails is a phishing attempt</li>
                          <li>• 83% of organizations experienced phishing</li>
                          <li>• 76% increase in deepfake phishing</li>
                          <li>• $12 billion in annual losses</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-primary">Common Targets:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Banking credentials (45%)</li>
                          <li>• Social media accounts (23%)</li>
                          <li>• Work email accounts (18%)</li>
                          <li>• Shopping sites (14%)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  Types of Phishing Attacks
                </h2>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email Phishing",
                      description: "Traditional fake emails designed to steal credentials or install malware",
                      examples: ["Fake bank notifications", "Bogus tax refund emails", "Fake shipping updates"]
                    },
                    {
                      icon: Link2,
                      title: "Spear Phishing",
                      description: "Targeted attacks using personal information to appear legitimate",
                      examples: ["CEO impersonation", "HR department spoofs", "Vendor invoice scams"]
                    },
                    {
                      icon: Eye,
                      title: "Smishing & Vishing",
                      description: "Phishing via SMS text messages and voice calls",
                      examples: ["Fake verification codes", "Bank security alerts", "Tech support scams"]
                    }
                  ].map((attack, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <attack.icon className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">{attack.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{attack.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2 text-primary">Common Examples:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            {attack.examples.map((example, idx) => (
                              <li key={idx}>• {example}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  Red Flags to Watch For
                </h2>

                <Card className="bg-gradient-dark border-destructive/30 mb-8">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-destructive">Email Warning Signs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Sender Issues:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Misspelled domain names</li>
                          <li>• Generic greetings ("Dear Customer")</li>
                          <li>• Suspicious sender addresses</li>
                          <li>• Urgent or threatening language</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Content Red Flags:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Requests for sensitive information</li>
                          <li>• Suspicious links or attachments</li>
                          <li>• Poor grammar and spelling</li>
                          <li>• Too-good-to-be-true offers</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  Protection Strategies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-primary">Technical Defenses</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Enable spam filters and security software</li>
                        <li>• Use multi-factor authentication</li>
                        <li>• Keep software and browsers updated</li>
                        <li>• Install reputable antivirus solutions</li>
                        <li>• Enable automatic security updates</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-primary">Behavioral Defenses</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Verify sender identity independently</li>
                        <li>• Never click suspicious links</li>
                        <li>• Type URLs manually when possible</li>
                        <li>• Be skeptical of urgent requests</li>
                        <li>• Report suspicious emails</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-cyber/10 border-primary/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">If You've Been Phished</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Immediate Actions:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Change all compromised passwords</li>
                          <li>• Contact your bank and credit card companies</li>
                          <li>• Run a full antivirus scan</li>
                          <li>• Enable account monitoring alerts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Follow-up Steps:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• File a report with authorities</li>
                          <li>• Monitor credit reports closely</li>
                          <li>• Document all suspicious activity</li>
                          <li>• Update security practices</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PhishingAttacks;