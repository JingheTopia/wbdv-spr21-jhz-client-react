import React, {useState} from 'react'
import {Link} from "react-router-dom";


// <textarea value={widget.text} className="form-control"></textarea>
const HeadingWidget = ({
            to = "/",
            widget,
            active,
            deleteItem,
            updateItem}) =>
{
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(widget)
    return(
        <>
            {
                editing &&
                    <div className={"row"}>

                        <select
                            onChange={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    type: e.target.value
                                })}
                            value={cachedItem.type} className="form-control">
                            <option value={"HEADING"}>Heading</option>
                            <option value={"PARAGRAPH"}>Paragraph</option>
                            <option value={"LIST"}>List</option>
                            <option value={"IMAGE"}>Image</option>
                            <option value={"HYPERLINK"}>Hyperlink</option>
                            <option value={"VIDEO"}>Video</option>
                        </select>

                        <textarea className="form-control"
                            onChange={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    text: e.target.value
                                })}
                            value={cachedItem.text}
                            placeholder={widget.text}
                        />

                        <i onClick={() => {
                            setEditing(false)
                            updateItem(cachedItem)
                            setCachedItem(cachedItem)
                        }} className="fas fa-check float-right"/>
                        <i onClick={() => {
                            deleteItem(widget)
                            setEditing(false)
                        }} className="fas fa-trash float-right"/>
                    </div>
            }
            {
                !editing &&
                    <div className={`row ${active?'active':''} `}>
                        {
                            <Link className={"p"} to={to}>
                                <p>
                                    {widget.text}
                                </p>
                            </Link>
                        }

                        <i onClick={() => {
                            setEditing(true)
                        }
                        } className="fas fa-cog"/>
                    </div>
            }
        </>
    )
}

export default HeadingWidget