import constants from "../utils/constants";

export default function Calculator() {
  return (
    <>
      <div className="container">
        <div className="banner">
          <img
            src="../src/assets/calculator.png"
            alt="calculator"
            style={{ width: "24px" }}
          />
          <h4>ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</h4>
        </div>

        <div className="calculator-container">
          <form>
            <div>
              <label style={{ marginRight: "10px" }}>Tax Payer</label>
              <select name="tax_payer" id="tax_payer">
                <option value={constants.BLANK}>Select</option>
                <option value={constants.INDIVIDUAL}>Individual</option>
                <option value={constants.HUF}>HUF</option>
                <option value={constants.DOMESTIC_COMAPANY}>
                  Domestic Compoany
                </option>
                <option value={constants.FOREIGN_COMAPANY}>
                  Foreign Compoany
                </option>
              </select>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ marginRight: "10px" }}>
                Whether opting for taxation under Section 115BAC?
              </label>
              <select name="new_tax" id="new_tax">
                <option value={constants.BLANK}>Select</option>
                <option value={constants.TRUE}>Yes</option>
                <option value={constants.FALSE}>No</option>
              </select>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ marginRight: "10px" }}>
                Male / Female / Senior Citizen
              </label>
              <select name="gender" id="gender">
                <option value={constants.MALE}>Male</option>
                <option value={constants.FEMALE}>Female</option>
                <option value={constants.SENIOR_CITIZEN}>Senior Citizen</option>
              </select>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label style={{ marginRight: "10px" }}>Residential Status</label>
              <select name="gender" id="gender">
                <option value={constants.RESIDENT}>Resident</option>
                <option value={constants.NON_RESIDENT}>Non Resident</option>
                <option value={constants.NOT_ORDINARY_RESIDENT}>
                  Not Ordinary Resident
                </option>
              </select>
            </div>

            <div style={{ marginTop: "10px" }}>
              <label style={{ marginRight: "10px" }}>
                {
                  "Income from Salary (Income from salary after standard deduction of Rs.50000.)"
                }
              </label>
              <input type="text" name="income_from_salary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
