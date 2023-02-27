
function tile1details() {

    document.querySelector(".contentbox1").style.display = "block";
    document.querySelector(".contentbox2").style.display = "none";
    document.querySelector(".contentbox3").style.display = "none";
    document.querySelector(".contentbox4").style.display = "none";

    let maindiv = document.createElement("div");
    maindiv.style.cssText = "box-sizing: border-box;display:flex;gap:30px;background-color:black; font-size:55px;color:white;width:76%;margin:auto;margin-top:50px";

    let div2 = document.createElement("div");
    div2.style.cssText = "padding:10px;";

    let img1 = document.createElement("img");
    img1.src="./Images/AA17WRTT.jfif";
    img1.style.cssText = "float:left;width:30%;padding:10px;";

    let h3 = document.createElement("h6");
    h3.innerText = "Oscars 2023: Hosts, nominations and more; a look at interesting details about 95th Academy Awards ";
    h3.style.cssText = "";

    let p1 = document.createElement("p");
    p1.innerText = "The most prestigious 95th Academy Awards will be held on March 12 in Los Angeles. The award season has officially started and viewers are excited for the same. Fans have started guessing which film, actor, actors, and more will be awarded this year. Ahead of Oscars 2023, here is a look at who will host the award ceremony, where to stream, nominations and more.";
    p1.style.cssText = "font-size:20px;padding-top:20px;";

    let p2 = document.createElement("p");
    p2.innerText = "When are the Oscars?";
    p2.style.cssText = "font-size:30px; padding-top:20px;";

    let p3 = document.createElement("p");
    p3.innerText = "The Oscars 2023 award ceremony will be held on Sunday, March 12 at Dolby Theatre in Los Angeles. The ceremony will start at 8 pm and will go live on ABC.";
    p3.style.cssText = "font-size:20px;padding-top:20px;";

    let p4 = document.createElement("p");
    p4.innerText = "Where to stream the Oscars?";
    p4.style.cssText = "font-size:30px; padding-top:20px;";

    let p5 = document.createElement("p");
    p5.innerText = "The Oscars 2023 award ceremony will be held on Sunday, March 12 at Dolby Theatre in Los Angeles. The ceremony will start at 8 pm and will go live on ABC. Jimmy Kimmel will reportedly be hosting the award ceremony for the third time since 2018. Last year, Regina Hall, Amy Schumer and Wanda Sykes hosted the ceremony.";
    p5.style.cssText = "font-size:20px;padding-top:20px;";

    let p6 = document.createElement("p");
    p6.innerText = "Best Picture nominations at Oscars 2023?";
    p6.style.cssText = "font-size:30px; padding-top:20px;";

    let p7 = document.createElement("p");
    p7.innerText = "All Quiet on the Western Front, Avatar: The Way of Water, The Banshees of Inisherin, Elvis, Everything Everywhere All at Once, The Fabelmans, T r, Top Gun: Maverick, Triangle of Sadness, Women Talking and more; list of nominations of best pictures at the Oscars 2023.";
    p7.style.cssText = "font-size:20px;padding-top:20px;";

    let p8 = document.createElement("p");
    p8.innerText = "Who will perform at Oscars 2023?";
    p8.style.cssText = "font-size:30px; padding-top:20px;";

    let p9 = document.createElement("p");
    p9.innerText = "Reportedly, singer Rihanna will perform at Oscars 2023 and will perform 'Lift Me Up' from Black Panther: Wakanda Forever which is nominated for Best Original Song. Sofia Carson will also perform 'Applause' from Tell It Like A Woman.";
    p9.style.cssText = "font-size:20px;padding-top:20px;";

    div2.append(img1,h3,p1,p2,p3,p4,p5,p6,p7,p8,p9);

    maindiv.append(div2);

    document.querySelector(".contentbox1").append(maindiv);

}

