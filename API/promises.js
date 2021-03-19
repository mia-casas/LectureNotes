// Declaration
var amIGood = true;

// // Promise

var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);
// ERROR -  UnhandledPromiseRejectionWarning

//new Promise(/* executor */ function (resolve, reject) {...} );

// Promise Call
var checkTwice = function () {
    iCanHasGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};

checkTwice();

// Promises Continued: ASYNC
// 2nd Promise

var playDate = function(gift){
    return new Promise(
        function (resolve, reject){
            var message = "Salutations fellow child I enjoy interacting with! I notie you received a posable Batman figurine during the Yuletide season. What do you think of my new" + gift.brand + " " + gift.item + " ?";

            resolve(message);
        }
    );
};


// Promise call

var checkTwice = function(){
    console.log('before Christmas'); // log 
iCanHasGift
    .then(playDate)
    .then(function (fulfilled){
        console.log(fulfilled)
    })
    .catch(function (error){
        console.log(error)
    });
    console.log('after opening gifts'); // log after
}

checkTwice();

// 2nd promise chained

var playDate = function(gift){
            var message = "Salutations fellow child I enjoy interacting with! I notie you received a posable Batman figurine during the Yuletide season. What do you think of my new" + gift.brand + " " + gift.item + " ?";

            return Promise.resolve(message);
        };

var checkTwice = function (){
    iCanHasGift
    .then(playDate) //chain here
    .then(function (fulfilled){
        console.log(fulfilled);
// output: "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new HasMattelbro Turbo-Man action figure?"
    })
    .catch(function (error){
        console.log(error) // coal
    });
};

checkTwice();