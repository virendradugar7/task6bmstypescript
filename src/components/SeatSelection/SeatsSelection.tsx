import React, { Component, useState, useContext } from "react";
import ReactDOM from "react-dom";
import SeatPicker from "react-seat-picker";
import { MovieContext } from '../../MovieContext';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Imovie from '../../interfaces/Moviecontex.interface'



var lefttickets;//tickets left to be selected
var numberoftickets: number;//number of tickets user wishes to book
let currentbooking=[];//current booking details
const SeatSelection = () => {
    let bookedArray;//previous booking records
    let alreadyBooked;//to get the single booking record
    let occupiedSeats;//to get the array of prev booked seats
    let[bookticket,setboockticket]=useState(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
    var { moviename, cinema, id } = useParams<ParamTypes>();

    const filtermovie: Function = useContext(MovieContext);

    const clone = filtermovie(moviename);//getting the data for selected movie only
    var newclone = { theater: {} };
    newclone.theater = clone[0].theater.filter(i => {
        return i.cinema === cinema
    })//fetching the theater and show details
    let time = newclone.theater[0].timing[id];
    let price = newclone.theater[0].price[id];
    interface ParamTypes {
        moviename: string,
        cinema: string,
        id: string
    }
    bookedArray = JSON.parse(localStorage.getItem("bookingArray"));//to get previous booking records
    console.log(localStorage.getItem("index"));
     if (JSON.parse(localStorage.getItem("index"))> 0) {
         for (var j = 0; j < JSON.parse(localStorage.getItem("index")); j++) {
             console.log("im inside");
             alreadyBooked = bookedArray[j];
             if (alreadyBooked.moviename === moviename && alreadyBooked.cinema === cinema && alreadyBooked.time == time) {
                 occupiedSeats = alreadyBooked.bookedSeatArray;//if any tickets have been booken in same show 
             }
            }
        }
      console.log(occupiedSeats)

    let flag=0;//counter variable
    function addSeatCallbackContinousCase(
        { row, number, id },
        addCb,
        params,
        removeCb
    ) {
       
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        if(lefttickets===0 && bookticket){
            console.log("hello");
            clear();
        //     while(currentbooking.length>=0){
        //         console.log("helloinside");
        //         console.log(currentbooking,"currentbookingremoval")
        //     removeCb(currentbooking[0],currentbooking[1])
        //    currentbooking.splice(0,4);
           
        // }
    }
    flag=0;
  for(let i=0;i<lefttickets&&i+id<=8;i++){//for continous booking of seats more than 1
  
            flag++;
        addCb(row, i+number, id+i, newTooltip);
        currentbooking.push(row, i+number, id+i, newTooltip);
        console.log(currentbooking)
        }
        lefttickets-=flag;
        if(lefttickets===0){
         
            setboockticket(true);
            console.log(bookticket);
        
    }
    };
    function removeSeatCallback({ row, number, id }, removeCb) {

        //   async () => {
        //     await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        lefttickets++;
        if(bookticket===true && lefttickets!=0){
            setboockticket(false);
        }
        removeCb(row, number, newTooltip);
    };
    let dummy=0;//for index of occupied seats
    const rows = [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
        return [1, 2, 3, 4, 5, 6, 7, 8].map((numb) =>{
        if(occupiedSeats!==undefined){
        let temp=occupiedSeats[dummy][0].charCodeAt(0) - 65;//temporary variable to hold row alphabet in decimal 
        console.log(temp)
        if(temp===index && occupiedSeats[dummy][1]===numb )
        {
            if(dummy<occupiedSeats.length-1){
            dummy++;
            }
            console.log("zoop")
            return{
        id: numb,
        number: numb,
        isReserved: true
            }
    }
}
    else{
       return{ id: numb,
        number: numb,
        isReserved: false
    }
}
        }
    )
}
      
        );

    function store() {// if booking are made and paid than to store the booking details on local storage of browser
        let bookedSeatArray = [];
        let k=0;
       for(let i=0;i<currentbooking.length;i+=4)
       {
           bookedSeatArray[k]=[currentbooking[i],currentbooking[i+1]];
           k++
       }
       console.log(bookedSeatArray);
       booking.bookedSeatArray = bookedSeatArray;
       var inc = JSON.parse(localStorage.getItem("index"));
       
       if (JSON.parse(localStorage.getItem("index")) === 0) {
           var bookingArray = [];
           bookingArray[0] = booking;
           localStorage.setItem("bookingArray", JSON.stringify(bookingArray));

           localStorage.setItem("index",String( ++inc));
       }
       else {
           bookingArray = JSON.parse(localStorage.getItem("bookingArray"));
           bookingArray[inc++] = booking;
           localStorage.setItem("bookingArray", JSON.stringify(bookingArray));
           localStorage.setItem("index", inc);
       }
    }
    let modalnumber;//number of seat modal  value 
    
    var booking = {
        moviename: moviename,
        cinema: cinema,
        time: clone[0].theater[0].timing[id],
        id: id,
        bookedSeatArray: []

    };
    const [vehicleimg, setimg] = useState();
    let hoverfill = e => {
        if (modalnumber != null) {
            modalnumber.classList.remove("active");
        }
        modalnumber = e.target;
        console.log(modalnumber);
        modalnumber.className = 'active';
    }
    let fill = e => {//on  click fill in number of seats modal 
        if (modalnumber != null) {
            modalnumber.classList.remove("active");
        }
        modalnumber = e.target;
        e.target.className = 'active';
        numberoftickets= parseInt(e.target.innerHTML,10);
        lefttickets = numberoftickets;
    }
  
    function clear() {//clearing the previously selected seats if want to select new seats 
        var xx: NodeListOf<Element> = document.querySelectorAll(".seat--selected");
        for (var x = 0; x < xx.length; x++) {
            xx[x].className = 'seat seat--enabled';
            lefttickets++;
            console.log(lefttickets);
        }
    }
    function clearseat() {
        setModalIsOpen(true);
        clear();
    }
    return (

        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={
                {
                    padding: '0px'
                }
            }>
                <div className="seatmodal-content">
                    <header>
                        <p>How Many Seats</p>
                    </header>
                    <div className="transport"><img id="vehicle" alt=""></img></div>
                    <section className="numberofseats">
                        <div onClick={fill} onMouseOver={hoverfill}> <p>1</p></div>
                        <div onClick={fill} onMouseOver={hoverfill} ><p>2</p></div>
                        <div onClick={fill} onMouseOver={hoverfill}><p>3</p></div>
                        <div onClick={fill} onMouseOver={hoverfill}><p>4</p></div>
                        <div onClick={fill} onMouseOver={hoverfill}><p>5</p></div>
                        <div onClick={fill} onMouseOver={hoverfill}><p>6</p></div>
                        <div onClick={fill} onMouseOver={hoverfill}><p>7</p></div>
                        <div onClick={fill} onMouseOver={hoverfill}><p>8</p></div>
                        <div onClick={fill} onMouseOver={hoverfill}><p>9</p></div>
                        <div onClick={fill} onMouseOver={hoverfill}><p>10</p></div>
                    </section>
                    <button id="selectseats" onClick={() => setModalIsOpen(false)}><p>Select Seats</p></button>
                </div>
            </Modal>
            <header className="seatbanner darkbg">
                <div className="leftcontent">
                    <Link style={{ color: 'white', textDecoration: 'none' }}
                        to={`/theater/${moviename}`

                        }>
                        <i className="ms-Icon ms-Icon--ChevronLeft ms-fontSize-32 ms-fontColor-white"></i>
                    </Link>
                    <div className="leftinject">
                        <p id="movietitle">{moviename}</p>
                        <p id="theatre">{cinema}</p>
                    </div>
                </div>
                <div className="rightinject">
                    <div className="ticketdrop">
                        <p id="numberoftickets">{String(numberoftickets)}</p>
                        <p>Tickets</p>
                        <i className="ms-Icon ms-Icon--ChevronDownSmall ms-fontColor-white" style={{ cursor: "pointer" }} onClick={() => clearseat()} ></i>
                    </div>
                    <div className="close"></div>
                </div>

            </header>
            <div id="dayandtime">
                <p id="dandt" className="ms-fontColor-gray20">Today,{time}</p></div>
            <div id="seatcontainer">

                <div className="priceheading">
                    <p className="ms-fontColor-gray100 ms-fontSize-m" id="ticketheading">ticket price:{price}</p>

                </div>

                <SeatPicker
                    addSeatCallback={addSeatCallbackContinousCase}
                    removeSeatCallback={removeSeatCallback}
                    rows={rows}
                    maxReservableSeats={numberoftickets}
                    alpha
                    visible
                    selectedByDefault
                    loading={false}
                    tooltipProps={{ multiline: true }}
                    continuous
                />

                <div className="screen"></div>

                <p style={{ textAlign: 'center', alignSelf: 'center' }}>All eyes this way</p>
                <div className="seat-annotation"><div className="seat" style={{ backgroundColor: 'white' }}></div><p>Available</p><div className="seat" style={{ backgroundColor: 'grey' }}></div><p>unavailable</p><div className="seat" style={{ backgroundColor: 'red' }}></div><p>Selected</p></div>
            </div>
            <footer className={bookticket ? 'bookticket' : 'hidden'} >
                <Link style={{ color: 'black', textDecoration: 'none' }}
                    to={`/Ticket`}>
                    <button id="book" style={{ width: "30%" }} onClick={() => store()}>
                        <p className="ms-Icon ms-fontSize-xl">Pay Rs.{numberoftickets*price}</p><p className="ms-Icon ms-fontSize-xl" id="total"></p>
                    </button>
                </Link>
            </footer>

        </div >



    );
}


export default SeatSelection

