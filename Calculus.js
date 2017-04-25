/*
 * SUMMARY
 * The size of the steps to take when integrating
 * or derivating.  Lowering this value to 0.01
 * will result in more accurate calculations.  However,
 * BE CAREFUL!  Any value smaller than 0.01 will take a long
 * time to calculate!
 */
const STEP_SIZE = 0.01;

/*
 * SUMMARY
 * Returns true if an argument is a valid number;
 * otherwise, false.
 *
 * PARAMETERS
 * parameter value = 
 *
 * RETURNS
 * Returns true if the given argument is a valid number;
 * otherwise, false.
 *
 * EXAMPLES
 * var result = isValid(1);         // Returns true
 * var result = isValid(2);         // Returns true
 * var result = isValid("Hello!");  // Returns false
 * var result = isValid("1");       // Returns false
 */
function isValidNumber(value) {
    "use strict";
    
    var isValid = false;
    
    // Is num a number, and is num not NaN?
    isValid = (typeof value === "number") &&
                (!Number.isNaN(value));
    
    return isValid;
}

/*
 * SUMMARY
 * The math equation to take the integral or derivative of.
 *
 * PARAMETERS
 * parameter x = 
 *
 * RETURNS
 * Calculates x^2 and returns the result as a number.
 *
 * EXAMPLES
 * var result = mathEquation(0);    // result will hold 0
 * var result = mathEquation(1);    // result will hold 2
 * var result = mathEquation(2);    // result will hold 4
 * var result = mathEquation(4);    // result will hold 8
 */
function mathEquation(x) {
    "use strict";
    
    return x ** 2;
}

/*
 * SUMMARY
 * Takes the integral of the mathEquation function using
 * the Riemann squares method.
 *
 * PARAMETERS
 * parameter from = Starts taking the integral at this number.
 * parameter to = Stops taking the integral at this number.
 *
 * RETURNS
 * Returns the result of the integral as a number.
 * 
 * EXAMPLES
 * var result = integrate(0, 0);
 * var result = integrate(0, 1);
 * var result = integrate(0, 2);
 * var result = integrate(-1, 1);
 * var result = integrate("Hello!", "Friend!")  // Returns NaN
 */
function integrate(from, to) {
    "use strict";

    var i = 0,
        xPosition = 0,
        rectangleArea = 0,
        rectangles = 0,
        totalArea = 0;

    // Are "from" and "to" arguments valid numbers?
    if (isValidNumber(from) && isValidNumber(to)) {
        
        // Calculate the number of rectangles we need
        rectangles = Math.abs(to - from) / STEP_SIZE;

        // For all of the rectangles...
        for (i = 0; i < rectangles; i += 1) {

            // Calculate the new X value
            xPosition = i * STEP_SIZE + from;

            // Calculate the rectangle's area (x * y)
            rectangleArea = STEP_SIZE * mathEquation(xPosition);

            // Add the rectangles area to the total area under the curve
            totalArea += rectangleArea;
        }
    }
    else {
        
        // Uhoh, "from" or "to" are not a number
        totalArea = NaN;
    }

    return totalArea;
}

/*
 * SUMMARY
 * Takes the derivative of the mathEquation function at a given
 * point.
 *
 * PARAMETERS
 * parameter at = Position to take the derivative of
 *  mathEquation at as a number.
 *
 * RETURNS
 * Returns the result of deriving mathEquation at a
 *  given point as a number.
 * Returns NaN if STEP_SIZE is zero.
 *
 * EXAMPLES
 * var result = derive(0);
 * var result = derive(1);
 * var result = derive(2);
 * var result = derive(-1);
 * var result = derive(-2);
 * var result = derive("Hello!");   // Returns NaN
 */
function derive(at) {
    "use strict";

    var y0 = 0,
        y1 = 0,
        result = 0;

    // Is the value of "at" a valid number?
    if (isValidNumber(at)) {
        
        y0 = mathEquation(at - STEP_SIZE);
        y1 = mathEquation(at + STEP_SIZE);
        
        result = (y1 - y0) / (2 * STEP_SIZE);
    }
    else {
        
        // Uhoh, "at" is not a valid number
        result = NaN;
    }

    return result;
}

/*
 * SUMMARY
 * Demonstrates the use of the calculus functions. 
 *
 * PARAMETERS
 * N/A - There are no parameters.
 *
 * RETURNS
 * N/A - No value is returned.
 *
 * EXAMPLES
 * demo();
 */
function demo() {
    "use strict";
    
    var i = 0,
        result = 0,
        numbers = [-2, -1, 0, 1, 2],
        derivativeResults = [],
        integralResults = [];
    
    // For each number in numbers...
    for (i = 0; i < numbers.length; i++) {
        
        // Calculate the derivative at numbers[i] of x^2
        result = derive(numbers[i]).toFixed(2);
        
        // Append the result to the end of derivativeResults
        derivativeResults.push(result);
    }
    
    // For each number in numbers...
    for (i = 0; i < numbers.length - 1; i++) {
        
        // Calculate the integral from i to i + 1
        result = integrate(numbers[i], numbers[i + 1]).toFixed(2);
        
        // Append the result to the end of integralResults
        integralResults.push(result);
    }
    
    document.write("<h1>Final Exam: Calculus</h1>");
    document.write("<h2>Derivative of x<sup>2</sup></h2>");
    document.write("<ul>");
    
    // For each number in numbers
    for (i = 0; i < numbers.length; i++) {
        
        // Display the derivative of x^2 at the given number
        document.write("<li>The derivative of x<sup>2</sup> at " +
                       numbers[i] + " is " + derivativeResults[i] +
                       "</li>");
    }
    
    document.write("</ul>");
    document.write("<h2>Integral of x<sup>2</sup></h2>");
    document.write("<ul>");
    
    // For each number in numbers
    for (i = 0; i < numbers.length - 1; i++) {

        // Display the integral of x^2 from one point to another
        document.write("<li>The integral from " + numbers[i] +
                       " to " + numbers[i + 1] +
                       " of x<sup>2</sup> is " +
                       integralResults[i] + "</li>");
    }
    
    document.write("</ul>");
}
