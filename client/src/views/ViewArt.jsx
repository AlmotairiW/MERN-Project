import React, {useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

const ViewArt = props =>{
    console.log("if");

    const {articles} = props;
    const {id} = props;
    console.log(articles[id]);


    return (
        <div>
            <a href={articles[id].url} target="_blank">Read on orignal Source</a>
        </div>
    )
}

export default ViewArt;