import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Omnify',
	description: 'Omnify frontend task',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
