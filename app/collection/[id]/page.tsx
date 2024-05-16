import getNft from "@/_queries/get-nft";
import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/avatar";
import { notFound } from "next/navigation";
import { Button } from "@/_components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PageProps {
	params: {
		id: string;
	};
}

export default async function Page({ params }: PageProps) {
	const { id } = params;

	const nft = await getNft(id);

	if (!nft) return notFound();

	const nftImage = nft.onchain_metadata?.image.replace(
		"ipfs://",
		"https://ipfs.io/ipfs/"
	);

	return (
		<main className="flex min-h-screen max-w-2xl mx-auto text-center flex-col items-center justify-center gap-4 animate-in">
			<Avatar className="size-52">
				<AvatarImage
					src={nftImage}
					alt={nft.onchain_metadata.name ?? "NFT"}
				/>
				<AvatarFallback>NFT</AvatarFallback>
			</Avatar>

			<h1 className="text-5xl">{nft.onchain_metadata.name}</h1>

			{nft.onchain_metadata.description && (
				<p className="text-balance">
					{nft.onchain_metadata.description}
				</p>
			)}

			<Button asChild variant="secondary">
				<Link href="/collection">
					<ArrowLeftIcon className="size-4 mr-1" />
					Back
				</Link>
			</Button>
		</main>
	);
}
