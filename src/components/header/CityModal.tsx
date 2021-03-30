import styles from '../../bms.css';
import React,{useState} from 'react';
import Modal from 'react-modal';
 const CityModal = () => {
    const[modalIsOpen, setModalIsOpen]= useState(false) 
    return (
        <div id="drop">
          <div onClick={() => setModalIsOpen(true)}>city</div>
          <Modal  isOpen={modalIsOpen} onRequestClose={() =>setModalIsOpen(false)
          }>
        
           <div className="modal-content">

          <input type="text" className="modalsearch" placeholder="Search for your city">
            </input>
          <div className="modal-main">
            <h4>Popular Cities</h4>
            <div className="cities">
              <div className="city">
              <i className="ms-Icon ms-Icon--CityNext ms-fontSize-68"></i>
              <p>surat</p>
            </div>
            <div className="city">
              <i className="ms-Icon ms-Icon--CityNext  ms-Icon--CityNext ms-fontSize-68"></i>
              <p>mumbai</p>
            </div>
            <div className="city">
              <i className="ms-Icon ms-Icon--CityNext  ms-Icon--CityNext ms-fontSize-68"></i>
              <p>ahmdebad</p>
            </div>
            <div className="city">
              <i className="ms-Icon ms-Icon--CityNext  ms-Icon--CityNext ms-fontSize-68"></i>
              <p>bangalore</p>
            </div>
            <div className="city">
              <i className="ms-Icon ms-Icon--CityNext  ms-Icon--CityNext ms-fontSize-68"></i>
              <p>hyderabad</p>
            </div>
            <div className="city">
              <i className="ms-Icon ms-Icon--CityNext  ms-Icon--CityNext ms-fontSize-68"></i>
              <p>Chennai</p>
            </div>
            <div className="city">
              <i className="ms-Icon ms-Icon--CityNext  ms-Icon--CityNext ms-fontSize-68"></i>
              <p>Kolkata</p>
            </div>
            <div className="city">
              <i className="ms-Icon ms-Icon--CityNext  ms-Icon--CityNext ms-fontSize-68"></i>
              <p>Bangalore</p>
            </div>
            </div>
            <h4><a>View all Cities</a></h4>
          </div>
          </div>
          {/* </div> */}

          </Modal>
        </div>
    )
}


export default CityModal
