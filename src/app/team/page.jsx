import React from 'react'
import Image from 'next/image'
import "./page.css";
import ContactSection from '@/components/common/ContactSection';

const teampage = () => {
    return (
        <div >
            <div className='team-page-container'>

                   <div className='ourteam-header'>
                    <h4>Meet the CMS Team </h4>
                    <p> We believe our greatest strength lies in our dedication to delivering unbiased, client-focused solutions Our team operates independently, free from ties to  specific products, investment firms, or financial services, ensuring that our clients' needs always come first.</p>

                   </div>
                  <div className='team-grid'>
                {Array(3).fill(0).map((_, i) => (
                 <div className="team-card" key={i}>
                    
                    <Image  width={629}  height={576} src="/Images/heroimage4.jpg" alt="Team Member" />
                    <div  className='team-card-content'>
                        <h5>John Doe</h5>
                    <p className='role'>Software Engineer</p>

                    </div>
                    
                 </div>
                ))}
            </div>

         <ContactSection/>


            </div>
          
        </div>
    )
}

export default teampage