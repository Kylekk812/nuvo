import { useState } from "react";


import './Product.css'

export default function Product({ item, getProduct }) {
    const [currTar, setTar] = useState([1, false]);
    const [toShow, setShow] = useState(false);



    //set currTar as false to determine whether show filled in color (or not)
    // currTar = [number:index,boolean:show/notShow ]
    //dynamically capturing which chevron button need to change and all the rest remain still 
    //and render changes conditionally
    return (
        item.map((proo, ind) => {
            return (
                <div key={proo.id} className='indiv_container'>
                    <img src={proo.image} alt='' className="productImage" onClick={(e) => {
                         setTar([proo.id, true])
                        setShow(!toShow)
                        getProduct(proo.id)
                    }} />
                    <ul onClick={(e) => {
                         setTar([proo.id, true])
                        setShow(!toShow)
                        getProduct(proo.id)
                    }} id='title'> {proo.title}</ul>
                    <br></br>
                    {(currTar[0] === proo.id && currTar[1]) ?
                        <i className="fa-solid fa-circle-chevron-right fa-2x" id={proo.id} onClick={
                            (e) => {
                                setShow(!toShow);
                                getProduct(proo.id);
                            }}> </i> :
                        <i className="fa-solid fa-circle-chevron-left fa-2x" id={proo.id} onClick={
                            (e) => {
                                setTar([proo.id, true])
                                setShow(!toShow);
                                getProduct(proo.id);
                            }
                        }></i>}

                </div>
            )
        })
    )


}

