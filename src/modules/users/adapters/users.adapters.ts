import { Users, UsersBack } from "../common/users.model";

// adapter used in case more data structure or any change from backend
export const toUsersModel = (users: UsersBack): Users => {
    return users.map(user => ({
        ...user,
        id: user._id,
    }))
}
