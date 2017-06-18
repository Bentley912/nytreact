
import ReactDOM from "react-dom";
import React, { Component } from "react";

 class Search extends Component {
    constructor(){
        super();
        this.state = {
            term:"",
            startYear: "",
            endYear: ""
        }
    }
     handleButtonClick() {
        this.setState({ 
            term:this.state.searchTerm,
            startYear:this.state.startYear,
            endYear:this.state.endYear
        });
        console.log(this.state);
     }

     handleInputChange(event) {
            this.setState({ 
                term: event.target.value,
                startYear: event.target.value,
                endYear: event.target.value
        });
    }
    render(){
        return(
           <div className="row">
                <div className="panel panel-default">
                <div className="panel-heading">
                 <h3 className="panel-title">Search Paramaters</h3>
                </div>
            <div className="panel-body">
                <div className="input-group">
                        <label for="searchParam">Search Term</label>
                        <input type="text" className="form-control" placeholder="Search Term" aria-describedby="basic-addon1" id ="searchParam" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label for="years">Number of Records to Retrieve:</label>
                    <select className="form-control" id="recordNum">
                    <option value='1'>1</option>
                    <option value ='5' selected="">5</option>
                    <option value='10'>10</option>
                    </select>
                </div>
                <div className="input-group">
                    <label for="startYear">Start Year(Optional)</label>
                    <input type="text" className="form-control" placeholder="Start Year" aria-describedby="basic-addon1" id = "startYear" name="startYear" value={this.state.startYear} onChange={this.handleInputChange} />
                </div>

                <div className="input-group">
                    <label for="endYear">End Year(Optional)</label>
                    <input type="text" className="form-control" placeholder="End Year" aria-describedby="basic-addon1" id = "endYear" name="endYear" value={this.state.endYear} onChange={this.handleInputChange} />
                    
                </div>
              <button  onClick={this.handleButtonClick} className="btn btn-default" id="searchButton" type="submit">Search</button>
              <button className="btn btn-default" id="clearResults">Clear Results</button>
             </div>
         </div>  
       </div>
        );
    }
 }

module.exports = Search;