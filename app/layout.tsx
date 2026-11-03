import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
	robots: "index, follow",
	title: "Portfolio | Mohamad Alchekh",
	description:
		"Backend developer from Turkey with a Management Information Systems degree, working with PHP, Laravel, C#, and SQL.",
	creator: "Mohamad Alchekh",
	publisher: "Mohamad Alchekh",
	applicationName: "Portfolio",
	authors: [
		{
			name: "Mohamad Alchekh",
			url: "https://github.com/MohamadAlchekh",
		},
	],
	category: "portfolio",
	keywords: [
		"Mohamad Alchekh",
		"Backend",
		"Developer",
		"PHP",
		"Laravel",
		"C#",
		"SQL",
		"Turkey",
	],
	metadataBase: new URL("https://github.com/MohamadAlchekh"),
	appleWebApp: {
		capable: true,
		startupImage: {
			media:
				"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
			url: "/images/profile.jpg",
		},
		title: "Portfolio | Mohamad Alchekh",
	},
	openGraph: {
		type: "profile",
		title: "Portfolio | Mohamad Alchekh",
		description:
			"Backend developer from Turkey with a Management Information Systems degree, working with PHP, Laravel, C#, and SQL.",
		countryName: "Türkiye",
		firstName: "Mohamad",
		lastName: "Alchekh",
		gender: "Male",
		determiner: "the",
		siteName: "Mohamad Alchekh",
		images: [
			{
				url: "/images/profile.jpg",
				alt: "Profile Image",
			},
		],
		url: "https://github.com/MohamadAlchekh",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<meta name="google-adsense-account" content="ca-pub-6419300932495863" />
			</head>
			<body
				className={`${inter.className} md:mx-auto md:max-w-6xl bg-background dark:bg-background-dark text-gray-900 dark:text-gray-100 pb-10`}
			>
				<Navbar />
				<div className="px-5">{children}</div>
			</body>
		</html>
	);
}
