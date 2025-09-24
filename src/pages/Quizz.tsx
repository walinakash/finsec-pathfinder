import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const modules = [
  {
    title: "Module 1: Introduction to Cybersecurity Awareness",
  content: `Cybersecurity is all about protecting your phones, computers, and online accounts from criminals who want to steal your money or information. In Nigeria, cyber attacks can happen through fake messages, scam calls, or hacked apps. Being aware means you know the tricks scammers use and how to avoid them. If you learn the basics, you can keep yourself and your family safe online.`,
    quiz: {
      questions: [
        {
          question: "What is cybersecurity?",
          options: ["Protecting computers from viruses", "Protecting digital systems and data from attacks", "Using strong passwords only", "None of the above"],
          answer: 1
        },
        {
          question: "Why is awareness important?",
          options: ["It helps you avoid scams and threats", "It is not important", "It makes you a hacker", "None of the above"],
          answer: 0
        }
      ]
    }
  },
  {
    title: "Module 2: Password Security",
  content: `Passwords are like keys to your digital life. A strong password is hard to guess and keeps hackers out of your accounts. Never use simple words like 'password' or your name. Use a mix of letters, numbers, and symbols. A password manager is a safe app that remembers your passwords for you, so you don’t have to write them down or reuse them. Change your passwords regularly and never share them with anyone.`,
    quiz: {
      questions: [
        {
          question: "Which of the following is the strongest password?",
          options: ["password123", "Qw!8x$2Lp@9", "john2020", "letmein"],
          answer: 1
        },
        {
          question: "What is a password manager used for?",
          options: ["Storing passwords securely", "Creating viruses", "Sharing passwords with friends", "None of the above"],
          answer: 0
        }
      ]
    }
  },
  {
    title: "Module 3: Phishing Awareness",
  content: `Phishing is when scammers pretend to be banks, friends, or companies to trick you into giving them your password, bank details, or money. They send fake emails, SMS, or WhatsApp messages that look real. Always check the sender’s address, don’t click suspicious links, and never share your PIN or OTP. If something feels urgent or too good to be true, pause and verify before acting.`,
    quiz: {
      questions: [
        {
          question: "What is a common sign of a phishing email?",
          options: ["Official company logo", "Misspelled URLs and urgent requests", "Personalized greeting", "None of the above"],
          answer: 1
        },
        {
          question: "What should you do if you suspect a phishing attempt?",
          options: ["Click the link to check", "Report it and avoid clicking any links", "Reply to the sender", "Forward to friends"],
          answer: 1
        }
      ]
    }
  },
  {
    title: "Module 4: Social Engineering Attacks",
  content: `Social engineering is when someone tries to trick you into giving away private information, like your bank details or passwords. They might pretend to be a bank worker, a friend, or even offer you a job. Always be careful when someone asks for sensitive info, especially if you didn’t contact them first. If in doubt, call your bank or the real company to check.`,
    quiz: {
      questions: [
        {
          question: "What is social engineering?",
          options: ["Building social networks", "Manipulating people to give up information", "Programming computers", "None of the above"],
          answer: 1
        },
        {
          question: "How can you avoid social engineering attacks?",
          options: ["Share your passwords", "Verify identities before sharing info", "Ignore security", "None of the above"],
          answer: 1
        }
      ]
    }
  },
  {
    title: "Module 5: Safe Online Banking",
  content: `Online banking lets you manage your money from your phone or computer, but it can be risky if you’re not careful. Always use official banking apps, check for the padlock (HTTPS) in your browser, and never share your banking details. Set up alerts for transactions and report anything suspicious to your bank immediately.`,
    quiz: {
      questions: [
        {
          question: "What should you check before logging into online banking?",
          options: ["HTTPS in the browser", "Random website", "No need to check", "None of the above"],
          answer: 0
        },
        {
          question: "Should you share your banking credentials?",
          options: ["Yes", "No", "Sometimes", "Only with friends"],
          answer: 1
        }
      ]
    }
  },
  {
    title: "Module 6: Mobile Device Security",
  content: `Your smartphone is a target for hackers because it holds your contacts, messages, and banking apps. Keep your phone’s software updated, use a screen lock, and only download apps from trusted sources like Google Play or Apple Store. Avoid using public Wi-Fi for sensitive activities like banking, and log out of apps when you’re done.`,
    quiz: {
      questions: [
        {
          question: "What is a good way to secure your mobile device?",
          options: ["Install updates", "Ignore security", "Share your device", "None of the above"],
          answer: 0
        },
        {
          question: "Should you use public Wi-Fi for banking?",
          options: ["Yes", "No", "Sometimes", "Only at home"],
          answer: 1
        }
      ]
    }
  },
  {
    title: "Module 7: Protecting Digital Identity",
  content: `Your digital identity is all the information about you online—your name, email, bank details, and more. Criminals can use stolen info to open accounts or steal money. Protect yourself by using strong passwords, not oversharing on social media, and monitoring your bank statements for strange activity. Shred documents before throwing them away.`,
    quiz: {
      questions: [
        {
          question: "What is digital identity?",
          options: ["Your online information and accounts", "Your physical ID card", "Your phone number", "None of the above"],
          answer: 0
        },
        {
          question: "How can you protect your digital identity?",
          options: ["Use strong passwords", "Share info on social media", "Ignore privacy", "None of the above"],
          answer: 0
        }
      ]
    }
  },
  {
    title: "Module 8: Children and Cybersecurity",
  content: `Children use phones and computers for learning and fun, but they can also be targets for online scams or bullying. Set up parental controls, teach kids not to talk to strangers online, and check what apps or games they use. Talk regularly about internet safety and set clear rules for device use.`,
    quiz: {
      questions: [
        {
          question: "What is a good way to protect children online?",
          options: ["Use parental controls", "Let them browse freely", "Share passwords", "None of the above"],
          answer: 0
        },
        {
          question: "Should you talk to children about internet safety?",
          options: ["Yes", "No", "Only sometimes", "Never"],
          answer: 0
        }
      ]
    }
  },
  {
    title: "Module 9: Ransomware and Malware",
  content: `Malware is bad software that can steal your data or damage your device. Ransomware locks your files and asks for money to unlock them. Protect yourself by installing antivirus apps, keeping your software updated, and never downloading files from unknown sources. If you get a ransom message, don’t pay—get help from a trusted expert.`,
    quiz: {
      questions: [
        {
          question: "What does ransomware do?",
          options: ["Locks your files for ransom", "Cleans your computer", "Improves speed", "None of the above"],
          answer: 0
        },
        {
          question: "How can you prevent malware?",
          options: ["Install antivirus software", "Ignore updates", "Download from unknown sources", "None of the above"],
          answer: 0
        }
      ]
    }
  },
  {
    title: "Module 10: Cloud Security",
  content: `Cloud services let you store files online, like Google Drive or Dropbox. They’re convenient, but you must keep your data safe. Use strong passwords, enable two-factor authentication, and encrypt sensitive files. Only share cloud files with people you trust, and check your account activity regularly.`,
    quiz: {
      questions: [
        {
          question: "What is cloud security?",
          options: ["Protecting data stored online", "Protecting physical servers", "Ignoring backups", "None of the above"],
          answer: 0
        },
        {
          question: "Should you encrypt sensitive cloud data?",
          options: ["Yes", "No", "Only sometimes", "Never"],
          answer: 0
        }
      ]
    }
  },
  {
    title: "Module 11: Incident Response Basics",
  content: `Incident response means knowing what to do if you’re hacked or scammed. First, don’t panic. Disconnect your device from the internet, change your passwords, and report the incident to your bank or the police. The faster you act, the better your chances of stopping the damage. Always have a plan for emergencies.`,
    quiz: {
      questions: [
        {
          question: "What is incident response?",
          options: ["Reacting to cyber attacks", "Ignoring problems", "Deleting files", "None of the above"],
          answer: 0
        },
        {
          question: "What should you do first after a cyber incident?",
          options: ["Report and contain the issue", "Ignore it", "Tell no one", "None of the above"],
          answer: 0
        }
      ]
    }
  },
  {
    title: "Module 12: Daily Cyber Hygiene",
  content: `Cyber hygiene is about making security a daily habit. Update your software, use strong passwords, and be careful with what you click online. Don’t ignore security warnings, and teach your family to do the same. These small steps add up to big protection for you and your loved ones.`,
    quiz: {
      questions: [
        {
          question: "What is cyber hygiene?",
          options: ["Daily security habits", "Cleaning your computer", "Ignoring updates", "None of the above"],
          answer: 0
        },
        {
          question: "Which habit improves cyber hygiene?",
          options: ["Updating software regularly", "Ignoring security", "Sharing passwords", "None of the above"],
          answer: 0
        }
      ]
    }
  }
];

