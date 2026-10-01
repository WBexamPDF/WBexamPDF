/* WBExamPDF — script.js
   LINKS (নিচে) এ প্রতিটি পেজের ফাইলের নাম বসান। এই ফাইল সব পেজে একই থাকবে। */
var I={c1:"images/card1.jpg",c2:"images/card2.jpg",c3:"images/card3.jpg",c4:"images/card4.jpg"},F=["images/review1.jpg","images/review2.jpg","images/review3.jpg","images/review4.jpg"];
var T={Live:"#e0202a",Popular:"#f59a23",New:"#1fa64a",Soon:"#1a55d1",Trending:"#e0202a"};
var L={Live:"Live","Most Popular":"Most Popular",New:"New","Offer Ending Soon":"Offer Ending Soon",Trending:"Trending"};
var C1=[["Live","c1","WBPSC 2025","(Prelims + Mains)","বাংলা, ইতিহাস, ভূগোল, সংবিধান, অর্থনীতি, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],["Most Popular","c2","RRB NTPC 2025","(Graduate & Under Graduate)","পাটিগণিত, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],["New","c3","SSC GD 2025","(Constable)","বাংলা, পাটিগণিত, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],["Offer Ending Soon","c4","West Bengal Police","(Constable & SI)","বাংলা, অঙ্ক, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],["Trending","c2","Railway Group D 2025","(Level 1)","পাটিগণিত, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"],["Trending","c1","WBPSC 2025","(Prelims + Mains)","ইতিহাস, ভূগোল, সংবিধান, অর্থনীতি, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি"]];
var C2=[["Trending","c1","WBPSC 2025","(প্রিলিমস + প্রধানস)",""],["Most Popular","c3","SSC CHSL 2025","(Tier 1 + Tier 2)",""],["New","c2","Railway RRB NTPC","(CBT 1 + CBT 2)",""],["Offer Ending Soon","c4","WB Police Constable","(Prelims + Mains)",""]];
var col={Live:"#e0202a","Most Popular":"#f59a23",New:"#1fa64a","Offer Ending Soon":"#1a55d1",Trending:"#e0202a"};
function card(d){return '<div class="card"><div class="im"><img src="'+I[d[1]]+'" alt=""><span class="tag" style="background:'+col[d[0]]+'">'+d[0]+'</span></div><h3>'+d[2]+'<small>'+d[3]+'</small></h3>'+(d[4]?'<p>'+d[4]+'</p>':'<p></p>')+'<div class="pr"><div class="a"><span>★ 100%</span>₹1000</div><div class="b"><span>★ 50%</span>₹500</div><div class="c"><span>★ 20%</span>₹100</div></div><a class="buy">BUY NOW →</a><div class="ft"><div data-link="sample" data-exam="'+d[2]+'"><svg class="i"><use href="#e"/></svg><span>Sample Preview<br>(2-3 Page)</span></div><div><svg class="i"><use href="#l"/></svg><span>PDF + Unique<br>Password</span></div></div></div>'}
if(document.getElementById('r1')){document.getElementById('r1').innerHTML=C1.map(card).join('');document.getElementById('r2').innerHTML=C2.map(card).join('')}
var R=[["Rohit Das","“PDF গুলো খুবই ভালোভাবে সাজানো, পরীক্ষার প্রস্তুতির জন্য খুবই সহায়ক!”","WBPSC Aspirant | 2 দিন আগে"],["Priya Mondal","“প্রতিটি টপিক খুবই ক্লিয়ার এবং সহজ ভাষায় লেখা আছে।”","SSC CHSL Aspirant | 5 দিন আগে"],["Arindam Pal","“চলমান পরীক্ষার জন্য PDF খুবই উপকারী। সাম্প্রতিক ঘটনা এবং 100% ম্যাচ।”","Railway NTPC Aspirant | 1 সপ্তাহ আগে"],["Soma Ghosh","“আমি TET এর জন্য নিয়েছি, সত্যিই ভালো কনটেন্ট। সব কিছু এক জায়গায় পাওয়া যায়!”","TET Aspirant | 3 দিন আগে"]];
if(document.getElementById('rr')){document.getElementById('rr').innerHTML=R.map(function(r,i){return '<div class="rc"><img src="'+F[i]+'" alt=""><div><b>'+r[0]+'</b><span class="st">★★★★★</span><q>'+r[1]+'</q><small>'+r[2]+'</small></div></div>'}).join('')}
var t=1*86400+23*3600+45*60+12;setInterval(function(){t--;var v=[Math.floor(t/86400),Math.floor(t%86400/3600),Math.floor(t%3600/60),t%60];document.querySelectorAll('.cd .n').forEach(function(n,k){var x=String(v[k%4]).padStart(2,'0'),o=n.dataset.v||n.textContent;if(n.dataset.v===x)return;n.dataset.v=x;n.innerHTML='<span class="ro"><span>'+x+'</span><span>'+o+'</span></span>'})},1000);

