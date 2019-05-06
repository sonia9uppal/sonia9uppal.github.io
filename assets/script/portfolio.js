/*let img = document.getElementById('slideshow');
let style = img.currentStyle || window.getComputedStyle(img, false);
let backImg = style.backgroundImage.slice(4, -1).replace(/"/g, "");
let specificImg = backImg.slice(-5, -4); // number corr to current image

strBegin = "./assets/images/";
strAdd = ".png";
newNum;
newImg;*/

document.addEventListener('keydown', logKey);


function logKey(e) {
  if(e.code === 'ArrowRight') {
    img = document.getElementById('pic');
    backImg = img.currentSrc;
    // let style = img.currentStyle || window.getComputedStyle(img, false);
    // let backImg = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    var specificImg = backImg.slice(-6, -4); // number corr to current image

    strBegin = "./assets/images/";
    strAdd = ".png";

    newNum = parseInt(specificImg);

    if (specificImg === "10") {
      newNum = 11;
    } else if (specificImg === "9") {
      newNum = 10;
    } else if (specificImg === "11") {
      newNum = 1;
    }
    else {
      newNum = parseInt(specificImg[1]) + 1;
    }
    newImg = strBegin + newNum.toString() + strAdd;
    // img.style.backgroundImage = "url( " + newImg + ")";
    img.src = newImg;

    // change the image that is being displayed
  }
  if(e.code === 'ArrowLeft') {
    img = document.getElementById('pic');
    backImg = img.currentSrc;

    // let style = img.currentStyle || window.getComputedStyle(img, false);
    // let backImg = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    var specificImg = backImg.slice(-6, -4); // number corr to current image
    console.log(specificImg);

    strBegin = "./assets/images/";
    strAdd = ".png";
    newNum = parseInt(specificImg);

    if (specificImg === "11") {
      newNum = 10;
    } else if (specificImg === "10") {
      newNum = 9;
    } else if (specificImg[1] === "1") {
      newNum = 11;
    }
    else {
      newNum = parseInt(specificImg[1]) - 1;
    }
    newImg = strBegin + newNum.toString() + strAdd
    img.src = newImg;
    //img.style.backgroundImage = "url( " + newImg + ")";
    // change the image that is being displayed
  }
}
