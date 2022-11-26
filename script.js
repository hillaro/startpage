
const closeall = () => {

    document.getElementById("schoolcontent").style.display = "none";
    document.getElementById("socialcontent").style.display = "none";
    document.getElementById("workcontent").style.display = "none";
}


 
const openSchool = () => {
    closeall();
    document.getElementById("schoolcontent").style.display = "block";
    
  
}

const openSocial = () => {
    closeall();
    document.getElementById("socialcontent").style.display = "block";
   
  
}

const openWork = () => {
    closeall();
    document.getElementById("workcontent").style.display = "block";
    
  
}

window.onload(openSchool());


