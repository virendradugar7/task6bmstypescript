import React, { useContext, useEffect, useState } from 'react';
import   '../../bms.css';
import { MovieContext } from '../../MovieContext';
import { useParams } from 'react-router-dom';
import ShowList from './ShowList';
import Header from '../header/Header';
import PriceRange from './PriceRange';
import TimeRange from './TimeRange';
import StaticJson from '../../StaticJSON'
import Imovie from '../../interfaces/Moviecontex.interface'
import Itheater from '../../interfaces/Theater.interface'
import '@fluentui/react/dist/css/fabric.min.css';

var clone;

export const  Theater = ({ props }) => {

    const priceList = StaticJson().mainList;
    const timeList=StaticJson().timeList;
    console.log(priceList);
    // const [filterIsOpen, setfilter] = useState(false);

    const movies:Imovie[]= useContext(MovieContext);
    console.log(movies);
    interface ParamTypes {
        movie: string
      }
      const { movie } = useParams<ParamTypes>()

// let {movie} = useParams();
 
 
if(movies!=null){
    clone = movies.filter(m => {
        return m.name == movie
    });
}
    
    const [clone2,setcl]=useState<Imovie[]|undefined>(clone);

    console.log("initial clone",clone2);
    const [obj, setobj] = useState<Imovie[]|undefined>(clone);

    var [priceFilter, setpriceFilter] = useState<string[]|null>([null]);
    var [timeFilter, settimeFilter] =useState<string[]|null>([null]);

    // const [refresh, setRefresh] = useState(0)

    useEffect(() => {

        //Normal Datastructure
        let subCline;
        subCline = clone;
        console.log("arraycheck", clone);
       
      
        if ( priceFilter.length==0 && timeFilter.length == 0) {
           
            setobj(clone2);
            console.log(clone2, "zzzzz")
        }
        else {
            var newobj:any=[{}];
            var theaters:Array<Itheater>= [];
          
            let theaterList = subCline[0].theater;
            console.log(theaterList);
           theaterList.map((theater:Itheater)=> {
            let element:Itheater={cinema:"",timing:[],price:[],classname:[],id:[]};
                console.log(theater,"theater")
                let bool = false
                var showTimes = theater.timing;
                var price = theater.price;
                var cn = theater.classname;
                var showid=theater.id;
                cn = cn.filter((c) => {
                    let index=0;
                    let inc = false;
                    if (priceFilter.length != 0) {
                        priceFilter.forEach((i) => {
                            if (c.includes(i)) {
                                inc = true;
                                bool = true;
                            
                            }
                        })
                    }
                    if (timeFilter.length!= 0) {
                        timeFilter.forEach((i) => {
                            if (c.includes(i)) {
                                inc = true;
                                bool = true;
                                console.log(inc);
                            }
                        })
                    }
                    console.log(c, inc);
                   if(!inc){           
                    showTimes = showTimes.filter(function (st, i) {
                                    return i == index;
                                })
                                price = price.filter(function (st, i) {
                                    return i == index;
                                })
                                showid = showid.filter(function (st, i) {
                                    return i == index;
                                })
                   }
                     index++;
                    return inc;
                })

                 if(bool){
                    console.log(element)
                     element.cinema=theater.cinema;
                     element.classname=cn;
                     element.price=price;
                     element.timing=showTimes;
                     element.id=showid;
                    theaters.push(element);
                 }

            })
            newobj[0].name=movie;
            newobj[0].theater=theaters;
            console.log(newobj, "vvv");
            setobj(newobj)
            console.log(newobj,"conrextcheck");
        }
    }, [priceFilter,timeFilter])


    return (
        <div>
         <Header />
            <section className="movieinfo lightbg">
                <div className="leftmovieinfo">
                    <h1 className="ms-fontColor-white" id="moviename">{movie}</h1>
                    <div className="tags">
                        <div className="ua">UA</div>
                        <i className="ms-Icon ms-Icon--HeartFill ms-fontColor-red ms-fontSize-l"></i>
                        <h5 className="ms-fontColor-white">69%</h5>
                        <div className="genre">
                            <h6>ACTION</h6>
                        </div>
                        <div className="genre">
                            <h6>THRILLER</h6>
                        </div>
                        <h5 className="ms-fontColor-white">Feb 26,2021 </h5>
                        <i className="ms-Icon ms-Icon--Clock ms-fontColor-white"></i>
                        <h5 className="ms-fontColor-white"> 1 hr 50 mins</h5>
                    </div>
                </div>
                <div className="rightmovieinfo">
                </div>
            </section>
            <section className="movieselectors">
                <div className="slicker">
                    <span>&#139;</span>
                    <div id="slicker-item1">
                        <h6 id="si1d"></h6>
                        <h6 id="si1dd"></h6>
                    </div>
                    <div id="slicker-item2">
                        <h6 id="si2d"></h6>
                        <h6 id="si2dd"></h6>
                    </div>
                    <div id="slicker-item3">
                        <h6 id="si3d"></h6>
                        <h6 id="si3dd"></h6>
                    </div>
                    <span>&#155;</span>
                </div>
                <div className="rightselector">
                    <PriceRange prop={[priceFilter => setpriceFilter(priceFilter),priceList]} />
                    <TimeRange prop={[timeFilter => settimeFilter(timeFilter),timeList]} />
                    <i className="ms-Icon ms-Icon--Search"></i>
                </div>
            </section>

            <section className="theatresigns"></section>
      

            <ShowList insideIprop={obj} />



        </div>
    );

}
export default Theater

