import React, { useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import '../style/style.css';


const ArtForm = ({}) => {

 
  return (
    <div>
     
      <form >
        <div className="active-pink active-pink mb">
            <textarea className="form-control" type="text" placeholder="Title"/>
            <textarea className="form-control" type="text" placeholder="Content"  />
            <textarea className="form-control" type="text" placeholder="Description"  />
            <input className="form-control" type="url" placeholder="URL"  />
            <button className="btn-hover color-9" >Add</button>
        
        </div>
      </form>
    </div>
  );
};

export default ArtForm;