const Quizz = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState(Array(modules[currentModule].quiz.questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (qIdx, optIdx) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = optIdx;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNextModule = () => {
    setCurrentModule((prev) => prev + 1);
    setShowQuiz(false);
    setAnswers(Array(modules[currentModule + 1]?.quiz.questions.length).fill(null));
    setSubmitted(false);
  };

  const percent = Math.round(((currentModule + (submitted && showQuiz ? 1 : 0)) / modules.length) * 100);
  const isComplete = currentModule === modules.length - 1 && submitted && showQuiz;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Cybersecurity Basics Quiz
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
              Learn & Test Your Knowledge
            </h1>
            <div className="w-full max-w-xl mx-auto mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Module {Math.min(currentModule + 1, modules.length)} of {modules.length}</span>
                <span className="text-sm font-medium text-primary">{percent}% Complete</span>
              </div>
              <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                <div className="h-3 bg-gradient-cyber" style={{ width: `${percent}%` }}></div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Go through each module to learn cybersecurity basics, then take a quiz to test your understanding.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-2xl">
            {!isComplete ? (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>{modules[currentModule].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg mb-6">{modules[currentModule].content}</div>
                  {!showQuiz ? (
                    <button
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-glow"
                      onClick={() => setShowQuiz(true)}
                    >
                      Take Quiz
                    </button>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                      {modules[currentModule].quiz.questions.map((q, qIdx) => (
                        <div key={qIdx} className="mb-6">
                          <div className="font-semibold mb-2">{q.question}</div>
                          {q.options.map((opt, optIdx) => (
                            <label key={optIdx} className="block mb-1">
                              <input
                                type="radio"
                                name={`q${qIdx}`}
                                value={optIdx}
                                checked={answers[qIdx] === optIdx}
                                onChange={() => handleOptionChange(qIdx, optIdx)}
                                disabled={submitted}
                              />
                              <span className="ml-2">{opt}</span>
                            </label>
                          ))}
                          {submitted && (
                            <div className={answers[qIdx] === q.answer ? "text-green-600" : "text-red-600"}>
                              {answers[qIdx] === q.answer ? "Correct!" : "Incorrect."}
                            </div>
                          )}
                        </div>
                      ))}
                      {!submitted ? (
                        <button
                          type="submit"
                          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-glow"
                        >
                          Submit Answers
                        </button>
                      ) : (
                        <div className="mt-4">
                          <button
                            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-glow"
                            onClick={handleNextModule}
                            disabled={currentModule === modules.length - 1}
                          >
                            {currentModule === modules.length - 1 ? "Quiz Complete" : "Next Module"}
                          </button>
                        </div>
                      )}
                    </form>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent animate-pulse">
                  🎉 Congratulations, Cyber Champ! 🎉
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  You have completed all modules and quizzes. Your awareness and skills make you a true cybersecurity champion for Nigeria!
                </p>
                <div className="inline-block px-8 py-4 rounded-lg bg-gradient-cyber shadow-glow-cyber text-white text-2xl font-bold animate-bounce">
                  🏆 You’re a Cybersecurity Hero! 🏆
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Quizz;
