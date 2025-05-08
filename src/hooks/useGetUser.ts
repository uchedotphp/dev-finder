import axios from 'axios';
import { GithubUser } from '../data';
import { useQuery } from '@tanstack/react-query';

const useGetUser = ({ username }: { username: string | undefined }) => {

    const getUserDetails = async (username: string | undefined) =>
        await axios
            .get<GithubUser>(`https://api.github.com/users/${username}`)
            .then(({ data }) => data);

    return useQuery<GithubUser, Error>({
        queryKey: [username],
        queryFn: () => {
            if (!username) {
                throw new Error('Username is undefined');
            }
            return getUserDetails(username);
        },
        enabled: !!username, // Prevents the query from running if username is falsy
    });
}

export default useGetUser;