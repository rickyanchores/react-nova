import React from 'react'

const Banner = () => {

    function changeBg(){

    let BannerBg = document.querySelector('.Banner');

    BannerBg.addEventListener('click',() => {
        BannerBg.style.background = "teal";
    })

}

    return (
        <div className="Banner">
            <h1>Banner</h1>
            <img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
        </div>
    )
}

export default Banner;
