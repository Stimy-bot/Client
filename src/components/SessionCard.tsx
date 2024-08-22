// import { Box, Button, Flex, Text } from "@chakra-ui/react";
// eslint-disable-next-line import/extensions
import useDeleteSession from '@/hooks/useDeleteSession';
import Button from './ReusableComponents/Button';

function SessionCard({ session }) {
  const { _id, createdAt, userAgent, isCurrent } = session;

  const { deleteSession, isPending } = useDeleteSession(_id);

  return (
    <div className="p-3 border-spacing-1 border-r-8">
      <div className="flex-1">
        <p className="font-extrabold text-sm mb-1 ">
          {new Date(createdAt).toLocaleString('en-US')}
          {isCurrent && ' (current session)'}
        </p>
        <p className="text-gray-500 text-xs">{userAgent}</p>
      </div>
      {!isCurrent && (
        <Button
          // size="sm"
          variant="primary"
          // ml={4}
          // alignSelf="center"
          // fontSize="xl"
          // color="red.400"
          title="Delete Session"
          onClick={deleteSession}
          isLoading={isPending}
        >
          &times;
        </Button>
      )}
    </div>
  );
}
export default SessionCard;
