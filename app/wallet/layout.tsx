import Header from "@/_components/header";

export default async function AccountLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />

			{children}
		</>
	);
}
