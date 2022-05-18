import "./tableSmall.css"

export default function TableSmall() {
    return (
        <div className="tablesmall">
            <h3 className="tableSmTitle">Latest Transactions</h3>
            <table className="tableSmTable">
                <tr className="tableSmTr">
                    <th className="tableLgTh">Customer</th>
                    <th className="tableLgTh">Date</th>
                    <th className="tableLgTh">Amount</th>
                    <th className="tableLgTh">Status</th>
                </tr>
                <tr className="tableSmTr">
                    <th className="tableLgTh">Customer</th>
                    <th className="tableLgTh">Date</th>
                    <th className="tableLgTh">Amount</th>
                    <th className="tableLgTh">Status</th>
                </tr>
            </table>
        </div>
    )
}
