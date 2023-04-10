import DataLoader from "dataloader";
import { User } from "../entity/user.entity.js";
export const createUserDataLoader = () => {
    new DataLoader(async (userIds) => {
        const users = await User.findByIds(userIds);
        const userIdToUser = {};
        users.forEach((u) => {
            userIdToUser[u.id] = u;
        });
        const sortedUsers = userIds.map((userId) => userIdToUser[userId]);
        console.log("userIds", userIds);
        console.log("map", userIdToUser);
        console.log("sortedUsers", sortedUsers);
        return sortedUsers;
    });
};
