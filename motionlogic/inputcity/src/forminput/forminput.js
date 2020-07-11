import React from 'react';
import { connect } from 'react-redux';
import {fetchCity, addCity} from '../store/actions/input';
import Search from '../forminput/search'

class forminput extends React.Component {

    componentDidMount() {
        this.props.fetchCity()
    }

    renderCity = () => { 

            return this.props.city
                .filter(city => city.toLowerCase().includes(this.props.search))
                .map(city => {               
                    return (
                    <li 
                        key={city}   
                    >
                        <a onClick={addCity}>
                            {city}
                        </a>
                    </li>
                    )
                })
    }


    render() {
        return( 
            <div>
                <h1>forminput</h1>
                <Search />
                { this.props.search.length >= 3 ? this.renderCity() : null} 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        city: state.input.city,
        search: state.input.search
    }
}

function mapDispathToProps(dispatch) {
    return {
        fetchCity: () => dispatch(fetchCity()),
        addCity: city => dispatch(addCity(city))
    }
}


export default connect(mapStateToProps, mapDispathToProps)(forminput)

