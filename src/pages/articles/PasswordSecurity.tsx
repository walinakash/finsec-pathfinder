import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Shield, Key, Eye, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import authorSarah from "@/assets/author-sarah.jpg";

const PasswordSecurity = () => {
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
                Password Security
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                The Ultimate Guide to Creating Unbreakable Passwords
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <img src={authorSarah} alt="Dr. Sarah Mitchell" className="w-10 h-10 rounded-full" />
                  <span>Dr. Sarah Mitchell</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2024</span>
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
                  In today's digital landscape, passwords remain the first line of defense against cyber threats. 
                  Despite technological advances, weak passwords continue to be the cause of 80% of data breaches worldwide.
                </p>

                <Card className="bg-gradient-card border-border/50 mb-8">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                      <h2 className="text-2xl font-bold">Why Strong Passwords Matter</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2 text-primary">Protection Against:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Brute force attacks</li>
                          <li>• Dictionary attacks</li>
                          <li>• Credential stuffing</li>
                          <li>• Social engineering</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-primary">Consequences of Weak Passwords:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Identity theft</li>
                          <li>• Financial losses</li>
                          <li>• Data breaches</li>
                          <li>• Reputation damage</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  How to Create Strong Passwords
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Key className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">Password Requirements</h3>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Minimum 12 characters long</li>
                        <li>• Mix of uppercase and lowercase</li>
                        <li>• Include numbers and symbols</li>
                        <li>• Avoid dictionary words</li>
                        <li>• No personal information</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <RefreshCw className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">Best Practices</h3>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Use unique passwords for each account</li>
                        <li>• Enable two-factor authentication</li>
                        <li>• Update passwords regularly</li>
                        <li>• Use a password manager</li>
                        <li>• Never share passwords</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-dark border-primary/30 mb-8">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Password Creation Methods</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">1. Passphrase Method</h4>
                        <p className="text-muted-foreground mb-2">
                          Combine 4-6 random words with numbers and symbols:
                        </p>
                        <code className="bg-cyber-surface px-3 py-1 rounded text-primary">
                          Coffee$Mountain#Rain@2024
                        </code>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">2. Pattern Method</h4>
                        <p className="text-muted-foreground mb-2">
                          Create a memorable pattern across your keyboard:
                        </p>
                        <code className="bg-cyber-surface px-3 py-1 rounded text-primary">
                          Qw3$Rt5&Yu7*Io9
                        </code>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">3. Sentence Method</h4>
                        <p className="text-muted-foreground mb-2">
                          Take first letters of a memorable sentence:
                        </p>
                        <p className="text-sm">"I Love To Eat 5 Apples Every Day At 3PM!" becomes:</p>
                        <code className="bg-cyber-surface px-3 py-1 rounded text-primary">
                          ILtE5AEDa3P!
                        </code>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  Password Management Tools
                </h2>

                <p className="text-lg text-muted-foreground mb-6">
                  Password managers are essential tools that generate, store, and automatically fill strong, unique passwords 
                  for all your accounts. Popular options include:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { name: "1Password", features: ["Military-grade encryption", "Cross-platform sync", "Secure sharing"] },
                    { name: "Bitwarden", features: ["Open source", "Free tier available", "Business solutions"] },
                    { name: "LastPass", features: ["Easy migration", "Emergency access", "Dark web monitoring"] }
                  ].map((tool, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-primary">{tool.name}</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          {tool.features.map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-cyber/10 border-primary/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Key Takeaways</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Strong passwords are your first defense against cyber attacks</li>
                      <li>• Use unique passwords for every account - no exceptions</li>
                      <li>• Password managers make security convenient and manageable</li>
                      <li>• Regular password updates and security audits are essential</li>
                      <li>• Two-factor authentication adds a crucial second layer of protection</li>
                    </ul>
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

export default PasswordSecurity;