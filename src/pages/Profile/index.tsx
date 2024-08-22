// import { Alert, AlertIcon } from "@chakra-ui/react";
import useAuth from "@/hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const { email, verified, createdAt } = user;
  return (
    <div className=" mt-16 flex-col">
      <h2 className="mb-4">My Account</h2>
      {!verified && (
        <Alert status="warning" w="fit-content" borderRadius={12} mb={3}>
          <AlertIcon />
          Please verify your email
        </Alert>
      )}
      <p className="text-white mb-2">
        Email:{" "}
        <span as="span" color="gray.300">
          {email}
        </span>
      </p>
      <p color="white">
        Created on{" "}
        <span as="span" color="gray.300">
          {new Date(createdAt).toLocaleDateString("en-US")}
        </span>
      </p>
    </div>
  );
};
export default Profile;
