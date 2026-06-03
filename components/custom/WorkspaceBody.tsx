"use client";
import { UserContextDetail } from "@/app/context/UserContextDetails";
import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

const WorkspaceBody = () => {
  const router = useRouter();
  const handleRepoAddition = () =>{
    router.push('/api/github');
  }
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
      <div className="mt-10 border py-2 rounded-2xl flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-md p-1">
            <Image src="/image.png" alt="githubLogo" width={70} height={70} />
          </div>
          <div className="text-2xl mx-4">Connect Github & Add Repo!</div>
        </div>
        <Button onClick={handleRepoAddition} className="cursor-pointer">
          + Add
        </Button>
      </div>
      <div className="border py-12 mt-10 px-4 flex justify-center flex-col rounded-2xl items-center">
        <div className="text-6xl">📁</div>
        <div className="my-5 text-2xl font-semibold">
          No Repository Connected!
        </div>
        <p className="text-orange-200">
          Connect your Github account and add a repository to generate and run
          test cases.
        </p>
        <Button className="mt-6 cursor-pointer">
          <Link /> Connect Repo
        </Button>
      </div>
    </div>
  );
};

export default WorkspaceBody;
