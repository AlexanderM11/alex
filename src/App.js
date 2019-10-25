import React from 'react';
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
  linkValue:"",
  imgArray:[],
  index:0
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
  let array=[...this.state.imgArray]
  array.push(a)
  this.setState({
    
    imgArray:array,
    link:array[this.state.index]
  })
}
handleNext(){
  if(this.state.index==this.state.imgArray.length-1){
    let b=0
    this.setState({
      index:b,
      link:this.state.imgArray[b]
    })
  }
  else {
    let a=this.state.index+1
    this.setState({
    index:a,
    link:this.state.imgArray[a]
  })
}}
handlePrevious(){
  if(this.state.index==0){
    let b=this.state.imgArray.length-1
    this.setState({
      index:b,
      link:this.state.imgArray[b]
    })
  }
  else {
    let a=this.state.index-1
    this.setState({
    index:a,
    link:this.state.imgArray[a]
  })
}}
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
          onNext={()=>this.handleNext()}
          onPrevious={()=>this.handlePrevious()}
          />
      </div>
    )
  }
}

export default App;



