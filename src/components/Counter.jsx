import React from 'react';

class Counter extends React.Component{
    render(){
        return(
            <div>
               <span> Hello, {this.props.counter}</span>
               <div>
                   <button onClick={() => this.props.onCounterAdd()}>
                       Add
                   </button>
                   <button onClick={() => this.props.onCounterSubstract()}>
                       Substract
                   </button>                  
               </div>
            </div>
        )
    }
}

export default Counter;