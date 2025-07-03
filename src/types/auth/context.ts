import { Prisma } from "../../libs/db/prisma/generated/clientlient";

export type AuthContextT = {
  user: null | Prisma.UserCreateInput;
  isSuperAdmin: boolean;
  isAuthLoading: boolean;
  refresh: () => void;
};
