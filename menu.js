
//list of dishes and their prices on the menu
const MENU = {
    "Appetizers": [
        ["Fried Wonton (10pcs)", 5.50],
        ["Egg Roll (4pcs)", 5.50],
        ["Paper Wrapped Chicken (5pcs)", 6.50],
        ["Fried Shrimp (5pcs)", 6.75],
        ["Crystal Wrap Shrimp (8pcs)", 7.50],
        ["Shrimp and Pork Dumpling (8pcs)", 7.50],
        ["BBQ Pork", 7.95],
        ["BBQ Sparerib (3pcs)", 7.95],
        ["Pot Stickers (8pcs)", 7.50],
        ["Assorted Appetizers", 7.50]
    ],
    "Soup": [
        ["Hot and Sour Soup", 8.50],
        ["House Special Wonton Soup", 9.95],
        ["Minced Chicken with Sweet Corn Soup", 8.50],
        ["Assorted Winter Melon Soup", 9.75],
        ["Three Ingredients with Sizzling Rice Soup", 10.95],
        ["Assorted Seafood Soup", 10.95],
        ["Crab Meat with Fish Maw Soup", 14.95]
    ],
    "Noodle Soup": [
        ["Chicken Noodle Soup or Rice Noodle Soup", 7.75],
        ["Beef Noodle Soup or Rice Noodle Soup", 7.75],
        ["Seafood Noodle Soup or Rice Noodle Soup", 8.75],
        ["Beef Tenders in Noodle Soup or Rice Noodle Soup", 8.75]
    ],
    "Bean Curd": [
        ["Bean Curd Sichuan Style", 8.95],
        ["Braised Bean Curd in Brown Sauce", 8.95],
        ["Crispy Deep Fried Bean Curd with Three Ingredients", 10.95],
        ["Braised Bean Curd with Eggplant", 9.75],
        ["Bean Curd with Special Sauce", 10.95]
    ],
    "Chicken": [
        ["Lemon Fillet Chicken", 10.95],
        ["Chicken with Orange Sauce", 10.95],
        ["Kung Pao Chicken", 9.50],
        ["Tangerine Chicken", 10.95],
        ["Chicken with Cashew Nuts", 9.50],
        ["Chicken Sichuan Style", 9.50],
        ["Slippery Chicken", 9.50],
        ["Crispy Deep Fried Chicken", 10.50]
    ],
    "Pork": [
        ["Pork Belly with Dry Bean Curd", 9.50],
        ["Moo Shu Pork", 9.50],
        ["Sweet and Sour Pork", 9.50],
        ["Baked Pork Chop with Spicy Salt", 9.50],
        ["Shredded Pork Sichuan Style", 9.50],
        ["Pork Chop Peking Style", 9.50],
        ["Steamed Minced Pork with Salty Fish", 10.95],
        ["Double Cooked Pork", 9.50]
    ],
    "Beef": [
        ["Mongolian Beef", 10.95],
        ["Tangerine Beef", 10.95],
        ["Sliced Beef with Broccoli", 10.95],
        ["Kung Pao Beef", 10.95],
        ["Diced Beef Steak French Style", 13.95],
        ["Steak Chinese Style", 13.95]
    ],
    "Shrimp": [
        ["Kung Pao Shrimp", 11.50],
        ["Shrimp with Lobster Sauce", 11.50],
        ["Shrimp with Spicy Salt", 11.50],
        ["Sweet and Sour Shrimp", 11.50],
        ["Honey Walnut Creamy Shrimp", 15.95],
        ["Shrimp with Special Sauce", 14.95]
    ],
    "Duck": [
        ["Roasted Duck", 11.50],
        ["Peking Duck", 15.95],
        ["Braised Duck with Assorted Meat", 15.95]
    ],
    "Squab": [
        ["Braised Squab", 15.95],
        ["Braised Squab in Soy Sauce", 15.95]
    ],
    "Hot Pot": [
        ["Seafood with Vermicelli", 13.95],
        ["Four Ingredients with Bean Curd", 12.95],
        ["Salted Fish with Chicken", 12.95],
        ["Lamb Stew", 15.95]
    ],
    "Clams": [
        ["Clams with Ginger and Green Onion", 13.95],
        ["Clams with Black Bean Sauce", 13.95],
        ["Clams with Garlic and Butter Sauce", 13.95]
    ],
    "Squid": [
        ["Fried Calamari with Spicy Salt", 9.75],
        ["Pan Fried Squid with Fresh Vegetable", 9.75],
        ["Pan Fried Squid with Ginger and Green Onion", 9.75],
        ["Pan Fried Squid with Black Bean Sauce", 9.75]
    ],
    "Fish": [
        ["Rock Cod Fillet with Spicy Salt", 10.50],
        ["Sauteed Rock Cod Fillet", 10.50],
        ["Sweet and Sour Rock Cod Fillet", 10.50],
        ["Pan Fried Rock Cod Fillet with Black Bean Sauce", 10.50],
        ["Pan Fried Rock Cod Fillet with Fresh Vegetable", 10.50],
        ["Fried Whole Sole Fish with Special Sauce", 14.75],
        ["Steamed Fresh Tilapia Fish", 15.95]
    ],
    "Scallop": [
        ["Backed Scallops with Black Pepper and Garlic Sauce", 15.95],
        ["Sauteed Scallops", 15.95],
        ["Sauteed Scallops with Vegetable", 15.95],
        ["Kung Pao Scallops", 15.95]
    ],
    "Oyster": [
        ["Baked Oyster with X.O. Special Chili Sauce", 14.95],
        ["Baked Oyster with Black Bean Sauce", 14.95],
        ["Baked Oyster with Ginger and Green Onion", 14.95],
        ["Fried Oyster", 14.95]
    ],
    "Sizzling Plates": [
        ["Sizzling Cod Fish Fillet with Black Bean Sauce", 13.50],
        ["Sizzling Beef Steak Cantonese Style", 13.50],
        ["Sizzling Beef Steak with Spicy Black Peppers Sauce", 13.50],
        ["Sizzling Shrimp with Garlic Sauce", 15.50]
    ],
    "Drinks": [
        ["Soda", 2.00],
        ["Lemonade", 2.00],
        ["Iced Tea", 2.75],
        ["Thai Iced Tea", 2.75]
    ],
    "Vegetable": [
        ["Spinach with Garlic Sauce", 8.95],
        ["Buddha's Feast", 8.95],
        ["Chinese Broccoli with Oyster Sauce", 8.95],
        ["Eggplant Sichaun Style", 8.95],
        ["Pan Fried String Bean", 10.95],
        ["Minced Ham with Mustard Green", 9.75],
        ["Black Mushroon with Mustard Green", 9.75],
        ["Four Vegetables on Lotus Leaf", 23.95]
    ],
    "Chop Suey": [
        ["Vegetable Chop Suey", 8.25],
        ["Chicken Chop Suey", 8.25],
        ["Beef Chop Suey", 8.25],
        ["Shrimp Chop Suey", 9.25],
        ["Golden Dragon Chop Suey", 10.95]
    ],
    "Rice": [
        ["Minced Beef Fried Rice", 8.50],
        ["BBQ Pork Fried Rice", 8.50],
        ["Mixed Vegetable Fried Rice", 8.50],
        ["Yang Chow Fried Rice", 9.75],
        ["Shrimp Fried Rice", 9.75],
        ["Salted Fish and Chicken Fried Rice", 9.75],
        ["Chinese Sausage Fried Sticky Rice", 12.75],
        ["House Special Fried Rice", 9.75],
        ["Fried Rice with Dried Scallop and Egg White", 13.75],
        ["Steamed Rice", 1.00]
    ],
    "Noodles": [
        ["BBQ Pork Chow Mein", 8.50],
        ["Chicken Chow Mein", 8.50],
        ["Beef Chow Mein", 8.50],
        ["Beef Chow Fun Dry Style", 8.50],
        ["Braised Yee Mein", 9.50],
        ["Golden Dragon Chow Mein", 9.50],
        ["Seafood Chow Mein", 10.95],
        ["Singapore Style Rice Noodle", 9.50]
    ],
    "Desserts": [
        ["Red Bean Cake", 2.60],
        ["Coconut Cake", 2.60],
        ["Purple Rice Cake", 2.60],
        ["Mango Jello Pudding", 2.60],
        ["Sweet Scented Osmanthus Cake", 2.60]
    ]
};


