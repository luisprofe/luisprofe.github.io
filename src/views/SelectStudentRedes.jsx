import React from "react";



export default (props) => {

  const students = ["Alejandro"
    ,"Carlos"
    ,"César"
    ,"Daniel"
    ,"Gonzalo"
    ,"Iván"
    ,"Javier"
    ,"Jorge Manzano"
    ,"Jorge Villagómez"
    ,"Laura"
    ,"Marcos"
    ,"Nayas"
    ,"Pablo Aguirre"
    ,"Pablo Alférez"
    ,"Pablo Cavero"
    ,"Enmanuel"
    ,"Rodrigo"
    ,"Sergio Picón"
    ,"Sergio Prados"
    ,"Zigor"]

  const randomStudent = students[Math.floor(Math.random()*students.length)];
  

  
  return(
    <>
        <div class="jumbotron" style={{"minHeight": "100vh", "display": "flex", "alignItems": "center"}}>
          <div class="container">
            <h1 style={{"fontSize":"100px"}}>{randomStudent}</h1>
          </div>
        </div>


    </>
  )
}