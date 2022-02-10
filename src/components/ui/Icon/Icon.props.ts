import { DetailedHTMLProps, HTMLAttributes, SVGProps } from 'react';

interface IconPropsInterface {
  [key: string]: unknown;
  fallback?: () => undefined;
  loading?: JSX.Element | object | string | null ;
  src: string;
  wrapper?: 'div' | 'span' | 'svg' | null,
  renumerateIRIElements?: boolean,
  useRequestCache?: boolean
}

export const defaultProps = {
  fallback: () => undefined,
  wrapper: null,
  renumerateIRIElements: true,
  useRequestCache: true,
  loading: null
};

type HTMLWrapperType = HTMLSpanElement | HTMLDivElement;
type SVGWrapperType = SVGSVGElement;

export type WrapperType = HTMLWrapperType | SVGWrapperType;

export type IconProps = IconPropsInterface &
  DetailedHTMLProps<HTMLAttributes<HTMLWrapperType>, HTMLWrapperType> &
  SVGProps<SVGWrapperType>;

export interface IconState {
  hasError: boolean;
  isLoading: boolean;
}

export enum IconNames {
  ACTIVITY = 'activity',
  AIRPLAY = 'airplay',
}