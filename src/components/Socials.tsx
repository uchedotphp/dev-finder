import Location from '../assets/images/location-icon.svg';
import Twitter from '../assets/images/twitter.svg';
import Building from '../assets/images/office-building.svg';
import Url from '../assets/images/url.svg';

interface SocialsProps {
  location: string;
  twitter: string;
  blogurl: string;
  company: string;
}

const Socials = ({ location, twitter, blogurl, company }: SocialsProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="flex gap-[13px] lg:flex-none items-center">
        <span>
          <img src={Location} alt="location icon" />
        </span>
        <p className={[location ? 'text-font-1' : 'text-font-1/50'].join('')}>
          {location || 'Not Available'}
        </p>
      </div>

      <div className="flex gap-[13px] lg:flex-none items-center">
        <span>
          <img src={Twitter} alt="twitter icon" />
        </span>
        <p className={[twitter ? 'text-font-1' : 'text-font-1/50'].join('')}>
          {twitter || 'Not Available'}
        </p>
      </div>

      <div className="flex gap-[13px] lg:flex-none items-center">
        <span>
          <img src={Url} alt="url link" />
        </span>
        {blogurl && <p className="text-font-1">{blogurl}</p>}
        {!blogurl && <p className="text-font-1/50">Not Available</p>}
      </div>

      <div className="flex gap-[13px] lg:flex-none items-center">
        <span>
          <img src={Building} alt="office building" />
        </span>
        <p className={[company ? 'text-font-1' : 'text-font-1/50'].join(' ')}>
          {company || 'Not Available'}
        </p>
      </div>
    </div>
  );
};

export default Socials;
