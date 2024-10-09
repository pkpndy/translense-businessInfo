const { BusinessInfoZodSchema, ManagerInfoZodSchema } = require("../models/zods.schema")

const ValidateBusinessInput = (req, res, next) => {
    try {
        const validBusinessInput = BusinessInfoZodSchema.parse(req.body);
        next();
    } catch (err) {
        console.log("error in input validation: ");
        console.log(err);
        
        return res.status(400).json({
            message: err.errors,
            errors: true,
            data: null
        });
    }
};

const ValidateManagerInput = (req, res, next) => {
    try {
        const validateManagerInput = ManagerInfoZodSchema.parse(req.body);
        next();
    } catch (err) {
        console.log("error in input validation: ");
        console.log(err);
        
        return res.status(400).json({
            message: err.errors,
            errors: true,
            data: null
        });
    }
};

module.exports = {
    ValidateBusinessInput,
    ValidateManagerInput
}