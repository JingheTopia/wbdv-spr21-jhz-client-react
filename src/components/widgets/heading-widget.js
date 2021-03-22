import React, {useState} from 'react'
import {Link} from "react-router-dom";

const HeadingWidget = ({
            to = "/",
            widget,
            active,
            deleteItem,
            updateItem}) =>
{
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(widget)


    // {type : "HEADING", size : 1, text :"New Heading"}
    return(
        <div>
            {/*<h2>{widget.id}</h2>*/}

            {
                editing &&
                    <div className={"row"}>
                        <input className="form-control"
                            onChange={(e) =>{
                                setCachedItem({
                                    ...cachedItem,
                                    text: e.target.value
                                })}}
                            value={cachedItem.text}
                            placeholder={widget.text}
                        />

                        <select
                            onChange={(e) => {
                                setCachedItem({
                                    ...cachedItem,
                                    size: parseInt(e.target.value)
                                })
                            }}
                            value={cachedItem.size} className="form-control">
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>

                        <select
                            onChange={(e) => {
                                setCachedItem({
                                    ...cachedItem,
                                    type: e.target.value
                                })}}
                            value={cachedItem.type} className="form-control">
                            <option value={"HEADING"}>Heading</option>
                            <option value={"PARAGRAPH"}>Paragraph</option>
                            <option value={"LIST"}>List</option>
                            <option value={"IMAGE"}>Image</option>
                            <option value={"HYPERLINK"}>Hyperlink</option>
                            <option value={"VIDEO"}>Video</option>
                        </select>

                        {/*<h2>{cachedItem.size}</h2>*/}
                        {/*<h2>{cachedItem.text}</h2>*/}
                        {/*<h2>{cachedItem.type}</h2>*/}
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
                        {widget.size === 1 &&
                        <Link className={"h1 heading-link"}style={{ textDecoration: 'none' }} to={to}>
                            {widget.text}
                        </Link>
                        }

                        {widget.size === 2 &&
                        <Link className={"h2 heading-link"} style={{ textDecoration: 'none' }} to={to}>
                            {widget.text}
                        </Link>
                        }

                        {widget.size === 3 &&
                        <Link className={"h3 heading-link"} style={{ textDecoration: 'none' }} to={to}>
                            {widget.text}
                        </Link>
                        }

                        {widget.size === 4 &&
                        <Link className={"h4 heading-link"} style={{ textDecoration: 'none' }} to={to}>
                            {widget.text}
                        </Link>
                        }

                        {widget.size === 5 &&
                        <Link className={"h5 heading-link"} style={{ textDecoration: 'none' }} to={to}>
                            {widget.text}
                        </Link>
                        }

                        {widget.size === 6 &&
                        <Link className={"h6"} style={{ textDecoration: 'none' }} to={to}>
                            {widget.text}
                        </Link>
                        }

                        <i onClick={() => {
                            setEditing(true)
                        }
                        } className="fas fa-cog"/>
                    </div>
            }
        </div>
    )
}

export default HeadingWidget