/* ===== LINKS: নতুন পেজ বানালে শুধু এখানে ফাইলের নাম/URL বসান, বাকি সব নিজে থেকে কাজ করবে ===== */
/* সোশ্যাল লিংক: youtube / facebook / instagram এ নিজের চ্যানেল-পেজের URL বসান */
var LINKS={youtube:'',facebook:'',instagram:'',home:'',upcoming:'',bestselling:'',college:'',school:'',courses:'',pdfpackage:'',notifications:'',cart:'',search:'',login:'',register:'',allRunning:'',allUpcoming:'',allReviews:'',buy:'',sample:''};
/* buy/sample-এ {exam} লিখলে পরীক্ষার নাম বসে যাবে, যেমন buy:'buy.html?exam={exam}' */
var IS_HOME=document.body.hasAttribute('data-home'),IDX={bn:0,en:1,hi:2};
function stor(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
var LG=stor('lang')||'bn';if(!IDX.hasOwnProperty(LG))LG='bn';
var DX={};`পড়ুন স্মার্ট, জিতুন নিশ্চিত~~Read smart, win for sure~स्मार्ट पढ़ें, पक्का जीतें
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
(Currently Running Exams)~~ ~ 
যে পরীক্ষাগুলো চলছে, তাদের PDF এখনই সংগ্রহ করুন~~Get PDFs for the exams running now~जो परीक्षाएँ चल रही हैं, उनकी PDF अभी पाएँ
সব দেখুন →~~View all →~सब देखें →
অনলিম্র PDF প্যাকেজ~আসন্ন PDF প্যাকেজ~Upcoming PDF Package~आगामी PDF पैकेज
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
Follow Us~ফলো করুন~Follow Us~फ़ॉलो करें`.split("\n").forEach(function(l){var p=l.split("~");DX[p[0]]=[p[1]||p[0],p[2],p[3]]});
var Y={buy:['এখনই কিনুন →','BUY NOW →','अभी खरीदें →'],sample:['নমুনা দেখুন','Sample Preview','नमूना देखें'],pg:['(২-৩ পৃষ্ঠা)','(2-3 Page)','(2-3 पृष्ठ)'],pw1:['PDF + ইউনিক','PDF + Unique','PDF + यूनिक'],pw2:['পাসওয়ার্ড','Password','पासवर्ड'],off:['ছাড়','OFF','छूट'],sold:['জন কিনেছেন','bought','ने खरीदा'],share:['শেয়ার','Share','शेयर']};
function tr(k){return Y[k][IDX[LG]]}
var DS={a:['বাংলা, ইতিহাস, ভূগোল, সংবিধান, অর্থনীতি, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি','Complete preparation with Bengali, History, Geography, Constitution, Economy & Current Affairs','बंगाली, इतिहास, भूगोल, संविधान, अर्थशास्त्र और करेंट अफेयर्स के साथ पूरी तैयारी'],b:['পাটিগণিত, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি','Complete preparation with Arithmetic, Reasoning, GK & Current Affairs','अंकगणित, रीज़निंग, सामान्य ज्ञान और करेंट अफेयर्स के साथ पूरी तैयारी'],c:['বাংলা, অঙ্ক, রিজনিং, সাধারণ জ্ঞান, কারেন্ট অ্যাফেয়ার্স সহ সম্পূর্ণ প্রস্তুতি','Complete preparation with Bengali, Maths, Reasoning, GK & Current Affairs','बंगाली, गणित, रीज़निंग, सामान्य ज्ञान और करेंट अफेयर्स के साथ पूरी तैयारी']};
var DK=['a','b','c','c','b','a'],TI=[['a','★ 100%',3333,1000],['b','★ 50%',1667,500],['c','★ 20%',333,100]];
function rp(n){return '₹'+n.toLocaleString('en-IN')}
function likes(){try{return JSON.parse(stor('likes')||'{}')}catch(e){return {}}}
card=function(d,id){var lk=likes()[id],sd=d[5]||0,soon=d[0]=='Offer Ending Soon';
var pr=TI.map(function(x){return '<div class="'+x[0]+'"><span>'+x[1]+'</span><s>'+rp(x[2])+'</s>'+rp(x[3])+'<em>70% '+tr('off')+'</em></div>'}).join('');
return '<div class="card"><div class="im"><img src="'+I[d[1]]+'" alt=""><span class="tag" style="background:'+col[d[0]]+'">'+(soon?'<svg class="i spin"><use href="#t"/></svg>':'')+d[0]+'</span></div><h3>'+d[2]+'<small>'+d[3]+'</small></h3><p>'+(id[0]=='a'?DS[DK[+id.slice(1)]][IDX[LG]]:'')+'</p><div class="pr">'+pr+'</div><a class="buy" data-link="buy" data-exam="'+d[2]+'">'+tr('buy')+'</a><div class="mt">'+(sd>0?'<span><svg class="i"><use href="#w"/></svg> '+sd+' '+tr('sold')+'</span>':'')+'<span class="ac"><button class="lk'+(lk?' on':'')+'" data-id="'+id+'"><svg class="i"><use href="#hr"/></svg><b>'+(lk?1:'')+'</b></button><button class="sb" data-n="'+d[2]+'"><svg class="i"><use href="#sh"/></svg>'+tr('share')+'</button></span></div><div class="ft"><div data-link="sample" data-exam="'+d[2]+'"><svg class="i"><use href="#e"/></svg><span>'+tr('sample')+'<br>'+tr('pg')+'</span></div><div><svg class="i"><use href="#l"/></svg><span>'+tr('pw1')+'<br>'+tr('pw2')+'</span></div></div></div>'};
function sec(a,p){return a.map(function(d,i){return [d,p+i]}).sort(function(x,y){return (y[0][5]||0)-(x[0][5]||0)}).map(function(z){return card(z[0],z[1])}).join('')}
function render(){if(!document.getElementById('r1'))return;document.getElementById('r1').innerHTML=sec(C1,'a');document.getElementById('r2').innerHTML=sec(C2,'b')}
var NODES=[];function scan(){var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n;while(n=w.nextNode()){var p=n.parentNode.nodeName;if(p=='SCRIPT'||p=='STYLE'||p=='OPTION')continue;var k=n.nodeValue.trim();if(DX[k])NODES.push([n,k,n.nodeValue.replace(k,'§')])}}
function apply(){NODES.forEach(function(x){x[0].nodeValue=x[2].replace('§',DX[x[1]][IDX[LG]])})}
function setLang(l){LG=l;stor('lang',l);document.getElementById('lg').value=l;document.documentElement.lang=l;apply();render()}
scan();render();document.getElementById('lg').value=LG;document.documentElement.lang=LG;apply();
var lp=document.getElementById('lp');if(lp&&IS_HOME&&!stor('langChosen'))lp.classList.add('on');
document.getElementById('lg').onchange=function(){stor('langChosen','1');setLang(this.value)};
var lx=document.getElementById('lx');if(lx)lx.onclick=function(){stor('langChosen','1');lp.classList.remove('on')};
document.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
if(b.dataset.l){stor('langChosen','1');setLang(b.dataset.l);lp.classList.remove('on')}
else if(b.classList.contains('lk')){var L=likes();if(L[b.dataset.id])delete L[b.dataset.id];else L[b.dataset.id]=1;stor('likes',JSON.stringify(L));b.classList.toggle('on');b.querySelector('b').textContent=L[b.dataset.id]?1:''}
else if(b.classList.contains('sb')){var u=location.href.split('#')[0],x=b.dataset.n+' – WBExamPDF';if(navigator.share)navigator.share({title:x,url:u}).catch(function(){});else window.open('https://wa.me/?text='+encodeURIComponent(x+' '+u),'_blank')}});
new MutationObserver(function(ms){ms.forEach(function(m){var e=m.target.nodeType==3?m.target.parentNode:m.target;if(e&&e.classList&&e.classList.contains('n')){e.classList.remove('fl');void e.offsetWidth;e.classList.add('fl')}});if(t<3600)document.querySelectorAll('.tim,.box').forEach(function(x){x.classList.add('hot')})}).observe(document.body,{subtree:true,childList:true,characterData:true});


