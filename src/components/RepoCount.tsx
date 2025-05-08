import { useNumberFormatter } from '../utilities';
import { useUserContext } from './state-management/context/UserContext';

interface RepoCountProps {
  name: string;
  value: string;
}

export const SingleRepo = ({ name, value }: RepoCountProps) => {
  return (
    <section>
      <h3 className="capitalize text-xxs lg:text-xs font-normal text-font-1">
        {name}
      </h3>
      <p className="font-bold text-md text-center lg:text-left text-font-1">
        {useNumberFormatter(parseInt(value))}
      </p>
    </section>
  );
};

export const RepoCount = () => {
  const { user } = useUserContext();
  if (!user) return null;

  return (
    <section className="rounded-xs bg-bg1 w-full pt-[15px] pb-[17px] px-8 flex items-center justify-between">
      <SingleRepo name="repos" value={user.public_repos} />
      <SingleRepo name="followers" value={user.followers} />
      <SingleRepo name="following" value={user.following} />
    </section>
  );
};

