import React,{createContext} from 'react';
 import Imovie from './interfaces/Moviecontex.interface'
 import { FunctionComponent } from 'react';
//export const MovieContext=createContext("");

export const MovieProvider=props=> {
    const movies:Imovie[]= [
        {
            name: "tenet",
           
            theater:
            [
                {
                    cinema: 'pvr',
                    timing: ['7:40AM', '10:45PM'],
                    price:[80,450],
                    classname:['showtime economy morning','showtime businessclass night'],
                    id:[0,1]
                },
                {
                    cinema: 'cinemax',
                    timing: ['9:40AM', '2:50PM'],
                    price:[150,450],
                    classname:['showtime economy morning','showtime businessclass afternoon'],
                    id:[0,1]
                },
                {
                    cinema: 'vr',
                    timing: ['9:45AM', '2:50PM'],
                    price:[220,100],
                    classname:['showtime middleclass morning','showtime economy afternoon'],
                    id:[0,1]
                },
                {
                    cinema: 'inox',
                    timing: ['11:10AM', '7:00PM'],
                    price:[300,90],
                    classname:['showtime middleclass morning','showtime economy evening'],
                    id:[0,1]
                },
            ]

        },
        {
            name: 'ramprasad',
        
            theater:
            [
                {
                    cinema: 'pvr',
                    timing: ['6:40AM', '10:00PM'],
                    price:[100,550],
                    classname:['showtime economy morning','showtime businessclass night'],
                    id:[0,1]
                },
                {
                    cinema: 'cinemax',
                    timing: ['9:50AM', '2:00PM'],
                    price:[150,450],
                    classname:['showtime economy morning','showtime businessclass afternoon'],
                    id:[0,1]
                  
                },
                {
                    cinema: 'vr',
                    timing: ['8:00AM', '1:00PM'],
                    price:[120,100],
                    classname:['showtime middleclass morning','showtime economy afternoon'],
                    id:[0,1]
                },
                {
                    cinema: 'inox',
                    timing: ['11:50AM', '8:00PM'],
                    price:[250,100],
                    classname:['showtime middleclass morning','showtime economy evening'],
                    id:[0,1]
                },
            ]

        },
        {
            name: 'wonderwoman',
           
            theater:
            [
                {
                    cinema: 'pvr',
                    timing: ['7:40AM', '10:45PM'],
                    price:[80,450],
                    classname:['showtime economy morning','showtime businessclass night'],
                    id:[0,1]
                },
                {
                    cinema: 'cinemax',
                    timing: ['9:10AM', '2:00PM'],
                    price:[150,450],
                    classname:['showtime economy morning','showtime businessclass afternoon'],
                    id:[0,1]
                },
                {
                    cinema: 'vr',
                    timing: ['9:00AM', '2:00PM'],
                    price:[220,100],
                    classname:['showtime middleclass morning','showtime economy afternoon'],
                    id:[0,1]
                },
                {
                    cinema: 'inox',
                    timing: ['11:10AM', '7:00PM'],
                    price:[200,100],
                    classname:['showtime middleclass morning','showtime economy evening'],
                    id:[0,1]
                },
            ]

        },
        {
            name: 'chakrakarakshak',
          
            theater:
            [
                {
                    cinema: 'pvr',
                    timing: ['7:40AM', '10:45PM'],
                    price:[80,450],
                    classname:['showtime economy morning','showtime businessclass night'],
                    id:[0,1]
                },
                {
                    cinema: 'cinemax',
                    timing: ['9:40AM', '2:50PM'],
                    price:[150,450],
                    classname:['showtime economy morning','showtime businessclass afternoon'],
                    id:[0,1]
                },
                {
                    cinema: 'vr',
                    timing: ['9:45AM', '2:50PM'],
                    price:[220,100],
                    classname:['showtime middleclass morning','showtime economy afternoon'],
                    id:[0,1]
                },
                {
                    cinema: 'inox',
                    timing: ['11:10AM', '7:00PM'],
                    price:[300,90],
                    classname:['showtime middleclass morning','showtime economy evening'],
                    id:[0,1]
                },
            ]

        },
        {
            name: 'tomandjerry',
            
            theater:
            [
                {
                    cinema: 'pvr',
                    timing: ['7:40AM', '10:45PM'],
                    price:[80,450],
                    classname:['showtime economy morning','showtime businessclass night'],
                    id:[0,1]
                },
                {
                    cinema: 'cinemax',
                    timing: ['9:40AM', '2:50PM'],
                    price:[150,450],
                    classname:['showtime economy morning','showtime businessclass afternoon'],
                    id:[0,1]
                },
                {
                    cinema: 'vr',
                    timing: ['9:45AM', '2:50PM'],
                    price:[220,100],
                    classname:['showtime middleclass morning','showtime economy afternoon'],
                    id:[0,1]
                },
                {
                    cinema: 'inox',
                    timing: ['11:10AM', '7:00PM'],
                    price:[300,90],
                    classname:['showtime middleclass morning','showtime economy evening'],
                    id:[0,1]
                },
            ]
        }
      
    ];
    console.log(movies);
    return(
       
      <MovieContext.Provider value ={movies}>
      {props.children}
       </MovieContext.Provider>
    );
}
export const MovieContext=createContext<Imovie[]>({} as Imovie[] );