(function(){var am=document.getElementById('am');
function tog(el,up){if(am.classList.contains('on')){am.classList.remove('on');return}var r=el.getBoundingClientRect();am.style.right=Math.max(8,innerWidth-r.right-4)+'px';am.style.top=up?'auto':(r.bottom+8)+'px';am.style.bottom=up?(innerHeight-r.top+8)+'px':'auto';am.classList.add('on')}
document.addEventListener('click',function(e){var p=e.target.closest('.pf,.pfb');if(p){e.preventDefault();tog(p,!!p.closest('.bn'));return}
if(!e.target.closest('#am'))am.classList.remove('on');
var a=e.target.closest('[data-link]');if(!a)return;e.preventDefault();var u=LINKS[a.dataset.link]||'';if(!u)return;am.classList.remove('on');if(/^(youtube|facebook|instagram)$/.test(a.dataset.link)){window.open(u,'_blank','noopener');return}location.href=u.replace('{exam}',encodeURIComponent(a.dataset.exam||''))});
document.addEventListener('keydown',function(e){if(e.key=='Escape')am.classList.remove('on')});
if(!document.getElementById('trk'))return;
var trk=document.getElementById('trk'),dots=document.getElementById('dots'),n=trk.children.length,i=0,tm;
function go(k){i=(k+n)%n;trk.style.transform='translateX(-'+i*100+'%)';[].forEach.call(dots.children,function(x,j){x.className=j==i?'on':''})}
function start(){clearInterval(tm);tm=setInterval(function(){go(i+1)},3000)}
for(var k=0;k<n;k++){(function(k){var d=document.createElement('button');d.setAttribute('aria-label','Slide '+(k+1));d.onclick=function(){go(k);start()};dots.appendChild(d)})(k)}
var sl=document.getElementById('sl'),sx=0;sl.onmouseenter=function(){clearInterval(tm)};sl.onmouseleave=start;
sl.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
sl.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40){go(i+(dx<0?1:-1));start()}});
go(0);start()})();

