import "./tableSmall.css"

export default function TableSmall() {
    const Button = ({ type }) => {
        return <button className={"tableSmBtn " + type}>{type}</button>
    };

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
                    <td className="tableLgUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span className="tableSmName">Joyce Linda</span>
                    </td>
                    <td className="tableSmDate"> 22 May 2022</td>
                    <td className="tableSmAmount"> $460.00</td>
                    <td className="tableSmStatus"><Button type="Approved" /></td>
                </tr><tr className="tableSmTr">
                    <td className="tableLgUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span className="tableSmName">Joyce Linda</span>
                    </td>
                    <td className="tableSmDate"> 22 May 2022</td>
                    <td className="tableSmAmount"> $460.00</td>
                    <td className="tableSmStatus"><Button type="Approved" /></td>
                </tr><tr className="tableSmTr">
                    <td className="tableLgUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span className="tableSmName">Joyce Linda</span>
                    </td>
                    <td className="tableSmDate"> 22 May 2022</td>
                    <td className="tableSmAmount"> $460.00</td>
                    <td className="tableSmStatus"><Button type="Declined" /></td>
                </tr><tr className="tableSmTr">
                    <td className="tableLgUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span className="tableSmName">Joyce Linda</span>
                    </td>
                    <td className="tableSmDate"> 22 May 2022</td>
                    <td className="tableSmAmount"> $460.00</td>
                    <td className="tableSmStatus"><Button type="Pendding" /></td>
                </tr>
                <tr className="tableSmTr">
                    <td className="tableLgUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span className="tableSmName">Joyce Linda</span>
                    </td>
                    <td className="tableSmDate"> 22 May 2022</td>
                    <td className="tableSmAmount"> $460.00</td>
                    <td className="tableSmStatus"><Button type="Pendding" /></td>
                </tr>
            </table>
        </div >
    )
}
