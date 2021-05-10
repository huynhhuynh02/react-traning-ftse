import React from "react";
class Item extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <img src={this.props.img} />
                <div className="center">
                    <span>{this.props.content}</span>
                    <p>{this.props.price}</p>
                </div>
            </>
        )
    }
}


export default Item;