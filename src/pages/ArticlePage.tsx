import React from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
	{
		id: "1",
		title: "Securing Mobile Money in Nigeria: Best Practices",
		author: "Chinwe Okafor",
		image: null,
		summary: "How to protect your mobile money accounts from fraud and cyber attacks.",
		details: "Mobile money is revolutionizing financial inclusion in Nigeria, but it comes with risks. Learn how to use secure apps, enable two-factor authentication, and avoid common scams targeting Nigerian users.",
	},
	{
		id: "2",
		title: "Phishing in Nigeria: How to Spot and Avoid Scams",
		author: "Ayo Balogun",
		image: null,
		summary: "Recognize and defend against phishing attacks targeting Nigerians.",
		details: "Phishing attacks are on the rise in Nigeria. This article explains how to identify suspicious emails, protect your personal information, and report scams to authorities.",
	},
	{
		id: "3",
		title: "Cybersecurity for Nigerian Small Businesses",
		author: "Emeka Uche",
		image: null,
		summary: "Essential cybersecurity tips for Nigerian entrepreneurs and SMEs.",
		details: "Small businesses in Nigeria are increasingly targeted by cybercriminals. Learn how to secure your business data, train your staff, and respond to incidents effectively.",
	},
	{
		id: "4",
		title: "Social Engineering Attacks: Nigerian Case Studies",
		author: "Fatima Suleiman",
		image: null,
		summary: "Real-world examples of social engineering attacks in Nigeria and how to prevent them.",
		details: "Social engineering is a major threat in Nigeria. This article shares case studies and practical advice for recognizing and resisting manipulation attempts.",
	},
	{
		id: "5",
		title: "Protecting Your Digital Identity in Nigeria",
		author: "Ngozi Nwosu",
		image: null,
		summary: "Steps to safeguard your identity online and offline in Nigeria.",
		details: "Identity theft is a growing concern in Nigeria. Learn how to protect your personal data, use strong passwords, and monitor your accounts for suspicious activity.",
	},
	{
		id: "6",
		title: "Cybersecurity Careers in Nigeria: Getting Started",
		author: "Tunde Olatunji",
		image: null,
		summary: "How to launch a successful cybersecurity career in Nigeria.",
		details: "Cybersecurity is a booming field in Nigeria. This article covers certifications, job opportunities, and tips for building your skills and network.",
	},
	{
		id: "7",
		title: "Ransomware Protection for Nigerian Organizations",
		author: "Dr. Olumide Adeyemi",
		image: null,
		summary: "How Nigerian companies can defend against ransomware attacks.",
		details: "Ransomware attacks are increasing in Nigeria. Learn prevention strategies, incident response steps, and how to recover from an attack.",
	},
	{
		id: "8",
		title: "Safe Online Banking in Nigeria",
		author: "Sarah Chukwu",
		image: null,
		summary: "Tips for secure online banking and avoiding fraud in Nigeria.",
		details: "Online banking is convenient but risky. This article explains how to use secure connections, recognize fake banking sites, and keep your accounts safe.",
	},
	{
		id: "9",
		title: "Children and Cybersecurity: Nigerian Parents’ Guide",
		author: "Bola Adebayo",
		image: null,
		summary: "How to keep children safe online in Nigeria.",
		details: "Children are vulnerable to cyber threats. Learn how Nigerian parents can educate kids, use parental controls, and spot online dangers early.",
	},
	{
		id: "10",
		title: "Blockchain Security for Nigerian Crypto Users",
		author: "Chuka Eze",
		image: null,
		summary: "Protect your cryptocurrency assets in Nigeria.",
		details: "Crypto adoption is rising in Nigeria. This article covers hardware wallets, avoiding scams, and keeping your investments secure.",
	},
	{
		id: "11",
		title: "Digital Privacy: Nigerian Perspectives",
		author: "Kemi Ojo",
		image: null,
		summary: "Understanding privacy risks and solutions for Nigerians.",
		details: "Digital privacy is essential. Learn about Nigerian laws, privacy tools, and how to control your personal information online.",
	},
	{
		id: "12",
		title: "Incident Response Planning for Nigerian Businesses",
		author: "Gbenga Alabi",
		image: null,
		summary: "How to prepare for and respond to cyber incidents in Nigeria.",
		details: "Incident response is critical. This article explains how Nigerian businesses can create plans, train staff, and minimize damage from attacks.",
	},
	{
		id: "13",
		title: "Cybersecurity Awareness for Nigerian Students",
		author: "Adaobi Nwachukwu",
		image: null,
		summary: "Tips for students to stay safe online in Nigeria.",
		details: "Students are frequent cyber targets. Learn how to use secure passwords, avoid scams, and protect your devices at school and home.",
	},
	{
		id: "14",
		title: "Cloud Security for Nigerian Enterprises",
		author: "Ifeanyi Okeke",
		image: null,
		summary: "Best practices for securing cloud data in Nigeria.",
		details: "Cloud adoption is growing in Nigeria. This article covers cloud security basics, compliance, and how to choose safe providers.",
	},
	{
		id: "15",
		title: "Cyber Hygiene: Daily Habits for Nigerians",
		author: "Blessing Udo",
		image: null,
		summary: "Simple daily habits to improve cybersecurity in Nigeria.",
		details: "Cyber hygiene is about daily habits. Learn how to update software, use secure passwords, and avoid risky online behavior in Nigeria.",
	}
];

const ArticleListPage = () => (
	<div className="min-h-screen bg-background">
		<Navigation />
		<main className="pt-20">
			<section className="py-12 bg-gradient-dark">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-cyber bg-clip-text text-transparent">
						Cybersecurity Awareness Articles (Nigeria)
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{articles.map((article) => (
							<Card
								key={article.id}
								className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group"
							>
								<CardHeader>
									<div className="flex items-center gap-4 mb-2">
										{article.image ? (
											<img
												src={article.image}
												alt={article.author}
												className="w-10 h-10 rounded-full object-cover"
											/>
										) : (
											<User className="w-10 h-10 text-primary/60" />
										)}
										<div>
											<CardTitle className="text-lg group-hover:text-primary transition-colors">
												{article.title}
											</CardTitle>
											<Badge className="bg-primary/20 text-primary border-primary/30 mt-1">
												{article.author}
											</Badge>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground mb-4">
										{article.summary}
									</p>
									<Link
										to={`/articles/${article.id}`}
										className="inline-flex items-center text-primary hover:text-primary-glow transition-colors text-sm font-semibold"
									>
										Read Full Article{" "}
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</main>
	</div>
);

export default ArticleListPage;
