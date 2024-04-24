const getcolor = () => {
    const randomnum="#"+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=randomnum;
    
}
document.getElementById("btn").addEventListener("click",getcolor);