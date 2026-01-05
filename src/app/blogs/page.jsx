import React from 'react'
import "./page.css";
import Button from "@/components/common/Button";
import ContactSection from "@/components/common/ContactSection";
import { Footer } from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from 'next/image';


const Blogpage = () => {
  return (
    <div>
      <div className="blog-container">
      
      <section className="latest-post">
        <h4>Latest post</h4>
        <div className="latest-post-card">
          <div className="latest-post-image">
             <Image width={1409} height={777} src="/Images/bloglatest.jpg" alt="" />

         </div>

          <div className="latest-content">
            <p>October 23, 2024</p>
            <h4 >
              A Comprehensive Approach To Business Growth In Rwanda : 
              How Ccs Supports Enterprises Across All Stages
            </h4>

            <p >
              Rwanda’s business ecosystem is thriving, fuelled by robust economic policies and a commitment to innovation. With a focus on entrepreneurship and sustainable development, businesses in Rwanda are presented with vast opportunities to grow and succeed. However, navigating the dynamic landscape of starting, scaling, and sustaining a business requires strategic planning and expert support. This is where Comprehensive Consultancy Services (CCS) excels.
            </p>
            <Button text="Read more" className="read-btn"/>

          </div>
        </div>
      </section>

      <section className="more-posts">
        <h4>More posts</h4>

        <div className="categories">
          <button className="active">All blogs</button>
          <button> <p>Graphic design</p></button>
          <button><p>Accounting</p></button>
          <button> <p>Human resources</p></button>
          <button> <p>Web development</p></button>
          <button> <p>Digital marketing</p></button>
          <button> <p>UI UX design</p></button>
        </div>

        <div className="posts-grid">
          {Array(4).fill(0).map((_, i) => (
            <div className="post-card" key={i}>
              <div className='post-card-image'>

                  <Image width={1409} height={777} src="/Images/bloglatest.jpg" alt="" />

              </div>
      

               <p className="date">October 23, 2024</p>

              <h6 >
                Eu Aenean Rhoncus Mattis Facilisi Et. Vitae Urna At Non Malesuada Pretium Rhoncus.
              </h6>

              <p className="post-desc">
                Nisi In Tincidunt Nulla Odio Molestie Ullamcorper...
              </p>

              <a className="post-read">Read More →</a>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="active-page">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </section>
    </div>
      

      
    </div>
  )
}

export default Blogpage
