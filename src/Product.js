import {React, useState} from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

import './Product.css'

export default function Product({item,getProduct}) {
    // const [items, setItems] = useState(null);
    const [toShow, setShow] = useState(false);
    // const getId = (e) => {
    //     e.stopPropagation();
    //     console.log(e)
    // }

        return(
         item.map((proo) => {
             return (
                 <div key={proo.id} className='indiv_container'> 
                 <img src={proo.image} alt='' className="productImage" onClick={(e)=>{
                    setShow(!toShow)
                    getProduct(proo.id)
                 }}/>
                 <ul onClick={(e)=>{
                    setShow(!toShow)
                    getProduct(proo.id)
                 }}> {proo.title}</ul>
                <br></br>
               {!toShow? <i className="fa-solid fa-circle-chevron-left fa-2x" style= {{color:'white'}} id= {proo.id} onClick={(e)=>{
                // changeStay(stay[proo.id-1])
                setShow(!toShow)
                // getId(e)
                getProduct(proo.id)
               }}> </i> :
                <i className="fa-solid fa-circle-chevron-right fa-color fa-2x" onClick={(e) => {
                setShow(!toShow);
                getProduct(proo.id);
            }}> </i> }
                 </div>
             )
         })
     )

        
        // </div>
    
}

