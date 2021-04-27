import React from 'react';
import { Spinner, ProgressBar } from "react-bootstrap";

import "./../../../styles/common/LoaderSpinner.css";

export default class LoaderSpinner extends React.Component {
    render() {
        return (
            <div className="loader-bg bg-light position-fixed d-flex flex-column justify-content-center align-items-center">
                <Spinner animation="border" variant="secondary" />
                <span>{this.props.label}</span>
                {this.props.progressbar ? <ProgressBar className="mt-3" style={{ width: "50%" }} animated now={this.props.percentage} /> : <></>}
            </div>
        );
    }
}