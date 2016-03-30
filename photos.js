/*    
    Program Name:  Photo Gallery Application
    Author:Brandon Rhea 
    Date:   3/23/2016
    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;
function populateFigures() {
   var filename;
   var currentFig;
   
   for (var i = 1;i < 4; i++) {
      filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
      currentFig = document.getElementsByTagName("img")[i - 1];
      currentFig.src = filename;
   }//end of loop
   
}//end of popularFigures()





/* shift all images one figure to the right, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }//end of for loop
}//end of rightArrow Function





/* shift all images one figure to the left, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
      function previewFive() {
         // create figure and img elements for fifth image
         var lastFigure = document.createElement("figure");
         lastFigure.id = "fig5";
         lastFigure.style.zlndex = "5";
         lastFigure.style.position = "absolute";
         lastFigure.style.right = "45px";
         lastFigure.style.top = "67px";
         
         var lastImage = document.createElement("img");
         lastImage.width = "240";
         lastImage.height = "135";
         
         lastfigure.appendChild(lastImage);
         
         articleEl.appendChild(lastFigure);
         
         //clone figure element for fifth image and edit to be first image
         var firstFigure = lastFigure.cloneNode(true);
         
         firstFigure.id = "fig1";
         firstFigure.style.right="";
         firstFigure.style.left = "45px";
         
         articleEl.insertBefore(firstFigure, document.getElementByld)("fig2"))
      }//end of previewFive()
   }//end of for loop
}//end of leftArrow Function

// create event listeners for left arrow, right arrow, and center figure element
function createEventListeners() {
   var leftarrow = document.getelementByld("leftarrow");
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener("click",leftArrow,false);
   } else if (leftarrow.attachEvent) {
      leftarrow.attachEvent("onclick",leftArrow);
      
   var showAllButton = document.querySelector("#fiveButton p");
   if (showAllButton.addEventListener) {
      showAllButton.addEventListener("click",previewFive, false);
   } else if (showAllButton.attachEvent) {
      showAllButton.attachEvent("onclick",previewFive);
   }//end of else if
      
   }//end of else if
   }


/* create event listeners and populate image elements */
function setUpPage() {
   var rightarrow = document.getElementByld("rightarrow");
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener("click,rightArrow,false");
   } else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onclick",rightArrow);
   var showAllButton = document.querySelector("#fiveButton p");
   if (showAllButton.addEventListener) {
      showAllButton.addEventListener("click",previewFive, false);
   } else if (showAllButton.attachEvent) {
      showAllButton.attachEvent("onclick",previewFive);
   }
   }// end of else if
}//end of createEventListeners function   

   createEventListeners();
   populateFigures();
}//end of setUpPage Function






/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}