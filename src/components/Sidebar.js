import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import React from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption.js"

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={ <AddIcon fontSize="large" />} className="sidebar__compose">Compose</Button>

            <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={Star} title="Starred" number={54} />
            <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
            <SidebarOption Icon={LabelImportant} title="Important" number={54} />
            <SidebarOption Icon={NearMe} title="Send" number={54} />
            <SidebarOption Icon={Note} title="Drafts" number={54} />
            <SidebarOption Icon={ExpandMore} title="More" number={54} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
