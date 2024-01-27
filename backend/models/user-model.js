const mongoose=require('mongoose')
const {Schema} = mongoose;

const UserSchema =new Schema({
    user_id: {
        type: Number,
        unique: true
    },
    username:String,
    email:{type:String,unique:true},
    password:String
})
UserSchema.pre('save', async function (next) {
    if (!this.user_id) {
      const lastUser = await this.constructor.findOne({}, {}, { sort: {user_id: -1 } });
      if (lastUser) {
        const lastUserId = lastUser.user_id;
        const sequenceNumber = parseInt(lastUserId) + 1;
        this.user_id = sequenceNumber;
      } else {
        this.user_id = '1';
      }
    }
    next();
  });

const UserModel =mongoose.model("User",UserSchema)


module.exports = UserModel;