import constants from "./constants";

let utils ={
    oldTaxRegime:oldTaxRegime,
    roundOff:roundOffNearestTen,
    newTaxRegime:newTaxRegime,
    calculateSurcharge:calculateSurcharge
} ;


function oldTaxRegime(amount,age) {
    let tax = 0;

    if(amount<=500000){
        return tax;
    }

    if(age!==constants.SENIOR_CITIZEN){
        if (amount <= constants.NON_TAXABLE_OLD_TAX) {
            tax = 0;
        } else if (amount <= constants.FIRST_TAXABLE_OLD_TAX) {
            tax = (amount - constants.NON_TAXABLE_OLD_TAX) * 0.05;
        } else if (amount <= constants.SECOND_TAXABLE_OLD_TAX) {
            tax = (amount - constants.FIRST_TAXABLE_OLD_TAX) * 0.2 + constants.NON_TAXABLE_OLD_TAX * 0.05;
        } else {
            tax = (amount - constants.SECOND_TAXABLE_OLD_TAX) * 0.3 + constants.FIRST_TAXABLE_OLD_TAX * 0.2 + constants.NON_TAXABLE_OLD_TAX * 0.05;
        }
    }else{
        console.log("hello");
        if (amount <= constants.NON_TAXABLE_OLD_TAX_60) {
            tax = 0;
        } else if (amount <= constants.FIRST_TAXABLE_OLD_TAX_60) {
            tax = (amount - constants.NON_TAXABLE_OLD_TAX_60) * 0.05;
        } else if (amount <= constants.SECOND_TAXABLE_OLD_TAX_60) {
            tax = (amount - constants.FIRST_TAXABLE_OLD_TAX_60) * 0.2 + (constants.FIRST_TAXABLE_OLD_TAX_60-constants.NON_TAXABLE_OLD_TAX_60) * 0.05;
        } else {
            tax = (amount - constants.SECOND_TAXABLE_OLD_TAX_60) * 0.3 + constants.FIRST_TAXABLE_OLD_TAX_60 * 0.2 + (constants.FIRST_TAXABLE_OLD_TAX_60-constants.NON_TAXABLE_OLD_TAX_60) * 0.05;
        }
    }

    return tax
}

function newTaxRegime(amount,age) {
    let tax = 0;
    
    if(amount<=700000){
        return tax;
    }
        console.log("newTaxRegime");
        if (amount <= 300000) {
            tax = 0;
        } else if (amount <= 600000) {
            tax = (amount - 300000) * 0.05;
        } else if (amount <= 900000) {
            tax = (amount - 600000) * 0.1 + 300000 * 0.05;
        } else if (amount <= 1200000) {
            tax = (amount - 900000) * 0.15 + 600000 * 0.1 + 300000 * 0.05;
        } else if(amount <= 1500000) {
            tax = (amount - 1200000) * 0.2 + 900000 * 0.15 + 600000 * 0.1 + 300000 * 0.05;
        }else{
            tax = (amount - 1500000) * 0.3 + 1200000 * 0.2 + 900000 * 0.15 + 600000 * 0.1 + 300000 * 0.05;
        }
    return tax
}

function roundOffNearestTen(number){
    return Math.ceil(number/10)*10
}

function calculateSurcharge(tax){
    let surcharge;
    if(tax<=10000000){
        surcharge = tax*.1
    }else if(tax<=20000000){
        surcharge = tax*.15
    }else if(tax<=50000000){
        surcharge = tax*.25
    }else{
        surcharge = tax*.37
    }
    console.log(surcharge);
    return surcharge
}

export default utils;