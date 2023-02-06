



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
  <a href="game/games.html">
  <div>
                 
                     <p>#0${i}</p>
                 <img src=\"${icon}\" alt="">
                  <h1>${name}</h1>
                 </div>
                 </a>
                 
  
  `;
}

Pgames = document.getElementById("Pgames");
for (let i = 1; i <= recentNum; i++) {
  name = apps[i - 1].name;
  icon = apps[i - 1].icon;
  page = apps[i - 1].page;
  Pgames.innerHTML += `
    <a href="game/games.html">
    <div>
                   
                       <p>#0${i}</p>
                   <img src=\"${icon}\" alt="">
                    <h1>${name}</h1>
                   </div>
                   </a>
                   
    
    `;
}

