import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { CircleStackIcon, WalletIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
	return (
		<header>
			<nav className="flex w-full justify-center border-b border-b-foreground/10 fixed bg-background z-50">
				<div className="flex w-full max-w-6xl items-center justify-between px-3 h-14 text-sm">
					<Button variant="link" asChild>
						<Link href="/">Home</Link>
					</Button>
					<div className="flex">
						<Button variant="link" asChild>
							<Link href="/collection">
								<CircleStackIcon className="size-5 mr-1" />
								Collection
							</Link>
						</Button>
						<Button variant="link" asChild>
							<Link href="/wallet">
								<WalletIcon className="size-5 mr-1" />
								Wallet
							</Link>
						</Button>
					</div>
				</div>
			</nav>
		</header>
	);
}
