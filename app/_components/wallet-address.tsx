"use client";

import { useEffect, useState } from "react";
import { Button } from "@/_components/ui/button";
import {
	ClipboardDocumentCheckIcon,
	ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

type WalletAddressProps = {
	address: string;
};

export default function WalletAddress({ address }: WalletAddressProps) {
	const [copied, setCopied] = useState(false);
	const shortAddress =
		address.substring(0, 6) + "..." + address.substring(address.length - 4);

	const handleCopyAddress = () => {
		navigator.clipboard.writeText(address);
		setCopied(true);
	};

	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		}
	}, [copied]);

	return (
		<section className="flex items-center gap-1">
			Address:
			<Button
				className="px-2"
				variant="ghost"
				onClick={handleCopyAddress}
			>
				{shortAddress}
				{copied ? (
					<ClipboardDocumentCheckIcon className="size-4 ml-1 animate-in" />
				) : (
					<ClipboardDocumentIcon className="size-4 ml-1 animate-in" />
				)}
			</Button>
		</section>
	);
}
