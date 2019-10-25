import React from 'react';

class AddImage extends React.Component{
  
    render(){
        return(
            <div>
              <input value={this.props.linkValue} onChange={(event)=>this.props.onChangeLink(event)}></input>
              <button onClick={()=>this.props.onAddImage()}>Add Photo</button>
              <div>
                  <img  src={this.props.link}></img>
              </div>
            </div>
        )
    }
}


export default AddImage;