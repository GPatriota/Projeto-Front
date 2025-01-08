function toogleMode(){
  const html = document.documentElement

  if(html.classList.contains('light')){
    html.classList.remove('light')
  } else{
    html.classList.add('light')
  }

  /* outro jeito
  html.classList.toogle('light')
  */

  const img = document.querySelector("#profile img")
  //logica pra mudar a foto
  if (html.classList.contains("light")){
    img.setAttribute("src", "./Assets/Profile Image.png")
    img.setAttribute("alt", "Foto do Gustavo Patriota Silva")
    
  } else{
    img.setAttribute("src", "./Assets/Profile-Image.png")
    img.setAttribute("alt", "Foto do Gustavo Patriota Silva teste")
  }


}