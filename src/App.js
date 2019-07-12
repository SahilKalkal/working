import React, {Component} from 'react';
import {reaction} from './reaction';
import Chem from './Chem';
import SearchBox from './SearchBox';

class App extends Component{
  constructor() {
   super()
   this.state={
    reaction:[],
    SearchField:''
   }
  }
  componentDidMount(){
    this.setState({reaction:reaction});
  }

 whenSearchChange=(event)=>{
     this.setState({SearchField: event.target.value})
      }

render()
{
  const filter =this.state.reaction.filter(reaction =>{
       return reaction.name.toLowerCase().includes(this.state.SearchField);
          }) 
  return(
    <div className="tc">
    <h1>www.yourdictionary.com</h1>
     <SearchBox SearchChange={this.whenSearchChange} />
    <Chem reaction={filter} />
    </div>
    );
}
}
export default App;