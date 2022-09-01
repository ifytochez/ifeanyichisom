import React from 'react'
import "./CashietCaseStudy.css";
import Frame from "./Frame2.png";
import Vector from "./Vector.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import pic4 from "./4.png";
import pic5 from "./5.png";
import pic6 from "./6.png";
import pic7 from "./7.png";
import pic8 from "./8.png";
import pic9 from "./9.png";
import pic10 from "./10.png";
import pic11 from "./11.png";
import pic12 from "./12.png";
import pic14 from "./14.png";
import pic15 from "./15.png";
import pic16 from "./16.png";
import pic17 from "./17.png";
import pic18 from "./18.png";
import pic19 from "./19.png";
import pic20 from "./20.png";
import pic21 from "./21.png";
import pic22 from "./22.png";

function CashietCaseStudy() {
  return (
    <div className='cashietcasestudy'>
      <div className="casestudyhero">
        <img src={Frame} alt="macbook" />
      </div>

      <div className="casestudycontainer">
      <div className="borderless cashietttt">
          <h2>Cashiet: </h2>
          <p>
          Cashiet is a marketplace that let Nigerians buy products and pay in installments at a zero interest.
          </p>

          <div className="cashiet1">
            <div>
              <h3 className="borderless1h3 borderless1h4">Role</h3>
              <p>Plan and run design research</p>
              <p>UI/UX Redesign</p>
              <p>Interaction Designer</p>
              <p>Interactive prototype</p>
              <p>Introduce a Buy now pay Later feature</p>
            </div>

            <div>
              <h3 className="borderless1h3 borderless1h4">Tools Used</h3>
              <p>Pencil & paper</p>
              <p>Miro</p>
              <p>Figma</p>
              <p>Protopie</p>
            </div>

            <div>
              <h3 className="borderless1h3 borderless1h4">Duration</h3>
              <p>6 Weeks</p>
            </div>

            <div>
              <h3 className="borderless1h3 borderless1h4">Team</h3>
              <p>I worked in a team of two designers</p>
            </div>
          </div>
        </div>

        <div className="borderless">
          <h2>Product Overview</h2>
          <p> Cashiet is an e-commerce company that focuses on home appliances, customer electronics, cars, and land. </p><br></br> <br></br>
          <p> Why Buy now, pay later feature? Installment payments give consumers options and convenience, which increases
               trust between retailers and consumers, leading to “incremental sales, higher average purchase sizes, and 
               higher frequency of purchase (reference: the Ascent article) 
         </p><br></br> <br></br>
          <p> Buy now, pay later payment plans are attractive to younger shoppers, like the much-desired Gen Z and
               millennial consumer, which aligns with the users and target audience of Cashiet
        </p>
        </div>

        <div className="borderless">
          <h2>The Challenge</h2>
          <p> The website wasn’t getting enough engagement when compared to the number of traffic it had. 
              The actual focus of this project was to convert traffic to sales.
         </p>
        </div>

        <div className="borderless2">
          <img src={Vector} alt="macbook" />
          <div className="centered">
            {" "}
            <p>
              How might we improve user experience of Cashiet, converting traffic to sales, and introducing a “Buy Now, Pay Later” Feature?
            </p>
          </div>
        </div>

        <div className="borderless">
          <h2>The Goal (Success Metrics) </h2>
          
          <ul>
                  <li>To design a user-friendly, aesthetically pleasing, and intuitive interface</li>
                  <li>Increase user shopping experience</li>
                  <li>Reduce cart abandonment</li>
                  <li>Convert website traffic to sales</li>
                  <li>To design an accessible, desirable and useable product</li>
                </ul>
        </div>


        <div className="borderless">
          <h2>Design Process</h2>
          <p>For this project, I used the double diamond design process to develop a user-centered solution.</p>
        </div>

        <div className="borderless">
          <h2>Discover ( Research)</h2>
          <p> As an active online shopper, I was eager to jump in and start correcting all the issues I faced
               while shopping, but I took a step back and remembered the golden rule of UX design: you are not 
               the user. Thus, I embarked on research to understand the users, how they interact Cashiet, their 
               pains and if they would be interested in “buy now, pay later.”
         </p> <br></br> <br></br>
          <p>To understand the users, I created a survey form and shared it with friends and colleagues alongside 
              the website URL. My client also shared the survey form with some of his existing customers.
         </p> <br></br> <br></br>
          <p> My client’s biggest issue was less engagement on the website despite the expensive ads run and 
              massive traffic. Thus, to understand how visitors interact with the website, I ran a google analysis 
              and used the help Hotjar.
        </p> <br></br> <br></br>
        <p> For the “buy now, pay later” feature, I conducted both quantitative research and interviews.
             I had interviews with four existing customers and four online shoppers who have experience 
             with paying in installments.
        </p>
        </div>

        <div className="borderless5">
          <div className="borderless5a">
            <img src={pic6} alt="" />
            <img src={pic3} className="pic" alt="" />
          </div>
        </div>

        <div className="borderless5">
          <div className="borderless5a">
            <img src={pic5} alt="" />
            <img src={pic4} className="pic" alt="" />
          </div>
        </div>


        <div className="borderless">
          <h2>Key findings from the research </h2>
          
          <ul>
                  <li>Most users did not make it past the first page</li>
                  <li>The average time spent on the website was 1 min and on the landing page</li>
                  <li>Lack of trust because the website lacks enough products</li>
                  <li>Poor User Interface design.</li>
                  <li>Installment paying is a welcome Idea</li>
                  <li>Installment paying would yield more loyal customers</li>
                  <li>Most users are between the age of 21–39</li>
                </ul>
        </div>


        <div className="borderless">
          <h2>Competitive analysis</h2>

          <p> Competitive analysis helps you learn from businesses competing for your potential customers. 
              It is key to defining a competitive edge that creates sustainable revenue. With competitive
              feature comparison, you can see how your client compares to competitors and gaps in what is
              currently being offered. I carried out an analysis that carefully compares different eCommerce 
              applications similar to what I intend to design and equally analyzed the business features and
             requirements intended for Cashiet. Some of the apps I looked into include;
        </p>
          
          <ul>
                  <li> Jumia</li>
                  <li>Konga</li>
                  
         </ul> <br></br><br></br>

         <p>Although these platforms share similarities in terms of functionality, they still differ in a lot 
             of ways. One significant difference is that they do not offer installment paying for goods. So I 
             looked into Klarna and Afterpay. I learned from their user journey that the “Pay Later” feature 
             was best introduced at the checkout.
        </p>
        </div>

        <div className="borderless">
          <h2>Define</h2>

          <p> The insights obtained from the research helped me understand the users, their pain points, and 
              their needs. At this stage, I developed ideas and possible features that would solve the problems.
               I created a user persona to avoid self-referential design, generic user design and to solve problems
             experienced by users.
        </p><br></br><br></br>

         <p>I and my client created a user flow to have a clear picture of how we want users to interact with Cashiet,
              when to introduce the pay later feature, and how it would work.
        </p>


        <div className="borderless7b picture">
            <img src={pic2} alt="" />
        </div>
        

        </div>

        <div className="borderless">
          <h2>Develop</h2>

          <p> I strategically started to solve identified problems after analyzing and synthesizing the 
              data from the research, understanding users’ pain points, creating user persona, and 
              brainstorming on the best solutions.
        </p><br></br><br></br>

         <p>The development stage started with the user flow. I sat with my client, and we created a user 
             flow to have a clear picture of how we want users to interact with Cashiet, when to introduce
             the pay later feature and how it would work.
        </p>

        <h3>Wireframe</h3>

        <p>I created a low wireframe where I designed some features that would solve the identified issues. 
            I included clear and concise task navigation and gave it an organized look. I tested the design 
            with a senior colleague and iterated on some of my design decision.
        </p><br></br><br></br>

        <div className="borderless7b pichure">
            <img src={pic7} alt="" />
        </div>


        <h2>Let’s look at the problems discovered and their solutions</h2>
        <p>Here I would present to you the website design before and after redesigning it.</p><br></br><br></br><br></br>

        <h2>Hero Section</h2>

        <div className="borderless7b picture">
            <img src={pic8} alt="" />
        </div>

        </div>

        <div className="borderless">
          <h3>Problem: </h3>
          
          <ul>
                <li>The hero section does not display useful information to the users</li>
                <li>The copy “Express to luxury” doesn’t sell the business and it’s not convincing enough to users</li>
                <li>There is no image of products affirming to users that they are on the right website</li>
                <li>The icons are not appropriately aligned with the rest of the section, making it visually unappealing</li>
         </ul>

         <div className="borderless7b picture">
            <img src={pic9} alt="" />
        </div>

         <h3>Solution:</h3>
          
          <ul>
                <li>Added a search bar in the top nav for users to quickly search for items</li>
                <li>Changed the copy to be more compelling and convincing to users against inaction (reference: Tidio’s e-commerce case study article)</li>
                <li>Changed the banner to a product banner to set visitors in the right shopping mood and inspire them to take action 
                    (reference: Anna Ivuškāne’article Hero Banners to the Rescue: Drawing Customers Closer to Your Brand)
                </li>
                <li>Icons were changed to more visually appealing icons and properly aligned</li>
         </ul>
        </div>

        <div className="borderless">
        <h2>Landing page</h2>

        <div className="borderless7b picture">
            <img src={pic10} alt="" />
        </div>

          <h3>Problem: </h3>
          
          <ul>
                <li>All products are carousel which makes it difficult for users to locate what they want</li>
                <li>Visually, the interface doesn’t look great, starting from the hierarchy, contents, structure, etc.</li>
                <li>Adding different categories of products unrelated to the same page can be confusing to users.</li>
                <li>For an e-commerce website, this value proposition is too worded and takes the space for important information</li>
         </ul>

         <div className="borderless7b picture">
            <img src={pic11} alt="" />
        </div>

         <h3>Solution:</h3>
          
          <ul>
                <li>Changed the structure of the page</li>
                <li>Divided products into different sections and categories so users can easily find items.</li>
                <li>Moved the car and land category to a new page but advertised them on the landing page using banners to avoid confusion.
                </li>
                <li>Why choose us section was moved to the menu page</li>
         </ul>
        </div>

        <div className="borderless">
        <h2>Product page</h2>

        <div className="borderless7b picture">
            <img src={pic12} alt="" />
        </div>

          <h3>Problem: </h3>
          
          <ul>
                <li>Poor text hierarchy; without a clear hierarchy, the text is much harder to scan and generally read.</li>
                <li>Poor button hierarchy slows down decision-making and action, leaving users confused about what action to take. The primary button has a darker colour.</li>
                <li>Poor presentation on product description and too much wasted white space</li>
         </ul>

         <div className="borderless7b picture">
            <img src={pic14} alt="" />
        </div>

         <h3>Solution:</h3>
          
          <ul>
                <li>Changed the structure of the page for easy scanning of the page</li>
                <li>Introduced button hierarchy to highlight the primary CTA.</li>
                <li>Added the Pay later button as a secondary CTA. Placed it close to the “buy now” button to make it very visible to the users.</li>
         </ul>
        </div>

        <div className="borderless">
          <h2>Pay later feature</h2>
          <p>After users indicate interest in the pay later feature by clicking on the pay later button on the product page, they are notified about 
              a required initial deposit. They are allowed to choose a payment plan. 
              Telling users about the initial payment at this point is to avoid putting them through the stress of getting to the checkout to make a decision.
         </p>

         <div className="borderless7b picture">
            <img src={pic15} alt="" />
        </div>

        </div>

        <div className="borderless">
          <h2>Shopping Cart</h2>
          <p>The cart page shows all the details of the product about to be purchased and the payment breakdown. Users can delete or add more products on the cart page.</p>

          <div className="borderless7b picture">
            <img src={pic16} alt="" />
        </div>

        </div>

        <div className="borderless">
          <h2>Sign up/Login Pages</h2>

          <div className="borderless7b picture">
            <img src={pic17} alt="" />
        </div>
        </div>

        <div className="borderless">
          <h2>Check out Page(Pay later)</h2>
          <p>The checkout session has three stages, filling in shipping details, order confirmation, and payment. The order confirmation stage 
              allows users to change payment methods, payment duration, and add notes.
        </p>

        <div className="borderless7b picture">
            <img src={pic18} alt="" />
        </div>

        </div>

        <div className="borderless">
          <h2>Mono Api (Pay later)</h2>
          <p>Mono is a fin-tech company that helps businesses access financial accounts for statements, transactions, and identity. I recommended Mono to my client because
               Mono can verify that a user has an active bank account, collect payment directly from the website, and automate withdraws on due dates.
        </p>

        <div className="borderless7b picture">
            <img src={pic19} alt="" />
        </div>

        </div>

        <div className="borderless">
          <h2>Check out Page(BuyNow)</h2>
          <p>The checkout session for users who want to pay immediately is slightly different from that of users who want to pay in installments. 
            Here users can pay with their cards and are not mandated to link their account to Mono.
        </p>

        <div className="borderless7b picture">
            <img src={pic20} alt="" />
        </div>

        </div>

        <div className="borderless">
          <h2>Payment Successful Page</h2>
          <p>The payment success page has a security batch that reminds the customers that their payments are 100% secure and they have 
              completed steps to make a purchase. It also has a clear CTA to further encourage customers to buy more products.
        </p>

        <div className="borderless7b picture">
            <img src={pic21} alt="" />
        </div>

        </div>

        <div className="borderless">
          <h2>User Account Pages</h2>
          <p>User accounts can increase retention, help users transition between devices or platforms, and provide opportunities
               to increase engagement and investment from users by giving them a sense of identity and personal storage space. 
               It encourages users to not only return to the site but to spend more time browsing items. They also create opportunities
               for companies to collect contact details and other information from users that can be used for personalization, promote
               deals and generate repeat customs.
        </p>

        <div className="borderless7b picture">
            <img src={pic22} alt="" />
        </div>
        </div>

        <div className="borderless">
          <h2>Deliver</h2>
          <p>After designing the solution, this stage started with useability testing. It involves testing out solutions at a small scale,
               rejecting those that will not work, and improving those that will. I conducted group useability testing with three existing
                clients and 2 of my friends, and I noted their body language as they completed a task. I also noted questions they asked 
                why trying to complete a task. After testing came iteration. A lot of iteration were done to achieve the final version.
        </p><br></br><br></br>

        <p>The final design was handed over to the developers using Zeplin. The product is currently with the development team.</p>
        </div>


        <div className="borderless">
          <h3>Lesson</h3>
          
          <ul>
                <li>I learned a lot about the e-commerce sector</li>
                <li>I learned and practiced UX writing and copy. I learned a good copy can turn a business around</li>
                <li>This was my first time using Zeplin as a design hand-over too</li>
                <li>Introducing a new feature has to be done with In-depth analysis and research so as to introduce a problem-solving feature.</li>
                <li>Advert only does not drive sales especially when the website has a poor UX</li>
         </ul>

        </div>
        
      </div>
    </div>
  )
}

export default CashietCaseStudy