import React from "react";
import Form from "./Form";

class Search extends React.Component {
    render() {
        return (
            <div>
                <Form search={this.props} />
             
            </div>
        );
    }
}

export default Search;
