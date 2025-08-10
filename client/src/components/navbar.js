import '../styles/navbar.css'


export default function Navbar(){

return(
<>

<div className="navbar_container">
       <div className="navbar_left">
             <a href="/main.html">  <img class="navbar_left_img" src="https://i5.walmartimages.com/dfw/63fd9f59-14e2/9d304ce6-96de-4331-b8ec-c5191226d378/v1/spark-icon.svg" /> </a>
             <div className="navbar_left_2">
                  <div>
                      <img class="navbar_left_2img" src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png" />
                  </div>
                  <div className="Pickup">
                       <p className="navbar_left_2p1">Pickup or delivery?</p>
                       <p className="navbar_left_2p2">sacramento,95829.sacramento Supe....</p>
                       
                  </div>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="white" className="bi bi-chevron-down arrow_icon" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
             </div>  



       </div>

       <div className="navbar_middle">
         
        <input className="navbar_middle_input" placeholder="Search everything at Walmart online and in store" />
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-search search_icon" viewBox="-1 -1 17 17">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
       </div>



       <div className="navbar_right">
              
             <div className="navbar_right_div1">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-heart heart_icon" viewBox="0 0 16 16">
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                  <div>
                     <p  className="navbar_right_1p1">Reorder</p>
                     <p  className="navbar_right_2p2">My Items</p>
                  </div>

             </div>
            
             <div className="navbar_right_div1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-person person_icon" viewBox="0 0 16 16">
                               <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg>
                  <div>
                     <p  className="navbar_right_1p1">Sign In</p>
                     <p  className="navbar_right_2p2">Account</p>
                  </div>

             </div>
            
             <div className="navbar_right_div2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cart3 cart_icon" viewBox="0 0 16 16">
                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                  <p className="cart_quantity">0</p>
                  <p className="cart_total">$0.00</p>
             </div>

       </div>
  </div>

  <div className="header_container">
       <div className="header_div1">
        <p className="header_div1_p">Departments</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="darkblue" className="bi bi-chevron-down arrow_icon2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>

       </div>
     
       <div className="header_div2">
        <p className="header_div1_p">Services</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="darkblue" className="bi bi-chevron-down arrow_icon2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>

       </div>
     
       <div className="header_div3">
             <p className="header_div3_p">Get it Fast</p>
       </div>
       <div className="header_div3">
             <p class="header_div3_p">New Arrivals</p>
       </div>
       <div className="header_div3">
             <p className="header_div3_p">Back to School</p>
       </div>
       <div className="header_div3">
             <p className="header_div3_p">Rollbacks & More</p>
       </div>
       <div className="header_div3">
             <p className="header_div3_p">Dinner Made Easy</p>
       </div>
       <div className="header_div3">
             <p class="header_div3_p">Pharmacy Delivery</p>
       </div>
       <div className="header_div3">
             <p className="header_div3_p">College Shop</p>
       </div>
       <div className="header_div3">
             <p className="header_div3_p">Walmart+</p>
       </div>

        <div className="header_div4">
        <p className="header_div4_p">More</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="darkblue" className="bi bi-chevron-down arrow_icon2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>

       </div>

  </div>

</>
)

}