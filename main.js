let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random())
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state === 0) {
            return "head"
        } else {
            return "tail"
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        image.width = 100;
        if (this.state === 0) {
            image.src = "./images/head.jpg"
        } else {
            image.src = "./images/tail.jpg"
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

function display20Flips() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        document.body.append(coin.toString(), " ")
    }
}

display20Flips()

function display20Images() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        document.body.append(coin.toHTML())
    }
}
display20Images()