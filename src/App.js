import React, { Component } from 'react';
import './App.css';
import API from "./Api";

class App extends Component {

  constructor(){
    super();

    this.state={
      search:null,
      jobs: []
    };
  }

  async componentDidMount() {
    await this.getList();
  }

  async getList() {
    const api = API.createApi();
    var ListData = await api.getList();
    if (ListData) {
      this.setState({ jobs: ListData });
    }
    /* if (ListData) {
      var array = ListData.content.map((elm) => ({
        label: elm.name,
        value: elm.company,
      }));
      var resultArray = [...array1];
      console.log(resultArray)
      this.setState({ jobs: resultArray });

    } */
  }


  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const { jobs } = this.state;
    const styleInfo = {
      paddingRight:'30px',
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'10vh',
      marginBottom:'10vh'
    }

    const items = this.state.jobs.filter((element)=>{
      if(this.state.search == null)
          return element
          else if(element.name.toLowerCase().includes(this.state.search.toLowerCase()) || element.company.toLowerCase().includes(this.state.search.toLowerCase()) || element.jobdescription.toLowerCase().includes(this.state.search.toLowerCase())){
            return element
      }
    }).map(element=>{
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{element.name}</span>
            <span style={styleInfo}>{element.company}</span>
            <span style={styleInfo}>{element.jobdescription}</span>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default App;
