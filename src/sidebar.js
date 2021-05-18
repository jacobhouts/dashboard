  
import React from 'react'
import { sideBarData } from './buttons'

function SideBar() {
    return (
        <div>
            <ul>
            {sideBarData.map((val, key) => {
                return (
                    <li
                    key={key}
                    className="row"
                    id={window.location.pathname == val.link ? "active" : ""}
                    onclick={() => {window.location.pathname = val.link;
                    }}
                   >
                       <div id="icon">{val.icon}</div>{""}
                       <div id="title">{val.title}</div>
                    </li>
                );
            })}
            </ul>
        </div>
    )
}

export default SideBar