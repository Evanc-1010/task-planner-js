//adding btn for random 5 place img:
let addbtnImg = document.createElement("button");
addbtnImg.innerHTML = "Generate Img";

let btnloc = document.querySelector('.testbutton');
btnloc.appendChild(addbtnImg);

let h1selectArea = document.querySelector('.topbutton');


// add a topdiv for img
let topdiv = document.createElement("div");
topdiv.id = "topdiv";
h1selectArea.insertAdjacentElement("afterend", topdiv);

let luckyNum;
let indexDraw = () => {
    luckyNum = Math.floor(Math.random() * 5);
    return luckyNum;
}


//array for the random img:
let queryArray = [
    document.querySelector('#topdiv'),
    document.querySelector('.item1'),
    document.querySelector('.item2'),
    document.querySelector('.item3'),
    document.querySelector('.item4')
]



// random img btn clicked:
addbtnImg.addEventListener("click", () => {
    indexDraw();
    let insertImg = document.createElement("img");
    insertImg.src = "./image/workload-planning.png";
    insertImg.style.width = "200px";
    queryArray[luckyNum].appendChild(insertImg);
    setTimeout(() => {
        insertImg.remove();
    }, 2000)
});


/* removeEventListener */




// creating header text btn
let addbtnHdertxt = document.createElement("button");
addbtnHdertxt.innerHTML = "Header Text";
btnloc.appendChild(addbtnHdertxt);

// creating header text:
let h1 = document.createElement("h1");

addbtnHdertxt.addEventListener("click", () => {
    h1.innerHTML = "Welcome to AJa! Task Planner";
    h1.style.color = "black";
    h1.style.display = "flex";
    h1.style.justifyContent = "center";
    h1selectArea.appendChild(h1);
    addbtnHdertxt.innerHTML = "Close Header";
});

addbtnHdertxt.addEventListener("dblclick", () => {
    //changed header text:
    h1.innerHTML = "Feel free to explore here!";
    h1.style.color = "white";
    addbtnHdertxt.innerHTML = "Header Text";
    setTimeout(() => {
        // removed header text from parent:
        h1.remove();
    }, 1500);
});




//adding btn for youtube video:
let addbtnYT = document.createElement("button");
addbtnYT.innerHTML = "Watch Youtube";
btnloc.appendChild(addbtnYT);//declared in js:6

//add a youtube iframe with div:
let ifmDiv = document.createElement("div");
h1selectArea.appendChild(ifmDiv); //declared in js:19

addbtnYT.addEventListener("click", () => {
    addbtnYT.innerHTML = "Close Youtube";
    ifmDiv.style.display = 'revert';
    ifmDiv.style.display = 'flex';
    ifmDiv.style.justifyContent = 'center';
    ifmDiv.style.width = '100%';
    ifmDiv.innerHTML = '<iframe width="50%" height="480" src="https://www.youtube-nocookie.com/embed/5fb2aPlgoys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
});

addbtnYT.addEventListener("dblclick", () => {
    addbtnYT.innerHTML = "Watch Youtube";
    ifmDiv.style.display = 'none';
});
