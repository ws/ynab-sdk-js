"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const configuration_1 = require("./configuration");
// This acts as a wrapper around the underlying objects exposed by api.ts
class Api {
    constructor(bearerToken) {
        this.configuration = new configuration_1.Configuration({
            apiKey: `Bearer ${bearerToken}`,
            basePath: "http://localhost:3000/papi/v1"
        });
    }
    get accounts() {
        if (!this._accounts) {
            this._accounts = new api_1.AccountsApi(this.configuration);
        }
        return this._accounts;
    }
    get budgets() {
        if (!this._budgets) {
            this._budgets = new api_1.BudgetsApi(this.configuration);
        }
        return this._budgets;
    }
    get categories() {
        if (!this._categories) {
            this._categories = new api_1.CategoriesApi(this.configuration);
        }
        return this._categories;
    }
    get months() {
        if (!this._months) {
            this._months = new api_1.MonthsApi(this.configuration);
        }
        return this._months;
    }
    get payees() {
        if (!this._payees) {
            this._payees = new api_1.PayeesApi(this.configuration);
        }
        return this._payees;
    }
    get payeeLocations() {
        if (!this._payeeLocations) {
            this._payeeLocations = new api_1.PayeeLocationsApi(this.configuration);
        }
        return this._payeeLocations;
    }
    get transactions() {
        if (!this._transactions) {
            this._transactions = new api_1.TransactionsApi(this.configuration);
        }
        return this._transactions;
    }
    get scheduledTransactions() {
        if (!this._scheduledTransactions) {
            this._scheduledTransactions = new api_1.ScheduledTransactionsApi(this.configuration);
        }
        return this._scheduledTransactions;
    }
}
exports.Api = Api;
//# sourceMappingURL=index.js.map