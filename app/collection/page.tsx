import Image from "next/image";
import Link from "next/link";
import getWallet from "@/_queries/get-wallet";
import getNfts from "@/_queries/get-nfts";

export default async function Wallet() {
	const wallet = await getWallet();

	if (!wallet) return;

	const nfts = await getNfts(wallet);

	if (!nfts) return;

	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-4 animate-in pt-14">
			<section className="max-w-6xl mx-auto grid gap-1 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-in">
				{nfts.map((nft: any) => (
					<Link
						key={nft.asset}
						href={`/collection/${nft.asset}`}
						className="group w-full overflow-hidden rounded-3xl from-neutral-700 from-10% to-neutral-800 p-3 transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-tr"
					>
						<div className="hover:group relative aspect-square rounded-xl p-3 overflow-hidden">
							<Image
								src={nft.onchain_metadata?.image.replace(
									"ipfs://",
									"https://ipfs.io/ipfs/"
								)}
								alt={nft.asset_name ?? "NFT"}
								className="transition-all duration-300 group-hover:scale-110  rounded-xl"
								sizes="(min-width: 768px) 25vw, 50vw"
								fill
								priority
							/>
						</div>

						<div className="flex items-center justify-between">
							<div>
								<h2 className="mt-2 flex justify-between overflow-hidden overflow-ellipsis whitespace-nowrap text-white first-letter:uppercase lg:text-lg">
									{nft.onchain_metadata?.name}
								</h2>
							</div>
						</div>
					</Link>
				))}
			</section>
		</main>
	);
}
