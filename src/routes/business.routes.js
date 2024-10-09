const express = require("express");
const { businessApis } = require("../api/business.apis");
const { ValidateBusinessInput, ValidateManagerInput } = require("../middlewares/validateInput.middleware");
const { uploadOnDisk } = require("../middlewares/imgUploadHelper.middleware");
const { handleBusinessInfo, handleManagerInfo } = require("../controllers/business.controller");

const businessRouter = express.Router();

businessRouter.post(businessApis.businessInfoSubmit, [ValidateBusinessInput, uploadOnDisk.single("file")], handleBusinessInfo);
businessRouter.post(businessApis.managerInfoSubmit, [ValidateManagerInput, uploadOnDisk.single("file")], handleManagerInfo)

module.exports = {
    businessRouter
}