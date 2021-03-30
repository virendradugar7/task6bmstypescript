import React, { Component, useContext, useState } from 'react';
import  '../../bms.css';
import ReactTooltip from 'react-tooltip';
import Itheater from '../../interfaces/Theater.interface'
// import SeatSelection from '../SeatSelection/SeatSelection';
import { Link } from 'react-router-dom';

import '@fluentui/react/dist/css/fabric.min.css';

interface Props {
cinema:string,
classname:string[],
id:number[],
price:number[],
timing:string[]
}
const Shows:React.FC<{moviename:string,props:any}>= ({children,moviename,props}) =>{
   console.log(props); 
    const cn=props.classname;
    console.log(cn);
    const showTimes=props.timing;
    const price=props.price;

    return(
           cn.map((shows:string[],index:number) => (
            <Link style={{ color: 'black', textDecoration: 'none' }}
            to={`/${moviename}/${props.cinema}/${props.id[index]}`}
               
>
               <div className={cn[index]} data-tip data-for="here">
                   {/* <div class="tooltiptext">rs.{price[index]}</div> */}
                   <h5>{showTimes[index]}</h5>
                   <ReactTooltip id="here" place="top" effect="solid">Rs{price[index]}</ReactTooltip>
               </div>
               </Link>

           ))
      
    )
}
export default Shows