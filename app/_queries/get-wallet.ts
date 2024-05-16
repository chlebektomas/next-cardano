export default async function getWallet() {
	const url = `${process.env.API_URL}/addresses/${process.env.WALLET_ADDRESS}/extended`;

	try {
		const response = await fetch(url, {
			headers: {
				project_id: process.env.API_KEY!,
			},
		});

		if (!response.ok) return null;

		const wallet = await response.json();

		return wallet;
	} catch (error) {
		console.error("Error fetching wallet data:", error);
	}
}
