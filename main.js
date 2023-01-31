color0 = "#eee"; //font color
color1 = "#0055cc"; //main color
color2 = "#0044cc"; //apps number
color4 = "#002233"; //background color
color5 = "#001122"; //footer color
color10 = "#000";

var style = document.createElement("style");
style.type = "text/css";
var Nstyle = `
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;700&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Nunito", sans-serif;
}
html,
body {
  color: var(--color0);
  background: var(--color4);
  overflow-x: hidden;
}

.links {
  width: 350px;
}
.links div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links a {
  text-decoration: none;
  color: rgb(212, 212, 212);

  font-size: 20px;
}
.links a:hover {
  text-shadow: 0px 0px 6px rgb(255, 255, 255);
  color: white;
}
#check {
  display: none;
}
#check:checked ~ .links {
  right: 0px;
}
#check:checked ~ label svg:nth-child(1) {
  display: none;
}
#check:checked ~ label svg:nth-child(2) {
  display: inline-block;
}

header {
  background-color: var(--color1);
  //border:1px solid #f00;
  z-index: 200;
  opacity: 1;
  width: 100%;
  height: 50px;
  filter: drop-shadow(2px 3px 2px var(--color10));
  color: var(--color0);
  position: sticky;
  top: 0px;
  left: 0px;
}
section {
  margin-bottom: 30px;
}
header .container {
  padding-top: 3%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container {
  width: 90%;
  height: 100%;
  margin: 0px auto;
}

header .container h2 {
  letter-spacing: 2px;
  font-size: 30px;
}
header .back {
  width: 100%;
  z-index: -1;
  position: fixed;

  top: 48px;
  left: 0px;
}
header .container h1 {
  font-family: LoveMarker;
  font-size: 50px;
  margin-left: 10%;
  margin-top: -5px;

  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--color0);
  -webkit-text-fill-color: var(--color1);
}
header .container div:nth-child(1) {
  display: flex;
}

header .container .menu {
  overflow: hidden;
}
header .container .menu svg {
  width: 40px;
  height: 40px;
}
header .menu svg:nth-child(2) {
  display: none;
}
.footer {
  background-color: var(--color5);
  color: var(--color0);
  padding: 30px 0;
  border-top: 1px solid var(--color0);
  text-align: center;
  margin-bottom: 0px;
}
.loaderDiv {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: #000;
  display: inline-block;
  z-index: 300;
}
.loaderDiv p {
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translatex(-50%);
  font-size: 30px;
  text-shadow: 0px 0px 10px #000;
}
@media (max-width: 700px) {
  .links {
    position: fixed;
    top: 0px;
    right: -100vh;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vh;
    height: 100vh;
    z-index: 2;
  }

  .links div {
    position: absolute;
    right: 0px;
    top: 0px;
    background-color: black;
    width: 40vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .links div a {
    text-decoration: none;
    color: rgb(212, 212, 212);
    margin-top: 10px;
    font-size: 25px;
  }
  .links div a:hover {
    text-shadow: 0px 0px 6px rgb(255, 255, 255);
    border: 2px solid black;
    color: white;
  }
  header label {
    display: inline-block;
  }
}

                    `;
style.innerHTML = Nstyle;

body=document.getElementsByTagName("body")[0];
body.innerHTML=`<div class="loaderDiv">
  <p>
    Loading...
  </p>
</div> ${body.innerHTML}`;
const loaderDiv = document.querySelector(".loaderDiv");
const TP = 2 * Math.PI;
const CSIZE = 400;
const ctx = (() => {
  let d = document.createElement("div");
  d.style.textAlign = "center";
  loaderDiv.append(d);
  let c = document.createElement("canvas");
  c.width = c.height = 2 * CSIZE;
  d.append(c);
  return c.getContext("2d");
})();
ctx.setTransform(1, 0, 0, 1, CSIZE, CSIZE);
ctx.lineCap = "round";
ctx.lineJoin = "round";

onresize = () => {
  let D = Math.min(window.innerWidth, window.innerHeight) - 40;
  ctx.canvas.style.width = D + "px";
  ctx.canvas.style.height = D + "px";
};

const getRandomInt = (min, max, low) => {
  if (low) return Math.floor(Math.random() * Math.random() * (max - min)) + min;
  else return Math.floor(Math.random() * (max - min)) + min;
};