function tile2details() {

    document.querySelector(".contentbox1").style.display = "none";
    document.querySelector(".contentbox2").style.display = "block";
    document.querySelector(".contentbox3").style.display = "none";
    document.querySelector(".contentbox4").style.display = "none";

    let maindiv = document.createElement("div");
    maindiv.style.cssText = "box-sizing: border-box;display:flex;gap:30px;background-color:black; font-size:55px;color:white;width:76%;margin:auto;margin-top:50px";

    let div2 = document.createElement("div");
    div2.style.cssText = "padding:10px;";

    let img1 = document.createElement("img");
    img1.src="./Images/card2img.png";
    img1.style.cssText = "float:left;width:30%;padding:10px;";

    let h3 = document.createElement("h6");
    h3.innerText = "International Space Station Captures Breathtaking View Of Bengaluru From 400 km Above Earth.";
    h3.style.cssText = "";

    let p1 = document.createElement("p");
    p1.innerText = "Elon Musk's rocket company SpaceX was set to launch early on Monday the International Space Station's next long-duration team into orbit, with an astronaut from the United Arab Emirates and a Russian cosmonaut joining two NASA crewmates for the flight.";
    p1.style.cssText = "font-size:20px;padding-top:20px;";

    let p2 = document.createElement("p");
    p2.innerText = "The Crew 6 mission also is notable for its inclusion of UAE astronaut Sultan Alneyadi, 41, only the second person from his country to fly to space and the first to launch from U.S. soil as part of a long-duration space station team. UAE's first-ever astronaut launched to orbit in 2019 aboard a Russian spacecraft.";
    p2.style.cssText = "font-size:20px;padding-top:20px;";

    let p3 = document.createElement("p");
    p3.innerText = "The SpaceX launch vehicle, consisting of a Falcon 9 rocket topped with an autonomously operated Crew Dragon capsule called Endeavour, was set for liftoff at 1:45 a.m. EST (0645 GMT) from NASA's Kennedy Space Center in Cape Canaveral, Florida.";
    p3.style.cssText = "font-size:20px;padding-top:20px;";

    let p5 = document.createElement("p");
    p5.innerText = "The four-member crew should reach the International Space Station (ISS) about 25 hours later, on Tuesday morning, to begin a six-month mission in microgravity aboard the orbiting laboratory some 250 miles (420 km) above Earth.";
    p5.style.cssText = "font-size:20px;padding-top:20px;";

    let p7 = document.createElement("p");
    p7.innerText = "All Quiet on the Western Front, Avatar: The Way of Water, The Banshees of Inisherin, Elvis, Everything Everywhere All at Once, The Fabelmans, T r, Top Gun: Maverick, Triangle of Sadness, Women Talking and more; list of nominations of best pictures at the Oscars 2023.";
    p7.style.cssText = "font-size:20px;padding-top:20px;";

    let p9 = document.createElement("p");
    p9.innerText = "NASA said the mission's launch readiness review was completed on Saturday, and that the flight was given a to proceed to liftoff as planned. All systems and weather are looking good for launch, Musk wrote on Twitter on Sunday.";
    p9.style.cssText = "font-size:20px;padding-top:20px;";

    div2.append(img1,h3,p1,p2,p3,p5,p7,p9);

    maindiv.append(div2);

    document.querySelector(".contentbox2").append(maindiv);

}

function tile3details() {

    document.querySelector(".contentbox1").style.display = "none";
    document.querySelector(".contentbox2").style.display = "none";
    document.querySelector(".contentbox3").style.display = "block";
    document.querySelector(".contentbox4").style.display = "none";
    
    let maindiv = document.createElement("div");
    maindiv.style.cssText = "box-sizing: border-box;display:flex;gap:30px;background-color:black; font-size:55px;color:white;width:76%;margin:auto;margin-top:50px";

    let div2 = document.createElement("div");
    div2.style.cssText = "padding:10px;";

    let img1 = document.createElement("img");
    img1.src="./Images/card3img.png";
    img1.style.cssText = "float:left;width:30%;padding:10px;";

    let h3 = document.createElement("h6");
    h3.innerText = "Gaganyaan Mission: ISRO gets its first stimulated crew module to prepare for its crewed mission-Details inside ";
    h3.style.cssText = "";

    let p1 = document.createElement("p");
    p1.innerText = "In another important update of India’s ambitious Gagayaan project pegged for 2024, the Vikram Sarabhai Space Centre (VSSC) received the Simulated Crew Module (SCM) Structure Assembly for the Gaganyaan project on behalf of the Indian Space Research Organization (ISRO). The SCM is a crew module that simulates the interface between various systems, such as pyros and parachute";
    p1.style.cssText = "font-size:20px;padding-top:20px;";

    let p3 = document.createElement("p");
    p3.innerText = "Today, ISRO received Simulated Crew Module (SCM) Structure Assembly for the Gaganyaan project” said a tweet by the Indian Space Research Agency. The SCM is developed by VSSC and realized by Manjira Machine Builders Pvt Ltd., Hyderabad.";
    p3.style.cssText = "font-size:20px;padding-top:20px;";

    let p5 = document.createElement("p");
    p5.innerText = "The external mold line and shape of the module have been replicated as per the requirements of the crewed mission. This will be India’s first crwed space mission. the pressurised model will accomodate astronauts inside the spacecraft.";
    p5.style.cssText = "font-size:20px;padding-top:20px;";

    let p7 = document.createElement("p");
    p7.innerText = "Gaganyaan mission: ISRO, Indian Navy join hands to begin recovery trials According to the agency, the crew module will be utilized for various other scientific and technical missions. One of these will be test vehicle mission, where the crew escape system will be validated along with the validation of various subsystems of the crew module.";
    p7.style.cssText = "font-size:20px;padding-top:20px;";

    let p9 = document.createElement("p");
    p9.innerText = "Jitendra Singh, the Minister of Science and Technology had earlier informed that ISRO will carry out two uncrewed missions for the Gaganyaan program this year. The second mission, which will be carried out with a female robot known as “VyomMitra,” that will gather data related to spaceflight of humans. The mission will be completed Indian sbeing sent to space. ";
    p9.style.cssText = "font-size:20px;padding-top:20px;";

    div2.append(img1,h3,p1,p3,p5,p7,p9);

    maindiv.append(div2);

    document.querySelector(".contentbox3").append(maindiv);

}

