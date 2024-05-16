import Link from "next/link";
import getWallet from "@/_queries/get-wallet";
import { Button } from "@/_components/ui/button";
import { CircleStackIcon, WalletIcon } from "@heroicons/react/24/outline";
import WalletAddress from "@/_components/wallet-address";
import WalletBalance from "@/_components/wallet-ballance";

export default async function Wallet() {
	const wallet = await getWallet();

	if (!wallet) return;

	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-4 animate-in">
			<WalletIcon className="size-10" />

			<WalletAddress address={wallet.address} />

			<WalletBalance balance={wallet.amount[0].quantity} />

			<Button asChild>
				<Link href="/collection">
					<CircleStackIcon className="size-5 mr-1" />
					Collection
				</Link>
			</Button>
		</main>
	);
}