var colors = [];
var setColors = () => {
  colors = [];
  let colorCount = 4;
  let hue = getRandomInt(180, 270);
  for (let i = 0; i < colorCount; i++) {
    let hd = Math.round(180 / colorCount) * i + getRandomInt(-10, 10);
    let h = (hue + hd) % 360;
    colors.splice(
      getRandomInt(0, colors.length + 1),
      0,
      "hsl(" + h + ",98%,50%)"
    );
  }
};

var COUNT = 18; //getRandomInt(20,42);
var R = CSIZE / COUNT;
ctx.lineWidth = Math.round(2 * R - 4);

function RPath(initPoint, idx) {
  initPoint.d = true; // TODO, check if already true
  this.dir = idx % 2;
  this.pa = [initPoint];
  if (this.dir) this.ka = [4, 3, 5];
  else this.ka = [1, 2, 0];
  this.gr = 0;
  this.sh = 0;
  this.l = 0;
  this.kidx = idx;
  this.grow = () => {
    let pt = this.pa[this.pa.length - 1];
    for (let ipt of this.ka) {
      let cpt = pt.cpa[ipt];
      if (!cpt) continue;
      if (cpt.d) continue;
      cpt.d = true;
      this.pa.push(cpt);
      this.gr++;
      return true;
    }
    return false;
  };
  this.shrink = () => {
    if (this.pa.length > 4) this.sh = 1;
    else this.sh = 0;
    if (this.pa.length < 4) return;
    this.pa[0].d = false;
    this.pa.shift();
    this.sh = 1;
    return;
  };
  this.getPath = () => {
    let p = new Path2D();
    if (!this.sh && !this.gr) {
      p.moveTo(this.pa[1].x, this.pa[1].y);
      for (let i = 2; i < this.pa.length; i++) {
        p.lineTo(this.pa[i].x, this.pa[i].y);
      }
      return p;
    }
    if (this.sh) {
      p.moveTo(
        (1 - frac) * this.pa[0].x + frac * this.pa[1].x,
        (1 - frac) * this.pa[0].y + frac * this.pa[1].y
      );
    } else p.moveTo(this.pa[0].x, this.pa[0].y);
    for (let i = 1; i < this.pa.length - 2; i++) {
      p.lineTo(this.pa[i].x, this.pa[i].y);
    }
    let pt2 = this.pa[this.pa.length - 2];
    let pt3 = this.pa[this.pa.length - 1];
    if (this.gr == 1) {
      p.lineTo(pt2.x, pt2.y);
      p.lineTo(
        (1 - frac) * pt2.x + frac * pt3.x,
        (1 - frac) * pt2.y + frac * pt3.y
      );
    } else if (this.gr == 2) {
      if (frac < 0.5) {
        let pt1 = this.pa[this.pa.length - 3];
        let f = 2 * frac;
        p.lineTo((1 - f) * pt1.x + f * pt2.x, (1 - f) * pt1.y + f * pt2.y);
      } else {
        let f = 2 * (frac - 0.5);
        p.lineTo(pt2.x, pt2.y);
        p.lineTo((1 - f) * pt2.x + f * pt3.x, (1 - f) * pt2.y + f * pt3.y);
      }
    } else {
      p.lineTo(pt2.x, pt2.y);
      p.lineTo(pt3.x, pt3.y);
    }
    return p;
  };
}

var removePath = (idx) => {
  for (let i = 0; i < rpa[idx].pa.length; i++) rpa[idx].pa[i].d = false;
  rpa.splice(idx, 1);
};

function start() {
  if (stopped) {
    requestAnimationFrame(animate);
    stopped = false;
  } else {
    stopped = true;
  }
}

var stopped = true;
var t = 1;
var frac = 0;
var dur = 14;
function animate(ts) {
  if (stopped) return;
  t++;
  if (t == dur) {
    for (let i = 0; i < rpa.length; i++) {
      rpa[i].gr = 0;
      if (!rpa[i].grow()) rpa[i].l++;
      else rpa[i].l = 0;
      if (rpa[i].pa.length < len) rpa[i].grow();
      rpa[i].shrink();
      if (rpa[i].l > 100) {
        removePath(i);
        for (let i = 0; i < rpa.length; i++) rpa[i].l = 0;
        len++;
      }
    }
    t = 0;
  }
  frac = t / dur;
  draw();
  requestAnimationFrame(animate);
}

onresize();

