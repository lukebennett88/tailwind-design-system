import { forwardRef, useCallback, useMemo, useRef } from 'react';

import { mergeRefs } from '../lib/merge-refs';
import { cn } from '../lib/utils';
import { Loading } from '../loading/loading';
// import { useTranslations } from '../shared';
import { Track } from '../track/track';
import { getButtonStyles } from './styles';
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
			style,
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

		const buttonStyles = useMemo(
			() =>
				getButtonStyles({
					size,
					variant,
				}),
			[size, variant],
		);

		return (
			<button
				{...consumerProps}
				aria-disabled={isDisabled || undefined}
				aria-pressed={typeof isPressed === 'boolean' ? isPressed : undefined}
				className={cn(buttonStyles.base({ className }))}
				data-loading={isLoading || undefined}
				onClick={handleOnClick}
				ref={mergeRefs([internalRef, forwardedRef])}
				style={style}
				type={type}
			>
				<Track
					as="span"
					className={cn(buttonStyles.label({ className: classNames.label }))}
					classNames={{
						railStart: cn(
							buttonStyles.iconStart({ className: classNames.iconStart }),
						),
						railEnd: cn(
							buttonStyles.iconEnd({ className: classNames.iconEnd }),
						),
					}}
					railEnd={IconEnd}
					railStart={IconStart}
					styles={{
						railStart: styles.iconStart,
						railEnd: styles.iconEnd,
					}}
				>
					{children}
				</Track>
				<span aria-live="assertive">
					{isLoading ? (
						<span
							// aria-label={loadingLabel}
							aria-label="Busy"
							className={cn(
								buttonStyles.loadingLabel({
									className: classNames.loadingLabel,
								}),
							)}
							style={styles.loadingLabel}
						>
							<Loading
								className={cn(
									buttonStyles.loading({
										className: classNames.loading,
									}),
								)}
								size={iconSizeMap[size]}
								style={styles.loading}
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
