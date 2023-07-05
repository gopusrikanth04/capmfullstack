sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sri.pro.project1.controller.Main", {

            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(oModel, "TestModel");
                this.getProjects();
            },

            getProjects: async function () {
                var oModel = this.getOwnerComponent().getModel();
                const info = await $.get(oModel.sServiceUrl + '/getOrders()');
                if (info && info.value) {
                    this.getView().getModel("TestModel").setProperty("/Projects", info.value);
                }
            }
        });
    });
