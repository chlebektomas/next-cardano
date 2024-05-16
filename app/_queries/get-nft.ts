export default async function getNft(asset: any) {
	const url = `${process.env.API_URL}/assets/`;

	try {
		const response = await fetch(url + asset, {
			headers: {
				project_id: process.env.API_KEY!,
			},
		});

		if (!response.ok) return null;

		const nft = await response.json();

		return nft;
	} catch (error) {
		console.error("Error fetching nft:", error);
	}
}
