import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Shield, Lock, Database, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import authorMichael from "@/assets/author-michael.jpg";

const DataProtection = () => {
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
                Data Protection
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Complete Guide to Personal Data Protection
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <img src={authorMichael} alt="Dr. Michael Chen" className="w-10 h-10 rounded-full" />
                  <span>Dr. Michael Chen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 5, 2024</span>
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
                  In our interconnected digital world, personal data protection has become paramount. 
                  With data breaches affecting millions globally, understanding how to safeguard your 
                  personal information is no longer optional—it's essential.
                </p>

                <Card className="bg-gradient-card border-border/50 mb-8">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Database className="h-8 w-8 text-primary" />
                      <h2 className="text-2xl font-bold">Why Data Protection Matters</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2 text-primary">Personal Risks:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Identity theft and fraud</li>
                          <li>• Financial losses</li>
                          <li>• Privacy violations</li>
                          <li>• Reputation damage</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-primary">Business Impact:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• GDPR/CCPA compliance fines</li>
                          <li>• Customer trust erosion</li>
                          <li>• Operational disruptions</li>
                          <li>• Legal liabilities</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  Types of Personal Data
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">Personally Identifiable Information (PII)</h3>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Full name and address</li>
                        <li>• Social Security numbers</li>
                        <li>• Phone numbers and email</li>
                        <li>• Date of birth</li>
                        <li>• Government ID numbers</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Lock className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">Sensitive Personal Data</h3>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Financial account details</li>
                        <li>• Medical records</li>
                        <li>• Biometric data</li>
                        <li>• Location tracking data</li>
                        <li>• Online behavior patterns</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  Data Protection Strategies
                </h2>

                <Card className="bg-gradient-dark border-primary/30 mb-8">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Encryption Best Practices</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">1. Data at Rest</h4>
                        <p className="text-muted-foreground mb-2">
                          Encrypt stored data using AES-256 encryption:
                        </p>
                        <ul className="space-y-1 text-muted-foreground ml-4">
                          <li>• Full disk encryption (BitLocker, FileVault)</li>
                          <li>• Database encryption</li>
                          <li>• File-level encryption for sensitive documents</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">2. Data in Transit</h4>
                        <p className="text-muted-foreground mb-2">
                          Secure data transmission with:
                        </p>
                        <ul className="space-y-1 text-muted-foreground ml-4">
                          <li>• TLS/SSL protocols (HTTPS)</li>
                          <li>• VPN connections for remote access</li>
                          <li>• Secure email gateways</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">3. Data in Use</h4>
                        <p className="text-muted-foreground mb-2">
                          Protect active data through:
                        </p>
                        <ul className="space-y-1 text-muted-foreground ml-4">
                          <li>• Application-level encryption</li>
                          <li>• Secure enclaves and trusted execution</li>
                          <li>• Zero-trust architecture</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  Privacy Settings and Controls
                </h2>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  {[
                    {
                      platform: "Social Media",
                      icon: Shield,
                      controls: [
                        "Set profiles to private",
                        "Limit data sharing with third parties",
                        "Disable location tracking",
                        "Review and remove tagged photos",
                        "Use two-factor authentication"
                      ]
                    },
                    {
                      platform: "Web Browsers",
                      icon: Lock,
                      controls: [
                        "Enable private browsing mode",
                        "Block third-party cookies",
                        "Use privacy-focused search engines",
                        "Install ad blockers and tracker blockers",
                        "Regularly clear browsing data"
                      ]
                    },
                    {
                      platform: "Mobile Devices",
                      icon: Database,
                      controls: [
                        "Review app permissions regularly",
                        "Disable unnecessary location services",
                        "Use app-specific passwords",
                        "Enable automatic updates",
                        "Set up remote wipe capabilities"
                      ]
                    }
                  ].map((category, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <category.icon className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">{category.platform}</h3>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                          {category.controls.map((control, idx) => (
                            <li key={idx}>• {control}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h2 className="text-3xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                  Cloud Storage Security
                </h2>

                <Card className="bg-gradient-card border-border/50 mb-8">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Cloud className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">Secure Cloud Practices</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Before Upload:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Encrypt sensitive files locally</li>
                          <li>• Use strong, unique passwords</li>
                          <li>• Enable two-factor authentication</li>
                          <li>• Review sharing permissions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Ongoing Security:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Regularly audit access logs</li>
                          <li>• Monitor for suspicious activity</li>
                          <li>• Keep software updated</li>
                          <li>• Backup critical data offline</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-cyber/10 border-primary/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Data Protection Checklist</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Personal Security:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Use strong, unique passwords</li>
                          <li>• Enable MFA on all accounts</li>
                          <li>• Keep software updated</li>
                          <li>• Encrypt sensitive files</li>
                          <li>• Use reputable antivirus software</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Privacy Controls:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Review privacy settings monthly</li>
                          <li>• Limit data sharing permissions</li>
                          <li>• Use privacy-focused alternatives</li>
                          <li>• Regularly clean up old accounts</li>
                          <li>• Monitor credit reports</li>
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

export default DataProtection;