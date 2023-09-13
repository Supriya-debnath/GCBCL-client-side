import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FoodSafety.css';
import { Link } from 'react-router-dom';

const FoodSafety= () => {
    return (
        <div>
            <>
            <Container>
            <Row>
                <Col>

                <div className="banner-img">
        <div className="banner-text">
            <h1 className='animate__animated animate__zoomIn'>ReeZaa's-Your Dr.Chef</h1>
            {/* <p className='animate__animated animate__fadeInUp'>
                Lets plan your next even together.
            </p> */}
            <Link to="https://www.facebook.com/people/ReeZaas-Your-Dr-Chef/61550330001567/">
            <button className="btn1 animate__animated animate__fadeInUp">Contact Us</button>
            </Link>
        </div>
    </div>


                  {/* <img style={{height: 460}}  src={'https://foodindustryexecutive.com/wp-content/uploads/2016/09/bigstock-Food-scientists-using-the-micr-84723971.jpg'} className="img-fluid w-100" alt=""/>  */}
                  </Col>
            </Row>

            <Row>
                <Col className='history'>  
                <h3 className='urban'><mark>Food Safety & Security</mark></h3>
               <p>
               The most priceless gift Allah has given is health. If people believe and behave in accordance with
            what the holy Quran says, they will have everything they need to stay healthy. But every religion
            has given comparable advice, not only the Quran. But we are the ones who are incapable of abiding
            by the laws, and the majority of the time, our pathetic justification is a lack of time. According to
            statistics, people are living longer on average. This might be due to the allure of medications and
            the onset of ailments like hypertension, diabetes, and high cholesterol much earlier than in the
            past—possibly during the first 30 years of life cause of poor eating habits and decreased physical
            activity. <br /> <br />

            Some people find it difficult to eat healthily for a variety of reasons, including concern for their
            children, lack of time, or poor comprehension. Some individuals believe that nutritious food is less
            pleasant and may contribute to sluggishness. And some individuals misunderstand what is meant
            by & healthy food.& What does & healthy food & actually mean? According to what I understand, all
            naturally occurring foods are healthy, but it also depends on individual factors like age, physical
            abilities, body type, etc. A growing child, a sumo wrestler, a soccer player, a day laborer, or a field
            worker may all require a lot of food. <br /> <br /> However, if you work a perfect schedule in an air-conditioned
            cubicle or already have certain health problems, you shouldn&t eat the same regular meal. The most
            important thing to remember is that we must have the ability to digest and burn any extra calories
            that result from our daily food intake in addition to our requirement for food for energy.
            Accordingly, I believe that, depending on age restrictions, nutritious food should be simple to
            digest, sufficient in vitamins and calories, low in unsaturated animal fat, and obviously enjoyable.
            GCBCL is involved in the matter of food safety and security and has already done various
            workshops and training programs to promote food safety and security and also to spread
            awareness about these.
               </p>

               <div>
               <h4>Food Safety</h4>
               <p>
               To sustain life and advance good health, it is essential to have access to adequate quantities of safe
            and nourishing food. More than 200 diseases, ranging from cancer to diarrhoea, are brought on by
            unsafe food that contains dangerous germs, viruses, parasites, or chemical chemicals. Malnutrition
            and disease spiral out of control as a result, especially impacting the elderly, the sick, young
            children, and babies. <br /> <br />To help assure food safety and better food systems, effective cooperation
            between governments, producers, and consumers is required.
            Four Steps to Food Safety: Clean, Separate, Cook, Chill.
            GCBCL has already done various workshops and training programs to promote food safety and also
            to spread awareness against unsafe food.
               </p>
               </div>


               <div>
                <h4>Food Security</h4>
                <p>
                When everyone, at all times, has physical and financial access to enough safe and nourishing food to
                suit their dietary needs and food choices for an active and healthy life, that is the definition of food
                security.
                    <br /> <br />
                He four primary aspects of food security are:
                </p>
                <ul>
                    <li>Food availability is concerned with the &quot;supply side&quot; of food security and is influenced by
                    food production levels, stock levels, and net trade.</li>
                    <li> Economic and physical access to food: Food security at the household level is not always
                ensured by a sufficient supply of food at the national or international level. As a result of
                worries about inadequate food access, policies now place a larger emphasis on incomes,
                spending, markets, and prices in order to achieve food security goals.</li>
                    <li>Usage of food: The way the body utilizes the various nutrients in food is known as usage.
                Individuals that receive enough care and feeding will consume enough energy and nutrients
                as a result of proper food preparation, a varied diet, and intra-household food distribution.
                This defines a person&#39;s nutritional condition when coupled with good biological absorption
                of the food they consume.</li>
                    <li>The other three aspects&#39; long-term stability Even if you now consume an acceptable amount
            of food, you are still seen as having food insecurity if you occasionally have insufficient
            access to food, putting your nutritional status at danger. Your level of food security may be
            impacted by unfavorable weather conditions, unstable political environments, or economic
            issues (such as increased food prices and unemployment).</li> <br /> <br />
                    <p>
                    All four dimensions must be met at once for the goals of food security to be achieved.
                To ensure there is enough food for everyone and to draw the government&s attention to the issue,
                GCBCL has already participated in a number of rallies, workshops, and training programs.
                    </p>
                </ul>
               </div>

               <br />

               <div>
                <h3>2) Food Preparation & Hygiene Maintenance :</h3>
               </div>
               <div>
               Aside from paying attention to concerns related to food production, healthy eating also entails
        preparing food to conserve nutrients and avoid disease. When cooking, one should use whole foods,
        sensible serving sizes, healthy fats, and try to maintain the food&#39;s nutritional worth. <br /> <br />
        As a part of GCBCL, @ReeZaa&#39;s has begun offering culinary trainings on the preparation of healthy
        foods, upkeep of cleanliness standards, and food delivery. These trainings have helped developing a
        sense of value chain among the trainees and also a process of brand development has been forming
        by these. 
        @ReeZaa’s is a homemade cooking station for complete healthy meals, lunch and dinner. The main
        motto of @ReeZaa’s is to deliver specific food for conscious people.  <br /> <br />The food would be healthy,
        fresh &amp; tasty. You can order our food in advance through call, mail or Facebook chats. And you can
        order our food through our business partner Food Panda also. Please order our food and enjoy the
        difference and place your valuable comments for our better performances and improvements.
               </div>
                </Col>
            </Row>
            </Container>
        </>
        </div>
    );
};

export default FoodSafety;