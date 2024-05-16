import Link from "next/link";
import NextLogo from "@/_components/logo/next-logo";
import { Button } from "@/_components/ui/button";
import BlockfrostLogo from "./_components/logo/blockfrost-logo";
import { WalletIcon } from "@heroicons/react/24/outline";

export default async function Index() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4 animate-in">
			<p className="mx-auto max-w-xl text-center text-3xl !leading-tight lg:text-4xl">
				NFT Marketplace with
			</p>

			<div className="flex flex-col sm:flex-row items-center justify-center sm:gap-8">
				<a
					href="https://blockfrost.io"
					target="_blank"
					rel="noreferrer"
				>
					<BlockfrostLogo />
				</a>

				<span className="h-6 rotate-45 border-l border-white" />

				<a href="https://nextjs.org" target="_blank" rel="noreferrer">
					<NextLogo />
				</a>
			</div>

			<div className="my-8 w-full max-w-md bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />

			<Button asChild>
				<Link href="/wallet">
					<WalletIcon className="size-5 mr-1" />
					Wallet
				</Link>
			</Button>
		</div>
	);
}
