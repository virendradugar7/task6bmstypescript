import React, { Component, useContext, useState } from 'react';
import  '../../bms.css';
import Shows from './Shows';
import '@fluentui/react/dist/css/fabric.min.css';
import Imovie from "../../interfaces/Moviecontex.interface"
import Itheater from "../../interfaces/Theater.interface"
interface Props{
    name:string,
    theater:{
        cinema:string,
        timing:string[],
        price:number[],
        classname:string[],
        id:number[]
        }[];
}



const ShowList:React.FC<{props:any}> = ({ props})=> {
    const obj= props;
    const moviename:string=obj[0].name;
    const theaterList= obj[0].theater;
    
    console.log(obj);
    return (
        theaterList.map((theater:Itheater) => (
            <div className="infowrapper">
                <div className="theatreinfo" >
                    <h5>{theater.cinema}</h5>
                </div>
               <Shows props={theater} moviename={moviename} /> 
            </div>
        )

        )
    );

}
export default ShowList