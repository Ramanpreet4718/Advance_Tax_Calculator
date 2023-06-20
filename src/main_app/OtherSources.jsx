export function OhterSources() {
    return <div className="otherSourcesOptions">
        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>Interest</label>
            <input type="text" name="savings_interest" />
        </div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>Commission/Other Income</label>
            <input type="text" name="commission" />
        </div>

        <div className="inputDivFlex" style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "10px" }}>Winnings from Lottery, Crossword Puzzles, etc.</label>
            <input type="text" name="lottery" />
        </div>
    </div>
}