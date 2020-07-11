import React from 'react';
import { connect } from 'react-redux';
import {fetchCity, addCityLocal, removeCityLocal, searchInput} from '../store/actions/input';


class forminput extends React.Component {

    componentDidMount() {
        this.props.fetchCity()
    }

    addCityHandler(city) {
        console.log(city)
        this.props.addCityLocal(city)
        this.props.searchInput('')
    }

    removeCityHandler(city) {
        this.props.removeCityLocal(city)
    }

    renderCity = () => { 

            return this.props.city
                .sort()
                .filter(city => city.toLowerCase().includes(this.props.search))
                .map(city => {               
                    return (
                    <li 
                        key={city}   
                    >
                        <button 
                            onClick={this.addCityHandler.bind(this, city)}>
                            {city}
                        </button>
                    </li>
                    )
                })
    }


    render() {

        const dataSearch = e => {
            const value = e.target.value.toLowerCase();
                this.props.searchInput(value)
        }

        return( 
            <div>
                <h1>forminput</h1>
                <div>
                <input
                    value = {this.props.search}
                    type="text"
                    placeholder="Search people by name..."
                    onChange={dataSearch}
                />
                </div>
                <h2>Подходящие города</h2>
                <ul>
                    { this.props.search.length >= 3 ? this.renderCity() : null} 
                </ul>
                <h2>Выбранные города</h2>
                    {this.props.choose.map(city => {
                        return(
                            <li key={city}>
                                {city}
                                <button onClick={this.removeCityHandler.bind(this, city)}>x</button>
                            </li>
                        )
                    })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        city: state.input.city,
        search: state.input.search,
        choose: state.input.cityChoose
    }
}

function mapDispathToProps(dispatch) {
    return {
        fetchCity: () => dispatch(fetchCity()),
        addCityLocal: city => dispatch(addCityLocal(city)),
        removeCityLocal: city => dispatch(removeCityLocal(city)),
        searchInput: value => dispatch(searchInput(value))
    }
}


export default connect(mapStateToProps, mapDispathToProps)(forminput)

