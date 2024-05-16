import getNft from "./get-nft";

export default async function getNfts(wallet: any) {
	const filteredAssets = wallet.amount.filter(
		(asset: any) => asset.has_nft_onchain_metadata
	);

	try {
		const nfts = await Promise.all(
			filteredAssets.map(async (asset: any) => {
				const nft = await getNft(asset.unit);

				return nft;
			})
		);

		return nfts;
	} catch (error) {
		console.error("Error fetching nfts:", error);
	}
}
