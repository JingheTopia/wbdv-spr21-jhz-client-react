import React, {useState} from 'react'


const ListWidget = ({
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
                    <div >
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
                        <input checked={cachedItem.ordered}
                               type="checkbox"
                               onChange={(e)=>{
                                   setCachedItem(widgetCache=>({...widgetCache, ordered:e.target.checked}))
                               }}
                        /> Ordered
                        <br/>
                        </div>
                        <div className={"row"}>
                        List Items
                        <textarea className="form-control"
                            onChange={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    text: e.target.value
                                })}
                            value={cachedItem.text}
                            placeholder={widget.text}
                        >Item list</textarea>

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
                    </div>
            }
            {
                !editing &&
                    <div >
                        {
                            cachedItem.ordered &&
                            <>
                                <ol>
                                    {
                                        cachedItem.text.split("\n").map((item) => {
                                            return(
                                                <li>
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </>

                        }
                        {
                            !cachedItem.ordered &&
                            <ul>
                                {
                                    cachedItem.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
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

export default ListWidget