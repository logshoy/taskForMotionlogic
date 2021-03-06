import React from 'react';
import { connect } from 'react-redux';
import classes from './forminput.module.css'
import {fetchCity, addCityLocal, removeCityLocal, searchInput} from '../store/actions/input';


class forminput extends React.Component {

    componentDidMount() {
        this.props.fetchCity()
    }

    addCityHandler(city) { 
        this.props.addCityLocal(city)
        this.props.searchInput('')
    }

    removeCityHandler(city) {
        this.props.removeCityLocal(city)
    }

    renderCity = () => { 
    const arrCity = this.props.city
        .sort()
        .filter(city => city.toLowerCase().startsWith(this.props.search.toLowerCase()))
        if (this.props.search.length >= 3 && arrCity.length > 0) {
        return (
            <ul className={classes.listCity}> { arrCity
                .map(city => {               
                    return (
                    <li key={city} onClick={this.addCityHandler.bind(this, city)}>
                            {city}
                    </li>
                    )
                })}
            </ul>)
        }
    }        


    render() {

        const dataSearch = e => {
            const value = e.target.value.toLowerCase();
                this.props.searchInput(value)
        }

        return( 
            <div className={classes.container}>
                <h1>Форма с инпутом для города</h1>
                <form className={classes.form}>
                    <h2>Введите город</h2>
                    <input
                        className={classes.input}
                        value = {this.props.search}
                        type="text"
                        placeholder="Введите город"
                        onChange={dataSearch}
                    />
                    { this.renderCity() } 
                    <h2>Выбранные города</h2>
                    <div className={classes.chooseList}>
                        {this.props.choose.map(city => {
                            return(
                                <span
                                key={city}
                                className={classes.chooseCity}
                                >
                                    {city}
                                    <a onClick={this.removeCityHandler.bind(this, city)}>x</a>
                                </span>
                            )
                        })}
                    </div>
                </form>
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

