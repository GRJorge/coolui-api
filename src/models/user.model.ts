import { Schema, model } from 'mongoose';

const schema = new Schema(
    {
        username: { type: String, require: true, minlength: 4, maxlength: 16 },
        email: { type: String, require: true, immutable: true, minlength: 4, maxlength: 128 },
        password: { type: String, require: true, minlength: 6 },
        profilePicture: { type: String },
        //favoritePalettes
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export default model('User', schema);
