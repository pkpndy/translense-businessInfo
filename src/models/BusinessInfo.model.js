const { Schema, model } = require("mongoose");

const BusinessInfoSchema = new Schema(
    {
        businessName: {
            type: String,
            required: true,
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
            minlength: [15, "Address must be at least 15 characters long"], 
        },
        openingTime: {
            type: String,
            required: true,
            match: [/^(0[0-9]|1[0-2])[0-5][0-9](am|pm)$/, "Please enter a valid opening time (e.g., 0715am or 1230pm)"],
        },
        closingTime: {
            type: String,
            required: true,
            match: [/^(0[0-9]|1[0-2])[0-5][0-9](am|pm)$/, "Please enter a valid closing time (e.g., 0715am or 1230pm)"],
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
            unique: true,
            match: [/^\d{10}$/, "Phone number must be exactly 10 digits"],
        },
        imageId: {
            type: String,  // name of the pic stored
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const BusinessInfoModel = new model("BusinessInfo", BusinessInfoSchema);

module.exports = BusinessInfoModel;