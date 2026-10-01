/* WBExamPDF — script.js
   FINAL VERSION
   Original functionality + final fixes
*/

/* =========================================================
   ORIGINAL DATA
========================================================= */

var I={
  c1:"images/card1.jpg",
  c2:"images/card2.jpg",
  c3:"images/card3.jpg",
  c4:"images/card4.jpg"
},
F=[
  "images/review1.jpg",
  "images/review2.jpg",
  "images/review3.jpg",
  "images/review4.jpg"
];

var T={
  Live:"#e0202a",
  Popular:"#f59a23",
  New:"#1fa64a",
  Soon:"#1a55d1",
  Trending:"#e0202a"
};

var L={
  Live:"Live",
  "Most Popular":"Most Popular",
  New:"New",
  "Offer Ending Soon":"Offer Ending Soon",
  Trending:"Trending"
};

var C1=[
  ["Live","c1","WBPSC 2025","(Prelims + Mains)","বাংলা, ইতিহাস, ভূগোল, সংবিধান, অর্থনীতি, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],
  ["Most Popular","c2","RRB NTPC 2025","(Graduate & Under Graduate)","পাটিগণিত, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],
  ["New","c3","SSC GD 2025","(Constable)","বাংলা, পাটিগণিত, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],
  ["Offer Ending Soon","c4","West Bengal Police","(Constable & SI)","বাংলা, অঙ্ক, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],
  ["Trending","c2","Railway Group D 2025","(Level 1)","পাটিগণিত, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],
  ["Trending","c1","WBPSC 2025","(Prelims + Mains)","ইতিহাস, ভূগোল, সংবিধান, অর্থনীতি, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"]
];

var C2=[
  ["Trending","c1","WBPSC 2025","(প্রিলিমস + প্রধানস)",""],
  ["Most Popular","c3","SSC CHSL 2025","(Tier 1 + Tier 2)",""],
  ["New","c2","Railway RRB NTPC","(CBT 1 + CBT 2)",""],
  ["Offer Ending Soon","c4","WB Police Constable","(Prelims + Mains)",""]
];

var col={
  Live:"#e0202a",
  "Most Popular":"#f59a23",
  New:"#1fa64a",
  "Offer Ending Soon":"#1a55d1",
  Trending:"#e0202a"
};


/* =========================================================
   BASIC CARD
========================================================= */

function card(d){

  return '<div class="card">'+
    '<div class="im">'+
      '<img src="'+I[d[1]]+'" alt="">'+
      '<span class="tag" style="background:'+col[d[0]]+'">'+
        d[0]+
      '</span>'+
    '</div>'+

    '<h3>'+
      d[2]+
      '<small>'+d[3]+'</small>'+
    '</h3>'+

    (d[4]
      ?'<p>'+d[4]+'</p>'
      :'<p></p>'
    )+

    '<div class="pr">'+
      '<div class="a"><span>★ 100%</span>₹1000</div>'+
      '<div class="b"><span>★ 50%</span>₹500</div>'+
      '<div class="c"><span>★ 20%</span>₹100</div>'+
    '</div>'+

    '<a class="buy">BUY NOW →</a>'+

    '<div class="ft">'+
      '<div data-link="sample" data-exam="'+d[2]+'">'+
        '<svg class="i"><use href="#e"/></svg>'+
        '<span>Sample Preview<br>(2-3 Page)</span>'+
      '</div>'+

      '<div>'+
        '<svg class="i"><use href="#l"/></svg>'+
        '<span>PDF + Unique<br>Password</span>'+
      '</div>'+
    '</div>'+

  '</div>';

}


if(document.getElementById("r1")){

  document.getElementById("r1").innerHTML=
    C1.map(card).join("");

  document.getElementById("r2").innerHTML=
    C2.map(card).join("");

}


/* =========================================================
   ORIGINAL REVIEWS
========================================================= */

var R=[
  [
    "Rohit Das",
    "“PDF গুলো খুবই ভালোভাবে সাজানো, পরীক্ষার প্রস্তুতির জন্য খুবই সহায়ক!”",
    "WBPSC Aspirant | 2 দিন আগে"
  ],
  [
    "Priya Mondal",
    "“প্রতিটি টপিক খুবই ক্লিয়ার এবং সহজ ভাষায় লেখা আছে।”",
    "SSC CHSL Aspirant | 5 দিন আগে"
  ],
  [
    "Arindam Pal",
    "“চলমান পরীক্ষার জন্য PDF খুবই উপকারী। সাম্প্রতিক ঘটনা এবং 100% ম্যাচ।”",
    "Railway NTPC Aspirant | 1 সপ্তাহ আগে"
  ],
  [
    "Soma Ghosh",
    "“আমি TET এর জন্য নিয়েছি, সত্যিই ভালো কনটেন্ট। সব কিছু এক জায়গায় পাওয়া যায়!”",
    "TET Aspirant | 3 দিন আগে"
  ]
];


if(document.getElementById("rr")){

  document.getElementById("rr").innerHTML=
    R.map(function(r,i){

      return '<div class="rc">'+
        '<img src="'+F[i]+'" alt="">'+
        '<div>'+
          '<b>'+r[0]+'</b>'+
          '<span class="st">★★★★★</span>'+
          '<q>'+r[1]+'</q>'+
          '<small>'+r[2]+'</small>'+
        '</div>'+
      '</div>';

    }).join("");

}


/* =========================================================
   COUNTDOWN
========================================================= */

var t=
  1*86400+
  23*3600+
  45*60+
  12;

setInterval(function(){

  t--;

  var v=[
    Math.floor(t/86400),
    Math.floor(t%86400/3600),
    Math.floor(t%3600/60),
    t%60
  ];

  document
    .querySelectorAll(".cd .n")
    .forEach(function(n,k){

      var x=
        String(v[k%4]).padStart(2,"0");

      var o=
        n.dataset.v||
        n.textContent;

      if(n.dataset.v===x)return;

      n.dataset.v=x;

      n.innerHTML=
        '<span class="ro">'+
          '<span>'+x+'</span>'+
          '<span>'+o+'</span>'+
        '</span>';

    });

},1000);


/* =========================================================
   LINKS
========================================================= */

var LINKS={
  youtube:"",
  facebook:"",
  instagram:"",
  home:"",
  upcoming:"",
  bestselling:"",
  college:"",
  school:"",
  courses:"",
  pdfpackage:"",
  notifications:"",
  cart:"",
  search:"",
  login:"",
  register:"",
  allRunning:"",
  allUpcoming:"",
  allReviews:"",
  buy:"",
  sample:""
};


/* =========================================================
   LANGUAGE
========================================================= */

var IS_HOME=
  document.body.hasAttribute("data-home");

var IDX={
  bn:0,
  en:1,
  hi:2
};


function stor(k,v){

  try{

    if(v===undefined)
      return localStorage.getItem(k);

    localStorage.setItem(k,v);

  }catch(e){

    return null;

  }

}


var LG=
  stor("lang")||
  "bn";

if(!IDX.hasOwnProperty(LG)){
  LG="bn";
}


var DX={};

`
পড়ুন স্মার্ট, জিতুন নিশ্চিত~~Read smart, win for sure~स्मार्ट पढ़ें, पक्का जीतें
হোম~~Home~होम
সামনের পরীক্ষার PDF~~Upcoming Exam PDF~आगामी परीक्षा की PDF
সবচেয়ে বেশি বিক্রির PDF লিস্ট~~Best-selling PDF List~सबसे ज़्यादा बिकने वाली PDF
কলেজ স্টুডেন্ট~~College Students~कॉलेज छात्र
স্কুল স্টুডেন্ট~~School Students~स्कूल छात्र
পরীক্ষার নাম, বিষয় বা PDF খুঁজুন...~~Search exam, subject or PDF...~परीक्षा, विषय या PDF खोजें...
লগইন/রেজিস্টার~~Login/Register~लॉगिन/रजिस्टर
সঠিক প্রস্তুতি~~Right preparation~सही तैयारी
সাফল্যের~~is one step~सफलता की
এক ধাপ এগিয়ে...~~towards success...~ओर एक कदम...
জনপ্রিয় সাজিডিজ~~Popular Suggested~लोकप्रिय सुझाव
PDF প্যাকেজ~~PDF Package~PDF पैकेज
চলতি ও আসন্ন পরীক্ষার জন্য~~For current & upcoming exams~चालू और आगामी परीक्षाओं के लिए
LIMITED TIME OFFER~সীমিত সময়ের অফার~Limited Time Offer~सीमित समय का ऑफर
অফার শেষ হতে বাকি:~~Offer ends in:~ऑफर खत्म होने में:
দিন~~Days~दिन
ঘণ্টা~~Hours~घंटे
মিনিট~~Minutes~मिनट
সেকেন্ড~~Seconds~सेकंड
আজকের~~Today's~आज का
বিশেষ অফার~~Special Offer~विशेष ऑफर
(জরুরি বিষয়)~~(Urgent topics)~(ज़रूरी विषय)
(গুরুত্বপূর্ণ বিষয়)~~(Important topics)~(महत्वपूर्ण विषय)
(অতিরিক্ত / সাধারণ বিষয়)~~(Extra / General topics)~(अतिरिक्त / सामान्य विषय)
চলমান পরীক্ষার PDF~~Running Exam PDF~चालू परीक्षा की PDF
(Currently Running Exams)~~Currently Running Exams~Aktuell laufende Prüfungen
যে পরীক্ষাগুলো চলছে, তাদের PDF এখনই সংগ্রহ করুন~~Get PDFs for the exams running now~जो परीक्षाएँ चल रही हैं, उनकी PDF अभी पाएँ
সব দেখুন →~~View all →~सब देखें →
আসন্ন PDF প্যাকেজ~~Upcoming PDF Package~आगामी PDF पैकेज
চলতি ও আসন্ন পরীক্ষার জন্য Priority-wise PDF~~For current & upcoming exams: Priority-wise PDF~चालू और आगामी परीक्षाओं के लिए Priority-wise PDF
এই অফারটি সীমিত সময়ের জন্য~~This offer is for a limited time~यह ऑफर सीमित समय के लिए है
এখনই PDF কিনুন →~~Buy PDF now →~अभी PDF खरीदें →
রিভিউ & ফিডব্যাক~~Reviews & Feedback~रिव्यू और फीडबैक
আমাদের শিক্ষার্থীদের বাস্তব অভিজ্ঞতা~~Real experiences of our students~हमारे विद्यार्थियों के असली अनुभव
সব রিভিউ দেখুন →~~See all reviews →~सभी रिव्यू देखें →
100% নিরাপদ লেনদেন~~100% secure payment~100% सुरक्षित लेनदेन
কোর্সসমূহ~~Courses~कोर्स
নোটিফিকেশন~~Notifications~सूचनाएँ
মাই কার্ট~~My Cart~मेरा कार्ट
প্রোফাইল~~Profile~प्रोफ़ाइल
লগইন~~Login~लॉगिन
নতুন? রেজিস্টার করুন~~New here? Register~नए हैं? रजिस्टर करें
জরুরি বিষয় আগে, সময় বাঁচান~~Urgent topics first, save time~ज़रूरी विषय पहले, समय बचाएँ
নমুনা দেখে, তারপর কিনুন~~Preview a sample, then buy~पहले नमूना देखें, फिर खरीदें
সীমিত সময়ের জন্য ৭০% পর্যন্ত ছাড়~~Up to 70% off for a limited time~सीमित समय के लिए 70% तक की छूट
Follow Us~~Follow Us~फ़ॉलो करें
`
.split("\n")
.forEach(function(l){

  var p=
    l.split("~");

  DX[p[0]]=[
    p[1]||p[0],
    p[2]||p[1]||p[0],
    p[3]||p[2]||p[1]||p[0]
  ];

});


var Y={
  buy:[
    "এখনই কিনুন →",
    "BUY NOW →",
    "अभी खरीदें →"
  ],

  sample:[
    "নমুনা দেখুন",
    "Sample Preview",
    "नमूना देखें"
  ],

  pg:[
    "(২-৩ পৃষ্ঠা)",
    "(2-3 Page)",
    "(2-3 पृष्ठ)"
  ],

  pw1:[
    "PDF + ইউনিক",
    "PDF + Unique",
    "PDF + यूनिक"
  ],

  pw2:[
    "পাসওয়ার্ড",
    "Password",
    "पासवर्ड"
  ],

  off:[
    "ছাড়",
    "OFF",
    "छूट"
  ],

  sold:[
    "জন কিনেছেন",
    "bought",
    "ने खरीदा"
  ],

  share:[
    "শেয়ার",
    "Share",
    "शेयर"
  ]

};


function tr(k){

  return Y[k][IDX[LG]];

}


var DS={
  a:[
    "বাংলা, ইতিহাস, ভূগোল, সংবিধান, অর্থনীতি, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি",
    "Complete preparation with Bengali, History, Geography, Constitution, Economy & Current Affairs",
    "बंगाली, इतिहास, भूगोल, संविधान, अर्थशास्त्र और करेंट अफेयर्स के साथ पूरी तैयारी"
  ],

  b:[
    "পাটিগণিত, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি",
    "Complete preparation with Arithmetic, Reasoning, GK & Current Affairs",
    "अंकगणित, रीज़निंग, सामान्य ज्ञान और करेंट अफेयर्स के साथ पूरी तैयारी"
  ],

  c:[
    "বাংলা, অঙ্ক, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি",
    "Complete preparation with Bengali, Maths, Reasoning, GK & Current Affairs",
    "बंगाली, गणित, रीज़निंग, सामान्य ज्ञान और करेंट अफेयर्स के साथ पूरी तैयारी"
  ]
};


var DK=[
  "a",
  "b",
  "c",
  "c",
  "b",
  "a"
];


var TI=[
  ["a","★ 100%",3333,1000],
  ["b","★ 50%",1667,500],
  ["c","★ 20%",333,100]
];


function rp(n){

  return "₹"+
    n.toLocaleString("en-IN");

}


/* =========================================================
   CART
========================================================= */

function likes(){

  try{

    return JSON.parse(
      stor("likes")||"{}"
    );

  }catch(e){

    return {};

  }

}


function carts(){

  try{

    var x=
      JSON.parse(
        stor("wb_pdf_cart")||"{}"
      );

    if(
      x &&
      typeof x==="object"
    ){
      return x;
    }

  }catch(e){}

  return {};

}


function saveCart(x){

  stor(
    "wb_pdf_cart",
    JSON.stringify(x)
  );

}


/* Migrate old cart once */

(function(){

  var c=carts();

  if(
    Object.keys(c).length===0
  ){

    try{

      var old=
        JSON.parse(
          stor("likes")||"{}"
        );

      if(
        old &&
        typeof old==="object" &&
        Object.keys(old).length
      ){

        saveCart(old);

      }

    }catch(e){}

  }

})();


function cartCount(){

  var n=
    Object.keys(carts()).length;

  document
    .querySelectorAll(
      '[data-link="cart"] em'
    )
    .forEach(function(e){

      e.textContent=n;

    });

  return n;

}


/* =========================================================
   FINAL PDF CARD
   IMPORTANT:
   Image already contains badge.
   Therefore HTML does NOT create second badge.
========================================================= */

function finalCard(d,id){

  var C=carts();

  var added=
    !!C[id];

  var sd=
    d[5]||0;

  var desc="";

  if(
    id &&
    id.charAt(0)==="a" &&
    DS[DK[+id.slice(1)]]
  ){

    desc=
      DS[
        DK[+id.slice(1)]
      ][IDX[LG]]
      ||
      DS[
        DK[+id.slice(1)]
      ][0];

  }


  var pr=
    TI.map(function(x){

      return '<div class="'+x[0]+'">'+
        '<span>'+x[1]+'</span>'+
        '<s>'+rp(x[2])+'</s>'+
        rp(x[3])+
        '<em>70% '+tr("off")+'</em>'+
      '</div>';

    }).join("");


  return '<div class="card">'+

    '<div class="im">'+
      '<img src="'+I[d[1]]+'" alt="">'+
    '</div>'+

    '<h3>'+
      d[2]+
      '<small>'+d[3]+'</small>'+
    '</h3>'+

    '<p>'+desc+'</p>'+

    '<div class="pr">'+
      pr+
    '</div>'+

    '<a class="buy" data-link="buy" data-exam="'+d[2]+'">'+
      tr("buy")+
    '</a>'+

    '<div class="mt">'+

      (sd>0
        ?'<span>'+
          '<svg class="i"><use href="#w"/></svg> '+
          sd+" "+tr("sold")+
        '</span>'
        :""
      )+

      '<span class="ac">'+

        '<button type="button" '+
          'class="lk'+
            (added?" on":"")+
          '" '+
          'data-id="'+id+'" '+
          'aria-label="'+
            (added
              ?"Remove from cart"
              :"Add to cart"
            )+
          '" '+
          'title="'+
            (added
              ?"Remove from cart"
              :"Add to cart"
            )+
          '">'+

          '<svg class="i">'+
            '<use href="#c"/>'+
          '</svg>'+

          '<b>'+
            (added?"1":"")+
          '</b>'+

        '</button>'+

        '<button type="button" '+
          'class="sb" '+
          'data-n="'+d[2]+'">'+

          '<svg class="i">'+
            '<use href="#sh"/>'+
          '</svg>'+

          tr("share")+

        '</button>'+

      '</span>'+

    '</div>'+

    '<div class="ft">'+

      '<div data-link="sample" data-exam="'+d[2]+'">'+
        '<svg class="i"><use href="#e"/></svg>'+
        '<span>'+
          tr("sample")+
          '<br>'+
          tr("pg")+
        '</span>'+
      '</div>'+

      '<div>'+
        '<svg class="i"><use href="#l"/></svg>'+
        '<span>'+
          tr("pw1")+
          '<br>'+
          tr("pw2")+
        '</span>'+
      '</div>'+

    '</div>'+

  '</div>';

}


function sec(a,p){

  return a
    .map(function(d,i){

      return [
        d,
        p+i
      ];

    })
    .sort(function(x,y){

      return (
        y[0][5]||0
      )-
      (
        x[0][5]||0
      );

    })
    .map(function(z){

      return finalCard(
        z[0],
        z[1]
      );

    })
    .join("");

}


function render(){

  if(
    !document.getElementById("r1")
  ){
    return;
  }

  document.getElementById("r1").innerHTML=
    sec(C1,"a");

  document.getElementById("r2").innerHTML=
    sec(C2,"b");

}


/* =========================================================
   LANGUAGE TEXT SCAN
========================================================= */

var NODES=[];


function scan(){

  var w=
    document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

  var n;

  while(
    n=w.nextNode()
  ){

    var p=
      n.parentNode.nodeName;

    if(
      p==="SCRIPT"||
      p==="STYLE"||
      p==="OPTION"
    ){
      continue;
    }

    var k=
      n.nodeValue.trim();

    if(DX[k]){

      NODES.push([
        n,
        k,
        n.nodeValue.replace(
          k,
          "§"
        )
      ]);

    }

  }

}


function apply(){

  NODES.forEach(function(x){

    var a=
      DX[x[1]]||
      [];

    var v=
      a[IDX[LG]];

    if(
      v===undefined||
      v===null||
      v===""
    ){

      v=x[1];

    }

    x[0].nodeValue=
      x[2].replace(
        "§",
        v
      );

  });

}


function setLang(l){

  LG=l;

  stor(
    "lang",
    l
  );

  document.getElementById(
    "lg"
  ).value=l;

  document.documentElement.lang=l;

  apply();

  render();

  cartCount();

}


scan();

render();

cartCount();

document.documentElement.lang=LG;

document.getElementById("lg").value=LG;

apply();


var lp=
  document.getElementById("lp");


if(
  lp &&
  IS_HOME &&
  !stor("langChosen")
){

  lp.classList.add("on");

}


document.getElementById(
  "lg"
).onchange=function(){

  stor(
    "langChosen",
    "1"
  );

  setLang(
    this.value
  );

};


/* =========================================================
   MOBILE PDF ROW
========================================================= */

function setupPdfRows(){

  var mobile=
    innerWidth<900;

  document
    .querySelectorAll(
      ".sec .row"
    )
    .forEach(function(row){

      var isRunning=
        row.id==="r1";


      if(
        mobile &&
        !row.parentElement.classList.contains(
          "pdf-row-wrap"
        )
      ){

        var wrap=
          document.createElement(
            "div"
          );

        wrap.className=
          "pdf-row-wrap";

        row.parentNode.insertBefore(
          wrap,
          row
        );

        wrap.appendChild(
          row
        );


        var left=
          document.createElement(
            "button"
          );

        var right=
          document.createElement(
            "button"
          );

        left.type="button";
        right.type="button";

        left.className=
          "pdf-arrow left";

        right.className=
          "pdf-arrow right";

        left.innerHTML="‹";
        right.innerHTML="›";

        left.setAttribute(
          "aria-label",
          "Previous PDF"
        );

        right.setAttribute(
          "aria-label",
          "Next PDF"
        );

        wrap.appendChild(left);
        wrap.appendChild(right);


        left.addEventListener(
          "click",
          function(){

            row.scrollBy({
              left:-Math.max(
                220,
                row.clientWidth*.72
              ),
              behavior:"smooth"
            });

          }
        );


        right.addEventListener(
          "click",
          function(){

            row.scrollBy({
              left:Math.max(
                220,
                row.clientWidth*.72
              ),
              behavior:"smooth"
            });

          }
        );

      }


      if(
        isRunning &&
        !row.dataset.autoSlide
      ){

        row.dataset.autoSlide="1";

        var timer=null;


        function nextRunning(){

          var max=
            row.scrollWidth-
            row.clientWidth;

          if(max<=2)return;

          var step=
            innerWidth<900
              ?236
              :row.clientWidth;

          var next=
            row.scrollLeft+
            step;

          if(
            next>=max-2
          ){
            next=0;
          }

          row.scrollTo({
            left:next,
            behavior:"smooth"
          });

        }


        function startAuto(){

          clearInterval(
            timer
          );

          timer=
            setInterval(
              nextRunning,
              3000
            );

        }


        row.addEventListener(
          "mouseenter",
          function(){

            if(
              innerWidth>=900
            ){

              clearInterval(
                timer
              );

            }

          }
        );


        row.addEventListener(
          "mouseleave",
          function(){

            if(
              innerWidth>=900
            ){

              startAuto();

            }

          }
        );


        row.addEventListener(
          "touchstart",
          function(){

            clearInterval(
              timer
            );

          },
          {passive:true}
        );


        row.addEventListener(
          "touchend",
          function(){

            setTimeout(
              startAuto,
              700
            );

          },
          {passive:true}
        );


        startAuto();

      }

    });


  if(
    !window.__wbPdfObserver
  ){

    window.__wbPdfObserver=
      new IntersectionObserver(
        function(entries){

          entries.forEach(
            function(e){

              e.target.classList.toggle(
                "pdf-active",
                e.isIntersecting &&
                e.intersectionRatio>.22
              );

            }
          );

        },
        {
          threshold:[.22]
        }
      );


    document
      .querySelectorAll(".sec")
      .forEach(function(sec){

        if(
          sec.querySelector(
            "#r1"
          )
        ){

          window.__wbPdfObserver.observe(
            sec
          );

        }

      });

  }

}


setupPdfRows();


window.addEventListener(
  "resize",
  function(){

    if(
      innerWidth<900
    ){

      setupPdfRows();

    }

  }
);


/* =========================================================
   CART CLICK
   ADD = +1
   REMOVE = NO DECREASE
   RE-ADD = +1
========================================================= */

cartCount();


var lx=
  document.getElementById("lx");


if(lx){

  lx.onclick=function(){

    stor(
      "langChosen",
      "1"
    );

    lp.classList.remove(
      "on"
    );

  };

}


/* =========================================================
   SUPABASE
========================================================= */

var SUPABASE_URL=
  "https://xitiwikhzvfyeqdxspqk.supabase.co";

var SUPABASE_KEY=
  "sb_publishable_PzuDMCMLsQRnpbuob8uhEQ_xQ20Y75D";

var sbClient=null;

var sbLoading=null;


function getSupabase(){

  if(sbClient){

    return Promise.resolve(
      sbClient
    );

  }


  if(
    window.supabase &&
    typeof window.supabase.createClient===
      "function"
  ){

    sbClient=
      window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
      );

    return Promise.resolve(
      sbClient
    );

  }


  if(sbLoading){

    return sbLoading;

  }


  sbLoading=
    new Promise(
      function(resolve,reject){

        var s=
          document.createElement(
            "script"
          );

        s.src=
          "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

        s.async=true;


        s.onload=function(){

          if(
            window.supabase &&
            typeof window.supabase.createClient===
              "function"
          ){

            sbClient=
              window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_KEY
              );

            resolve(
              sbClient
            );

          }else{

            reject(
              new Error(
                "Supabase unavailable"
              )
            );

          }

        };


        s.onerror=function(){

          reject(
            new Error(
              "Supabase load failed"
            )
          );

        };


        document.head.appendChild(
          s
        );

      }
    );


  return sbLoading;

}


function showSold(total){

  var n=
    Number(total);

  if(
    !Number.isFinite(n)
  ){
    return;
  }


  document
    .querySelectorAll(
      ".wb-total-pdf-added"
    )
    .forEach(function(el){

      el.textContent=
        "Total PDF Sold : "+
        n.toLocaleString(
          "en-IN"
        );


      el.classList.remove(
        "wb-counter-update"
      );

      void el.offsetWidth;

      el.classList.add(
        "wb-counter-update"
      );


      setTimeout(
        function(){

          el.classList.remove(
            "wb-counter-update"
          );

        },
        350
      );

    });

}


function loadSold(){

  getSupabase()
    .then(function(db){

      return db
        .from("pdf_sales_counter")
        .select("total_sold")
        .eq("id",1)
        .single();

    })
    .then(function(r){

      if(
        !r.error &&
        r.data
      ){

        showSold(
          r.data.total_sold
        );

      }

    })
    .catch(function(e){

      console.error(
        "PDF counter load:",
        e
      );

    });

}


function incrementSold(){

  getSupabase()
    .then(function(db){

      return db.rpc(
        "increment_pdf_sales"
      );

    })
    .then(function(r){

      if(
        r.error
      ){

        console.error(
          "PDF counter increment:",
          r.error
        );

        return;

      }


      var v=
        r.data;


      if(
        Array.isArray(v) &&
        v[0] &&
        v[0].total_sold!==undefined
      ){

        v=
          v[0].total_sold;

      }


      if(
        v!==undefined &&
        v!==null
      ){

        showSold(v);

      }else{

        loadSold();

      }

    })
    .catch(function(e){

      console.error(
        "PDF counter increment:",
        e
      );

    });

}


window.wbIncrementPdfSold=
  incrementSold;


/* =========================================================
   CART EVENT
   Capture phase stops old cart handler.
========================================================= */

document.addEventListener(
  "click",
  function(e){

    var b=
      e.target.closest(
        "button.lk"
      );

    if(!b)return;


    e.preventDefault();

    e.stopImmediatePropagation();


    var id=
      b.dataset.id;

    var C=
      carts();

    var wasAdded=
      !!C[id];


    if(wasAdded){

      delete C[id];

    }else{

      C[id]=1;

    }


    saveCart(C);


    b.classList.toggle(
      "on",
      !wasAdded
    );


    var count=
      b.querySelector("b");

    if(count){

      count.textContent=
        !wasAdded
          ?"1"
          :"";

    }


    b.setAttribute(
      "aria-label",
      !wasAdded
        ?"Remove from cart"
        :"Add to cart"
    );


    b.title=
      !wasAdded
        ?"Remove from cart"
        :"Add to cart";


    cartCount();


    /*
      ADD:
      +1

      REMOVE:
      No decrease
    */

    if(!wasAdded){

      incrementSold();

    }

  },
  true
);


/* =========================================================
   HERO / ACCOUNT / LINKS
========================================================= */

(function(){

  var am=
    document.getElementById(
      "am"
    );


  function tog(
    el,
    up
  ){

    if(
      am.classList.contains(
        "on"
      )
    ){

      am.classList.remove(
        "on"
      );

      return;

    }


    var r=
      el.getBoundingClientRect();


    am.style.right=
      Math.max(
        8,
        innerWidth-r.right-4
      )+
      "px";


    am.style.top=
      up
        ?"auto"
        :(r.bottom+8)+"px";


    am.style.bottom=
      up
        ?(innerHeight-r.top+8)+"px"
        :"auto";


    am.classList.add(
      "on"
    );

  }


  document.addEventListener(
    "click",
    function(e){

      var p=
        e.target.closest(
          ".pf,.pfb"
        );


      if(p){

        e.preventDefault();

        tog(
          p,
          !!p.closest(".bn")
        );

        return;

      }


      if(
        !e.target.closest(
          "#am"
        )
      ){

        am.classList.remove(
          "on"
        );

      }


      var a=
        e.target.closest(
          "[data-link]"
        );


      if(!a)return;


      e.preventDefault();


      var u=
        LINKS[
          a.dataset.link
        ]||
        "";


      if(!u)return;


      am.classList.remove(
        "on"
      );


      if(
        /^(youtube|facebook|instagram)$/
          .test(
            a.dataset.link
          )
      ){

        window.open(
          u,
          "_blank",
          "noopener"
        );

        return;

      }


      location.href=
        u.replace(
          "{exam}",
          encodeURIComponent(
            a.dataset.exam||""
          )
        );

    }
  );


  document.addEventListener(
    "keydown",
    function(e){

      if(
        e.key==="Escape"
      ){

        am.classList.remove(
          "on"
        );

      }

    }
  );


  if(
    !document.getElementById(
      "trk"
    )
  ){
    return;
  }


  var trk=
    document.getElementById(
      "trk"
    );

  var dots=
    document.getElementById(
      "dots"
    );

  var n=
    trk.children.length;

  var i=0;

  var tm;


  function go(k){

    i=
      (k+n)%n;

    trk.style.transform=
      "translateX(-"+
      i*100+
      "%)";


    [].forEach.call(
      dots.children,
      function(x,j){

        x.className=
          j===i
            ?"on"
            :"";

      }
    );

  }


  function start(){

    clearInterval(
      tm
    );

    tm=
      setInterval(
        function(){

          go(i+1);

        },
        3000
      );

  }


  for(
    var k=0;
    k<n;
    k++
  ){

    (function(k){

      var d=
        document.createElement(
          "button"
        );

      d.setAttribute(
        "aria-label",
        "Slide "+(k+1)
      );


      d.onclick=function(){

        go(k);

        start();

      };


      dots.appendChild(
        d
      );

    })(k);

  }


  var sl=
    document.getElementById(
      "sl"
    );

  var sx=0;


  if(sl){

    sl.onmouseenter=function(){

      clearInterval(
        tm
      );

    };


    sl.onmouseleave=
      start;


    sl.addEventListener(
      "touchstart",
      function(e){

        sx=
          e.touches[0].clientX;

      },
      {passive:true}
    );


    sl.addEventListener(
      "touchend",
      function(e){

        var dx=
          e.changedTouches[0].clientX-
          sx;


        if(
          Math.abs(dx)>40
        ){

          go(
            i+
            (
              dx<0
                ?1
                :-1
            )
          );

          start();

        }

      }
    );

  }


  go(0);

  start();

})();


/* =========================================================
   REVIEWS
========================================================= */

(function(){

  if(
    !document.getElementById(
      "rr"
    )
  ){
    return;
  }


  var RT={
    title:[
      "আপনার রিভিউ লিখুন",
      "Write your review",
      "अपना रिव्यू लिखें"
    ],

    open:[
      "রিভিউ লিখুন",
      "Write a review",
      "रिव्यू लिखें"
    ],

    rate:[
      "আপনার রেটিং",
      "Your rating",
      "आपकी रेटिंग"
    ],

    submit:[
      "রিভিউ জমা দিন",
      "Submit review",
      "रिव्यू जमा करें"
    ],

    name:[
      "আপনার নাম",
      "Your name",
      "आपका नाम"
    ],

    exam:[
      "কোন পরীক্ষার জন্য নিয়েছেন? (ঐচ্ছিক)",
      "Which exam did you prepare for? (optional)",
      "किस परीक्षा के लिए लिया? (वैकल्पिक)"
    ],

    text:[
      "আপনার অভিজ্ঞতা লিখুন...",
      "Share your experience...",
      "अपना अनुभव साझा करें..."
    ],

    err:[
      "নাম ও রিভিউ (কমপক্ষে ১০ অক্ষর) লিখুন",
      "Please enter your name and a review (min 10 characters)",
      "नाम और रिव्यू (कम से कम 10 अक्षर) लिखें"
    ],

    thanks:[
      "ধন্যবাদ! আপনার রিভিউ যোগ হয়েছে",
      "Thank you! Your review has been added",
      "धन्यवाद! आपका रिव्यू जुड़ गया"
    ],

    just:[
      "এইমাত্র",
      "Just now",
      "अभी-अभी"
    ]

  };


  function rt(k){

    return RT[k][IDX[LG]];

  }


  function rtApply(){

    document
      .querySelectorAll(
        "[data-rt]"
      )
      .forEach(function(e){

        e.textContent=
          rt(
            e.dataset.rt
          );

      });


    document
      .querySelectorAll(
        "[data-ph]"
      )
      .forEach(function(e){

        e.placeholder=
          rt(
            e.dataset.ph
          );

      });

  }


  var oldSetLang=
    setLang;


  setLang=function(l){

    oldSetLang(l);

    rtApply();

  };


  rtApply();


  /* =====================================================
     REVIEW CAROUSEL
  ===================================================== */

  var r=
    document.getElementById(
      "rr"
    );

  var hold=false;

  var until=0;


  function step(){

    if(
      hold||
      Date.now()<until
    ){
      return;
    }


    var c=
      r.firstElementChild;


    if(!c)return;


    if(
      r.scrollLeft+
      r.clientWidth>=
      r.scrollWidth-6
    ){

      r.scrollTo({
        left:0,
        behavior:"smooth"
      });

    }else{

      r.scrollBy({
        left:
          c.offsetWidth+10,
        behavior:"smooth"
      });

    }

  }


  setInterval(
    step,
    3000
  );


  r.addEventListener(
    "mouseenter",
    function(){
      hold=true;
    }
  );


  r.addEventListener(
    "mouseleave",
    function(){
      hold=false;
    }
  );


  [
    "touchstart",
    "pointerdown",
    "wheel"
  ].forEach(function(e){

    r.addEventListener(
      e,
      function(){

        until=
          Date.now()+6000;

      },
      {passive:true}
    );

  });


  /* =====================================================
     USER REVIEW FORM
  ===================================================== */

  var REVIEW_POST="";


  function esc(x){

    return String(x)
      .replace(
        /[&<>"']/g,
        function(c){

          return {
            "&":"&amp;",
            "<":"&lt;",
            ">":"&gt;",
            '"':"&quot;",
            "'":"&#39;"
          }[c];

        }
      );

  }


  function mine(){

    try{

      return JSON.parse(
        stor("myReviews")||"[]"
      );

    }catch(e){

      return [];

    }

  }


  function cardHTML(v){

    var st=
      "★".repeat(v.s)+
      "☆".repeat(5-v.s);


    return '<div class="rc mine">'+

      '<div class="av">'+
        esc(
          v.n
            .trim()
            .charAt(0)
            .toUpperCase()
        )+
      '</div>'+

      '<div>'+
        '<b>'+esc(v.n)+'</b>'+
        '<span class="st">'+st+'</span>'+
        '<q>“'+esc(v.t)+'”</q>'+
        '<small>'+
          (
            v.e
              ?esc(v.e)+" | "
              :""
          )+
          rt("just")+
        '</small>'+
      '</div>'+

    '</div>';

  }


  mine()
    .slice()
    .reverse()
    .forEach(function(v){

      r.insertAdjacentHTML(
        "afterbegin",
        cardHTML(v)
      );

    });


  var rm=
    document.getElementById(
      "rm"
    );

  var rs=
    document.getElementById(
      "rs"
    );

  var rate=5;

  var tx=
    document.getElementById(
      "rtx"
    );


  function paint(){

    []
      .forEach.call(
        rs.children,
        function(b,i){

          b.className=
            i<rate
              ?"on"
              :"";

        }
      );

  }


  paint();


  rs.addEventListener(
    "click",
    function(e){

      var b=
        e.target.closest(
          "button"
        );

      if(!b)return;

      rate=
        +b.dataset.s;

      paint();

    }
  );


  function openM(){

    rm.classList.add(
      "on"
    );

    document.body.style.overflow=
      "hidden";

    document.getElementById(
      "rer"
    ).textContent="";


    setTimeout(
      function(){

        document.getElementById(
          "rn"
        ).focus();

      },
      50
    );

  }


  function closeM(){

    rm.classList.remove(
      "on"
    );

    document.body.style.overflow=
      "";

  }


  document.getElementById(
    "rvb"
  ).onclick=
    openM;


  document.getElementById(
    "rmx"
  ).onclick=
    closeM;


  rm.addEventListener(
    "click",
    function(e){

      if(
        e.target===rm
      ){

        closeM();

      }

    }
  );


  document.addEventListener(
    "keydown",
    function(e){

      if(
        e.key==="Escape"
      ){

        closeM();

      }

    }
  );


  tx.addEventListener(
    "input",
    function(){

      document.getElementById(
        "rcn"
      ).textContent=
        tx.value.length+
        "/200";

    }
  );


  document.getElementById(
    "rsb"
  ).onclick=function(){

    var n=
      document.getElementById(
        "rn"
      ).value.trim();

    var e=
      document.getElementById(
        "re"
      ).value.trim();

    var t=
      tx.value.trim();


    if(
      !n||
      t.length<10
    ){

      document.getElementById(
        "rer"
      ).textContent=
        rt("err");

      return;

    }


    var v={
      n:n,
      e:e,
      t:t,
      s:rate,
      d:Date.now()
    };


    var list=
      mine();

    list.push(v);


    try{

      stor(
        "myReviews",
        JSON.stringify(
          list.slice(-20)
        )
      );

    }catch(x){}


    if(REVIEW_POST){

      try{

        fetch(
          REVIEW_POST,
          {
            method:"POST",
            headers:{
              "Content-Type":
                "application/json"
            },
            body:
              JSON.stringify(v)
          }
        ).catch(
          function(){}
        );

      }catch(x){}

    }


    r.insertAdjacentHTML(
      "afterbegin",
      cardHTML(v)
    );


    r.scrollTo({
      left:0,
      behavior:"smooth"
    });


    until=
      Date.now()+8000;


    document.getElementById(
      "rn"
    ).value="";

    document.getElementById(
      "re"
    ).value="";

    tx.value="";


    document.getElementById(
      "rcn"
    ).textContent=
      "0/200";


    rate=5;

    paint();

    closeM();


    var ts=
      document.getElementById(
        "ts"
      );


    ts.textContent=
      rt("thanks");

    ts.classList.add(
      "on"
    );


    setTimeout(
      function(){

        ts.classList.remove(
          "on"
        );

      },
      3200
    );

  };


  document.addEventListener(
    "keydown",
    function(e){

      if(
        (
          e.key==="Enter"||
          e.key===" "
        )&&
        e.target.matches&&
        e.target.matches(
          ".soc a"
        )
      ){

        e.preventDefault();

        e.target.click();

      }

    }
  );


  if(
    window.matchMedia&&
    matchMedia(
      "(prefers-reduced-motion:reduce)"
    ).matches
  ){

    []
      .forEach.call(
        document.querySelectorAll(
          "svg.fire"
        ),
        function(x){

          if(
            x.pauseAnimations
          ){

            x.pauseAnimations();

          }

        }
      );

  }

})();


/* =========================================================
   HEADER SHOW / HIDE
========================================================= */

(function(){

  var h=
    document.querySelector(
      "header"
    );

  var last=
    scrollY;

  var tm;


  if(!h)return;


  addEventListener(
    "scroll",
    function(){

      var y=
        scrollY;

      var d=
        y-last;

      last=y;


      if(
        y>80 &&
        Math.abs(d)>2
      ){

        h.classList.add(
          "hid"
        );


        var am=
          document.getElementById(
            "am"
          );


        if(am){

          am.classList.remove(
            "on"
          );

        }

      }else if(
        y<=80
      ){

        h.classList.remove(
          "hid"
        );

      }


      clearTimeout(
        tm
      );


      tm=
        setTimeout(
          function(){

            h.classList.remove(
              "hid"
            );

          },
          500
        );

    },
    {passive:true}
  );

})();


/* =========================================================
   FINAL FIXES
========================================================= */

(function(){

  "use strict";


  /* -------------------------------------------------------
     1. Remove any accidental literal undefined
  ------------------------------------------------------- */

  function cleanUndefined(
    root
  ){

    root=
      root||
      document.body;


    var walker=
      document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT
      );


    var nodes=[];

    var n;


    while(
      n=walker.nextNode()
    ){

      nodes.push(n);

    }


    nodes.forEach(
      function(x){

        if(
          /\bundefined\b/.test(
            x.nodeValue
          )
        ){

          x.nodeValue=
            x.nodeValue.replace(
              /\bundefined\b/g,
              ""
            );

        }

      }
    );

  }


  cleanUndefined(
    document.body
  );


  new MutationObserver(
    function(){

      cleanUndefined(
        document.body
      );

    }
  ).observe(
    document.body,
    {
      subtree:true,
      childList:true,
      characterData:true
    }
  );


  /* -------------------------------------------------------
     2. Ensure language never outputs undefined
  ------------------------------------------------------- */

  apply=function(){

    NODES.forEach(
      function(x){

        var a=
          DX[x[1]]||
          [];

        var v=
          a[IDX[LG]];


        if(
          v===undefined||
          v===null||
          v===""
        ){

          v=x[1];

        }


        x[0].nodeValue=
          x[2].replace(
            "§",
            v
          );

      }
    );

  };


  apply();


  /* -------------------------------------------------------
     3. Desktop Write Review → right side
  ------------------------------------------------------- */

  function reviewButtonPosition(){

    var rv=
      document.querySelector(
        ".rv"
      );

    var sh=
      rv &&
      rv.querySelector(
        ".sh"
      );

    var holder=
      rv &&
      rv.querySelector(
        ".rvf"
      );


    if(
      !rv||
      !sh||
      !holder
    ){

      return;

    }


    if(
      innerWidth>=900
    ){

      holder.classList.add(
        "wb-review-desktop-right"
      );

    }else{

      holder.classList.remove(
        "wb-review-desktop-right"
      );

    }

  }


  reviewButtonPosition();


  window.addEventListener(
    "resize",
    reviewButtonPosition
  );


  /* -------------------------------------------------------
     4. Total PDF Sold before Follow Us
  ------------------------------------------------------- */

  function fixBottomOrder(){

    var counter=
      document.querySelector(
        ".wb-total-pdf-section"
      );

    var follow=
      document.querySelector(
        ".follow"
      );

    var footer=
      document.querySelector(
        "footer"
      );


    if(
      counter&&
      follow&&
      follow.parentNode
    ){

      follow.parentNode.insertBefore(
        counter,
        follow
      );

    }


    if(
      follow&&
      footer&&
      footer.parentNode
    ){

      footer.parentNode.insertBefore(
        follow,
        footer
      );

    }

  }


  fixBottomOrder();


  /* -------------------------------------------------------
     5. CSS
  ------------------------------------------------------- */

  var style=
    document.createElement(
      "style"
    );


  style.id=
    "wb-final-fix-style";


  style.textContent=`

/* ==========================================
   BADGE
   The badge is already inside card images.
   Hide HTML duplicate badge.
========================================== */

.card .tag{
  display:none !important;
}


/* ==========================================
   DESKTOP — WRITE REVIEW RIGHT
========================================== */

@media(min-width:900px){

  .rv{
    position:relative;
  }

  .rvf.wb-review-desktop-right{

    position:absolute;

    right:10px;

    top:10px;

    margin:0 !important;

    display:flex !important;

    justify-content:flex-end !important;

  }

}


/* ==========================================
   MOBILE
========================================== */

@media(max-width:899px){

  /*
     Mobile social icons slightly smaller
  */

  .follow .soc a{

    width:32px !important;

    height:32px !important;

    min-width:32px !important;

    min-height:32px !important;

    border-radius:10px !important;

  }


  .follow .soc svg{

    width:17px !important;

    height:17px !important;

  }


  /*
     Mobile copyright:
     show only the copyright line.
  */

  footer{

    display:block !important;

    padding:
      8px
      10px
      86px !important;

    text-align:center !important;

  }


  footer>.logo,
  footer>nav,
  footer>.r{

    display:none !important;

  }


  footer>div:last-child{

    display:block !important;

    width:100% !important;

    font-size:10px !important;

    line-height:1.4 !important;

    color:#cfe0ff !important;

  }


  /*
     Mobile PDF card:
     original/larger size
  */

  .pdf-row-wrap .row{

    gap:10px !important;

    padding:
      0
      22px
      4px
      0 !important;

    overflow-x:auto !important;

    scrollbar-width:none;

  }


  .pdf-row-wrap .row::-webkit-scrollbar{

    display:none;

  }


  .pdf-row-wrap .card{

    flex:
      0 0 236px !important;

    min-width:
      236px !important;

    width:
      236px !important;

    padding:
      7px !important;

    border-radius:
      12px !important;

  }


  .pdf-row-wrap .card .im{

    aspect-ratio:
      232/95 !important;

    border-radius:
      8px !important;

  }


  .pdf-row-wrap .card h3{

    font-size:
      17px !important;

    line-height:
      1.15 !important;

    margin:
      8px 2px 0 !important;

    display:block !important;

    overflow:visible !important;

  }


  .pdf-row-wrap .card h3 small{

    font-size:
      15px !important;

  }


  .pdf-row-wrap .card p{

    font-size:
      14px !important;

    line-height:
      1.3 !important;

    margin:
      4px 2px 6px !important;

    display:block !important;

    overflow:visible !important;

  }


  .pdf-row-wrap .pr{

    gap:
      5px !important;

  }


  .pdf-row-wrap .pr div{

    font-size:
      14px !important;

  }


  .pdf-row-wrap .pr div span{

    font-size:
      11px !important;

  }


  .pdf-row-wrap .pr s{

    font-size:
      10px !important;

  }


  .pdf-row-wrap .pr em{

    font-size:
      10px !important;

  }


  .pdf-row-wrap .buy{

    margin:
      7px 0 !important;

    padding:
      6px !important;

    font-size:
      14px !important;

    border-radius:
      7px !important;

  }


  .pdf-row-wrap .mt{

    font-size:
      11px !important;

    min-height:
      21px !important;

  }


  .pdf-row-wrap .mt button{

    padding:
      3px 7px !important;

    font-size:
      11px !important;

  }


  .pdf-row-wrap .ft{

    font-size:
      10px !important;

    gap:
      4px !important;

  }


  .pdf-row-wrap .ft svg{

    font-size:
      16px !important;

  }

}


/* ==========================================
   COUNTER ANIMATION
========================================== */

.wb-total-pdf-added.wb-counter-update{

  transform:
    scale(1.035);

  transition:
    transform .25s ease;

}

`;


  document.head.appendChild(
    style
  );


  cleanUndefined(
    document.body
  );


})();


/* =========================================================
   INITIAL GLOBAL COUNTER LOAD
========================================================= */

loadSold();
