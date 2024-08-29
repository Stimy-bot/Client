// import { Container, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import useSessions from '../../hooks/useSessions';
import SessionCard from '../../components/SessionCard';
// eslint-disable-next-line import/extensions
import Spinner from '@/components/ReusableComponents/Spinner';

function Settings() {
  const { sessions, isPending, isSuccess, isError } = useSessions();
  return (
    <section className="max-2xl: mt-16">
      <h2 className="mb-6 text-6xl">My Sessions</h2>
      {isPending && <Spinner />}
      {isError && <p className="text-red-400">Failed to get sessions.</p>}
      {isSuccess && (
        <div className="space-x-4 flex-initial align-middle">
          {sessions.map((session) => (
            <SessionCard key={session._id} session={session} />
          ))}
        </div>
      )}
    </section>
  );
}
export default Settings;
