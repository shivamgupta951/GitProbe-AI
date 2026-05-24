"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserContextDetail } from "./context/UserContextDetails";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userDetails, setUserDetails] = useState<any>();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (isLoaded && user) {
      CreateNewUser();
    }
  }, [user, isLoaded]);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/users");
      console.log("Result:", result.data);
      setUserDetails(result.data?.user);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div>
      <UserContextDetail value={{ userDetails, setUserDetails }}>
        {children}
      </UserContextDetail>
    </div>
  );
}

export default Provider;
