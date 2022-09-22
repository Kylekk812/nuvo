import {React, useState} from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

import './Product.css'

export default function Product({item,getProduct}) {
    const [items, setItems] = useState(new Array(item.length).fill(false));
    const [currTar, setTar] = useState([1,false]);
    const [toShow, setShow] = useState(false);
    // const getId = (e) => {
    //     e.stopPropagation();
    //     console.log(e)
    // }


    //set currTar as false to determine whether show filled in color (or not)
    //if currTar show circle left white else show circle right blue 
    
        return(
         item.map((proo,ind) => {
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
               {/* {!toShow? <i className="fa-solid fa-circle-chevron-left fa-2x" id= {proo.id} onClick={(e)=>{
                // changeStay(stay[proo.id-1])
                setShow(!toShow)
                setItems(!items[ind])
                // getId(e)
                getProduct(proo.id)
               }}> </i> :
                <i className="fa-solid fa-circle-chevron-right fa-color fa-2x" id= {proo.id} onClick={(e) => {
                setShow(!toShow);
                getProduct(proo.id);
            }}> </i> } */}
         {(currTar[0] === proo.id && currTar[1])? 
        <i className="fa-solid fa-circle-chevron-left fa-2x" id= {proo.id} onClick={
            (e) => {
                setShow(!toShow);
                getProduct(proo.id);}}> </i> :
        <i className="fa-solid fa-circle-chevron-right fa-2x" onClick={
             (e) => {
                 setTar([proo.id,true])
                 setShow(!toShow);
                 getProduct(proo.id);
             }
         }></i>}
    {/* }
} */}

                 </div>
             )
         })
     )

        
        // </div>
    
}

