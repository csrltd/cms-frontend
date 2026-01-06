"use client";

import Button from "@/components/common/Button";
import ContactSection from "@/components/common/ContactSection";
import { Footer } from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import "./page.css";
import BlogSlider from "@/components/common/blogslider";
import TestimonialSlider from "@/components/common/TestimonialSlider";
import { Search,Sparkles,Handshake,Lightbulb} from 'lucide-react';
import Link from "next/link";

export default function Home() {
  function greetings() {
    alert("Hello, welcome to our CMS!");
  }

  return (
    <>
      
      <div className="landingpage">
        {/* <div className="navbarsection"></div> */}
        <section className="herosection">
           <div className="gradient"></div>
          <div className="herocontainer">
            <div className="heroleft">
              <SectionTitle text="Are you adequately covered" />
              <h1 className="heading-1"> Contact us for a consultation </h1>
              <p className="paragraph">
                Accumsan morbi tortor scelerisque mauris urna hendrerit turpis
                eu malesuada. Auctor nunc lectus eget duis rhoncus placerat eget
                faucibus.
              </p>
              <Link href="/#contact-btn"><Button text="Contact Us" /></Link>
              {/* <Button text="Contact us" /> */}
            </div>
            <div className="heroright">
              <div className="photosleft">
                <div className="heroimage1">
                  <Image width={584} height={557} src="/Images/heroimage1.jpg" alt="" />
                
                </div>
                <div className="heroimage2">

                  <Image width={620} height={930} src="/Images/heroimage2.jpg" alt="" />
                </div>
              </div>
              <div className="photosright">
                <div className="heroimage3">
                  <Image width={804} height={576} src="/Images/heroimage3.jpg" alt="" />
                </div>
                <div className="heroimage4">
                  <Image width={629}  height={576} src="/Images/heroimage4.jpg" className="heroimage4fit" alt="" />
                </div>
                <div className="heroimage5">
                  <Image  width={685} height={557}  src="/Images/heroimage5.jpg" alt="" />
                </div>
              </div>
              <div className="overlay-1"></div>
              <div className="overla"></div>
      
            </div>
          </div>
        </section>
        <section className="aboutus" id="aboutus">
          <div className="aboutcontainer">
            <div className="aboutimage">
              <Image   width={1311} height={779} src="/Images/Aboutimage2.jpg" alt="" />
              
              <div className="ourvision">
                <h5 className="heading-3">Our vision</h5>
                <p className="paragraph"> To be the leading platform that connects businesses with investors, fostering growth, innovation, and long-term partnerships. </p>
              </div>
            </div>
            <div className="aboutcontent">
              <SectionTitle text="About us" />
              <h4 className="heading-1">
                We are a premier management and investment services provider
                that is dedicated to actively connecting businesses with
                investors and delivering customized solutions that drive growth
                and efficiency.
              </h4>
              <p className="paragraph">
                Our expertise lies in bridging the gap between investors and
                start-ups, ensuring companies secure the equity and debt
                investments essential for their success. With our innovative
                strategies and exceptional support, we empower businesses to
                achieve lasting success and exceed their potential.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="missionandvalues">
          <div className="ourmission">
            <div className="ourmissioncontent">
              <SectionTitle text="our mission" />
              <h4 className="heading-2">
                To facilitate impactful collaborations between investors and
                businesses
              </h4>
              <p className="paragraph-2">
                By providing exceptional management services, strategic
                insights, and operational support that empower all stakeholders
                to achieve their goals.
              </p>
            </div>
            <div className="ourmissionimage">
              <Image width={966} height={567} src="/Images/our mission photo.jpg" alt="" />

            </div>
          </div>
          <div className="corevalues">
            <div className="corevaluesheader">
              <SectionTitle text="Core values"/>
            
              <p className="valuesparagraph">
                At forward pushback time rehydrate. Native looking clean eye
                sandwich latest respectively sky about cob. Building parking
                conversation baseline going air. Reference my asserts synergize
                catching. Practices technologically.
              </p>
            </div>
            <div className="values">
              <div className="valuecontent">
                <div className="valueicon">
                  <Search color="#0C7A3E" height={32} width={32}/>
                </div>
                <h6>Integrity</h6>
                <p className="valueparagraph">

                  We maintain transparency and ethical practices in all our
                  interactions.
                </p>
              </div>
              <div className="valuecontent">
                <div className="valueicon">
                  <Sparkles  color="#0C7A3E" height={32} width={32}/>
                </div>
                <h6>Excellence</h6>
                <p className="valueparagraph">
                  We pursue the highest standards of quality in our services.
                </p>
              </div>
              <div className="valuecontent">
                <div className="valueicon">
                  <Handshake color="#0C7A3E" height={32} width={32}/>
                </div>
                <h6>Collaboration</h6>
                <p className="valueparagraph">
                  
                  We build meaningful relationships between businesses and
                  investors
                </p>
              </div>
              <div className="valuecontent">
                <div className="valueicon">
                  <Lightbulb color="#0C7A3E" height={32} width={32}/>
                </div>
                <h6>Innovation</h6>
                <p className="valueparagraph">
                 
                  We embrace creative approaches to solve complex challenges.
                </p>
              </div>
              <div className="valuecontent">
                <div className="valueicon">
                  <Search color="#0C7A3E" height={32} width={32}/>
                </div>
                <h6>Impact</h6>
                <p className="valueparagraph">
                  We focus on creating value and driving measurable success.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="whychooseus">
          <div className="whychooseuscontainer">
            <div className="whychooseusleft">
              <div className="whychooseusheader">
                <SectionTitle text="Why choose us" />
              <h4 className="heading-1">
                Your trusted partner for investment facilitation, expert
                support, and long-term business success.
              </h4>
              </div>
              
              <div className="whychooseusimage">
                <Image width={860} height={747} src="/Images/why choose us image.jpg" alt="" />
              </div>
            </div>
            <div className="keybenefits">
              <div className="benefitcontent">
                <h6 className="heading-3">Extensive Network</h6>
                <div className="paragraph">
                  We have a vast network of investors and business leaders
                </div>
              </div>
              <div className="benefitcontent-2">
                <h6 className="heading-3">Customized Solutions</h6>
                <div className="paragraph">
                  We tailor our services to meet the unique needs of each client
                </div>
              </div>
              <div className="benefitcontent">
                <h6 className="heading-3">Proven Expertise</h6>
                <div className="paragraph">
                  Our team has a track record of facilitating successful
                  investments and business transformations.
                </div>
              </div>
              <div className="benefitcontent-2">
                <h6 className="heading-3">Comprehensive Support</h6>
                <div className="paragraph">
                  We provide end-to-end solutions from strategy to execution.
                </div>
              </div>
              <div className="benefitcontent">
                <h6 className="heading-3">Innovation-Driven</h6>
                <div className="paragraph">
                  We leverage cutting-edge tools and approaches to deliver
                  results.
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <BlogSlider /> */}
        <section className="servicessection" id="services">
          <div className="servicescontainer">
            <div className="servicesheader">
              <SectionTitle text="Our Services" />
              <h4 className="servicesheading">
                We support businesses in securing investments and achieving
                operational excellence.
              </h4>
            </div>
            <div className="services">
              <div className="servicecard-1">
                <div className="serviceimage-1">
                  <Image width={1311} height={779} src="/Images/aboutimage.jpg" alt="" />
                </div>
                <div className="servicecontent">
                  <h6 className="heading-3"> Investment Facilitation</h6>
                  <div className="points-1">
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">
                        Connecting businesses with investors for equity and debt
                        financing
                      </p>
                    </div>
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">Structuring investment deals</p>
                    </div>
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">
                        
                        Connecting businesses with investors for equity and debt
                        financing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="servicecard-2">
                <div className="serviceimage-2">
                   <Image width={1311} height={779} src="/Images/serviceimage2.jpg" alt="" />
                </div>
                <div className="servicecontent">
                  <h6 className="heading-3">Financial Advisory</h6>
                  <div className="points-2">
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">
                        Financial analysis and modelling
                      </p>
                    </div>
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">Budgeting and forecasting</p>
                    </div>
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">
                       
                        Investment strategy consulting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="servicecard-2">
                <div className="serviceimage-2">
                   <Image width={1311} height={779} src="/Images/serviceimage3.jpg" alt="" />
                </div>
                <div className="servicecontent">
                  <h6 className="heading-3">Operational Management</h6>
                  <div className="points-2">
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">
                        
                        Streamlining business processes
                      </p>
                    </div>
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">
                        Vendor and supply chain coordination
                      </p>
                    </div>
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">
                        {" "}
                        Facility and asset management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="servicecard-1">
                <div className="serviceimage-1">
                   <Image width={1311} height={779} src="/Images/serviceimage4.jpg" alt="" />
                </div>
                <div className="servicecontent">
                  <h6 className="heading-3"> Strategic Consulting</h6>
                  <div className="points-1">
                    <div className="point">
                      <div className="dot"></div>
                      <p className="pointtext">
                        {" "}
                        Business growth and development strategies
                      </p>
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
        </section>
        <div className="calltoactionsection">
          <div className="calltoactioncontainer">
            <div className="calltoactioncontent">
              <h3 className="heading-2">
                Ready to take your business to the next level?
              </h3>
              <p className="paragraph-2">
              
                Ready to take your business to the next level?
              </p>
              <Button text="Contact us" />
            </div>
          </div>
        </div>
        <TestimonialSlider />

        <ContactSection id="contact-btn" />

      </div>
    </>
  );
}
