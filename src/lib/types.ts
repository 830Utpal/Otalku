import { Prisma } from "@prisma/client";

export const postDataInclude: Prisma.PostInclude = {
  user: {
    select: {
      username: true,
      displayName: true,
      avatarUrl: true,
    },
  },
};

export type PostData = Prisma.PostGetPayload<{
  include: typeof postDataInclude;
}>;
