/* Lines 1-8 contain code for plate setup and should not be modified! */
setPlate(document.querySelector("#plate-two"));

let p2TopBurgerBun = getNewTopBurgerBun();
let p2BaconStrips = getNewBaconStrips();

addIngredientToBottom(p2TopBurgerBun);
addIngredientToBottom(p2BaconStrips);

/*
Add your code below this comment to finish creating the following sandwich:

- Top Burger Bun
- Bacon Strips
- Cheese Slice
- Chicken Patty
- Bottom Burger Bun

Note: To finish creating your sandwich, use
        "addIngredientToTop", "addIngredientToBottom",
        "changeIngredient", and/or "removeIngredient"
*/

let p2Cheese = getNewCheeseSlice();
let p2Chicken = getNewChickenPatty();
let p2BottomBun = getNewBottomBurgerBun();


addIngredientToBottom(p2Cheese);
addIngredientToBottom(p2Chicken);
addIngredientToBottom(p2BottomBun);