(function(){
if(!document.getElementById('rr'))return;
var RT={title:['আপনার রিভিউ লিখুন','Write your review','अपना रिव्यू लिखें'],open:['রিভিউ লিখুন','Write a review','रिव्यू लिखें'],rate:['আপনার রেটিং','Your rating','आपकी रेटिंग'],submit:['রিভিউ জমা দিন','Submit review','रिव्यू जमा करें'],
name:['আপনার নাম','Your name','आपका नाम'],exam:['কোন পরীক্ষার জন্য নিয়েছেন? (ঐচ্ছিক)','Which exam did you prepare for? (optional)','किस परीक्षा के लिए लिया? (वैकल्पिक)'],text:['আপনার অভিজ্ঞতা লিখুন...','Share your experience...','अपना अनुभव लिखें...'],
err:['নাম ও রিভিউ (কমপক্ষে ১০ অক্ষর) লিখুন','Please enter your name and a review (min 10 characters)','नाम और रिव्यू (कम से कम 10 अक्षर) लिखें'],
thanks:['ধন্যবাদ! আপনার রিভিউ যোগ হয়েছে','Thank you! Your review has been added','धन्यवाद! आपका रिव्यू जुड़ गया'],just:['এইমাত্র','Just now','अभी-अभी']};
function rt(k){return RT[k][IDX[LG]]}
function rtApply(){[].forEach.call(document.querySelectorAll('[data-rt]'),function(e){e.textContent=rt(e.dataset.rt)});[].forEach.call(document.querySelectorAll('[data-ph]'),function(e){e.placeholder=rt(e.dataset.ph)})}
var _sl=setLang;setLang=function(l){_sl(l);rtApply()};rtApply();

/* ---- reviews carousel: slides every 3s, jumps back to the first when finished ---- */
var r=document.getElementById('rr'),hold=false,until=0;
function step(){if(hold||Date.now()<until)return;var c=r.firstElementChild;if(!c)return;
 if(r.scrollLeft+r.clientWidth>=r.scrollWidth-6)r.scrollTo({left:0,behavior:'smooth'});else r.scrollBy({left:c.offsetWidth+10,behavior:'smooth'})}
setInterval(step,3000);
r.addEventListener('mouseenter',function(){hold=true});r.addEventListener('mouseleave',function(){hold=false});
['touchstart','pointerdown','wheel'].forEach(function(e){r.addEventListener(e,function(){until=Date.now()+6000},{passive:true})});

/* ---- user reviews (saved in this browser; set REVIEW_POST to also send to your server) ---- */
var REVIEW_POST='';
function esc(x){return String(x).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function mine(){try{return JSON.parse(stor('myReviews')||'[]')}catch(e){return []}}
function cardHTML(v){var st='★'.repeat(v.s)+'☆'.repeat(5-v.s);return '<div class="rc mine"><div class="av">'+esc(v.n.trim().charAt(0).toUpperCase())+'</div><div><b>'+esc(v.n)+'</b><span class="st">'+st+'</span><q>“'+esc(v.t)+'”</q><small>'+(v.e?esc(v.e)+' | ':'')+rt('just')+'</small></div></div>'}
mine().slice().reverse().forEach(function(v){r.insertAdjacentHTML('afterbegin',cardHTML(v))});

var rm=document.getElementById('rm'),rs=document.getElementById('rs'),rate=5,tx=document.getElementById('rtx');
function paint(){[].forEach.call(rs.children,function(b,i){b.className=i<rate?'on':''})}paint();
rs.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;rate=+b.dataset.s;paint()});
function openM(){rm.classList.add('on');document.body.style.overflow='hidden';document.getElementById('rer').textContent='';setTimeout(function(){document.getElementById('rn').focus()},50)}
function closeM(){rm.classList.remove('on');document.body.style.overflow=''}
document.getElementById('rvb').onclick=openM;document.getElementById('rmx').onclick=closeM;
rm.addEventListener('click',function(e){if(e.target===rm)closeM()});
document.addEventListener('keydown',function(e){if(e.key=='Escape')closeM()});
tx.addEventListener('input',function(){document.getElementById('rcn').textContent=tx.value.length+'/200'});
document.getElementById('rsb').onclick=function(){
 var n=document.getElementById('rn').value.trim(),e=document.getElementById('re').value.trim(),t=tx.value.trim();
 if(!n||t.length<10){document.getElementById('rer').textContent=rt('err');return}
 var v={n:n,e:e,t:t,s:rate,d:Date.now()},L=mine();L.push(v);try{stor('myReviews',JSON.stringify(L.slice(-20)))}catch(x){}
 if(REVIEW_POST){try{fetch(REVIEW_POST,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(v)}).catch(function(){})}catch(x){}}
 r.insertAdjacentHTML('afterbegin',cardHTML(v));r.scrollTo({left:0,behavior:'smooth'});until=Date.now()+8000;
 document.getElementById('rn').value='';document.getElementById('re').value='';tx.value='';document.getElementById('rcn').textContent='0/200';rate=5;paint();closeM();
 var ts=document.getElementById('ts');ts.textContent=rt('thanks');ts.classList.add('on');setTimeout(function(){ts.classList.remove('on')},3200)};

