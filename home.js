bannerNum = 7;
bannerSpeed = 30;
recentNum = 7;

var keyFrames = `
 @keyframes slidy { 
        
            0%,${(0.5 * 86) / bannerNum}%{
                transform : translateX(0%);
            }            
            ${(0.5 * 86) / bannerNum + 2}%,${(1.5 * 86) / bannerNum + 2}%{
                transform : translateX(-12.5%);
            }
            ${(1.5 * 86) / bannerNum + 4}%,${(2.5 * 86) / bannerNum + 4}%{
                transform : translateX(-25%);
            }
            ${(2.5 * 86) / bannerNum + 6}%,${(3.5 * 86) / bannerNum + 6}%{
                transform : translateX(-37.5%);
            }
            ${(3.5 * 86) / bannerNum + 8}%,${(4.5 * 86) / bannerNum + 8}%{
                transform : translateX(-50%);
            }
            ${(4.5 * 86) / bannerNum + 10}%,${(5.5 * 86) / bannerNum + 10}%{
                transform : translateX(-62.5%);
            }
            ${(5.5 * 86) / bannerNum + 12}%,${(6.5 * 86) / bannerNum + 12}%{
                transform : translateX(-75%);
            }
            ${(6.5 * 86) / bannerNum + 14}%,100%{
                transform : translateX(-87.5%);
            }
            
        }
            
         
                
                    `;
style.innerHTML+= keyFrames;


img = document.querySelector(".back");
img.innerHTML = `
  <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color=${color1} offset="0%"></stop><stop stop-color=${color1} offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,20L10,16.7C20,13,40,7,60,10C80,13,100,27,120,28.3C140,30,160,20,180,23.3C200,27,220,43,240,41.7C260,40,280,20,300,10C320,0,340,0,360,10C380,20,400,40,420,51.7C440,63,460,67,480,58.3C500,50,520,30,540,30C560,30,580,50,600,48.3C620,47,640,23,660,18.3C680,13,700,27,720,40C740,53,760,67,780,65C800,63,820,47,840,48.3C860,50,880,70,900,68.3C920,67,940,43,960,43.3C980,43,1000,67,1020,71.7C1040,77,1060,63,1080,50C1100,37,1120,23,1140,26.7C1160,30,1180,50,1200,50C1220,50,1240,30,1260,28.3C1280,27,1300,43,1320,51.7C1340,60,1360,60,1380,65C1400,70,1420,80,1430,85L1440,90L1440,100L1430,100C1420,100,1400,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,100,80,100,60,100C40,100,20,100,10,100L0,100Z"></path></svg>
    `;