//dishes grouped by ingredients
//each subgroup will be represented by a bootstrap card
const MEAT = ['Chicken', 'Pork', 'Beef', 'Duck', 'Squab'];
const NOODLES = ['Noodle Soup', 'Noodles'];
const SEAFOOD = ['Shrimp', 'Clams', 'Scallop', 'Oyster', 'Fish', 'Squid'];
const RICE = ['Rice'];
const SOUP = ['Soup', 'Noodle Soup'];
const TOFU = ['Bean Curd'];
const VEGETABLE = ['Vegetable'];
const SPECIALS = ['Sizzling Plates', 'Hot Pot'];
const DRINKS = ['Drinks'];
const DESSERTS = ['Desserts'];
const APPETIZERS = ['Appetizers'];

//can't use directly use variable name, so map it to string equivalent
const MENU_OBJ = {
    soup: SOUP,
    noodles: NOODLES,
    meat: MEAT,
    rice: RICE,
    seafood: SEAFOOD,
    tofu: TOFU,
    vegetable: VEGETABLE,
    specials: SPECIALS,
    appetizers: APPETIZERS,
    desserts: DESSERTS,
    drinks: DRINKS
};

//helper function for renderMenu
//returns list item with bootstrap classes containing name of dish and its price
function renderCard(name) {
    let result = '';
    for (let dish of MENU[name]) {
        result += `<li class="list-group-item"><span class="dish">${dish[0]}</span><span class="price">${dish[1].toFixed(2)}</span></li>`
    }
    return result;
}


//for each group in MENU_OBJ, create a tab containing cards for each of its member and insert it into the document
function renderMenu(isIOS) {
    for (let type in MENU_OBJ) {
        let tab = '';
        let format = isIOS ? 'jpg' : 'webp';
        MENU_OBJ[type].forEach(dishes => {
            let id = dishes.toLowerCase().replace(' ', '-');
            let card = `
                <section class="card">
                <div class="img-wrapper d-flex flex-row flex-nowrap justify-content-center align-items-center">
                <img src="images/menu/${id}.${format}" class="menu-card-img" alt="image of ${dishes}">
                </div>
                <div class="menu-card-content flex-grow-1">
                <h4 class="card-title menu-card-title">${dishes}</h4>
                <ul class="list-group list-group-flush card-body">
            `;
            card += renderCard(dishes);
            card += '</ul></div></section>';
            tab += card;
        });
        let result = document.querySelector(`#${type}`);
        result.innerHTML = tab;
    }
}




