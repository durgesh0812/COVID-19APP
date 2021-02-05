import { findAllByDisplayValue } from '@testing-library/react';
import axios from 'axios';
const url='https://covid19.mathdro.id/api'
export const fetchData=async(country)=>{
  let changeableurl=url;
  if(country){
    changeableurl=`${url}/countries/${country}`
  }
    try{
        const { data:{confirmed,recovered,deaths,lastUpdate} }=await axios.get(changeableurl);
          const modifiedData={ confirmed,recovered, deaths,lastUpdate,
          }
        return modifiedData;
        }catch(error){
          console.log(error);

    }
}
export const fetchDailyData=async()=>{
  try{
    const {data}=await axios.get(`${url}/daily`);
    const modifiedData=data.map((dailydata)=>({
      confirmed:dailydata.confirmed.total,
      deaths:dailydata.deaths.total,
      date:dailydata.reportDate,
    }

    ));
    return modifiedData
  }catch(error){
}
}
export const fetchcountries=async ()=>{
  try{
    const {data:{countries}}=await axios.get(`${url}/countries`)
    return countries.map((country)=>country.name);
  }catch(error){
    console.log(error);
  }
}