/* ---- keyboard access for social icons ---- */
document.addEventListener('keydown',function(e){if((e.key=='Enter'||e.key==' ')&&e.target.matches&&e.target.matches('.soc a')){e.preventDefault();e.target.click()}});
/* ---- respect reduced-motion for flame SVG animation ---- */
if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)[].forEach.call(document.querySelectorAll('svg.fire'),function(x){x.pauseAnimations&&x.pauseAnimations()});
})();

(function(){var h=document.querySelector('header'),last=scrollY,tm;if(!h)return;
addEventListener('scroll',function(){var y=scrollY,d=y-last;last=y;
 if(y>80&&Math.abs(d)>2){h.classList.add('hid');var am=document.getElementById('am');if(am)am.classList.remove('on')}
 else if(y<=80)h.classList.remove('hid');
 clearTimeout(tm);tm=setTimeout(function(){h.classList.remove('hid')},500)},{passive:true});
})();
/* =========================================================
   WBExamPDF — MOBILE PDF ARROW + CART
   ADD-ON ONLY
   ========================================================= */

(function () {

  /* =========================
     MOBILE ARROW STYLE
     ========================= */

  var st = document.createElement('style');

  st.textContent = `
    @media (max-width: 899px) {

      .wb-pdf-mobile-wrap {
        position: relative !important;
        width: 100% !important;
      }

      .wb-pdf-arrow {
        position: absolute !important;
        top: 50% !important;
        transform: translateY(-50%) !important;

        width: 20px !important;
        height: 20px !important;

        padding: 0 !important;
        margin: 0 !important;

        border: 1px solid rgba(6,21,58,.25) !important;
        border-radius: 50% !important;

        background: rgba(255,255,255,.95) !important;
        color: #06153a !important;

        font-family: Arial,sans-serif !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        line-height: 18px !important;

        display: none !important;

        align-items: center !important;
        justify-content: center !important;

        z-index: 999 !important;

        box-shadow: 0 1px 5px rgba(0,0,0,.18) !important;
      }

      .wb-pdf-arrow.left {
        left: 2px !important;
      }

      .wb-pdf-arrow.right {
        right: 2px !important;
      }

      /*
        PDF section screen-এ থাকলে
        arrow show + blink
      */

      .wb-pdf-mobile-wrap.wb-pdf-visible
      .wb-pdf-arrow {
        display: flex !important;

        animation:
          wbPdfArrowBlink
          1.6s
          ease-in-out
          infinite !important;
      }

      @keyframes wbPdfArrowBlink {

        0% {
          opacity: .25;
        }

        50% {
          opacity: 1;
        }

        100% {
          opacity: .25;
        }

      }

    }
  `;

  document.head.appendChild(st);


  /* =========================
     CART COUNT
     ========================= */

  function updateCartCount() {

    var data = {};

    try {
      data = JSON.parse(
        localStorage.getItem('likes') || '{}'
      );
    } catch (e) {
      data = {};
    }

    var count = 0;

    Object.keys(data).forEach(function (key) {

      if (data[key]) {
        count++;
      }

    });


    document
      .querySelectorAll('[data-link="cart"] em')
      .forEach(function (el) {

        el.textContent = count;

      });

  }


  /* =========================
     CREATE ARROWS
     ========================= */

  function addPDFArrows() {

    if (window.innerWidth >= 900) {
      return;
    }


    ['r1', 'r2'].forEach(function (id) {

      var row = document.getElementById(id);

      if (!row) {
        return;
      }


      /*
        Already created?
      */

      if (
        row.parentElement &&
        row.parentElement.classList.contains(
          'wb-pdf-mobile-wrap'
        )
      ) {

        return;

      }


      /* wrapper */

      var wrap = document.createElement('div');

      wrap.className =
        'wb-pdf-mobile-wrap';


      row.parentNode.insertBefore(
        wrap,
        row
      );

      wrap.appendChild(row);


      /* LEFT */

      var left =
        document.createElement('button');

      left.type = 'button';

      left.className =
        'wb-pdf-arrow left';

      left.textContent = '‹';

      left.setAttribute(
        'aria-label',
        'Previous PDF'
      );


      /* RIGHT */

      var right =
        document.createElement('button');

      right.type = 'button';

      right.className =
        'wb-pdf-arrow right';

      right.textContent = '›';

      right.setAttribute(
        'aria-label',
        'Next PDF'
      );


      wrap.appendChild(left);
      wrap.appendChild(right);


      /* LEFT CLICK */

      left.addEventListener(
        'click',
        function (e) {

          e.preventDefault();
          e.stopPropagation();

          row.scrollBy({

            left: -row.clientWidth,

            behavior: 'smooth'

          });

        }
      );


      /* RIGHT CLICK */

      right.addEventListener(
        'click',
        function (e) {

          e.preventDefault();
          e.stopPropagation();

          row.scrollBy({

            left: row.clientWidth,

            behavior: 'smooth'

          });

        }
      );

    });


    observePDFSections();

  }


  /* =========================
     OBSERVE PDF SECTION
     ========================= */

  var observer = null;


  function observePDFSections() {

    if (window.innerWidth >= 900) {
      return;
    }


    if (!window.IntersectionObserver) {

      /*
        Fallback
      */

      document
        .querySelectorAll(
          '.wb-pdf-mobile-wrap'
        )
        .forEach(function (el) {

          el.classList.add(
            'wb-pdf-visible'
          );

        });

      return;

    }


    if (!observer) {

      observer =
        new IntersectionObserver(

          function (entries) {

            entries.forEach(
              function (entry) {

                if (entry.isIntersecting) {

                  entry.target.classList.add(
                    'wb-pdf-visible'
                  );

                } else {

                  entry.target.classList.remove(
                    'wb-pdf-visible'
                  );

                }

              }
            );

          },

          {
            threshold: 0.05
          }

        );

    }


    document
      .querySelectorAll(
        '.wb-pdf-mobile-wrap'
      )
      .forEach(function (el) {

        observer.observe(el);

      });

  }


  /* =========================
     HEART → CART COUNT
     ========================= */

  document.addEventListener(
    'click',
    function (e) {

      var heart =
        e.target.closest &&
        e.target.closest('.lk');


      if (!heart) {
        return;
      }


      /*
        Original Heart function আগে চলবে।
      */

      setTimeout(
        updateCartCount,
        100
      );

    }
  );


  /* =========================
     INITIALIZE
     ========================= */

  function initPDFMobile() {

    addPDFArrows();

    updateCartCount();

  }


  /*
    Page সম্পূর্ণ load হওয়ার পরে
    arrow তৈরি করবে।
  */

  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      function () {

        setTimeout(
          initPDFMobile,
          300
        );

      }
    );

  } else {

    setTimeout(
      initPDFMobile,
      300
    );

  }


  /*
    Render / language change-এর পরে
    আবার check করবে।
  */

  setTimeout(
    initPDFMobile,
    1000
  );


  window.addEventListener(
    'resize',
    function () {

      if (window.innerWidth < 900) {

        addPDFArrows();

        observePDFSections();

      }

    }
  );


})();
