/*
The MIT License (MIT)

Copyright (c) 2017 Steven Gago

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*
 * TODO: We need
 * 1. Lots of comments
 * 2. Arrays
 * 3. If statements
 * 4. Constants
 * 5. Validate user input
 */
var myFunction = new Function("x", "return x * x");

function isValidEquation(equation) {
  "use strict";
  
  var isValid = false,
      func = new Function("x", equation);

  isValid = typeof func(2) === "integer";

  return isValid;
}

function integrate(from, to, step) {
  "use strict";

  var x = 0,
    i = 0,
    rectangleArea = 0,
    totalArea = 0,
    rectangles = Math.abs(to - from) / step;

  for (i = 0; i < rectangles; i += 1) {
    // Calculate the new X value
    x = i * step + from;

    // Calculate the rectangle's area (x * y)
    rectangleArea = step * myFunction(x);

    // Add the rectangles area to the total area under the curve
    totalArea += rectangleArea;
  }

  return totalArea;
}

function derive(at, step) {
  "use strict";

  return (myFunction(at + step) - myFunction(at - step)) / (2 * step);
}