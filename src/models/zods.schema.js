const { z } = require('zod');

const BusinessInfoZodSchema = z.object({
    businessName: z.string().min(1, "Business name is required"),
    country: z.string().min(1, "Country is required"),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    address: z.string().min(15, "Address must be at least 15 characters long"),
    openingTime: z.string().regex(/^(0[0-9]|1[0-2])[0-5][0-9](am|pm)$/, "Please enter a valid opening time (e.g., 0715am or 1230pm)"),
    closingTime: z.string().regex(/^(0[0-9]|1[0-2])[0-5][0-9](am|pm)$/, "Please enter a valid closing time (e.g., 0715am or 1230pm)"),
    email: z.string().email("Please enter a valid email address"),
    phoneNo: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

const ManagerInfoZodSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    country: z.string().min(1, "Country is required"),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    address: z.string().min(1, "Address is required"),
    email: z.string().email("Please enter a valid email address"),
    phoneNo: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    businessId: z.string().min(1, "Business ID is required").refine(val => val.match(/^[0-9a-fA-F]{24}$/), {
        message: "Business ID must be a valid ObjectId",
    }),
});

module.exports = {
    BusinessInfoZodSchema,
    ManagerInfoZodSchema
}