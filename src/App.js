import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import {Cards, Chart, CountryPicker} from './components';
import classes from './App.module.css'; 
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
        console.log(fetchedData);
    }

    handleCountryChange = async (country) =>{
        console.log(country);
        //fetch data
        //set the state
    }
    render() {
        const {data}= this.state;
        return (
            <div className={classes.container}>
                <Cards data={data}/>
                <CountryPicker clicked={this.handleCountryChange}/>
                <Chart />
            </div>
        )
    }
}

export default App;