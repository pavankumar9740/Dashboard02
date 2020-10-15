import roles from './roles';

const orderMgmtRouteArray=[ 
    {"name":"OrderMgmtHome","path":"/OrderMgmtHome","component":"OrderMgmtHome","url":"", "allowedRoles":[roles.MfAdmin, roles.MfAccountManager, roles.MfWarehouseIncharge,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge,roles.PrintPartner,roles.TpsafAdmin, roles.TpsafFacilityAdmin, roles.TpsafFacilityIncharge]},
    {"name":"OrderManagement","path":"/OrderManagement","component":"","url":process.env.VUE_APP_OrderMgmtAppUrl},
    {"name":"Orders","path":"/Orders","component":"Orders","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.MfAccountManager,roles.MfAdmin, roles.MfWarehouseIncharge]},
    {"name":"MfOrders","path":"/MfOrders","component":"Orders","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TaxAuthAdmin,roles.TaxAuthRevenueOfficer, roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"StockOrders","path":"/StockOrders","component":"StockOrders","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TaxAuthAdmin,roles.TaxAuthRevenueOfficer, roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"PrintOrderDetails","path":"/PrintOrderDetails","component":"PrintOrderDetails","url":"","allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge,roles.PrintPartner]},
    {"name":"PrintOrderList","path":"/PrintOrderList","component":"PrintOrderList","url":"","allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge,roles.PrintPartner]},
    {"name":"OrderReview","path":"/OrderReview/:orderId","component":"OrderReview","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager, roles.MfWarehouseIncharge,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge]},
    {"name":"OrderView","path":"/OrderView/:orderId","component":"OrderView","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager, roles.MfWarehouseIncharge,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge]},
    {"name":"OrderPayment","path":"/OrderPayment","component":"OrderPayment","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager, roles.MfWarehouseIncharge,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge]},
    {"name":"Order","path":"/Order/:orderId?","component":"Order","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.MfAdmin, roles.MfAccountManager, roles.MfWarehouseIncharge, roles.TpsafAdmin, roles.TpsafFacilityAdmin, roles.TpsafFacilityIncharge]},
    {"name":"PlaceOrder","path":"/PlaceOrder","component":"Order","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.MfAdmin, roles.MfAccountManager, roles.MfWarehouseIncharge, roles.TpsafAdmin, roles.TpsafFacilityAdmin, roles.TpsafFacilityIncharge]},
    {"name":"FulFillManufacturerOrder","path":"/FulFillManufacturerOrder","component":"FulFillManufacturerOrder","url":"","allowedRoles":[roles.TpsafAdmin, roles.TpsafFacilityAdmin, roles.TpsafFacilityIncharge]},
    {"name":"StockRequestFulfill","path":"/StockRequestFulfill","component":"StockRequestFulfill","url":"","allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge]},
    {"name":"FullFillOrder","path":"/FullFillOrder","component":"FullFillOrder","url":"","allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge]},
    {"name":"PrintOrders","path":"/PrintOrders","component":"PrintOrders","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge,roles.PrintPartner]},
    {"name":"PrintOrderPlacementEdit","path":"/PrintOrderPlacementEdit/:printOrderId?","component":"PrintOrderPlacement","url":"","allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge]},
    {"name":"PrintOrderPlacement","path":"/PrintOrderPlacement/","component":"PrintOrderPlacement","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge]},
    {"name":"PrintOrderView","path":"/PrintOrderView/:printOrderStatus/:printOrderId","component":"PrintOrderView","url":"","allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge,roles.PrintPartner]},
    {"name":"InternalStockRequest","path":"/InternalStockRequest/:requestId?","component":"InternalStockRequest","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TpsafFacilityIncharge,roles.TpsafAdmin, roles.TpsafFacilityAdmin]},
    {"name":"StockRequestList","path":"/StockRequestList/","component":"StockRequestList","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TpsafFacilityIncharge,roles.TpsafAdmin, roles.TpsafFacilityAdmin]},
    {"name":"StockRequestDetail","path":"/StockRequestDetail/:requestId","component":"StockRequestDetail","url":"","allowedRoles":[roles.TpsafFacilityIncharge,roles.TpsafAdmin, roles.TpsafFacilityAdmin]},
    {"name":"StockRequestReview","path":"/StockRequestReview/:requestId","component":"StockRequestReview","url":"","allowedRoles":[roles.TpsafFacilityIncharge]},
    {"name":"MonthlyReturns","path":"/MonthlyReturns","component":"MonthlyReturns","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.MfAdmin,roles.MfAccountManager]},
    {"name":"MonthlyReturn","path":"/MonthlyReturn","component":"MonthlyReturns","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer]},
    {"name":"DailyConsumption","path":"/DailyConsumption","component":"DailyConsumption","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.MfAdmin,roles.MfAccountManager, roles.MfWarehouseIncharge,roles.TpsafAdmin, roles.TpsafFacilityAdmin, roles.TpsafFacilityIncharge]},
    {"name":"ReturnOrder","path":"/ReturnOrder","component":"ReturnOrder","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.MfAdmin, roles.MfAccountManager,roles.MfWarehouseIncharge,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer]},
    {"name":"ApproveRejectProduct","path":"/ChangeSkuProductApprove","component":"ApproveRejectProduct","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer]},
    {"name":"ChangeSKUProductName","path":"/ChangeSKUProductName","component":"ChangeskuDetailing","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.MfAdmin,roles.MfAccountManager]},
    {"name":"ChangeSKUProductNamelisting","path":"/ChangeSKUProductNamelisting","component":"Changeskulisting","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge,roles.MfAdmin,roles.MfAccountManager]},
    {"name":"changeSkuProductNameReview","path":"/changeSkuProductNameReview","component":"changeSkuProductNameReview","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge]},
    {"name":"changeSkuProductNameView","path":"/changeSkuProductNameView","component":"changeSkuProductNameView","url":process.env.VUE_APP_OrderMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate, roles.TsspWarehouseIncharge,roles.MfAdmin,roles.MfAccountManager]},
]

export default orderMgmtRouteArray;