// Online C compiler to run C program online
import "./globals.css";
import styles from "./page.module.css"
import Image from "next/image"
import nameLogo from '../../public/logofullneurodactyl.png'
import card1 from '../../public/card1.png'
import card2 from '../../public/card2.png'
import card3 from '../../public/card3.png'
import card4 from '../../public/card4.png'
import card5 from '../../public/card5.png'
import card6 from '../../public/card6.png'
import content1 from '../../public/content1.png'
import content2 from '../../public/content2.png'
import content5 from '../../public/content5.png'
import handimg from '../../public/hand_sm.png'
import content3 from '../../public/content3.png'
import content4 from '../../public/content4.png'

export default function Home() {
  return (
    <div>
    <main >
       <div className="nav-container">
      <div className="logo">
        <div className="img-div">
        <Image 
        src = {nameLogo}
        alt = "Neurodactyl"
        height = {50}
        />
        </div>
      </div>
      <div>
        <ul className="list">
          <li>
            <button className="nav-btn">Products</button>
          </li>
          <li >
            <button className="nav-btn">Solutions</button>
          </li>
          <li>
              <a href="" >Advantages</a>
          </li>
          <li>
          <a href="" >Markets</a>
          </li>
          <li>
          <a href="" >News</a>
          </li>
          <li >
          <a href="" >About us</a>
          </li>
          <li>
          <a href="" >Contacts</a>
          </li>
        </ul>
      </div>
      </div>
      <div className="main-big-div">
      <div className="main-div">
     <h1 className="main-heading"><b>Contactless fingerprint recognition</b></h1>
     <ul className="content-list">
      <li>Highly accurate neural network algorithms</li>
      <li>Work with scans and photo images</li>
      <li>All types of fingerprints are supported</li>
     </ul>
     <h3 className="bot-head"><b>Top-tier algorithm accuracy <a href="#">in NIST PFT III evaluation</a></b></h3>
     </div>
     <div className="img-div2">
     <Image 
        src = {handimg}
        alt = "Smartphone in hand"
        height = {700}
        width={400}
        />
     </div>
     </div>

      <h1 className="section-h1">Products</h1>
     <div class="card-container">
    <div class="card">
      <div class="line"><b><h6>&emsp; &emsp; &emsp; Server SDK <br/>for fingerprint recognition</h6></b></div>
      <div class="line"><h1>SDK</h1></div>
      <div class="line"><h6>Detection, template extraction<br/> and matching (1:1, 1:N, M:N).<br/> Scans and photo images are <br/> supported.</h6></div>
    </div>
    <div class="card">
      <div class="line"><b><h6>&emsp; &emsp; &emsp;Server platform <br/>for fingerprint recognition</h6></b></div>
      <div class="line"><h1>REST API</h1></div>
      <div class="line"><h6>Easy integration of biometric<br/> features, <br/>microservices architecture<br/>for system scaling and load<br/>balancing</h6></div>
    </div>
    <div class="card">
      <div class="line"><b><h6>Fingerprints capture <br/>for mobile devices</h6></b></div>
      <div class="line"><h1>Mobile SDK</h1></div>
      <div class="line"><h6>Touchless fingerprint acquisition<br/>and recognition with mobile<br/>phones<br/>(Android, iOS, web)</h6></div>
    </div>
  </div>
  


     <div className="advantage-div1">
      <div className="advantage-div2">
        <div >
        <span><h1>Advantages</h1></span>
        </div>
        <div className="card-six">
        <div class="card-each">
          <Image
          src = {card1}
          alt = "Rocket"
          height = {50}/>
          <div className="small-content"><span><b>Superior accuracy</b></span></div>
          <div className="small-content">
            <span>Neural network based technology provides</span>
            <span>extremely high recognition accuracy</span>
            <span>for verification and identification</span>
          </div>
        </div>
        <div class="card-each">
          <Image
               src = {card2}
               alt = "Rocket"
               height = {50}/>
          <div className="small-content"><span><b>All types of fingerprints</b></span></div>
          <div className="small-content">
            <span>Processing of photo images and standard scans</span>
            <span>(flats, rolls, latents) with one technology</span>
            <span>creating templates compatible between each other</span>
          </div></div>
        <div class="card-each">
          <Image 
               src = {card3}
               alt = "Rocket"
               height = {50}/>
          <div className="small-content"><span><b>Fixed size of biometric template</b></span></div>
          <div className="small-content">
            <span >Fingerprint biometric templates</span>
            <span>always have standard size - 512 bytes</span>
            <span>regardless of fingerprint or image type</span>
          </div></div>
        <div class="card-each">
          <Image 
               src = {card4}
               alt = "Rocket"
               height = {50}/>
          <div className="small-content"><span><b>High matching speed</b></span></div>
          <div className="small-content">
            <span>Matching performance is 100+ million matches</span>
            <span>per 1 s on one modern CPU and up to 1 billion</span>
            <span>matches per 1 s using batch mode or GPU</span>
          </div></div>
        <div class="card-each">
          <Image
               src = {card5}
               alt = "Rocket"
               height = {50}/>
          <div className="small-content"><span><b>DPI tolerant technology</b></span></div>
          <div className="small-content">
            <span>Algorithm works with images or scans from 250 dpi and</span>
            <span>higher and doesn't require exact DPI values</span>
            <span>(for example, exactly 500 dpi)</span>
          </div></div>
        <div class="card-each">
          <Image
               src = {card6}
               alt = "Rocket"
               height = {50}/>
          <div className="small-content"><span><b>Identification with the highest confidence</b></span></div>
          <div className="small-content">
            <span>By capturing of 4 fingers at once with our mobile SDK</span>
            <span>you can guarantee almost 100% reliable</span>
            <span>and user-friendly identification</span>
          </div></div>
        </div>
      </div>
     </div>
      <div className="market-head"><h1>Markets</h1></div>
      <div className="sub-market-head"><h3>National ID</h3></div>
      <div className="content-image-container">
        <div className="contents1"><h6>National biometric system plays a key role in fraud prevention, providing of digital governmental services and national security. Fingerprint recognition is a "must-have" biometric modality in such systems: it's reliable, unique for any individuals including identical twins and changes less over time than face.<br/>
                Our algorithms are designed to work with millions of records in enrollment databases with high accuracy and low false accept rate even for a search with one finger. High matching speed - up to 1 billion matches per 1 s - is a crucial advantage for big scale projects. It significantly saves customer's budget: numbers of required matching servers is up to 100 times less than the same numbers for "traditional" recognition algorithms</h6></div>
        <div><Image
        src={content1}
        /></div>
      </div>
      <div className="sub-market-head"><h3>Banks</h3></div>
      <div className="content-image-container">
      <div><Image
        src={content2}
        height={500}
        /></div>
        <div className="contents1"><h6>Banks go digital today. Now good service means that a lot of features can be provided to a client remotely, without visiting bank office. Biometric identification and verification help to prove customer's identity for online operations. Its safer and more convenient than a password, biometrics can not be forgotten or passed to someone else and it doesn't require memorizing. <br/>
Our technologies unlock fingerprint recognition for user's online verification and customer onboarding, because it requires only a regular phone. Mobile SDK can verify a person using 4 fingers, which are user-friendly to capture. It ensures ultimate verification and identification accuracy, which is much higher than recognition with one face.</h6></div>
       
      </div>
      <div className="sub-market-head"><h3>Governmental services</h3></div>
      <div className="content-image-container">
        <div className="contents1"><h6>Biometric identification and verification expedite and secure providing of digital governmental services. Its especially convenient for elder citizens, who often have difficulties with online authorization and memorizing lot of different passwords, which stops them from using digital services.<br/>
Fingerprint recognition provides high accuracy of identification, especially when several fingers are used. It contains different biometric data and reliability of recognition is increasing not several times, but by orders of magnitude.<br/>
Our technologies allow to acquire fingerprints by a scanner and a phone with compatible templates, as well as to use fingerprints acquired by a phone and converted to standard format (WSQ) in legacy systems.</h6></div>
        <div><Image
        src={content3}
        height={500}
        /></div>
      </div>
      <div className="sub-market-head"><h3>Police and migration</h3></div>
      <div className="content-image-container">
      <div><Image
        src={content4}
        height={500}
        /></div>
        <div className="contents1"><h6>Our algorithms demonstrate superior accuracy of neural networks working with national scale databases of tens or hundreds of millions individuals. Specially trained algorithms of detection and segmentation allow to automatically process fingerprint cards, segmenting flat and roll fingerprints of different quality, checking right/left hands and finger positions. <br/>
        Mobile finger acquisition opens new possibilities for law enforcement, making fingerprint recognition possible without a scanner, but with an ordinary mobile phone. Our technologies can not just capture, but also run fingerprints against a database stored locally on a phone. It makes a check against relatively small databases (less than 10,000-100,000 fingers) fast and fully mobile - it requires only phone application instead of expensive mobile biometric terminals.</h6></div>
       
      </div>
      <div className="sub-market-head"><h3>Forensic</h3></div>
      <div className="content-image-container">
        <div className="contents1"><h6>Quality of latents collected from a crime scene is usually far away from ideal: its "dirty", partial, with artifacts. In many cases forensic experts should process it manually.<br/>
        Unlike "traditional" algorithms, neural networks can identify even partial fingerprints automatically. Furthermore, ability of machine algorithms to recognize complicated patterns surpasses human's, so the algorithm can automatically find list of candidates and human can validate it manually.
Our SDK also have detection and segmentation algorithms for processing fingerprint cards and all types of fingerprints on it automatically.</h6></div>
        <div><Image
        src={content5}
        /></div>
      </div>

      {/* about section */}

      <div className="about-section">
        <div className="about-page">
          <h1 className="page__heading">About us</h1>
          <p>Neurodactyl is a technology start-up founded in 2023 by specialists in machine vision and deep learning technologies. We have vast experience on biometric markets and have been working with different biometric technologies starting from 2014, when neural network based facial recognition technologies have completely changed the market. Today we are focused on creating cutting edge algorithms in fingerprint recognition, striving to bring a new life and power of new mobile technologies to the market of old-school biometrics.
<br/>
We aim to make identification powered by biometrics convenient, easy and reliable and help to protect personal and financial data in new digital reality.</p>
          <p>Besides fingerprint recognition our R&D team also doing research in other biometrics like face, voice and iris.</p>
        </div>
      </div>

      {/* contact section */}
      <div className="contact__section">
        <div className="contact__page">
          <h1 className="page__heading">Contact Us</h1>
          <p>Any question about our products or technologies?</p>
          <p>Just text us!</p>
          <div className="form">
            <label htmlFor="email">Email</label><br/>
            <input type="email" id="email" placeholder="Your Email"/><br/>
            <label htmlFor="name">Name</label><br/>
            <input type="name" id="name" placeholder="Your Name"/><br/>
            <label htmlFor="phone">Phone</label><br/>
            <input type="phone" id="phone" placeholder="Your Phone"/><br/>
            <label htmlFor="opinion">Your Question</label><br/>
            <textarea id="opinion" rows={10}></textarea>
          </div>
            <button className="form-btn">Send</button>
        </div>
      </div>
    </main>
    <footer>
       <div className="footer__container">
        <div className="footer__page">
        <Image
        src={nameLogo}
      
        width={200}
        />

        <p>	
All Right Reserved, 2023. Neurodactyl, LLC.<br/>
Address: Georgia, Tbilisi, Nadzaladevi District, Kursebi Street,<br/>
 N15. Identification Number: 400354488<br/>
E-mail us: info@neurodactyl.com</p>
</div>
       </div>
    </footer>
    </div>
  );
}
