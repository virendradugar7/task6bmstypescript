import React,{useState} from 'react';
import styles from '../../bms.css';

import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

const MultiSelect2 = ({prop})=>{
    const callbackfunction=prop[0];
    const optionsList=prop[1];
    var[value,getValue]=useState<string[]>([]);
    var dd2handle = (e) => {
        getValue(Array.isArray(e)?e.map(x=>x.value):[]);
      
    }
    callbackfunction(value);
    // console.log(value);
    return(
         <div>
             <ReactMultiSelectCheckboxes options={optionsList} placeholderButtonLabel={"timings"}  onChange={dd2handle} /> 
         </div>
    )
}
export default MultiSelect2