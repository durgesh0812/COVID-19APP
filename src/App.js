import React from 'react';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import { Cards , Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from'./api';
import coronaimg from './images/image.png';
class  App extends React.Component{
    state={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetchedData=await fetchData();
        this.setState({data:fetchedData});
    }
    handlecountrychange = async(country)=>{
        const fetchedData=await fetchData(country);
        this.setState({data:fetchedData,country:country});
       
    }
render(){
    const {data, country}=this.state;
    return(
         <div className={styles.container}>
             <img className={styles.image} src={coronaimg} alt="COVID-19"/>
             <Cards data={data}/>
             <CountryPicker handlecountrychange={this.handlecountrychange}/>
             <Chart data={data} country={country}/>

         </div>
    )

}

 }
 export default App;