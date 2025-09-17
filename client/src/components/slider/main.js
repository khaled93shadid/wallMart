import './main.css'
import Navbar from './navbar.js'
import CustomSlider from'./custom.slider.js'
import CustomSlider3 from'./custom.slider3.js'
import CustomSlider2 from'./custom.slider2.js'
import images from './images.js'
import images2 from './images2.js'
import images3 from './images3.js'
import images4 from './images4.js'
import images6 from './images6.js'
import images7 from './images7.js'


export default function Main(){

return(
<>
<Navbar />
<div className='main_body_div'>{/*ALL_body start */}
      <div className='body_div1_container'>{/*CONTAINER div1 START */}
        <div className='body_div1'>{/*DIV1 START */}
              <div className='body_div1_1'>{/*start */}
                    <img className='body_div1_1_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-462c/k2-_d78507e5-bb63-49d3-83b0-08c12886986e.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70' />
                    <p className='body_div1_1_p'>College tech </p>  
                    <p className='body_div1_1_p2'>starting at $19.88</p>  
                  <a href=''> <p className='body_div1_1_p3'>shop tech</p> </a> 
              </div>{/*END */}
              <div className='body_div1_2'>{/*start */}
                        <img className='body_div1_2_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-3835/k2-_1c192789-e622-465b-8e73-8000c7d68982.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70' />
                        <p className='body_div1_2_p3'>Backpacks from Wonder</p>
                        <p className='body_div1_2_p4'>Nation,pokemon & more</p>
                        <a href=''> <p className='body_div1_3_p3'>shop now</p> </a> 
                        <p className='body_div1_2_p1'>From</p>
                        <p className='body_div1_2_p2'>$<span className='body_div1_2_span'>5</span></p>
              </div>{/*END */}
              <div className='body_div1_3'>{/*start */}
                    
                      <img className='body_div1_3_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-d211/k2-_e5b67f41-878e-498a-801f-b012d8b3b838.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70'/>
                    <p className='body_div1_3_p'>Hot,new beauty </p>  
                    <p className='body_div1_3_p2'>from $10</p>  
                  <a href=''> <p className='body_div1_3_p3'>shop now</p> </a> 
              </div>{/*END */}
        </div>{/*DIV1 END */}


        <div className='body_div2'>{/*DIV2 START */}
              <div className='body_div2_1'>{/*start */}
                  <img className='body_div2_1_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-4b8c/k2-_92c5d71b-2cf1-477f-bf76-b6b6254d465c.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70' />
                  <p className='body_div2_1_p1'>Get it in as fast as an hour*</p>
                  <p className='body_div2_1_p2'>Dinner made</p>
                  <p className='body_div2_1_p3'>easy with delivery</p>
                  <p className='body_div2_1_p4'>shop food</p>
              </div>{/*end */}

              <div className='body_div2_2'>{/*start */}
                  <div className='div_relative'>
                    <img className='body_div2_2_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-ca2a/k2-_9c130100-4840-46b4-bd80-3781b36ef9fa.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70' />
                    <p className='body_div2_2_p'>Top 100 school picks</p>
                    <a href=''>  <p className='body_div2_2_p2'>shop now</p> </a> 
                  </div>
                  <div className='div_relative'>
                    <img className='body_div2_2_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-57e3/k2-_8308f9bf-4f45-4862-bd1e-dd83507e4d27.v1.png?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70' />
                    <p className='body_div2_2_p'>Up to 50% off</p>
                    <a href=''>  <p className='body_div2_2_p2'>shop now</p> </a> 
                  </div>
                  <div className='div_relative3'>
                        <div className='div_relative3_1'> 
                            <p className='div_relative3_p'>Free delivery from Walmart+ makes life easier</p>
                          <a className='div_relative3_a' href=''> <p className='div_relative3_p2'>Try Walmart+ for free </p> </a>
                        </div>
                        <img className='div_relative3_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-b5af/k2-_83cc8462-cf08-472f-98a2-745791f77752.v1.jpg?odnBound=720' />
                  </div>
  
              </div>{/*end*/}
                
        </div>{/*DIV2 END */}

        <div className='body_div3'>{/*DIV3 start */}
              <div className='body_div3_1'>
                <img className='body_div3_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-f19f/k2-_aa251f25-d877-4cf6-bf29-427a2199be65.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70' />
                <p className='body_div3_p'>From $5:</p>
                <p className='body_div3_p2'>backpacks from</p>
                <p className='body_div3_p3'>top brands</p>
                <p className='body_div3_p4'>shop now</p>

              </div>
              <div className='body_div3_2'>
                <img className='body_div3_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-1157/k2-_ef2e5ae1-f4b4-4a20-9dd5-6c280debc4be.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70' />
                <p className='body_div3_p'>Tween trends_</p>
                <p className='body_div3_p2'>from $5.86</p>
                <p className='body_div3_p44'>shop now</p>

              </div>
              <div className='body_div3_3'>
                <img className='body_div3_3_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-88f4/k2-_79e6f99a-9ea6-4c83-8227-e63c495408d0.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70' />
                <p className='body_div3_p'>Stylish dorm</p>
                <p className='body_div3_p2'>furniture</p> 
                <p className='body_div3_3_p44'>shop now</p>

              </div>
        </div>{/*DIV3 END */}
              
      </div> {/*CONTAINER div1 END */}





       <div className='body_row2_container'>{/*CONTAINER div2 START */}
              <div className='body_row2_1'>{/*START */}
                     <img className='body_row2_1_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-b547/k2-_f0b93506-025c-4744-86d4-542140da5bd7.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70' alt='pic' />
                     <p className='body_row2_1_p1'>Get free delivery with Walmart+</p>
                     <p className='body_row2_1_p2'>Be ready for back to</p>
                     <p className='body_row2_1_p3'>school</p>
                     <p className='body_row2_1_p4'>shop now</p>

              </div>{/*END*/}


              <div className='body_row2_2'>{/*START */}
                     <div className='body_row2_2_column_p'>
                        <p className='body_row2_2_P1'>All they need to succeed</p>
                      <a href='/'>  <p className='body_row2_2_P11'>view all</p> </a>
                     </div>
                      
                      <p className='body_row2_2_P2'>Make learning as easy as ABC</p>
                       <div className="App2">  {/* slider start */}
                           <CustomSlider2>
        {images2.map((image, index) => {
          return(
            
            <div>
              
              <img key={index} src={image.imgURL} alt={image.imgAlt} />
             
              <div className='slider_margin_div'>{/*margin div */}
                {image.id===1 &&  <p className='slider_p1'>Now ${image.price}<span className='slider_span'><del>${image.oldPrice}</del></span></p>}
                {image.id===2 &&  <p className='slider_p11'> ${image.price}</p>}
              
              <p className='slider_p2'>{image.dis}</p>
               {image.id===1 &&  <button className='slider_button'>+Add</button>}
               {image.id===2 &&  <button className='slider_button'>options</button>}
        
              </div>{/*margin div */}
            </div>
          )
          
        })}
                          </CustomSlider2>
     
                        </div>{/* slider end */}

              </div>{/*END*/}

       </div>  {/*CONTAINER div2 END */}

     

      <div className='body_row2_container'>{/*CONTAINER div2 START */}
             

              <div className='body_row2_2'>{/*START */}
                     <div className='body_row2_2_column_p'>
                        <p className='body_row2_2_P1'>All they need to succeed</p>
                      <a href='/'>  <p className='body_row2_2_P11'>view all</p> </a>
                     </div>
                      
                      <p className='body_row2_2_P2'>Make learning as easy as ABC</p>
                       <div className="App2">  {/* slider start */}
                           <CustomSlider2>
        {images3.map((image, index) => {
          return(
            
            <div >
              
              <img key={index} src={image.imgURL} alt={image.imgAlt} />
             
              <div className='slider_margin_div'>{/*margin div */}
                {image.id===1 &&  <p className='slider_p111'>Now ${image.price}<span className='slider_span1'>${image.oldPrice}</span></p>}
                {image.id===2 &&  <p className='slider_p111'> ${image.price}</p>}
                {image.id===3 &&  <p className='slider_p111'> ${image.price}</p>}
               {image.id===3 &&  <p className='slider_p22'>{image.dis2}</p>}
               {image.id===1 &&  <br />}
               {image.id===2 &&  <br />}
              <p className='slider_p2'>{image.dis}</p>
             
               {image.id===1 &&  <button className='slider_button'>+Add</button>}
               {image.id===3 &&  <button className='slider_button'>+Add</button>}
               {image.id===2 &&  <button className='slider_button'>options</button>}
        
              </div>{/*margin div */}
            </div>
          )
          
        })}
                          </CustomSlider2>
     
                        </div>{/* slider end */}

              </div>{/*END*/}

               <div className='body_row2_1'>{/*START */}
                     <img className='body_row2_1_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-7e96/k2-_24035854-b8de-415d-8478-5f481e751d27.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70' alt='pic' />
                     <p className='body_row2_1_p1'>In a fast as an hour*</p>
                     <p className='body_row2_1_p2'>Get road trip-</p>
                     <p className='body_row2_1_p3'>ready!</p>
                     <p className='body_row2_1_p4'>shop now</p>

              </div>{/*END*/}


       </div>  {/*CONTAINER div2 END */}


       <div className='relative_for_slider_row2'>{/* relativeSlider start */}
            <div className="App3">  {/* slider start */}
                  <CustomSlider3>
                    {images4.map((image, index) => {
                       return(
                           <div key={index}>
                               <img  src={image.imgURL} alt={image.imgAlt} />
                               <p className='relative_for_sliderp2'> {image.name}</p>
                             
                          </div>

                       )
                      
                     
                    })}
                  </CustomSlider3>
            
            </div>{/* slider end */}

             <p className='relative_for_slider_p'>Get it all right here</p>
             <a href='/'>  <p className='relative_for_slider_p3'>view all</p></a> 

      </div>{/* relativeSlider end */}

      
        <div className='relative_for_slider_row2'>{/* relativeSlider start */}
            <div className="App">  {/* slider start */}
                  <CustomSlider>
                    {images.map((image, index) => {
                       return(
                           <div key={index} className='slider_new1_flex'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-heart heart_icon1" viewBox="0 -2 16 17">
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                              </svg>

                               <img className='slider_new1_img' src={image.imgURL} alt={image.imgAlt} />
                               
                                   <p className='slider_new1_p1'>Now ${image.price}<span className='slider_new1_span1'><del>${image.oldprice}</del></span></p> 
                                   <p className='slider_new1_p3'>{image.dis}</p>
                                   <button className='slider_button'>Options</button>

                
                             
                          </div>

                       )
                      
                     
                    })}
                  </CustomSlider>
            
            </div>{/* slider end */}

             <p className='relative_for_slider_p5'>Flash Deals</p>
             <p className='relative_for_slider_p2'>Up to 65% off</p>
             <a href='/'>  <p className='relative_for_slider_p3'>view all</p></a> 
             
      </div>{/* relativeSlider end */}

        <div className='relative_for_slider_row2'>{/* relativeSlider start (use this slider for repetion)*/}
            <div className="App">  {/* slider start */}
                  <CustomSlider>
                    {images6.map((image, index) => {
                       return(
                           <div key={index} className='slider_new1_flex'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-heart heart_icon1" viewBox="0 -2 16 17">
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                              </svg>

                               <img className='slider_new1_img' src={image.imgURL} alt={image.imgAlt} />
                               
                                   <p className='slider_new1_p1'>Now ${image.price}<span className='slider_new1_span1'><del>${image.oldprice}</del></span></p>
                                  <p className='slider_new1_dis2'>{image.dis2}</p>
                                   <p className='slider_new1_p3'>{image.dis}</p>
                                   <button className='slider_button'>Options</button>

                
                             
                          </div>

                       )
                      
                     
                    })}
                  </CustomSlider>
            
            </div>{/* slider end */}

             <p className='relative_for_slider_p5'>Jump right back in</p>
             <a href='/'>  <p className='relative_for_slider_p3'>view all</p></a> 
             
        </div>{/* relativeSlider end */}

        <div className='school_div_container'>{/* school div start */}
                <div className='school1'>
                    <img className='school1_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-2d38/k2-_79de46f3-da2c-4fbb-99bc-00f1fe9e7f6d.v1.jpg?odnHeight=658&odnWidth=658&odnBg=&odnDynImageQuality=70' alt=''/>
                    <p className='school1_p'>Wonder Nation & more</p>
                    <p className='school1_p2'>Back-to-school fashion</p>
                    <p className='school1_p3'>Shop now</p>
                  
                </div>

                <div className='school2'>
                    <div className='school2_div1'>
                       <img className='school2_div1_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-3971/k2-_4e4d3052-13bc-4fd6-a891-1519b953f129.v1.jpg?odnHeight=292&odnWidth=512&odnBg=&odnDynImageQuality=70' alt=''/>
                       <p className='school2_div1_p1'>Tons of backpacks from $5</p>
                       <p className='school2_div1_p2'>Shop now</p>
                       
                    </div>
                       
                    <div className='school2_div2'>
                         <div className='school2_div2_1'>
                             <img className='school2_div2_1_img1' alt='' src='https://i5.walmartimages.com/dfw/4ff9c6c9-928c/k2-_76119750-4441-4e8b-b075-c613f6433ca0.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70'/>
                             <p className='school2_div2_1_p1'>Stylish uniforms from $4</p>
                             <p className='school2_div2_1_p2'>Shop now</p>
                         </div>
                         <div className='school2_div2_1'>
                             <img className='school2_div2_1_img1' alt='' src='https://i5.walmartimages.com/dfw/4ff9c6c9-a54a/k2-_0cea4f04-1c79-4eda-96e5-cf0421815a5f.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70'/>
                             <p className='school2_div2_1_p1_cpy'>Fan-fave graphic tees</p>
                             <p className='school2_div2_1_p2_cpy'>Shop now</p>
                         </div>
                        
                        
                      
                    </div>   

                </div>

                <div className='school3'>
                   <div className='school3_div1'>
                      <img className='school3_div1_img' alt='' src='https://i5.walmartimages.com/dfw/4ff9c6c9-4adf/k2-_c8134d4b-fbb5-45ef-a95f-f0770c220d1e.v1.jpg?odnHeight=658&odnWidth=385&odnBg=&odnDynImageQuality=70'/>
                      <p className='school3_div1_p1'>Looks for campus & beyond from $10</p>
                     

                   </div>

                </div>
        </div>{/* school div end */}
        

        <div className='relative_for_slider_row2'>{/* relativeSlider start (last1)*/}
            <div className="App">  {/* slider start */}
                  <CustomSlider>
                    {images7.map((image, index) => {
                       return(
                           <div key={index} className='slider_new1_flex'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-heart heart_icon1" viewBox="0 -2 16 17">
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                              </svg>

                               <img className='slider_new1_img' src={image.imgURL} alt={image.imgAlt} />
                               
                                   <p className='slider_new1_p1'>Now ${image.price}<span className='slider_new1_span1'><del>${image.oldprice}</del></span></p>
                                  <p className='slider_new1_dis2'>{image.dis2}</p>
                                   <p className='slider_new1_p3'>{image.dis}</p>
                                   <button className='slider_button'>Options</button>

                
                             
                          </div>

                       )
                      
                     
                    })}
                  </CustomSlider>
            
            </div>{/* slider end */}

             <p className='relative_for_slider_p5'>School fashion from $4</p>
             <a href='/'>  <p className='relative_for_slider_p3'>view all</p></a> 
             
        </div>{/* relativeSlider end */}
 

       
        <div className='relative_for_slider_row2'>{/* relativeSlider start (last2)*/}
            <div className="App">  {/* slider start */}
                  <CustomSlider>
                    {images6.map((image, index) => {
                       return(
                           <div key={index} className='slider_new1_flex'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-heart heart_icon1" viewBox="0 -2 16 17">
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                              </svg>

                               <img className='slider_new1_img' src={image.imgURL} alt={image.imgAlt} />
                               
                                   <p className='slider_new1_p1'>Now ${image.price}<span className='slider_new1_span1'><del>${image.oldprice}</del></span></p>
                                  <p className='slider_new1_dis2'>{image.dis2}</p>
                                   <p className='slider_new1_p3'>{image.dis}</p>
                                   <button className='slider_button'>Options</button>

                
                             
                          </div>

                       )
                      
                     
                    })}
                  </CustomSlider>
            
            </div>{/* slider end */}

             <p className='relative_for_slider_p5'>Popular in home decor</p>
             <a href='/'>  <p className='relative_for_slider_p3'>view all</p></a> 
             
        </div>{/* relativeSlider end */}



         <div className='relative_for_slider_row2'>{/* relativeSlider start (last3)*/}
            <div className="App">  {/* slider start */}
                  <CustomSlider>
                    {images6.map((image, index) => {
                       return(
                           <div key={index} className='slider_new1_flex'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-heart heart_icon1" viewBox="0 -2 16 17">
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                              </svg>

                               <img className='slider_new1_img' src={image.imgURL} alt={image.imgAlt} />
                               
                                   <p className='slider_new1_p1'>Now ${image.price}<span className='slider_new1_span1'><del>${image.oldprice}</del></span></p>
                                  <p className='slider_new1_dis2'>{image.dis2}</p>
                                   <p className='slider_new1_p3'>{image.dis}</p>
                                   <button className='slider_button'>Options</button>

                
                             
                          </div>

                       )
                      
                     
                    })}
                  </CustomSlider>
            
            </div>{/* slider end */}

             <p className='relative_for_slider_p5'>Save on home decor</p>
             <a href='/'>  <p className='relative_for_slider_p3'>view all</p></a> 
             
        </div>{/* relativeSlider end */}




</div>{/*ALL_body End */}

</>
)

}