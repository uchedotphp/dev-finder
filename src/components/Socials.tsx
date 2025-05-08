import { ReactNode } from 'react';
import Location from '../assets/images/location-icon.svg';
import Twitter from '../assets/images/twitter.svg';
import Building from '../assets/images/office-building.svg';
import Url from '../assets/images/url.svg';
import { useUserContext } from './state-management/context/UserContext';

export interface SocialsProps {
  children: ReactNode;
  name: string;
}

export const Social = ({ name, children }: SocialsProps) => {
  return (
    <div className="flex gap-[13px] lg:flex-none items-center">
      <span>{children}</span>
      <p className={[name ? 'text-font-1' : 'text-font-1/50'].join('')}>
        {name || 'Not Available'}
      </p>
    </div>
  );
};

export const Socials = () => {
  const { user } = useUserContext();
  if (!user) return null;

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <Social name={user.location}>
        <img src={Location} alt="location icon" />
      </Social>

      <Social name={user.twitter_username}>
        <img src={Twitter} alt="twitter icon" />
      </Social>

      <Social name={user.blog}>
        <img src={Url} alt="url link" />
      </Social>

      <Social name={user.company}>
        <img src={Building} alt="office building" />
      </Social>
    </div>
  );
};
