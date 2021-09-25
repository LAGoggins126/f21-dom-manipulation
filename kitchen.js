// For each of the following functions:
// 1) Create a new "div" element
// 2) Set the new element's class name to the corresponding ingredient type (see: styles.css)
// 3) Return the element

function getNewTopBurgerBun()
{ 
    let topBun = document.createElement("div");
    topBun.setAttribute("class","top-burger-bun");
    return topBun;
}

function getNewBottomBurgerBun()
{
    let bottomBun = document.createElement("div");
    bottomBun.setAttribute("class","bottom-burger-bun");
    return bottomBun;
}

function getNewToast()
{
    let toast = document.createElement("div");
    toast.setAttribute("class","toast");
    return toast;
}

function getNewChickenPatty()
{
    let chickenPatty = document.createElement("div");
    chickenPatty.setAttribute("class","chicken-patty");
    return chickenPatty;
}

function getNewCheeseSlice()
{
    let cheese = document.createElement("div");
    cheese.setAttribute("class","cheese-slice");
    return cheese;
}

function getNewLettuceLeaf()
{
    let lettuce = document.createElement("div");
    lettuce.setAttribute("class","lettuce-leaf");
    return lettuce;
}

function getNewTomatoSlice()
{
    let tomato = document.createElement("div");
    tomato.setAttribute("class","tomato-slice");
    return tomato;
}

function getNewBaconStrips()
{
    let bacon = document.createElement("div");
    bacon.setAttribute("class","bacon-strips");
    return bacon
}