var draw = () => {
  ctx.clearRect(-CSIZE, -CSIZE, 2 * CSIZE, 2 * CSIZE); // TODO, remove, black on shrink
  let pa = [new Path2D(), new Path2D(), new Path2D(), new Path2D()];
  for (let i = 0; i < rpa.length; i++) {
    pa[rpa[i].kidx % 4].addPath(rpa[i].getPath());
  }
  for (let i = 0; i < 4; i++) {
    ctx.strokeStyle = colors[i % colors.length];
    ctx.stroke(pa[i]);
  }
};

setColors();

var pts2 = [];
var setPoints2 = () => {
  let wc = (CSIZE - R) / R;
  for (let w = 0; w < wc; w++) {
    pts2[w] = [];
    let ra = TP * Math.random();
    let cc = Math.round((w + 1) * TP);
    for (let c = 0; c < cc; c++) {
      let a = ra + (TP / cc) * c;
      if (a > TP) a -= TP;
      pts2[w][c] = {
        x: (w + 1) * R * Math.cos(a),
        y: (w + 1) * R * Math.sin(a),
        a: a,
        w: w,
        cpa: []
      };
      if (w == 0) pts2[w][c].d = true;
    }
    pts2[w].sort((a, b) => {
      return a.a - b.a;
    });
  }
};

setPoints2();

for (let w = 0; w < pts2.length; w++) {
  for (let c = 0; c < pts2[w].length; c++) {
    // +in, +even, +out, -out, -even, -in
    pts2[w][c].cpa[1] = pts2[w][(c + 1) % pts2[w].length];
    pts2[w][c].cpa[4] = pts2[w][(c + pts2[w].length - 1) % pts2[w].length];
    if (w == 0) {
      pts2[w][c].cpa[0] = false;
      pts2[w][c].cpa[5] = false;
      for (let i = 0; i < pts2[1].length; i++) {
        if (pts2[1][i].a > pts2[0][c].a) {
          pts2[0][c].cpa[2] = pts2[1][i];
          pts2[0][c].cpa[3] =
            pts2[1][(i + pts2[1].length - 1) % pts2[1].length];
          break;
        }
      }
    } else if (w == pts2.length - 1) {
      pts2[w][c].cpa[2] = false;
      pts2[w][c].cpa[3] = false;
      let pta = pts2[pts2.length - 2];
      for (let i = 0; i < pta.length; i++) {
        if (pta[i].a > pts2[w][c].a) {
          pts2[w][c].cpa[0] = pta[i];
          pts2[w][c].cpa[5] = pta[(i + pta.length - 1) % pta.length];
          break;
        }
      }
    } else {
      for (let i = 0; i < pts2[w - 1].length; i++) {
        if (pts2[w - 1][i].a > pts2[w][c].a) {
          pts2[w][c].cpa[0] = pts2[w - 1][i];
          pts2[w][c].cpa[5] =
            pts2[w - 1][(i + pts2[w - 1].length - 1) % pts2[w - 1].length];
          break;
        }
      }
      for (let i = 0; i < pts2[w + 1].length; i++) {
        if (pts2[w + 1][i].a > pts2[w][c].a) {
          pts2[w][c].cpa[2] = pts2[w + 1][i];
          pts2[w][c].cpa[3] =
            pts2[w + 1][(i + pts2[w + 1].length - 1) % pts2[w + 1].length];
          break;
        }
      }
    }
  }
}

var rpa = new Array();

for (let i = 0; i < 36; i++) {
  let rw = getRandomInt(0, pts2.length);
  let rc = getRandomInt(0, pts2[rw].length);
  let rpt = pts2[rw][rc];
  while (rpt.d) {
    rw = getRandomInt(0, pts2.length);
    rc = getRandomInt(0, pts2[rw].length);
    rpt = pts2[rw][rc];
  }
  rpa.push(new RPath(rpt, i));
}

var len = pts2[pts2.length - 1].length;
for (let i = 0; i < len; i++) {
  for (let j = 0; j < rpa.length; j++) {
    rpa[j].grow();
  }
}

for (let i = 0; i < rpa.length; i++) {
  if (rpa[i].pa.length > 2) {
    rpa[i].gr = 1;
    rpa[i].sh = 1;
  }
  if (rpa[i].pa.length < 2) removePath(i);
}

ctx.lineWidth = 0.7 * R;

start();
body.style = `
    --color0:${color0};
    --color1:${color1};
    --color2:${color2};
    --color4:${color4};
    --color5:${color5};
    --color10:${color10};
    `;
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
window.addEventListener("load", function () {
  loaderDiv.style.display = "none";
  document.getElementsByTagName("head")[0].appendChild(style);
});
