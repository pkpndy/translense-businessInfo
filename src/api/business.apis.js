const { ApiEnum } = require("../utils/helper.enum");

const pathForBusinessPrefix = `${ApiEnum.pathForHomeApi}/business`;

const businessApis = {
    businessInfoSubmit: `${pathForBusinessPrefix}/businessInfo`,
    managerInfoSubmit: `${pathForBusinessPrefix}/ownerInfo`
}

module.exports = {
    businessApis
}