"use client";

import {useState, FC} from "react";
import {Card, CardHeader, Button, Avatar, CardBody, CardFooter} from "@nexus-ds/react";
import {clsx} from "@nexus-ds/shared-utils";
import NextImage from "next/image";

interface UserTwitterCardProps {
  className?: string;
}

export const UserTwitterCard: FC<UserTwitterCardProps> = ({className}) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className={clsx("max-w-[300px]", className)}>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            ImgComponent={NextImage}
            alt="Nanami Kento"
            imgProps={{
              width: 40,
              height: 40,
            }}
            radius="full"
            size="md"
            src="https://staticg.sportskeeda.com/editor/2023/10/db070-16974972286515-1920.jpg"
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-sm font-semibold leading-none text-default-600">Nanami Kento</h4>
            <h5 className="text-sm tracking-tight text-default-400">@nanamikento</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-sm pl-px text-default-400">
        Efficiency-driven Jujutsu Sorcerer, lover of precision @getNexus &nbsp;
          <span aria-label="confetti" role="img">
          ⚔️💼
          </span>
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-sm">4</p>
          <p className=" text-default-400 text-sm">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-sm">97.1K</p>
          <p className="text-default-400 text-sm">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};
