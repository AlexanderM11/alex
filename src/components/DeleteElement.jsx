import React from 'react';

class DeleteElement extends React.Component{
    render(){
        return(
            <div>
              <input value={this.props.value} onChange={(event)=>this.props.onChange(event)}></input>
              <div>
              <button onClick={()=>this.props.onDelete()}>Delete Elements From Arrays</button>
              </div>
            </div>
        )
    }
}

export default DeleteElement;