import React from "react";
import { fetcher } from "../../helpers/api";
import type { User } from "../../models/user";

export default function useUser() {
  const [user, setUser] = React.useState<User | null>(null);
  const [requestSatus, setRequestStatus] = React.useState<
    "idle" | "loading" | "saving" | "success"
  >("idle");

  const getUser = React.useCallback(async (username: string) => {
    try {
      setRequestStatus("loading");

      const data = await fetcher(`/users/${username}`);

      setUser(data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch user data");
    } finally {
      setRequestStatus("idle");
    }
  }, []);
  return {
    user,
    userRequestStatus: requestSatus,
    getUser,
  };
}
