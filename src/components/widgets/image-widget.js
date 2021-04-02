import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ImageWidget = ({
            to = "/",
            widget,
            active,
            deleteItem,
            updateItem}) =>
{
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(widget)


    return(
        <div>
            {/*<h2>{widget.id}</h2>*/}

            {
                editing &&
                    <div>
                        Image URL
                        <input value={cachedItem.url}
                               onChange={(e)=>{
                                   setCachedItem(widgetCache=>({...widgetCache, url:e.target.value}))
                               }}
                               className="form-control"
                        />
                        Image Width
                        <input value={cachedItem.width}
                               className="form-control"
                               onChange={(e)=>{
                                   setCachedItem(widgetCache=>({...widgetCache, width:e.target.value}))
                               }}
                        />
                        Image Height
                        <input value={cachedItem.height}
                               className="form-control"
                               onChange={(e)=>{
                                   setCachedItem(widgetCache=>({...widgetCache, height:e.target.value}))
                               }}
                        />

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
                    <div >
                        <img width={cachedItem.width} height={cachedItem.height} src={cachedItem.url}/>

                        <i onClick={() => {
                            setEditing(true)
                        }
                        } className="fas fa-cog"/>
                    </div>
            }
        </div>
    )
}

export default ImageWidget