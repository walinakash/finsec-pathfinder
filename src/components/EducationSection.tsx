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
import React, { useState } from "react";

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

const quizQuestions = [
  {
    question: "What is the safest way to create a password?",
    options: ["Use your birthdate", "Use a mix of letters, numbers, and symbols"],
    answer: 1,
  },
  {
    question: "What should you do if you receive a suspicious email?",
    options: ["Click the link to see what it is", "Delete or report it"],
    answer: 1,
  },
  {
    question: "Which network is safest for online banking?",
    options: ["Public Wi-Fi", "Home Wi-Fi"],
    answer: 1,
  },
  {
    question: "What is phishing?",
    options: ["A cyber attack using fake messages", "A way to speed up your computer"],
    answer: 0,
  },
  {
    question: "Should you share your passwords with friends?",
    options: ["Yes", "No"],
    answer: 1,
  },
  {
    question: "What is two-factor authentication?",
    options: ["A single password", "A second step to verify your identity"],
    answer: 1,
  },
  {
    question: "What should you do before downloading an app?",
    options: ["Check if it's from an official store", "Download from any website"],
    answer: 0,
  },
  {
    question: "How often should you update your passwords?",
    options: ["Never", "Regularly"],
    answer: 1,
  },
  {
    question: "What is a password manager?",
    options: ["A tool to store passwords securely", "A type of virus"],
    answer: 0,
  },
  {
    question: "What should you do if you suspect a data breach?",
    options: ["Ignore it", "Change your passwords and notify your bank"],
    answer: 1,
  },
];

function QuizModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const handleOptionClick = (idx: number) => {
    if (idx === quizQuestions[current].answer) {
      setResultMsg("👏 Correct! Well done!");
      setShowResult(true);
      setTimeout(() => {
        setShowResult(false);
        setResultMsg("");
        setCurrent((prev) => prev + 1);
      }, 1200);
    } else {
      setResultMsg("❌ Wrong answer, try again.");
      setShowResult(true);
      setTimeout(() => setShowResult(false), 1200);
    }
  };

  const handleClose = () => {
    setCurrent(0);
    setShowResult(false);
    setResultMsg("");
    onClose();
  };

  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-xl" onClick={handleClose}>&times;</button>
        {current < quizQuestions.length ? (
          <>
            <h2 className="text-xl font-bold mb-4">Cybersecurity Quiz</h2>
            <p className="mb-6 text-lg">{quizQuestions[current].question}</p>
            <div className="space-y-4">
              {quizQuestions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  className="w-full px-4 py-2 rounded bg-gradient-cyber text-primary-foreground font-semibold hover:scale-105 transition-transform"
                  onClick={() => handleOptionClick(idx)}
                  disabled={showResult}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResult && (
              <div className="mt-6 text-center text-lg font-bold">
                {resultMsg}
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 Quiz Complete!</h2>
            <p className="mb-6">You finished all questions. Great job!</p>
            <button className="px-6 py-2 bg-primary text-white rounded" onClick={handleClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  ) : null;
}

const EducationSection = () => {
  const [quizOpen, setQuizOpen] = useState(false);

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
                Ready to Test Your Digital Security Strength?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of users who have enhanced their Digital security knowledge.
                Get started by clicking the Test Knowledge Button.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-6 py-3 bg-gradient-cyber text-primary-foreground rounded-lg font-semibold hover:shadow-glow-cyber transition-all duration-300"
                  onClick={() => setQuizOpen(true)}
                >
                  Test Your Knowledge
                </button>
                {/* <button className="px-6 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
                  Download Guide
                </button> */}
              </div>
              <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;