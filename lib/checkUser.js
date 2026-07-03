import { db } from "./prisma";

export const checkUser = async () => {
  try {
    const defaultEmail = "default@workwise.local";
    const defaultClerkId = "default-user-id";

    const loggedInUser = await db.user.findUnique({
      where: {
        email: defaultEmail,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const newUser = await db.user.create({
      data: {
        clerkUserId: defaultClerkId,
        name: "Default User",
        imageUrl: "",
        email: defaultEmail,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
