export const Card = ({
	title,
	cta,
	href,
}: {
	title: string;
	cta: string;
	href: string;
}) => {
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			href={href}
			className="from-brandred to-brandblue group mt-4 overflow-hidden rounded-lg border border-transparent bg-gradient-to-r bg-origin-border text-[#6b7280]"
		>
			<div className="h-full bg-zinc-900 p-4">
				<p className="text-primary inline-block text-xl">{title}</p>
				<div className="text-onPrimary mt-4 text-xs group-hover:underline">
					{cta} →
				</div>
			</div>
		</a>
	);
};
