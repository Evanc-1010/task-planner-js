//adding btn for random place img:
let addbtn = document.createElement("button");
addbtn.innerHTML = "Add Random Img";

let btnarea = document.querySelector('.testbutton');
btnarea.appendChild(addbtn);


//array for the random img:
let selectorArray = [

]


// creating and changed and header text:
let h1 = document.createElement("h1");
h1.innerHTML = "I am the header";

let h1selectArea = document.querySelector('.topbutton');
h1selectArea.appendChild(h1);
h1.innerHTML = "header text changed";

// removed header text from parent:
h1selectArea.lastChild.remove();




//adding btn for youtube video:
let addbtnYT = document.createElement("button");
addbtnYT.innerHTML = "Add Youtube Video";
btnarea.appendChild(addbtnYT);

//add a youtube iframe:
let iframe;
h1selectArea.appendChild(iframe); //declared in js:19


addbtnYT.addEventListener("click", () => {
    iframe.innerHTML= '<iframe> width="560" height="315" src="https://www.youtube-nocookie.com/embed/5fb2aPlgoys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
});



