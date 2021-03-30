import React,{useState} from 'react';
import styles from '../../bms.css';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

const PriceRange = ({prop})=>{
 const callbackfunction=prop[0];
 const optionsList=prop[1];
    var[value,getValue]=useState<string[]>([]);
    var dd1handle = (e) => {
        getValue(Array.isArray(e)?e.map(x=>x.value):[]); 
        
    }
 callbackfunction(value);

    
    // console.log(prop(value));
    return(
         <div>
             <ReactMultiSelectCheckboxes options={optionsList} placeholderButtonLabel={"price"}  onChange={dd1handle} /> 

         </div>
    )
}
export default PriceRange