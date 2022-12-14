import './Overview.css'

export default function Overview({overview}){
    // on a scale of 5, star will be filled solid if the rate >= 0.75 
    const stars = new Array(5);
    return (
        <div className="overview_Container">
            <p id="price">${overview.price} </p>
            <p id='description'> {overview.description} </p>
            <div> 
                {[...stars].map((item,ind)=> {
                    return (
                        <i key={ind} className="fa-solid fa-star " style={{color:overview.rating.rate-ind >= 0.75 ? '#fcc107' : '#e4e5e9'}}></i>
                    )
                })}
                &nbsp;&nbsp;({overview.rating.rate})
                </div>
                <br></br>
            <button id='cart'> Add to Cart </button>
        </div>
    )
}