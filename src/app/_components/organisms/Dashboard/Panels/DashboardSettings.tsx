"use client";

import { Button, TextInput } from "@/app/_components/atoms";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

type TProps = {};

export const DashboardSettings: React.FC<TProps> = () => {
  return (
    <Tab.Panel as="section" className="flex flex-col gap-[15px]">
      <h2 className="text-2xl font-semibold text-gray-900">Account Settings</h2>
      <div className="flex flex-col">
        <section className="flex gap-20">
          <figure className="flex-1 flex flex-col items-center justify-center gap-[22px] border-[1px] border-gray-200 p-11 h-fit">
            <div className="relative h-[280px] w-[280px]">
              <Image
                src="/images/default-avatar-image.jpg"
                alt=""
                width={280}
                height={280}
                className="w-full h-full"
              />
              <div className="text-sm absolute p-3 bottom-0 left-0 right-0 flex justify-center items-center gap-2 bg-black bg-opacity-50">
                <Image src="/icons/upload.svg" alt="" width={24} height={24} />
                <span className="text-white">Upload Photo</span>
              </div>
            </div>
            <figcaption className="text-sm text-gray-500 text-center">
              Image Size Should be under 1MB and image ratio need to be 1:1
            </figcaption>
          </figure>
          <div className="flex-[4]">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <div className="flex items-end gap-5">
                <TextInput
                  fullWidth
                  label="Full name"
                  placeholder="First Name"
                />
                <TextInput fullWidth placeholder="Lastname" />
              </div>
              <TextInput
                fullWidth
                label="Username"
                placeholder="Enter your username"
              />
              <TextInput
                fullWidth
                label="Student Chapter"
                placeholder="Enter your student chapter name"
              />
              <TextInput fullWidth label="Email" placeholder="Email address" />
              <TextInput
                fullWidth
                label="Title"
                placeholder="Your title, proffesion or small biography"
              />
              <Button>Save Changes</Button>
            </form>
          </div>
        </section>
      </div>
      <div className="border-[1px] border-gray-200 w-full my-4" />
      <h2 className="text-2xl font-semibold text-gray-900">Change Password</h2>
      <section className="flex flex-col w-1/2 gap-5">
        <TextInput
          fullWidth
          label="Current Password"
          placeholder="Password"
          type="password"
        />
        <TextInput
          fullWidth
          label="New Password"
          placeholder="Password"
          type="password"
        />
        <TextInput
          fullWidth
          label="Confirm Password"
          placeholder="Confirm new password"
          type="password"
        />
        <Button>Save Changes</Button>
      </section>
    </Tab.Panel>
  );
};
