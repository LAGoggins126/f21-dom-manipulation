// This variable will be used by the below functions to know which plate to add to
let currentPlateElement;

function setPlate(plateElement)
{
    // 1) Assign the current plate element to be the plate element passed in as a parameter
    currentPlateElement = plateElement;
}

function addIngredientToTop(ingredientElement)
{
    // 2) Add the ingredient element to the top (i.e. beginning) of the current plate element
    currentPlateElement.prepend(ingredientElement);
}

function addIngredientToBottom(ingredientElement)
{
    // 3) Add the ingredient element to the bottom (i.e. end) of the current plate element
    currentPlateElement.appendChild(ingredientElement);
}

function changeIngredient(oldIngredientElement, newIngredientElement)
{
    // 4) For the current plate, replace the old ingredient element with the new ingredient element
    currentPlateElement.replaceChild(newIngredientElement , oldIngredientElement);
}

function removeIngredient(ingredientElement)
{
    // 5) For the current plate, remove the ingredient element provided
    currentPlateElement.removeChild(ingredientElement);
}