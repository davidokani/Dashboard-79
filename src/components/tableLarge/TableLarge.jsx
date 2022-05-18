import "./tableLarge.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function TableLarge() {
    return (
        <div className="tablelarge">
            <span className="tableLgTitle">Group_79 Team  Members</span>
            <ul className="tableLgList">
                <li className="tableLgListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="tableLgImg" />
                    <div className="tableLgUser">
                        <span className="tableLgUsername">Jamiu Ismail </span>
                        <span className="tableLgUserTitle">Software Enginner</span>
                    </div>
                    <button className="tableLgBtn">
                        <VisibilityIcon className="tableLgIcon" />
                        Display
                    </button>
                </li>
                <li className="tableLgListItem">
                    <img src="./David Okani.jpeg" alt="" className="tableLgImg" />
                    <div className="tableLgUser">
                        <span className="tableLgUsername">David Okani</span>
                        <span className="tableLgUserTitle">Software Enginner</span>
                    </div>
                    <button className="tableLgBtn">
                        <VisibilityIcon className="tableLgIcon" />
                        Display
                    </button>
                </li>
                <li className="tableLgListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="tableLgImg" />
                    <div className="tableLgUser">
                        <span className="tableLgUsername">-----</span>
                        <span className="tableLgUserTitle">Software Enginner</span>
                    </div>
                    <button className="tableLgBtn">
                        <VisibilityIcon className="tableLgIcon" />
                        Display

                    </button>
                </li>
                <li className="tableLgListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="tableLgImg" />
                    <div className="tableLgUser">
                        <span className="tableLgUsername">-----</span>
                        <span className="tableLgUserTitle">Software Enginner</span>
                    </div>
                    <button className="tableLgBtn">
                        <VisibilityIcon className="tableLgIcon" />
                        Display
                    </button>
                </li>
                <li className="tableLgListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="tableLgImg" />
                    <div className="tableLgUser">
                        <span className="tableLgUsername">------</span>
                        <span className="tableLgUserTitle">Software Enginner</span>
                    </div>
                    <button className="tableLgBtn">
                        <VisibilityIcon className="tableLgIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
