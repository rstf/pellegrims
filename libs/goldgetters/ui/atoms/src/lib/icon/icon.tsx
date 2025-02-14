import { FunctionComponent, ReactElement } from 'react';
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { FacebookIcon } from './custom/facebook';
import { TwitterIcon } from './custom/twitter';
import { GithubIcon } from './custom/github';

export type IconType =
  | 'sun'
  | 'moon'
  | 'user'
  | 'hamburger'
  | 'facebook'
  | 'twitter'
  | 'github'
  | 'remove';

export interface IconProps {
  type: IconType;
}

const iconMapping: Record<IconType, ReactElement> = {
  moon: <MoonIcon className="h-6 w-6" />,
  sun: <SunIcon className="h-6 w-6" />,
  user: <UserIcon className="h-6 w-6" />,
  hamburger: <Bars3Icon className="h-6 w-6" />,
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  github: <GithubIcon />,
  remove: <XMarkIcon className="h-6 w-6" />,
};

export const Icon: FunctionComponent<IconProps> = ({ type }) =>
  iconMapping[type];
