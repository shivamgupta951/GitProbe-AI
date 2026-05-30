"use client";
import { UserContextDetail } from "@/app/context/UserContextDetails";
import Image from "next/image";
import React, { useContext } from "react";

const WorkspaceBody = () => {
  const context = useContext(UserContextDetail);
  const userDetails = context?.userDetails;
  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <div className="text-3xl">WorkSpace</div>
        <div className="bg-gray-900 p-1 px-2 rounded-xl">
          Remaining Credits: {userDetails?.credits ?? "Loading..."}
        </div>
      </div>
      <div className="mt-10 border flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-md p-1">
            <Image src="/image.png" alt="githubLogo" width={70} height={70} />
          </div>
          <div className="text-2xl mx-4">
            Connect Github & Add Repo!
          </div>
        </div>
        <div className="border p-1 cursor-pointer px-2 bg-taupe-900">+ Add</div>
      </div>
    </div>
  );
};

export default WorkspaceBody;
