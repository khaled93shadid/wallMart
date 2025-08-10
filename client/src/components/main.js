import '../styles/main.css'
import Navbar from './navbar'

export default function Main(){

return(
<>
<Navbar />
<div className='main_body_div'>{/*body start */}
    <div className='body_div1_container'>{/*CONTAINER START */}
       <div className='body_div1'>{/*DIV1 START */}
             <div className='body_div1_1'>{/*start */}
                   <img className='body_div1_1_img' src='https://i5.walmartimages.com/dfw/4ff9c6c9-462c/k2-_d78507e5-bb63-49d3-83b0-08c12886986e.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70'/>
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
             
    </div>{/*CONTAINER END */}

</div>{/*body End */}

</>
)

}