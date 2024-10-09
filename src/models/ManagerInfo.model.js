const { Schema, model } = require("mongoose");

const ManagerInfoSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String, // name of the pic stored
            required: false,
        },
        country: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique:true,
            match: [/.+\@.+\..+/, "Please enter a valid email address"],
        },
        phoneNo: {
            type: String,
            required: true,
            unique:true,
            match: [/^\d{10}$/, "Please enter a valid phone number"],
        },
        businessId: {
            type: Schema.Types.ObjectId,
            ref: "BusinessInfo", 
            required: true,
        },
    },
    {
        timestamps: true, 
    }
);

const ManagerInfoModel = new model("ManagerInfo", ManagerInfoSchema);

module.exports = ManagerInfoModel;
