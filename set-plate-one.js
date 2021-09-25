/* Lines 1-8 contain code for plate setup and should not be modified! */
setPlate(document.querySelector("#plate-one"));

let p1ChickenPatty = getNewChickenPatty();
let p1BottomBurgerBun = getNewBottomBurgerBun();

addIngredientToBottom(p1ChickenPatty);
addIngredientToBottom(p1BottomBurgerBun);

/*
Add your code below this comment to finish creating the following sandwich:

- Top Burger Bun
- Tomato
- Lettuce
- Cheese Slice
- Chicken Patty
- Bottom Burger Bun

Note: To finish creating your sandwich, use
        "addIngredientToTop", "addIngredientToBottom",
        "changeIngredient", and/or "removeIngredient"
*/

let p1CheeseSlice = getNewCheeseSlice();
let p1Lettuce = getNewLettuceLeaf();
let p1Tomato = getNewTomatoSlice();
let p1TopBun = getNewTopBurgerBun();

addIngredientToTop(p1CheeseSlice);
addIngredientToTop(p1Lettuce);
addIngredientToTop(p1Tomato);
addIngredientToTop(p1TopBun);





