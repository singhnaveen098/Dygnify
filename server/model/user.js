const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    pincode: { type: Number, required: true },
    state: { type: String, required: true },
    companyname: { type: String, required: true },
    gstno: { type: String, required: true },
    companyphone: { type: Number, required: true },
    businesstype: { type: String, required: true },
    companyaddress: { type: String, required: true },
    companypincode: { type: Number, required: true },
    companystate: { type: String, required: true },
    loanamount: { type: Number, required: true },
    interestrate: { type: Number, required: true },
    loantenure: { type: Number, required: true },
    loanpurpose: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
