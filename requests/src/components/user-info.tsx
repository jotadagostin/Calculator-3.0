import React from "react";
import useUser from "../assets/hooks/use-users";

export default function UserInfo() {
  const { user, userRequestStatus, getUser } = useUser();

  React.useEffect(() => {
    getUser("Gus");
  }, [getUser]);

  if (userRequestStatus === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ul>
        <li>Nome: {user?.name}</li>
        <li>Username: {user?.id}</li>
      </ul>
    </div>
  );
}
