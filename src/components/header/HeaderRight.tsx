import styles from '../../bms.css';
import CityModal from './CityModal';
export const HeaderRight = () => {
    return (
        <div className="right-bar">
        <CityModal />
        <div className="ham">
         <i className="ms-Icon ms-Icon--GlobalNavButton ms-fontColor-white ms-fontSize-18 "></i></div>
        </div>
    )
}

export default HeaderRight