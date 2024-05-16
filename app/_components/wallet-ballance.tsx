type WalletBalanceProps = {
	balance: number;
};

export default function WalletBalance({ balance }: WalletBalanceProps) {
	const walletBalance = balance / 1000000;

	return (
		<section className="flex items-center gap-1">
			Balance: {walletBalance} ADA
		</section>
	);
}
