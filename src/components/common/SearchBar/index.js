import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./../../../styles/common/SearchBar.css"
class SeachBar extends React.Component {
    render() {
        const placeholder = "Search on " + this.props.targetsearch + " ...";
        return (
            <InputGroup className="search-bar mb-4" {...this.props}>
                <InputGroup.Prepend id="searchBar">
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder={placeholder}
                    aria-label="Search Bar"
                    aria-describedby="searchBar"
                />
            </InputGroup>
        );
    }
}


export default SeachBar;