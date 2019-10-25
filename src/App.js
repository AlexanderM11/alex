import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterList from './components/CounterList';
import SortedList from './components/SortedList';
import DeleteElement from './components/DeleteElement';
import AddImage from './components/AddImage';

class App extends React.Component {
state={
  counter:0,
  counterList:[],
  sortList:[],
  value:"",
  link:"",
  linkValue:""
};
handleCounterAdd(){
  this.setState({
    counter: this.state.counter+1
  })
}
handleCounterSubstract(){
  this.setState({
    counter: this.state.counter-1
  })
}
handleRenderList(){
  let a=this.state.counterList
  a.push(this.state.counter)
  this.setState({
  counterList:a
  })
}
handleClearList(){
  this.setState({
   counterList:[],
   sortList:[]
  })
}
handleSortList(){
let c=[...this.state.counterList]
c=c.sort((a,b)=>a-b)
this.setState({
  sortList:c
})
}
handleChange(event){
  this.setState({
    value: event.target.value
  })
}
handleDelete(){
  let counterlist=[...this.state.counterList]
  let splited=this.state.value.split(',')
  splited.forEach(element=>{
    counterlist=counterlist.filter(function(number){
return number!=element
    })
  })
  splited=[...counterlist]
  splited.sort((a,b)=>a-b)
  this.setState({
counterList:counterlist,
sortList:splited
  })
}
handleChangeLink(event){
  
  this.setState({
    linkValue: event.target.value
  })
}
handleAddImage(){
  let a=this.state.linkValue
  console.log(this.state.link)
  this.setState({
    link:a
  })
}

  render(){
    return(
      <div className='App'>
          <Counter counter={this.state.counter}
          onCounterAdd={() => this.handleCounterAdd()}
          onCounterSubstract={() => this.handleCounterSubstract()}
          />
          <CounterList
          counter ={this.state.counter}
          counterList={this.state.counterList}
          onRenderList={()=> this.handleRenderList()}
          onClearList={()=>this.handleClearList()}
          />
          <SortedList
          counterList={this.state.counterList}
          sortList={this.state.sortList}
          onSortList={()=>this.handleSortList()}
          />
          <DeleteElement
          value={this.state.value}
          onChange={(event)=>this.handleChange(event)}
          onDelete={()=>this.handleDelete()}
          />
          <AddImage
          link={this.state.link}
          linkValue={this.state.linkValue}
          onChangeLink={(event)=>this.handleChangeLink(event)}
          onAddImage={()=>this.handleAddImage()}
          />
      </div>
    )
  }
}

export default App;



