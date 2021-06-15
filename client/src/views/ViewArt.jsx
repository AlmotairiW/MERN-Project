import React from 'react';

const ViewArt = props =>{
    console.log("if");

    const {articles} = props;
    const {id} = props;
    console.log(articles[id]);


    return (
        <div style={{margin:"5px", padding:"5px", border:"solid black 1px", width:"1000px", position:"absolute"}}>

            <div style={{padding:"5px", border:"solid black 1px", width: "200px"}}>
                <p>asdfghjklkrtyuiouoytirdsazx</p>
                <p>dhjcefkjvbfjhvbfekvcjbfj
                    vcbhfkdj,vcfhbv
                    jhfgjhmfy,jdkhgfxhmnz xcdvjkctxur
                </p>
                <p></p>
                <p></p>
            </div>


            <div style={{marginLeft:"300px", padding:"5px", border:"solid black 1px" }}>
                <p>{articles[id].title}</p>
                <p>{articles[id].description}</p>
                <p>{articles[id].content}</p>
                <img src={`${articles[id].image}`} height="350px" width="700px"/>
                <a href={articles[id].url} target="_blank">Read From the Orignal Source</a>
                
                <div style={{marginLeft:"200px", display:"inline-block"}} >
                    published at: {articles[id].publishedAt}
                </div>
            </div>
            
        </div>
        
    )
}

export default ViewArt;