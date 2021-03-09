import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {   to="/",
        deleteItem,
        updateItem,
        item,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState({title : ""})

    return (
        <div className={"container-fluid"}>
            {
                !editing &&
                <div className={`row ${active?'active':''} `}>
                    <Link className={`link ${active?'text-white':''}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => {
                        if (active) {
                            setEditing(true)}
                        }
                    } className="fas fa-edit"/>
                </div>
            }
            {
                editing &&
                <div className={"row active"}>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...item,
                                title: e.target.value
                            })}
                        value={cachedItem.title}
                        placeholder={item.title}
                    />
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                        setCachedItem({title: ""})
                    }} className="fas fa-check float-right"/>
                    <i onClick={() => {
                        deleteItem(item)
                        setEditing(false)
                    }} className="fas fa-times"/>
                </div>
            }
        </div>
    )
}

export default EditableItem