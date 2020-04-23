const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  username: { type: String, required: true },
  email:{type:String, required:true},
  shoppingcart :[{ type: Schema.Types.ObjectId, ref: 'item' }],
  purchase: [{ type: Schema.Types.ObjectId, ref: 'item' }],
  messages:{received:[{type:Schema.Types.ObjectId, ref:"message"}],
            posted:[{type:Schema.Types.ObjectId, ref:"message"}]
            },
        });

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo;