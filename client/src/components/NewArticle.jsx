import '../style/style.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { navigate } from '@reach/router';


const NewArticle = () =>{

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [content,setContent] = useState("");
    const [url,setUrl] = useState("");
    const [writtenByUser,setWrittenByUser] = useState("true");
    const [image,setImage] = useState("");

    const [articles, setArticles] = useState([]);
    const [lodaed, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles/')
        .then(res => {setArticles(res.data.filter(art => art.writtenByUser === false));
            setLoaded(true);})
        .then(console.log("ADDED"))
        .catch(err => console.log(err))
    },[])


    const createHandler = e => {
        const newArticle ={
            title,
            description,
            content,
            url,
            writtenByUser:writtenByUser,
            image,
            // resource,
        };

        axios.post('http://localhost:8000/api/articles/new', newArticle)
        .then(res => navigate('/favorites'))
        .catch( err => console.log(err));
    }

    return (
        <div>
        <form onSubmit={createHandler} >
            <div className="active-pink active-pink mb "  style={{ marginBottom:20,marginTop:20}}>
                <h2 style={{textAlign:"left", marginTop:20}}>Add a new Article</h2>
                <input style={{ marginBottom:20,marginTop:40}} className="form-control" type="text" name="title" placeholder="Title"/>
                <textarea style={{ marginBottom:20,marginTop:20}} className="form-control" type="text"  name="content" placeholder="Content"  />
                <textarea style={{ marginBottom:20,marginTop:20}} className="form-control" type="text" rows="4"  name="description" placeholder="Description"  />
                <input style={{ marginBottom:20,marginTop:20}} className="form-control" type="url"  name="url" placeholder="URL"  />
                
                <div style={{textAlign:"left",color:"#64749b"}}>
                    <label ><b>Resource :</b></label>
                </div>
                <select   name="resource" id="resource">
                {/* <option value={art.title}>{art.title}</option> */}

                {   lodaed&&
                    articles.map((art, idx) => {
                        return( 
                            <option value={art.title}>{art.title}</option>
                            // <input>{art.title}</input>
                            // <label>{art.title} </label>
                            // <input  type="checkbox"/>
                        )
                    })
                }
                </select>
                <button style={{ marginBottom:20,marginTop:30}} className="btn-hover color-9" >Add</button>
            </div>
        </form>
        </div>



                    
    );

}
export default NewArticle;