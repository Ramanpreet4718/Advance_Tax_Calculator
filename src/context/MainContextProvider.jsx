import { createContext, useState } from "react";
import utils from "../utils/utils";

export let MainContext = createContext();

export default function MainContextProvider({ children }) {
    let [formData, setFormData] = useState({
        income_tax: 0,
        net_taxable_income: 0,
        income_from_house_property: 0,
        income_from_salary: 0,
        income_from_other_sources: 0,
        income_from_business: 0,
        agriculture_income: 0,
        deductions: 0,
        self_occupied_property: 0,
        let_out_property: 0,
        net_annual_value: 0,
        cess: 0,
        "standard_deduction_@30": 0,
        new_tax: 0
    });
    let [showDed, setShowDed] = useState(true);
    function setData(data) {
        if (isNaN(Number(data.value))) {
            setFormData({ ...formData, [data.name]: data.value });

        } else {
            setFormData({ ...formData, [data.name]: Number(data.value) });
        }
    }

    function taxCalculation() {
        let netTaxableIncome = totalTaxableIncome()
        let tax;

        console.log(formData.new_tax);

        if (formData.new_tax) {
            tax = utils.newTaxRegime(netTaxableIncome, formData.gender)
        } else {
            tax = utils.oldTaxRegime(netTaxableIncome, formData.gender)
        }

        let cess = utils.roundOff(tax * 4 / 100);
        let totalTax = utils.roundOff(tax + cess);
        setFormData({ ...formData, income_tax: tax, net_taxable_income: netTaxableIncome, cess: cess, total_tax: totalTax });
    }

    function totalTaxableIncome() {
        console.log(formData);
        if (formData.deductions > 150000) {
            formData.deductions = 150000;
        }
        let netTaxableIncome = formData.income_from_house_property + formData.income_from_salary + formData.income_from_other_sources + formData.income_from_business + formData.agriculture_income - formData.deductions;
        return netTaxableIncome;
    }

    function calculateHPIncome() {

        let selfOccupiedProperty = -formData.interest_on_loan || 0;
        let netAnnualValue = formData.annual_lelable_value - ((formData.municipal_taxes || 0) + (formData.unrealized_rent || 0)) || 0;
        let standardDeduction = utils.roundOff(netAnnualValue * 30 / 100) || 0;
        let letOutProperty = netAnnualValue - (standardDeduction + (formData.interest_on_loan_rent || 0)) || 0;
        let incomeFromHouseProperty = selfOccupiedProperty + letOutProperty || 0;

        console.log(incomeFromHouseProperty);
        setFormData({ ...formData, self_occupied_property: selfOccupiedProperty, net_annual_value: netAnnualValue, "standard_deduction_@30": standardDeduction, let_out_property: letOutProperty, income_from_house_property: incomeFromHouseProperty })
    }

    function calculateOtherIncome() {
        // savings_interest
        // commission
        // lottery

        let incomeFromOtherSources = (formData.savings_interest || 0) + (formData.commission || 0) + (formData.lottery || 0)
        setFormData({ ...formData, income_from_other_sources: incomeFromOtherSources });
    }

    function resetToDefault() {
        setFormData({
            ...formData,
            income_tax: 0,
            net_taxable_income: 0,
            income_from_house_property: 0,
            income_from_salary: 0,
            income_from_other_sources: 0,
            income_from_business: 0,
            agriculture_income: 0,
            deductions: 0,
            self_occupied_property: 0,
            let_out_property: 0,
            net_annual_value: 0,
            cess: 0,
            "standard_deduction_@30": 0,
            new_tax: 0
        })
    }

    return (
        <MainContext.Provider
            value={{
                formData,
                setFormData,
                setData,
                taxCalculation,
                totalTaxableIncome,
                calculateHPIncome,
                calculateOtherIncome,
                resetToDefault,
                showDed,
                setShowDed
            }}
        >
            {children}
        </MainContext.Provider>
    );
}