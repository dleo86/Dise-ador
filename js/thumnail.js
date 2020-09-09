  const controls=document.querySelector(".controls");
  const container=document.querySelector(".thumbnail-container");
  const img = document.querySelectorAll('.imagenes');
  //const texto = document.querySelectorAll('.slide-copy');
  const texto1 = document.querySelector('#uno');
  const texto2 = document.querySelector('#dos');
  const texto3 = document.querySelector('#tres');
  const texto4 = document.querySelector('#cuatro');
  const texto5 = document.querySelector('#cinco');
  const texto6 = document.querySelector('#seis');
  const texto7 = document.querySelector('#siete');
  const texto8 = document.querySelector('#ocho');
  const texto9 = document.querySelector('#nueve');
  const texto10 = document.querySelector('#diez');

  const allBox=container.children;
  const containerWidth=container.offsetWidth; //offsetWidth devuelve el ancho del container
  const margin=30;
  var items=0;
  var totalItems=0;
  var jumpSlideWidth=0;


  // item setup per slide

 responsive=[
  {breakPoint:{width:0,item:1}}, //if width greater than 0 (1 item will show) 
  {breakPoint:{width:600,item:1}}, //if width greater than 600 (2  item will show) 
  {breakPoint:{width:1000,item:1}} //if width greater than 1000 (1 item will show) 
 ]

 function load(){
     for(let i=0; i<responsive.length; i++){
     	if(window.innerWidth > responsive[i].breakPoint.width){
     		items=responsive[i].breakPoint.item
     	}
     }
     start();
 }
 
 function start(){
 	var totalItemsWidth=0;
 	for(let i=0;i<allBox.length;i++){
        // width and margin setup of items
        //console.log(allBox[i]);
 		allBox[i].style.width=(containerWidth/items)-margin + "px";
 		allBox[i].style.margin=(margin/2)+ "px";
    totalItemsWidth+=containerWidth/items;
    totalItems++;
 	}
 	// thumbnail-container width set up
 	container.style.width = totalItemsWidth + "px";
 	// slides controls number set up
 	const allSlides=Math.ceil(totalItems/items);
  const ul=document.createElement("ul");
  for(let i=1;i<=allSlides;i++){
          const li=document.createElement("li");
          //const img = document.createElement("img"); 
          li.id=i;
          li.innerHTML=i;
          li.setAttribute("onclick","controlSlides(this)");
          //li.appendChild(img[i]);
          //console.log(img[i].src);
          ul.appendChild(li);
          if(i==1){
            li.className="active";
          }
  }
        controls.appendChild(ul);
}

    // when click on numbers slide to next slide
 function controlSlides(ele){
       // select controls children  'ul' element 
       const ul=controls.children;

       // select ul children 'li' elements;
      const li=ul[0].children
      var active;
     
     ele.id == 1 ?  texto1.style.visibility = "visible" : texto1.style.visibility = "hidden";
     ele.id == 2 ?  texto2.style.visibility = "visible" : texto2.style.visibility = "hidden";
     ele.id == 3 ?  texto3.style.visibility = "visible" : texto3.style.visibility = "hidden";
     ele.id == 4 ?  texto4.style.visibility = "visible" : texto4.style.visibility = "hidden";
     ele.id == 5 ?  texto5.style.visibility = "visible" : texto5.style.visibility = "hidden";
     ele.id == 6 ?  texto6.style.visibility = "visible" : texto6.style.visibility = "hidden";
     ele.id == 7 ?  texto7.style.visibility = "visible" : texto7.style.visibility = "hidden";
     ele.id == 8 ?  texto8.style.visibility = "visible" : texto8.style.visibility = "hidden";
     ele.id == 9 ?  texto9.style.visibility = "visible" : texto9.style.visibility = "hidden";
     ele.id == 10 ? texto10.style.visibility = "visible" : texto10.style.visibility = "hidden";
 
       for(let i=0;i<li.length;i++){
       	if(li[i].className=="active"){
       		// find who is now active
       		active=i;
       		// remove active class from all 'li' elements
       		li[i].className="";
          }
          //console.log(i);
         
       }
       // add active class to current slide
       ele.className="active";
      // console.log(ele.id); muestra el valor de ele
       var numb=(ele.id-1)-active;
       jumpSlideWidth = jumpSlideWidth + (containerWidth * numb);
       container.style.marginLeft = -jumpSlideWidth + "px";
 }
 //////////////////* ABRIR MODAL *///////////////////
 const modalBtn1 = document.querySelector("#img1");
 const copia1 = modalBtn1.cloneNode(true);

 const modalBtn2 = document.querySelector("#img2");
 const copia2 = modalBtn2.cloneNode(true);

 const modalBtn3 = document.querySelector("#img3");
 const copia3 = modalBtn3.cloneNode(true);

 const modalBtn4 = document.querySelector("#img4");
 const copia4 = modalBtn4.cloneNode(true);

 const modalBtn5 = document.querySelector("#img5");
 const copia5 = modalBtn5.cloneNode(true);

 const modalBtn6 = document.querySelector("#img6");
 const copia6 = modalBtn6.cloneNode(true);

 const modalBtn7 = document.querySelector("#img7");
 const copia7 = modalBtn7.cloneNode(true);

 const modalBtn8 = document.querySelector("#img8");
 const copia8 = modalBtn8.cloneNode(true);

 const modalBtn9 = document.querySelector("#img9");
 const copia9 = modalBtn9.cloneNode(true);

 const modalBtn10 = document.querySelector("#img10");
 const copia10 = modalBtn10.cloneNode(true);

 const modal = document.querySelector(".modal-overlay");
 const contenedor = document.querySelector(".modal-container");
 const closeBtn = document.querySelector(".close-btn");
 
 modalBtn1.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia1);
   
 });
 
 modalBtn2.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia2);
 });

 modalBtn3.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia3);
 });
 modalBtn4.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia4);
 });
 modalBtn5.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia5);
 });
 modalBtn6.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia6);
 });
 modalBtn7.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia7);
 });
 modalBtn8.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia8);
 });
 modalBtn9.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia9);
 });
 modalBtn10.addEventListener("click", function () {
   modal.classList.add("open-modal");
   if (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.lastChild);
   }
   contenedor.appendChild(copia10);
 });
 closeBtn.addEventListener("click", function () {
  
  /* contenedor.removeChild(copia1);
   contenedor.removeChild(copia2);
   contenedor.removeChild(copia3);
   contenedor.removeChild(copia4);
   contenedor.removeChild(copia5);
   contenedor.removeChild(copia6);
   contenedor.removeChild(copia7);
   contenedor.removeChild(copia8);
   contenedor.removeChild(copia9);
   contenedor.removeChild(copia10);*/
   modal.classList.remove("open-modal");
 });

 ////////////////*FIN ABRIR MODAL*//////////////////////////////
window.onload=load();


