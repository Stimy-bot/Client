import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteSession } from '../lib/api';
import { SESSIONS } from './useSessions';

interface Session {
  _id: string;
}
const useDeleteSession = (sessionId: string) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: () => deleteSession(sessionId),
    onSuccess: () => {
      queryClient.setQueryData([SESSIONS], (cache) =>
        cache.filter((session: Session) => session._id !== sessionId)
      );
    },
  });

  return { deleteSession: mutate, ...rest };
};

export default useDeleteSession;
