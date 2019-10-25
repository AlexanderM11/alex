import React from 'react';

class SortedList extends React.Component{
    render(){
        return(
            <div>
              <span>{this.props.sortList.join(', ')}</span>
              <div>
                  <button onClick={()=>this.props.onSortList()}>
                      Sort List
                  </button>
              </div>
            </div>
        )
    }
}

export default SortedList;