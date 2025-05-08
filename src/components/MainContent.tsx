import BioData from './BioData';
import { RepoCount } from './RepoCount';
import { Socials } from './Socials';
import { useUserContext } from './state-management/context/UserContext';

const MainContent = () => {
  const { user } = useUserContext();
  if (!user) return null;

  return (
    <main className="rounded-sm shadow-default bg-bg2 pt-8 px-6 pb-12 lg:p-12">
      <BioData />

      <div className="lg:ml-[154px]">
        <div className="mt-8">
          <RepoCount />
        </div>

        <div className="mt-[39px]">
          <Socials />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
