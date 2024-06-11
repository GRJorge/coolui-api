import { Schema, model } from 'mongoose';

interface interfaceUser {
    username: string;
    email: string;
    password: string;
    profilePicture: string;
}

const schema = new Schema<interfaceUser>(
    {
        username: { type: String, required: true, minlength: 4, maxlength: 16 },
        email: { type: String, required: true, immutable: true, unique: true, minlength: 4, maxlength: 128 },
        password: { type: String, required: true, minlength: 6 },
        profilePicture: { type: String },
        //favoritePalettes
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export default model<interfaceUser>('User', schema);
export { interfaceUser };
