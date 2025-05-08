import { useUserContext } from './state-management/context/UserContext';

const BioData = () => {
  const { user } = useUserContext();
  if (!user) return null;

  return (
    <section className="flex-none lg:flex gap-[37px] items-start">
      <div className="w-[70px] h-[70px] lg:w-[117px] lg:h-[117px] flex-none">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="rounded-full w-full"
        />
      </div>
      <div className='w-full'>
        <div className="flex flex-col lg:flex-row justify-between pb-5 w-full">
          <div>
            <h1 className="text-base lg:text-xl text-font-1 font-bold capitalize">
              {user.name}
            </h1>
            <div className="text-primary font-normal text-base selection:bg-red">
              @{user.login}
            </div>
          </div>
          <time className="text-sm font-normal text-font-1 basis-1/2 pt-2 lg:text-end">
            Joined{' '}
            {new Date(user.created_at).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </time>
        </div>
        <p className="text-font-1 font-normal text-sm">{user.bio}</p>
      </div>
    </section>
  );
};

export default BioData;
