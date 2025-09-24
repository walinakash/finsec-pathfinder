import React from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, ArrowLeft } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const articles = [
	{
		id: "1",
		title: "Securing Mobile Money in Nigeria: Best Practices",
		author: "Chinwe Okafor",
		image: null,
		details: `Mobile money is revolutionizing financial inclusion in Nigeria, but it comes with risks.\n\n**Key Points:**\n- Use only official mobile money apps recommended by your bank or trusted providers.\n- Enable two-factor authentication for all transactions.\n- Never share your PIN or OTP with anyone.\n- Avoid using public Wi-Fi for financial transactions.\n- Regularly check your transaction history for suspicious activity.\n\n**Expert Advice:**\nChinwe Okafor, a leading Nigerian fintech security analyst, recommends using biometric authentication and keeping your device software up to date. She also advises reporting any suspicious activity to your bank immediately.`,
	},
	{
		id: "2",
		title: "Phishing in Nigeria: How to Spot and Avoid Scams",
		author: "Ayo Balogun",
		image: null,
		details: `**Digital Privacy Risks in Nigeria**  
Nigeria’s digital economy, with over 150 million internet users and booming fintech, faces significant privacy risks. Data breaches surged to 213 investigations in 2024, exposing citizens to identity theft and fraud, with personal data like BVNs and NINs sold for as low as ₦100. Weak enforcement, low awareness, and fragmented databases amplify vulnerabilities, particularly in finance and e-commerce. Government surveillance through initiatives like NIN and the Cybersecurity Levy raises further concerns, while loan apps exploit defaulters’ data, eroding trust and costing the economy billions.

**Legal Framework and Enforcement**  
The Nigeria Data Protection Act (NDPA) 2023, building on the 1999 Constitution and NDPR 2019, establishes robust privacy rights, including data access, erasure, and objection to automated decisions. The NDPC, now independent, enforces compliance, with 1,368 probes in 2025 targeting non-compliant firms. Court rulings, like the ₦1 million fine against Polaris Bank, signal progress, but gaps in rural access, corporate data protection, and legal precedents persist, leaving Nigerians exposed to ongoing risks.

**Phishing Threats and Tactics**  
Phishing scams, up 46% in 2025 with 595,000 finance-related incidents, exploit Nigeria’s high mobile penetration. Tactics include urgent SMS/calls impersonating banks, spoofed emails, fake loan apps demanding BVN/NIN, and AI-driven spear-phishing via Telegram or social media. These scams, from “Nigerian prince” variants to romance fraud, cost billions globally and thrive on low awareness. EFCC’s 306 arrests and raids on fake NIN sites show enforcement, but individual vigilance is critical.

\n\nSolutions for Nigerians 
Nigerians can protect themselves by knowing NDPA rights, enabling 2FA, avoiding suspicious links, and reporting to NDPC or EFCC. Awareness campaigns like National Privacy Week and tools like Truecaller or Kaspersky help. If victimized, freeze accounts, change passwords, and seek legal reversals. Government and businesses must adopt privacy-by-design and secure data systems, while individuals should verify requests directly and stay informed via NITDA or CBN. As advocate Ayo Balogun notes, pausing before clicking empowers Nigerians to reclaim digital safety.`,
	},
	{
		id: "3",
		title: "Cybersecurity for Nigerian Small Businesses",
		author: "Emeka Uche",
		image: null,
		details: `Small businesses in Nigeria are increasingly targeted by cybercriminals.\n\n**Tips:**\n- Train your staff on basic cybersecurity.\n- Use strong passwords and change them regularly.\n- Backup your data securely.\n- Invest in antivirus and firewall solutions.\n\n**Expert Insight:**\nEmeka Uche recommends regular security audits and having an incident response plan in place.`,
	},
	{
		id: "4",
		title: "Social Engineering Attacks: Nigerian Case Studies",
		author: "Fatima Suleiman",
		image: null,
		details: `Social engineering is a major threat in Nigeria.\n\n**Examples:**\n- Fraudsters impersonating bank officials.\n- Fake job offers requesting personal information.\n\n**Prevention:**\nFatima Suleiman advises never to share sensitive information over the phone or email unless you initiated the contact.`,
	},
	{
		id: "5",
		title: "Protecting Your Digital Identity in Nigeria",
		author: "Ngozi Nwosu",
		image: null,
		details: `Identity theft is a growing concern in Nigeria.\n\n**How to Protect Yourself:**\n- Use strong, unique passwords for every account.\n- Monitor your credit and bank statements.\n- Shred sensitive documents before disposal.\n\n**Expert Tip:**\nNgozi Nwosu recommends using password managers and enabling account alerts.`,
	},
	{
		id: "6",
		title: "Cybersecurity Careers in Nigeria: Getting Started",
		author: "Tunde Olatunji",
		image: null,
		details: `Cybersecurity is a booming field in Nigeria.\n\n**Getting Started:**\n- Obtain certifications like CompTIA Security+ or CISSP.\n- Join Nigerian cybersecurity communities.\n- Attend local conferences and workshops.\n\n**Career Advice:**\nTunde Olatunji suggests building a portfolio of security projects and networking with industry professionals.`,
	},
	{
		id: "7",
		title: "Ransomware Protection for Nigerian Organizations",
		author: "Dr. Olumide Adeyemi",
		image: null,
		details: `Ransomware attacks are increasing in Nigeria.\n\n**Prevention:**\n- Regularly update software and systems.\n- Backup data offsite.\n- Educate employees about suspicious emails.\n\n**Case Study:**\nDr. Olumide Adeyemi shares how a Nigerian hospital recovered from a ransomware attack by having secure backups.`,
	},
	{
		id: "8",
		title: "Safe Online Banking in Nigeria",
		author: "Sarah Chukwu",
		image: null,
		details: `Online banking is convenient but risky.\n\n**Safety Tips:**\n- Always check for HTTPS in the browser.\n- Never share your banking credentials.\n- Use official banking apps.\n\n**Expert Advice:**\nSarah Chukwu recommends enabling transaction alerts and contacting your bank if you notice anything unusual.`,
	},
	{
		id: "9",
		title: "Children and Cybersecurity: Nigerian Parents’ Guide",
		author: "Bola Adebayo",
		image: null,
		details: `Children are vulnerable to cyber threats.\n\n**Parental Guidance:**\n- Use parental controls on devices.\n- Teach children about online privacy.\n- Monitor online activity.\n\n**Expert Tip:**\nBola Adebayo suggests regular conversations about internet safety and setting clear rules for device use.`,
	},
	{
		id: "10",
		title: "Blockchain Security for Nigerian Crypto Users",
		author: "Chuka Eze",
		image: null,
		details: `Crypto adoption is rising in Nigeria.\n\n**Security Tips:**\n- Use hardware wallets for large amounts.\n- Double-check wallet addresses.\n- Avoid sharing private keys.\n\n**Expert Insight:**\nChuka Eze recommends using reputable exchanges and enabling two-factor authentication.`,
	},
	{
		id: "11",
		title: "Digital Privacy: Nigerian Perspectives",
		author: "Kemi Ojo",
		image: null,
		details: `Digital privacy is essential.\n\n**Privacy Tools:**\n- Use VPNs for secure browsing.\n- Adjust privacy settings on social media.\n- Be cautious with public Wi-Fi.\n\n**Expert Advice:**\nKemi Ojo highlights the importance of understanding Nigerian data protection laws.`,
	},
	{
		id: "12",
		title: "Incident Response Planning for Nigerian Businesses",
		author: "Gbenga Alabi",
		image: null,
		details: `Incident response is critical.\n\n**Planning Steps:**\n- Create a response team.\n- Document procedures.\n- Test your plan regularly.\n\n**Expert Tip:**\nGbenga Alabi recommends regular drills and updating plans as threats evolve.`,
	},
	{
		id: "13",
		title: "Cybersecurity Awareness for Nigerian Students",
		author: "Adaobi Nwachukwu",
		image: null,
		details: `Students are frequent cyber targets.\n\n**Awareness Tips:**\n- Use strong passwords.\n- Avoid clicking unknown links.\n- Protect devices with antivirus software.\n\n**Expert Advice:**\nAdaobi Nwachukwu encourages students to attend cybersecurity workshops and stay informed about new threats.`,
	},
	{
		id: "14",
		title: "Cloud Security for Nigerian Enterprises",
		author: "Ifeanyi Okeke",
		image: null,
		details: `Cloud adoption is growing in Nigeria.\n\n**Best Practices:**\n- Choose providers with strong security credentials.\n- Encrypt sensitive data.\n- Monitor access logs.\n\n**Expert Insight:**\nIfeanyi Okeke recommends regular cloud security assessments and compliance checks.`,
	},
	{
		id: "15",
		title: "Cyber Hygiene: Daily Habits for Nigerians",
		author: "Blessing Udo",
		image: null,
		details: `Cyber hygiene is about daily habits.\n\n**Habits:**\n- Update software regularly.\n- Use secure passwords.\n- Avoid risky downloads.\n\n**Expert Advice:**\nBlessing Udo suggests setting reminders for updates and using password managers.`,
	},
];

