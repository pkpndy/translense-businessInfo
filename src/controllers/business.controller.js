const BusinessInfoModel = require("../models/BusinessInfo.model");
const ManagerInfoModel = require("../models/ManagerInfo.model");

const handleBusinessInfo = async (req, res) => {
    const {
        businessName,
        country,
        state,
        city,
        address,
        openingTime,
        closingTime,
        email,
        phoneNo,
        imgId,
    } = req.body;

    const business = new BusinessInfoModel({
        businessName,
        country,
        state,
        city,
        address,
        openingTime,
        closingTime,
        email,
        phoneNo,
        imgId,
    });

    await business.save();

    const businessId = business._id;

    res.status(201).json({
        message: "Business information saved successfully",
        errors: false,
        data: {
            businessId: businessId,
        },
    });
};

const handleManagerInfo = async (req, res) => {
    try {
        const {
            fullName,
            country,
            state,
            city,
            address,
            email,
            phoneNo,
            businessId,
            imgId,
        } = req.body;

        const profilePic = imgId;

        const business = await BusinessInfoModel.findById(businessId);

        if (!business) {
            return res.status(404).json({ message: "Business not found" });
        }

        if (email !== business.email) {
            return res.status(400).json({
                message: "Manager email must match as in the business details.",
                errors: true,
                data: {
                    businessEmail: business.email,
                },
            });
        } else if (phoneNo !== business.phoneNo) {
            return res.status(400).json({
                message:
                    "Manager Phone no. must match as in the business details.",
                errors: true,
                data: {
                    phoneNumber: business.phoneNo,
                },
            });
        }

        const manager = new ManagerInfoModel({
            fullName,
            profilePic,
            country,
            state,
            city,
            address,
            email,
            phoneNo,
            businessId
        });

        await manager.save();

        res.status(201).json({
            message: "Manager information saved successfully",
            errors: false,
            data: null
        });
    } catch (error) {
        console.error("Error saving manager info:", error);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    handleBusinessInfo,
    handleManagerInfo
};
