"use strict";

var AppDispatcher = require("../dispatcher/AppDispatcher.js"),
    ProductConstants = require("../constants/ProductConstants");

var ProductActions = {

    selectProduct: function (index) {
        AppDispatcher.handleViewAction({
            actionType: ProductConstants.PRODUCT_SELECTED,
            data: index
        });
    },

    filterProducts: function (data) {
        AppDispatcher.handleViewAction({
            actionType: ProductConstants.PRODUCT_RECEIVE_FILTERS,
            data: data
        });
    },

    receiveProducts: function (data) {
        AppDispatcher.handleServerAction({
            actionType: ProductConstants.PRODUCT_RECEIVE_DATA,
            data: data
        });
    }

};

module.exports = ProductActions;