import React from 'react';
import { connect } from 'react-redux';
import {searchInput} from '../store/actions/input';


class search extends React.Component {
    render() {
  
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        if (value.length >= 3) {
            this.props.searchInput(value)
        }
    }

        return( 
            <div>
            <input
                type="text"
                placeholder="Search people by name..."
                onChange={dataSearch}
            />
            </div>
        )
    }
}


function mapDispathToProps(dispatch) {
    return {
        searchInput: value => dispatch(searchInput(value))
    }
}

export default connect(null, mapDispathToProps)(search)