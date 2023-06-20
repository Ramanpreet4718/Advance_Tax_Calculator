export function HouseProperty() {
    return <div className="housePropertyOptions">
        <div style={{ marginTop: "10px" }}><label> a. Income from Self-occupied Property</label></div>
        <div style={{ marginTop: "10px" }}><label> Interest Paid/Payable on Housing Loan</label></div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>1. Interest on Housing Loan</label>
            <input type="text" name="interest_on_loan" />
        </div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>Income from self-occupied house property</label>
            <input type="text" name="self_occupied_property" disabled />
        </div>

        <div style={{ marginTop: "10px" }}><label>b. Income from Let-out Property</label></div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>1. Annual Letable Value/Rent Received or Receivable</label>
            <input type="text" name="annual_lelable_value" />
        </div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>2. Less: Municipal Taxes Paid During the Year</label>
            <input type="text" name="municipal_taxes" />
        </div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>3. Less:Unrealized Rent</label>
            <input type="text" name="unrealized_rent" />
        </div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>4. Net Annual Value (1-(2+3))</label>
            <input type="text" name="net_annual_value" disabled />
        </div>

        <div style={{ marginTop: "10px" }}><label>Less: Deductions from Net Annual Value</label></div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>i. Standard Deduction @ 30% of Net Annual Value</label>
            <input type="text" name="standard_deduction_@30" />
        </div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>ii. Interest on Housing Loan</label>
            <input type="text" name="interest_on_loan_rent" />
        </div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>Income from Let-out House Property</label>
            <input type="text" name="let_out_property" disabled />
        </div>
    </div>
}