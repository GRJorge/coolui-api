import userModel, { interfaceUser } from '../models/user.model';

class UserService {
    createUser(userData: interfaceUser) {
        const user = new userModel(userData);
        return user.save();
    }
}

export default new UserService();
