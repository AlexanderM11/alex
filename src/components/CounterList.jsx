import React from 'react';

class CounterList extends React.Component{
    render(){
        return(
            <div>
              <span>
                  {
                      this.props.counterList.join(', ')
                  }
              </span>
              <div>
                  <button onClick={()=>this.props.onRenderList()}>
                      Render List
                  </button>
                  <button onClick={()=>this.props.onClearList()}>
                      Clear List
                  </button>
              </div>
            </div>
        )
    }
}

export default CounterList;