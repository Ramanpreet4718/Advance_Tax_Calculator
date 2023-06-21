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
    });
    function setData(data) { setFormData({ ...formData, [data.name]: data.value }); }

    function taxCalculation() {
        let netTaxableIncome = totalTaxableIncome()
        if (formData.new_tax === false) {
            console.log("new tax regime");
        } else {
            let tax = utils.oldTaxRegime(netTaxableIncome, formData.gender)
            setFormData({ ...formData, income_tax: tax, net_taxable_income: netTaxableIncome });
        }
    }

    function totalTaxableIncome() {
        console.log(formData);
        if (formData.deductions > 150000) {
            formData.deductions = 150000;
        }
        let netTaxableIncome = Number(formData.income_from_house_property) + Number(formData.income_from_salary) + Number(formData.income_from_other_sources) + Number(formData.income_from_business) + Number(formData.agriculture_income) - Number(formData.deductions);
        return netTaxableIncome;
    }

    return (
        <MainContext.Provider
            value={{
                formData,
                setFormData,
                setData,
                taxCalculation,
                totalTaxableIncome
            }}
        >
            {children}
        </MainContext.Provider>
    );
}