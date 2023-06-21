import constants from "./constants";

let utils ={oldTaxRegime:oldTaxRegime} ;


function oldTaxRegime(amount,age) {
    let tax = 0;
    let taxable_amount = 0;

    if(age!==constants.SENIOR_CITIZEN){
        if (amount <= constants.NON_TAXABLE_OLD_TAX) {
            tax = 0;
        }

        if (amount > constants.NON_TAXABLE_OLD_TAX && amount <= constants.FIRST_TAXABLE_OLD_TAX) {
            taxable_amount = amount - constants.NON_TAXABLE_OLD_TAX;
            if (taxable_amount <= constants.NON_TAXABLE_OLD_TAX) {
                tax += taxable_amount * 5 / 100;
            }
        }

        if (amount > constants.FIRST_TAXABLE_OLD_TAX && amount <= constants.SECOND_TAXABLE_OLD_TAX) {
            taxable_amount = amount - constants.FIRST_TAXABLE_OLD_TAX;
            tax = constants.NON_TAXABLE_OLD_TAX * 5 / 100;

            if (taxable_amount <= constants.FIRST_TAXABLE_OLD_TAX) {
                tax += taxable_amount * 20 / 100;
            }
        }

        if (amount > constants.SECOND_TAXABLE_OLD_TAX) {
            taxable_amount = amount - constants.SECOND_TAXABLE_OLD_TAX;
            tax = (constants.NON_TAXABLE_OLD_TAX * 5 / 100) + (constants.FIRST_TAXABLE_OLD_TAX * 20 / 100) + (taxable_amount * 30 / 100);
        }
    }else{
        if (amount <= constants.NON_TAXABLE_OLD_TAX_60) {
            tax = 0;
        }

        if (amount > constants.NON_TAXABLE_OLD_TAX_60 && amount <= constants.FIRST_TAXABLE_OLD_TAX_60) {
            taxable_amount = amount - constants.NON_TAXABLE_OLD_TAX_60;
            if (taxable_amount <= constants.NON_TAXABLE_OLD_TAX_60) {
                tax += taxable_amount * 5 / 100;
            }
        }

        if (amount > constants.FIRST_TAXABLE_OLD_TAX_60 && amount <= constants.SECOND_TAXABLE_OLD_TAX_60) {
            taxable_amount = amount - constants.FIRST_TAXABLE_OLD_TAX_60;
            tax = (constants.FIRST_TAXABLE_OLD_TAX_60-constants.NON_TAXABLE_OLD_TAX_60) * 5 / 100;

            if (taxable_amount <= constants.FIRST_TAXABLE_OLD_TAX_60) {
                tax += taxable_amount * 20 / 100;
            }
        }

        if (amount > constants.SECOND_TAXABLE_OLD_TAX_60) {
            taxable_amount = amount - constants.SECOND_TAXABLE_OLD_TAX_60;
            tax = (((constants.FIRST_TAXABLE_OLD_TAX_60-constants.NON_TAXABLE_OLD_TAX_60)) * 5 / 100) + (constants.FIRST_TAXABLE_OLD_TAX_60 * 20 / 100) + (taxable_amount * 30 / 100);
        }
    }

    return tax
}



export default utils;