import { useNumberFormatter } from '../utilities';

interface RepoCountProps {
  repos: number;
  followers: number;
  following: number;
}

const RepoCount = ({ repos, followers, following }: RepoCountProps) => {
  return (
    <section className="rounded-xs bg-bg1 w-full pt-[15px] pb-[17px] px-8 flex items-center justify-between">
      <div>
        <h3 className="capitalize text-xxs lg:text-xs font-normal text-font-1">repos</h3>
        <p className="font-bold text-md text-center lg:text-left text-font-1">
          {useNumberFormatter(repos)}
        </p>
      </div>
      <div>
        <h3 className="capitalize text-xxs lg:text-xs font-normal text-font-1">
          followers
        </h3>
        <p className="font-bold text-md text-center lg:text-left text-font-1">
          {useNumberFormatter(followers)}
        </p>
      </div>
      <div>
        <h3 className="capitalize text-xxs lg:text-xs font-normal text-font-1">
          following
        </h3>
        <p className="font-bold text-md text-center lg:text-left text-font-1">
          {useNumberFormatter(following)}
        </p>
      </div>
    </section>
  );
};

export default RepoCount;
