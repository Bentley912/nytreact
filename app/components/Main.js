
// Here we include all of the sub-components
import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";

var Main = React.createClass({

    render: function() {
        return(
           <div className ="container text-center"> 
                <div className="jumbotron">
                    <h1>React NY Times Search App</h1>
                </div>  
                
                <Search />
            </div>  
        );
    }
});

module.exports = Main;