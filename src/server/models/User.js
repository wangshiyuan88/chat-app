import mongoose from 'mongoose';
import findOrCreate from 'mongoose-findorcreate';

const { Schema } = mongoose;


var UserSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String
    },
    photo: {
        type: String
    },
    email: {
        type: String
    }
});

UserSchema.plugin(findOrCreate);


let User = mongoose.model('User', UserSchema);
export default User;