const ArticleDetailPage = () => {
	const { id } = useParams();
	const article = articles.find((a) => a.id === id);

	if (!article) {
		return (
			<div className="min-h-screen bg-background">
				<Navigation />
				<main className="pt-20">
					<div className="container mx-auto px-4">
						<h2 className="text-2xl font-bold text-red-600">
							Article Not Found
						</h2>
						<Link
							to="/articles"
							className="text-primary mt-4 inline-block"
						>
							Back to Articles
						</Link>
					</div>
				</main>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			<main className="pt-20">
				{/* Article Header */}
				<section className="py-16 bg-gradient-dark">
					<div className="container mx-auto px-4">
						<Link
							to="/articles"
							className="inline-flex items-center text-primary hover:text-primary-glow mb-8 transition-colors"
						>
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to Articles
						</Link>
						<div className="max-w-4xl mx-auto">
							<Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
								{article.title}
							</Badge>
							<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
								{article.title}
							</h1>
							<div className="flex items-center gap-6 text-muted-foreground mb-8">
								<div className="flex items-center gap-2">
									{article.image ? (
										<img
											src={article.image}
											alt={article.author}
											className="w-10 h-10 rounded-full object-cover"
										/>
									) : (
										<User className="w-10 h-10 text-primary/60" />
									)}
									<span>{article.author}</span>
								</div>
								<div className="flex items-center gap-2">
									{/* You can add a date or other meta info here if available */}
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
								{article.details.split("\n").map((para, idx) => (
									<p key={idx}>{para}</p>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default ArticleDetailPage;