icon = document.querySelector("header .container .menu label");
icon.innerHTML += `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill=${color0} stroke="none">
<path d="M2321 5110 c-497 -48 -990 -251 -1376 -565 -114 -92 -294 -274 -384
-387 -229 -287 -417 -675 -495 -1023 -49 -218 -60 -325 -60 -575 0 -250 11
-357 60 -575 79 -355 272 -749 509 -1040 92 -114 274 -294 387 -384 287 -229
675 -417 1023 -495 218 -49 325 -60 575 -60 250 0 357 11 575 60 261 58 603
204 828 353 389 259 688 599 893 1016 125 255 196 484 241 775 24 161 24 539
0 700 -45 291 -116 520 -241 775 -134 272 -283 480 -498 692 -211 209 -404
346 -673 478 -252 124 -486 197 -765 240 -126 19 -468 27 -599 15z m474 -430
c656 -74 1243 -450 1591 -1020 275 -452 369 -998 263 -1530 -113 -567 -480
-1085 -989 -1396 -452 -275 -998 -369 -1530 -263 -567 113 -1085 480 -1396
989 -156 258 -260 562 -294 865 -22 200 -10 457 31 665 113 567 480 1085 989
1396 251 153 562 260 850 293 107 12 379 13 485 1z"/>
<path d="M1437 3616 c-66 -18 -104 -52 -137 -121 -25 -52 -25 -109 1 -165 27
-60 45 -79 104 -106 l50 -24 1105 0 c1089 0 1106 1 1150 21 60 27 79 45 106
104 40 85 24 172 -42 239 -65 65 11 61 -1194 63 -867 1 -1105 -1 -1143 -11z"/>
<path d="M1405 2751 c-72 -32 -125 -113 -125 -191 0 -78 53 -159 125 -191 38
-18 98 -19 1155 -19 1057 0 1117 1 1155 19 72 32 125 113 125 191 0 78 -53
159 -125 191 -38 18 -98 19 -1155 19 -1057 0 -1117 -1 -1155 -19z"/>
<path d="M1405 1896 c-27 -13 -58 -32 -67 -42 -29 -33 -58 -107 -58 -149 0
-79 65 -171 139 -197 53 -19 2229 -19 2282 0 74 26 138 118 139 197 0 44 -36
131 -66 157 -11 9 -40 26 -64 37 -44 20 -61 21 -1150 21 l-1105 0 -50 -24z"/>
</g>
</svg>

<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill=${color0} stroke="none">
<path d="M2332 5110 c-611 -59 -1163 -320 -1589 -751 -406 -411 -648 -908
-725 -1489 -16 -123 -16 -497 0 -620 77 -581 319 -1078 725 -1489 214 -216
414 -360 692 -496 366 -181 705 -259 1120 -259 224 0 326 9 510 46 603 121
1134 450 1525 946 141 179 292 455 374 684 529 1471 -349 3055 -1874 3382
-209 45 -554 65 -758 46z m485 -405 c158 -20 289 -48 414 -89 708 -230 1253
-816 1428 -1537 338 -1395 -732 -2722 -2159 -2676 -246 8 -416 37 -633 109
-592 196 -1086 666 -1321 1258 -106 269 -152 539 -143 850 6 220 26 356 81
545 106 367 296 678 582 955 339 327 744 521 1224 584 142 19 383 19 527 1z"/>
<path d="M1781 3448 c-49 -24 -95 -87 -105 -144 -5 -21 -1 -55 8 -87 14 -48
36 -73 311 -347 l295 -295 -289 -290 c-159 -159 -296 -304 -304 -320 -51 -101
-12 -221 87 -272 42 -22 132 -21 176 2 19 10 166 147 325 306 l291 289 284
-286 c162 -162 302 -294 325 -306 85 -45 200 -16 252 63 35 53 43 140 18 190
-9 19 -148 166 -308 326 l-292 293 292 293 c191 191 298 305 308 329 69 166
-100 334 -260 259 -26 -12 -141 -120 -325 -305 -157 -157 -289 -286 -295 -286
-5 0 -140 130 -300 290 -192 191 -303 294 -327 305 -52 21 -115 19 -167 -7z"/>
</g>
</svg>

    `;

let apps = [
  {
    name: "pubg mobile",
    icon:
      "pubg.png",
    page: "pubg.html"
  },
  {
    name: "pubg mobile",
    icon:
      "pubg.png",
    page: "pubg.html"
  },
  {
    name: "pubg mobile",
    icon:
      "pubg.png",
    page: "pubg.html"
  },
  {
    name: "pubg mobile",
    icon:
      "pubg.png",
    page: "pubg.html"
  },
  {
    name: "pubg mobile",
    icon:
      "pubg.png",
    page: "pubg.html"
  },
  {
    name: "pubg mobile",
    icon:"pubg.png",
    page: "pubg.html"
  },
  {
    name: "pubg mobile",
    icon:
      "pubg.png",
    page: "pubg.html"
  }
];
Rgames = document.getElementById("Rgames");
for (let i = 1; i <= recentNum; i++) {
  name = apps[i - 1].name;
  icon = apps[i - 1].icon;
  page = apps[i - 1].page;
  Rgames.innerHTML += `
    <div>
                   
                       <p>#0${i}</p>
                   <img src=\"${icon}\" alt="">
                    <h1>${name}</h1>
                   </div>
                   
    
    `;
}

Pgames = document.getElementById("Pgames");
for (let i = 1; i <= recentNum; i++) {
  name = apps[i - 1].name;
  icon = apps[i - 1].icon;
  page = apps[i - 1].page;
  Pgames.innerHTML += `
    <div>
                   
                       <p>#0${i}</p>
                   <img src=\"${icon}\" alt="">
                    <h1>${name}</h1>
                   </div>
                   
    
    `;
}

bigDiv = document.querySelector(".bigDiv");
bigDiv.style = `animation :${bannerSpeed}s slidy infinite;width:${
  (bannerNum + 1) * 100
}%`;

let banner = [];
function newB(i) {
  a = "back";
  b = a + i + ".jpg";
  c = a + i + ".html";
  return b, c;
}
for (let i = 1; i <= bannerNum; i++) {
  newB(i);
  let newBanner = {
    background: `${b}`,
    page: `${c}`
  };

  banner.push(newBanner);
  bigDiv = document.querySelector(".bigDiv");

  if (i < bannerNum) {
    bigDiv.innerHTML += `
      <div></div>
`;
  } else {
    bigDiv.innerHTML += `
      <div></div>
      <div></div>
`;
  }
}
loader = document.querySelector(".loaderDiv");

window.addEventListener("load", function () {
  loader.style.display = "none";
  document.getElementsByTagName("head")[0].appendChild(style);
});
