import React, {useState, UseEffect} from 'react'
import {Link} from '@reach/router'
import DeleteButton from './DeleteButton'



const FavoritesList = ({articles, removeFromDom}) =>{


    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>URL</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map((art, idx) => {
                            return( 
                                    <tr key={idx}>
                                        <td> {art.title}</td>
                                        <td> {art.description}</td>
                                        <td> {art.url}</td>
                                        <td>   <DeleteButton articleId={art._id} removeFromDom={removeFromDom}/> | 
                                        <Link to="viewLocalArt/:id" >Details</Link> 
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </table>
        </div>
    )
}

export default FavoritesList;