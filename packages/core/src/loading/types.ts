import { type StyleProps } from '../shared/types';

type Parts = 'circle' | 'ring';

export type LoadingProps = Pick<React.SVGProps<SVGSVGElement>, 'id'> &
	Partial<StyleProps<Parts>> & {
		/** The size of the icon. */
		size?: 'xsmall' | 'small' | 'regular' | 'large';

		/** The tone of the icon. */
		tone?: 'accent' | 'primary' | 'onPrimary' | 'critical';
	};
