import React ,{useState,useEffect}from 'react';
import {NativeSelect,FormControl}from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchcountries} from '../../api'
 const CountryPicker=({handlecountrychange})=>{
     const [fetchedcountries,setfetchedcountries]=useState([]);
     useEffect(()=>{
         const fetchAPI=async ()=>{
     setfetchedcountries(await fetchcountries())
    }
    fetchAPI();


    },[setfetchedcountries]);
    console.log(fetchedcountries)
     return (
         <FormControl className={styles.FormControl}>
             <NativeSelect defaultValue="" onChange={(e)=>handlecountrychange(e.target.value)}>
                 <option value="">Global</option>
                 {fetchedcountries.map((country,i)=><option key={i} value={country}>{country}</option>)}

                 

             </NativeSelect>
         </FormControl>
     )
 }
 export default CountryPicker;