// Set the date we're counting down to
var rok_kraj = new Date("Jan 21, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var datum = new Date().getTime();
    
  // Find the distance between now and the count down date
  var odbrojavanje = rok_kraj - datum;
    
  // Time calculations for days, hours, minutes and seconds
  var dani = Math.floor(odbrojavanje / (1000 * 60 * 60 * 24));
  var sati = Math.floor((odbrojavanje % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((odbrojavanje % (1000 * 60 * 60)) / (1000 * 60));
  var sekunde = Math.floor((odbrojavanje % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = dani + "d " + sati + "h "
  + minute + "m " + sekunde + "s ";
    
  // If the count down is over, write some text 
  if (odbrojavanje < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var ul_Ispis=["Home","Destination","Packages", "Special offer", "Blog","Subscription","About author"]
var href_ispis=["#home","#destination","#packages","offer","#blog","#subs","https://katarinaict.github.io/portfolio/"]
var ulList=document.getElementById("ulList")
for(var i=0;i<ul_Ispis.length;i++){
    ulList.innerHTML+=`<li class="nav-item active">
    <a class="nav-link" href="${href_ispis[i]}">${ul_Ispis[i]} <span class="sr-only">(current)</span></a>
    </li>`
}

var src=["img/italija.jpg","img/engleska.jpg","img/francuska.jpg"]
var alt=["italija","engleska","francuska"]
var h4=["Italy","England","France"]
var h5=["499$","1499$","1199$"]
var p=["5 Days 6 Nights","5 Star Accomodation","Transportation","Food Facilities"]
var card_row1=document.getElementById("card_row1")
var podaci=""
for(var i=0;i<src.length;i++){
    podaci+=`<div class="col-lg-4 col-sm-12 margin">
    <div class="card" style="width: 18rem;">
        <img src="${src[i]}" class="card-img-top" alt="${alt[i]}">
        <div class="card-body card-body1">
            <div class="mesto">
          <h4 class="card-text">${h4[i]}</h4>
          </div>
          <div class="cena">
          <h5>${h5[i]}</h5></hr>
          </div><div class="cleaner"></div>
        </div>
        <div class="card-body card-body2">`
        for(var j=0;j<p.length;j++){
            podaci+=`<p class="card-text card-text1">> ${p[j]}</p>`
        }
        podaci+=`<a class="btn btn-info btn-sm" href="#ponuda" role="button">Book now</a> 
        </div>
</div>`

}
card_row1.innerHTML=podaci

var src2=["img/indija.jpg","img/spanija.jpg","img/tajland.jpg"]
var alt2=["indija","spanija","tajland"]
var h42=["India","Spain","Thailand"]
var h52=["799$","099$","799$"]
var p2=["5 Days 6 Nights","5 Star Accomodation","Transportation","Food Facilities"]
var card_row2=document.getElementById("card2")
var podaci2=""
for(var i=0;i<src2.length;i++){
    podaci2+=`<div class="col-lg-4 col-sm-12 margin">
    <div class="card" style="width: 18rem;">
        <img src="${src2[i]}" class="card-img-top" alt="${alt2[i]}">
        <div class="card-body card-body1">
            <div class="mesto">
          <h4 class="card-text">${h4[i]}</h4>
          </div>
          <div class="cena">
          <h5>${h52[i]}</h5></hr>
          </div><div class="cleaner"></div>
        </div>
        <div class="card-body card-body2">`
        for(var j=0;j<p.length;j++){
            podaci2+=`<p class="card-text card-text1">> ${p2[j]}</p>`
        }
        podaci2+=`<a href="#" class="btn btn-info">Book now</a> </div>
        </div>
</div>`
}
card_row1.innerHTML=podaci2

var p3=["5 Days 6 Nights","5 Star Accomodation","Transportation","Food Facilities"]
var ponuda1=document.getElementById("ponuda1")
for(var i=0;i<p3.length;i++){
    ponuda1.innerHTML+=`<p>> ${p3[i]}</p>`
}

var src=["img/blog1.jpg","img/blog2.jpg","img/blog3.jpg"]
var alt=["oustinja","indija","ajkule"]
var h5=["Camel and horse ride","Sail on the River Ganges","Meet a shark in its natural habitat"]
var p=["Camels and horses have long been valued in the region. For a truly authentic desert experience, nothing beats a camel ride over the soft dunes, while horse lovers can head to the Emiri stables within Souq Waqif, the Racing and Equestrian Club, or Al Shaqab, the country’s pre-eminent equestrian centre, to see sleek Arabian horses. For a uniquely local experience, head to the Al Shahaniya camel racetrack, where robot jockeys guide camels to victory.","There’re plenty of things to do India, but only a few can compare to sailing on the Ganges. The river is considered a direct channel to the other world for the 966 million Hindus. The banks of the river in Varanasi also attract hundreds of pilgrims, making it one of the holiest places on Earth. Several rituals and prayers are performed when the sun rises and sets. Furthermore, you can even spot some Ganges Dolphins, accompanied by a sound of a jackal or celebration.","Being underwater with a great white shark (even if you are in a strengthened aluminium cage) is an adventure to tell your friends about. Calypso Star Charters and Adventure Bay Charters run one-day great white shark tours to Neptune Island, 70 kilometres (43 miles) off Port Lincoln, a 50-minute flight from Adelaide. No scuba experience is necessary (air is fed into the cage via a hose)."]
var news=document.getElementById("news")
for(var i=0;i<alt.length;i++){
    news.innerHTML+=`<div class="col-lg-4  col-sm-12 margin">
    <div class="card" style="width: 18rem;">
        <div class="card-body card-naslov">
            <h4>Trending News </h4>
        </div>
        <img src="${src[i]}" class="card-img-top card-slika" alt="${alt[i]}">
        <div class="card-body card-comm">
            <h5>${h5[i]}</h5>
          <p class="card-text ">${p[i]} </p>
        </div>
      </div>
</div> `
}


var src=["img/komentar1.jpg","img/komentari2.jpg","img/komentari3.jpg"]
var alt=["Angie","Lori","Rosy"]
var p=["The vacation was wonderful and I can not say thank you enough!! It was the Perfect resort for us. They did have all of our rooms on the 6th floor and they were close together. Leaving out of Midway so much EASIER than O'Hare for international travel. The flight was good, the resort incredible! We can not wait to plan our next visit with you. Thank you again!!!","We can’t thank you enough. We had such a fantastic honeymoon at The Kahala! Everything was wonderful. What a beautiful spot, gorgeous beach, lovely ambiance, great customer service.... delicious food. Thank you very much. Thank you for the chocolate covered macadamia nuts and champagne. We enjoyed them on our balcony! We also had a dolphin encounter which we highly recommend. ","We just returned from our Baltic cruise! Thank you so much for the excellent St Petersburg tour- we had a great experience and learned so much about imperial Russia. In fact, I've become inspired to read 'War and Peace' or at least watch the Netflix version:) The hotel in Copenhagen was a great location and everything went smoothly!Thanks again and best wishes!"]
var p2=["Angie V. Yorkville, IL","Lori and Jason G.","Rosy"]
var com=document.getElementById("com")
for(var i=0;i<src.length;i++){
    com.innerHTML+=`<div class="col-lg-3 col-sm-12 card-com">
    <div class="image">
        <img src="${src[i]}" alt="${alt[i]}">
    </div>
    <i class="fas fa-quote-left"></i>
    <p>${p[i]}</p>
    <p><b>${p2[i]}</b></p>
</div>`
}