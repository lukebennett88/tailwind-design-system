import { forwardRef, useCallback, useRef } from 'react';

import { mergeRefs } from '../lib/merge-refs';
import { cn } from '../lib/utils';
import { Loading } from '../loading/loading';
// import { useTranslations } from '../shared';
import { Track } from '../track/track';
import { buttonVariants } from './styles';
import { type ButtonProps } from './types';

/**
 * Button
 *
 * @description Buttons are used to initialize an action, their label should
 * express what action will occur when the user interacts with it.
 */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(props, forwardedRef) {
		const internalRef = useRef<HTMLButtonElement>(null);
		// const { button: translations } = useTranslations();
		const {
			children,
			className,
			classNames = {},
			iconEnd: IconEnd,
			iconStart: IconStart,
			isDisabled = false,
			isLoading = false,
			isPressed,
			// loadingLabel = translations.loadingLabel,
			onClick,
			size = 'standard',
			styles = {},
			type = 'button',
			variant = 'primary',
			...consumerProps
		} = props;

		const handleOnClick = useCallback(
			(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
				internalRef.current?.focus();
				if (isLoading) return;
				onClick?.(event);
			},
			[isLoading, onClick],
		);

		return (
			<button
				{...consumerProps}
				aria-disabled={isDisabled || undefined}
				aria-pressed={typeof isPressed === 'boolean' ? isPressed : undefined}
				className={cn(
					buttonVariants({
						className,
						isDisabled,
						size,
						variant,
					}),
				)}
				onClick={handleOnClick}
				ref={mergeRefs([internalRef, forwardedRef])}
				type={type}
			>
				<Track
					as="span"
					className={isLoading ? 'opacity-0' : ''}
					classNames={{
						railStart: classNames.iconStart,
						railEnd: classNames.iconEnd,
					}}
					railEnd={IconEnd}
					railStart={IconStart}
				>
					{children}
				</Track>
				<span
					aria-live="assertive"
					className={cn(classNames.label)}
					style={styles.label}
				>
					{isLoading ? (
						<span
							// aria-label={loadingLabel}
							aria-label="Busy"
							className={cn(
								'pointer-events-none absolute inset-0 inline-flex items-center justify-center',
							)}
						>
							<Loading
								size={iconSizeMap[size]}
								tone={loadingToneMap[variant]}
							/>
						</span>
					) : null}
				</span>
			</button>
		);
	},
);

const loadingToneMap = {
	primary: 'onPrimary',
	criticalPrimary: 'onPrimary',
	criticalTertiary: 'critical',
	neutralSecondary: 'primary',
	neutralTertiary: 'primary',
	tertiary: 'accent',
} as const;

const iconSizeMap = {
	large: 'regular',
	small: 'xsmall',
	standard: 'xsmall',
} as const;