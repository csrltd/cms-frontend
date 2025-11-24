import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className="landingpage"> 
    <div className="navbarsection"></div>
    <div className="herosection">
      <div className="herocontainer">
      <div className="heroleft">
      <div className="title"> Are you adequately covered </div>
      <h1 className="heading-1"> Contact us for a consultation </h1>
      <p className="paragraph">
        Accumsan morbi tortor scelerisque mauris urna hendrerit turpis eu malesuada. Auctor nunc lectus eget duis rhoncus placerat eget faucibus. 
      </p>
      <button className="button"> Contact us </button>
      
    </div>
    <div className="heroright">
      <div className="photosleft">
        <div className="heroimage1">
          <Image src="/Images/heroimage1.jpg" alt="Image" width={488}  height={465}/>
        </div>
        <div className="heroimage2">
          <Image src="/Images/heroimage2.jpg" alt="Image"  width={328}  height={492} />
        </div>
      </div>
      <div className="photosright">
        <div className="heroimage3">
          <Image src="/Images/heroimage3.jpg" alt="Image" width={405}  height={290}/>
        </div>
        <div className="heroimage4">
         <Image src="/Images/heroimage4.jpg" alt="Image" width={358}  height={328} />
        </div>
        <div className="heroimage5">
          <Image src="/Images/heroimage5.jpg" alt="Image" width={372}  height={302} />
        </div>

      </div>
      <div className="overlay-1">
      </div>
      <div className="overlay-2">

      </div>
    </div>
    </div>
    </div>
    <div className="aboutus">
      <div className="aboutcontainer">
      <div className="aboutimage">
       <Image src="/Images/Aboutimage2.jpg" alt="Image"  width={744}  height={442} />
      </div>
      <div className="aboutcontent">
        <div className="title"> about us</div>
        <h4 className="heading-1"> We are a premier management and investment services provider that is dedicated to actively connecting businesses with investors and delivering customized solutions that drive growth and efficiency.</h4>
        <p className="paragraph"> Our expertise lies in bridging the gap between investors and start-ups, ensuring companies secure the equity and debt investments essential for their success. With our innovative strategies and exceptional support, we empower businesses to achieve lasting success and exceed their potential. </p>
      </div>

    </div >

    </div>
    
    <div className="missionandvalues">
      <div className="ourmission">
        <div className="ourmissioncontent">
          <div className="title">our mission</div>
          <h4 className="heading-2"> To facilitate impactful collaborations between investors and businesses </h4>
          <p className="paragraph-2"> By providing exceptional management services, strategic insights, and operational support that empower all stakeholders to achieve their goals.</p>
        </div>
        <div className="ourmissionimage">
       <Image src="/Images/our mission photo.jpg" alt="Image" width={616}  height={362}/>
        </div>
      </div>
      <div className="corevalues">
        <div className="corevaluesheader">
          <div className="title"> core values</div>
        <p className="valuesparagraph">At forward pushback time rehydrate. Native looking clean eye sandwich latest respectively sky about cob. Building parking conversation baseline going air. Reference my asserts synergize catching. Practices technologically. </p>
        </div>
        <div className="values">
          
          <div className="valuecontent">
            <div className="valueicon"></div>
            <h6 className="heading-1">Integrity</h6>
            <p className="valueparagraph"> We maintain transparency and ethical practices in all our interactions. </p>
  
          </div>
          <div className="valuecontent">
            <div className="valueicon"></div>
            <h6 className="heading-5">Excellence</h6>
            <p className="valueparagraph"> We pursue the highest standards of quality in our services. </p>
  
          </div>
          <div className="valuecontent">
            <div className="valueicon"></div>
            <h6 className="heading-5">Collaboration</h6>
            <p className="valueparagraph"> We build meaningful relationships between businesses and investors </p>
  
          </div>
          <div className="valuecontent">
            <div className="valueicon"></div>
            <h6 className="heading-5">Innovation</h6>
            <p className="valueparagraph"> We embrace creative approaches to solve complex challenges.</p>
  
          </div>
          <div className="valuecontent">
            <div className="valueicon"></div>
            <div className="heading-5">Impact</div>
            <p className="valueparagraph"> We focus on creating value and driving measurable success.</p>
  
          </div>
          
        </div>

        
      </div>
    </div>
    <div className="whychooseus">
      <div className="whychooseuscontainer"> 
      
      <div className="whychooseusleft">
        <div className="title"> Why choose us</div>
        <h5 className="heading-1"> Your trusted partner for investment facilitation, expert support, and long-term business success.</h5>
        <div className="whychooseusimage"> 
          <Image src="/Images/why choose us image.jpg" alt="Image"  width={640}  height={556} />
          </div>
      </div>
      <div className="keybenefits">
        <div className="benefitcontent">
          <h6 className="heading-3">Extensive Network</h6>
          <div className="paragraph">We have a vast network of investors and business leaders</div>

       </div>
       <div className="benefitcontent-2">
          <h6 className="heading-3">Customized Solutions</h6>
          <div className="paragraph">We tailor our services to meet the unique needs of each client</div>
       </div>
       <div className="benefitcontent">
          <h6 className="heading-3">Proven Expertise</h6>
          <div className="paragraph">Our team has a track record of facilitating successful investments and business transformations.</div>

       </div>
       <div className="benefitcontent-2">
          <h6 className="heading-3">Comprehensive Support</h6>
          <div className="paragraph">We provide end-to-end solutions from strategy to execution.</div>

       </div>
       <div className="benefitcontent">
          <h6 className="heading-3">Innovation-Driven</h6>
          <div className="paragraph">We leverage cutting-edge tools and approaches to deliver results.</div>

       </div>

      </div>
    </div>
    </div>
    <div className="blogsection">
      <div className="blogcontainer">
      <div className="blogsectionheader"> 
        <div className="title">Recent blogs</div>
      <h5 className="heading-1">Stay updated with trends, strategies, and expert perspectives that guide business success.</h5>
      </div>
      
      <div className="slider">
        <div className="blogcard">
          <div className="blogimage"></div>
          <div className="blogcontent">
            <h5 className="heading-1">The financial stories we tell ourselves</h5>
            <p className="paragraph">
              This internal tug-of-war isn’t limited to our personal relationships; it shows up in our financial lives, too. Think about the stories you tell yourself when making spending decisions. Are you buying the luxury car because it aligns with your values, or because you feel pressured to keep up with those around you? Are you saying yes to another family vacation because you truly want to go, or because you fear disappointing your loved ones?
               </p>
            <button className="button"> Read more</button>
            
            
        </div>
        <div className="blogaction"></div>
      </div>
      <div className="slideraction">
       <div className="slides">
        <div className="slideactive"></div>
        <div className="slide"></div>
        <div className="slide"></div>
       </div>
       <button className="button"> View all</button>
      </div>


    </div>
      
      

    </div>

    </div>
    <div className="servicessection">
      <div className="servicescontainer">
      <div className="servicesheader">
        <div className="title">Our Services</div>
        <h4 className="servicesheading"> We support businesses in securing investments and achieving operational excellence.</h4>


      </div>
      <div className="services">
        <div className="servicecard-1">
        <div className="serviceimage-1"></div>
        <div className="servicecontent">
          <h6 className="heading-3"> Investment Facilitation</h6>
          <div className="points-1">
            <div className="point">
              <div className="dot"></div>
              <p className="pointtext"> Connecting businesses with investors for equity and debt financing</p>
            </div>
             <div className="point">
              <div className="dot"></div>
              <p className="pointtext">Structuring investment deals</p>
            </div>
             <div className="point">
              <div className="dot"></div>
              <p className="pointtext"> Connecting businesses with investors for equity and debt financing</p>
            </div>
          </div>
        </div>
        </div>
       <div className="servicecard-2">
        <div className="serviceimage-2"></div>
        <div className="servicecontent">
          <h6 className="heading-3">Financial Advisory</h6>
          <div className="points-2">
            <div className="point">
              <div className="dot"></div>
              <p className="pointtext"> Financial analysis and modelling</p>
            </div>
             <div className="point">
              <div className="dot"></div>
              <p className="pointtext">Budgeting and forecasting</p>
            </div>
             <div className="point">
              <div className="dot"></div>
              <p className="pointtext"> Investment strategy consulting</p>
            </div>
          </div>
        </div>
        </div>
        <div className="servicecard-2">
        <div className="serviceimage-2"></div>
        <div className="servicecontent">
          <h6 className="heading-3">Operational Management</h6>
          <div className="points-2">
            <div className="point">
              <div className="dot"></div>
              <p className="pointtext"> Streamlining business processes</p>
            </div>
             <div className="point">
              <div className="dot"></div>
              <p className="pointtext">Vendor and supply chain coordination</p>
            </div>
             <div className="point">
              <div className="dot"></div>
              <p className="pointtext"> Facility and asset management</p>
            </div>
          </div>
        </div>
        </div>
        <div className="servicecard-1">
        <div className="serviceimage-1"></div>
        <div className="servicecontent">
          <h6 className="heading-3"> Strategic Consulting</h6>
          <div className="points-1">
            <div className="point">
              <div className="dot"></div>
              <p className="pointtext"> Business growth and development strategies</p>
            </div>
             <div className="point">
              <div className="dot"></div>
              <p className="pointtext">Market research and analysis</p>
            </div>
             <div className="point">
              <div className="dot"></div>
              <p className="pointtext"> Organizational restructuring</p>
            </div>
          </div>
        </div>
        </div>

      </div>

    </div>
    </div>
    <div className="calltoactionsection">
      <div className="calltoactioncontainer">
        <div className="calltoactioncontent"> 
          <h3 className="heading-2">Ready to take your business to the next level?</h3>
      <p className="paragraph-2"> Ready to take your business to the next level? </p>
      <button className="button-2">contact us</button>
        </div>
      
      
      
    </div>
     </div>
    <div className="testimonialssection">
      <div className="testimonialscontainer">
      <div className="testimonialsheader">
         <p className="title"> Testimonials </p>
      <h4 className="headind-1"> Real experiences from clients who have grown with our guidance and support. </h4>
      </div>
     
      <div className="testimonialscoursels">
        <div className="testimonialcard">
          <div className="testimonialicon"></div>
          <p> Working with this team has been a game-changer for our business. Their expertise in connecting us with the right investors and providing tailored strategies has truly set us on a path to success. </p>
          <h4>Peter ngoga</h4>


        </div>
        <div className="testimonialcard">
          <div className="testimonialicon"></div>
          <p> Working with this team has been a game-changer for our business. Their expertise in connecting us with the right investors and providing tailored strategies has truly set us on a path to success. </p>
          <h4>Peter ngoga</h4>
        </div>
        <div className="testimonialcard">
          <div className="testimonialicon"></div>
          <p> Working with this team has been a game-changer for our business. Their expertise in connecting us with the right investors and providing tailored strategies has truly set us on a path to success. </p>
          <h4>Peter ngoga</h4>


        </div>
      </div>
      <div className="slides">
        <div className="slideactive"></div>
        <div className="slide"></div>
        <div className="slide"></div>
       </div>



    </div>
    </div>
    <div className="conatactussection">
      <div className="contactuscontainer"></div>
    </div>
  
    <div className="footersection">
       <div className="footercontainer"></div>
       </div>
    



  </div>  
  );
}
