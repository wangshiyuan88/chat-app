import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import findOrCreate from 'mongoose-findorcreate';

const { Schema } = mongoose;


var UserSchema = new Schema({
    googleId: {
        type: String,
        unique: true,
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

// UserSchema.pre('save', function(next){
//     let user = this;
//     if(this.isModified('passpord') || this.isNew ){
//         bcrypt.genSalt(10, function(err, salt){
//             if(err){
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, function(err, hash) {
//                 if(err){
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     }else{
//         next();
//     }
// });
//
// UserSchema.methods.comparePassword = function (passw) {
//     bcrypt.compareSync(passw, this.password, (err, isMatch) => err? false : isMatch);
// };

let User = mongoose.model('User', UserSchema);
export default User;
