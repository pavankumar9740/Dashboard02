import roles from './roles';
const vendorMgmtRouteArray=[
    {"name":"VendorManagement","path":"/VendorManagement","component":"","url":process.env.VUE_APP_VendorMgmtAppUrl},
    {"name":"VendorMgmtHome","path":"/VendorMgmtHome","component":"VendorMgmtHome","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager, roles.MfWarehouseIncharge,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge]},
    {"name":"PrintPartner","path":"/PrintPartner","component":"PrintPartner","url":process.env.VUE_APP_VendorMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"DeliveryPartner","path":"/DeliveryPartner","component":"DeliveryPartner","url":process.env.VUE_APP_VendorMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"ManageUsers","path":"/ManageUsers","component":"ManageUsers","url":"","allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"SupplierManagement","path":"/SupplierManagement","component":"SupplierManagement","url":process.env.VUE_APP_VendorMgmtAppUrl,"allowedRoles":[roles.TaxAuthAdmin,roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"MfListing","path":"/MfListing","component":"MfListing","url":process.env.VUE_APP_VendorMgmtAppUrl,"allowedRoles":[roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"ReviewMf","path":"/ReviewMf/:mfId","component":"ReviewMf","url":"","allowedRoles":[roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"ViewMf","path":"/ViewMf/:mfId","component":"ViewMf","url":process.env.VUE_APP_VendorMgmtAppUrl,"allowedRoles":[roles.MfAdmin, roles.MfAccountManager,roles.MfWarehouseIncharge,roles.TpsafAdmin,roles.TpsafFacilityAdmin]},
    {"name":"MfInActive","path":"/MfInActive","component":"MfInActive","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager]},
    {"name":"MfActive","path":"/MfActive","component":"MfActive","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager]},
    {"name":"MfEdit","path":"/MfEdit/:Guid","component":"MfEdit","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager]},
    {"name":"MfRejected","path":"/MfRejected","component":"MfRejected","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager]},
    {"name":"Tpsaf","path":"/tpsaf/","component":"Tpsaf","url":process.env.VUE_APP_VendorMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer]},
    {"name":"ConsumptionTpsaf","path":"/tpsaf/","component":"Tpsaf","url":process.env.VUE_APP_VendorMgmtAppUrl,"allowedRoles":[roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer]},
    {"name":"TpsafView","path":"/tpsafView/:id","component":"TpsafView","url":"","allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer]},
    {"name":"MfSubmit","path":"/MfSubmit","component":"MfSubmit","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager]},
]

export default vendorMgmtRouteArray;