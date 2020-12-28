import React from "react";

class Button extends React.Component {
    render() {
        return (
            <button type="reset" onClick={this.props.OnClick}>{this.props.Name}</button>
        );
    }
}

export default Button
