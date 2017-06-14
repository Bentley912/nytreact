
// Here we include all of the sub-components
import React from "react";
import ReactDOM from "react-dom";

var Main = React.createClass({

    render: function() {
        return(
            <div className="jumbotron">
                <h1>Testing Component</h1>
            </div>         
          );
    }
});

module.exports = Main;