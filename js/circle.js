(function() {
    "use strict";
    //  need to come to this problem
    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    var circle = {
        radius: 3,

        getArea: function() {
            // Calculate the area using the formula: area = pi * radius^2
            const area = Math.PI * this.radius * this.radius;
            return area;
        },

        logInfo: function(doRounding) {
            const area = this.getArea();

            // Round the area to the nearest integer if doRounding is true
            if (doRounding) {
                area = Math.round(area);
            }

            console.log(`Area of a circle with radius: ${this.radius}, is: ${area}`);
        }
    };

// Log raw circle information
    console.log("Raw circle information");
    circle.logInfo(false);

// Log circle information rounded to the nearest whole number
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);




    // TODO: Change the radius of the circle to 5.

    var circle = {
        radius: 5,

        getArea: function() {
            // Calculate the area using the formula: area = pi * radius^2
            const area = Math.PI * this.radius * this.radius;
            return area;
        },

        logInfo: function(doRounding) {
            const area = this.getArea();

            // Round the area to the nearest integer if doRounding is true
            if (doRounding) {
                area = Math.round(area);
            }

            console.log(`Area of a circle with radius: ${this.radius}, is: ${area}`);
        }
    };

// Log raw circle information
    console.log("Raw circle information");
    circle.logInfo(false);

// Log circle information rounded to the nearest whole number
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();