function tile4details() {
    
    document.querySelector(".contentbox1").style.display = "none";
    document.querySelector(".contentbox2").style.display = "none";
    document.querySelector(".contentbox3").style.display = "none";
    document.querySelector(".contentbox4").style.display = "block";

    let maindiv = document.createElement("div");
    maindiv.style.cssText = "box-sizing: border-box;display:flex;gap:30px;background-color:black; font-size:55px;color:white;width:76%;margin:auto;margin-top:50px";

    let div2 = document.createElement("div");
    div2.style.cssText = "padding:10px;";

    let img1 = document.createElement("img");
    img1.src="./Images/card4.jfif";
    img1.style.cssText = "float:left;width:30%;padding:10px;";

    let h3 = document.createElement("h6");
    h3.innerText = "Adani-Hindenburg issue: How Gautam Adani is planning to win back investors.";
    h3.style.cssText = "";

    let p1 = document.createElement("p");
    p1.innerText = "The Adani-Hindenburg issue has not only affected the company but it has also led to loss of investors’ confidence in the Adani Group. In order to reassure investors, the Gautam Adani-led conglomerate is planning to conduct a fixed-income roadshow next week, reported Reuters. The move is aimed at bringing back investors and restoring their confidence in the aftermath of a US short-seller report. ";
    p1.style.cssText = "font-size:20px;padding-top:20px;";

    let p3 = document.createElement("p");
    p3.innerText = "A roadshow is said to happen in Singapore on February 27 and it will see participation from Adani Group Chief Financial Officer Jugeshinder Singh. Post the roadshow, similar confidence-building meetings will be held in Hong Kong on February 28 and March 1. ";
    p3.style.cssText = "font-size:20px;padding-top:20px;";

    let p5 = document.createElement("p");
    p5.innerText = "The move comes after Hindenburg Research, a US-based short seller, accused the Adani Group of stock manipulation and fraud through a wave of shell firms. The report, published on January 24, has caused massive mayhem in Adani stocks as some of the companies have lost nearly 60-70 per cent in market capitalisation. Seven listed firms led by Gautam Adani have lost nearly $140 billion in market value. ";
    p5.style.cssText = "font-size:20px;padding-top:20px;";

    let p7 = document.createElement("p");
    p7.innerText = "According to Adani Group, of the 88 questions raised by Hindenburg, 65 were about listed firms, six were about media reporting, and the rest were about family offices. The group CEO recently claimed that the Adani group has already provided disclosures on all 65 queries asked by Hindenburg on January 24. ";
    p7.style.cssText = "font-size:20px;padding-top:20px;";

    let p9 = document.createElement("p");
    p9.innerText = "This is not the first time when Adani is doing something to win the confidence of investors. Earlier, Adani Group had said that the company has strong cash flows and its business plans were fully funded. In an effort to allay investor concerns, Adani already spoke with bondholders earlier this month where group executives discussed plans to refinance some of the company's units as well as to fully prepay all loans secured by shares.";
    p9.style.cssText = "font-size:20px;padding-top:20px;";

    div2.append(img1,h3,p1,p3,p5,p7,p9);

    maindiv.append(div2);

    document.querySelector(".contentbox4").append(maindiv);

}

function dbclick(){
    document.querySelector(".contentbox1").style.display = "none";
    document.querySelector(".contentbox2").style.display = "none";
    document.querySelector(".contentbox3").style.display = "none";
    document.querySelector(".contentbox4").style.display = "none";
}
