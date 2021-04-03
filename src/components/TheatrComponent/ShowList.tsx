import React, { Component, useContext, useState } from 'react';
import  '../../bms.css';
import Shows from './Shows';
import '@fluentui/react/dist/css/fabric.min.css';
import Imovie from "../../interfaces/Moviecontex.interface"
import Itheater from "../../interfaces/Theater.interface"

interface IProp{
    insideIprop:Imovie[]
}
function ShowList({insideIprop}:IProp) {
    const showobject = insideIprop;
    const moviename:string=showobject[0].name;
    const theaterList= showobject[0].theater;
    
   
    return (
        <>
        {
        theaterList.map((theater:Itheater) => (
            <div className="infowrapper">
                <div className="theatreinfo" >
                    <h5>{theater.cinema}</h5>
                </div>
               <Shows moviename={moviename} props={theater} /> 
            </div>
        ))}
            </>
    );

}
export default ShowList