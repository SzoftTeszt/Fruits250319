console.log("Üdv, én vagyok a script!")
// document.getElementsByTagName("div")[0]
// .innerHTML="Helló, helló!"

let gykosar= document.getElementsByClassName("gykosar")[0]

let s=""
for (let i = 1; i < 7; i++) {
  // s += '<div class="box">'+i+'</div>'

  // s +=
  //  `<div class="box">
  //   <img src="./pics/image${i}.jpg" alt="Gyümölcs">
  // </div>`
  
  let box = document.createElement("div")
  box.className="box"

  let image = document.createElement("img")
  image.src=`./pics/image${i}.jpg`
  image.alt="Gyümölcs"
  box.appendChild(image)


  let boxcontent= document.createElement("div")
  boxcontent.className="boxcontent"
  box.appendChild(boxcontent)  

  let h3= document.createElement("h3")
  h3.innerHTML="Fruits..."
  boxcontent.appendChild(h3)  

  let bekezdes = document.createElement("p")
  bekezdes.innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, itaque sunt. Incidunt."
  boxcontent.appendChild(bekezdes)

  let a = document.createElement("a")
  a.href="#"
  a.className="btn"
  a.innerHTML="részletek"
  boxcontent.appendChild(a)

  gykosar.appendChild(box)

}

let boxok = document.getElementsByClassName("box")
for (let i = 1; i < boxok.length; i=i+2) {
  boxok[i].classList.add("leftmargin")  
}


// document.getElementsByClassName("gykosar")[0]
// .innerHTML=s