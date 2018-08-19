document.getElementById('sobelX').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");

  let src = cv.imread('imageSrc');
  let dstx = new cv.Mat();
  //convert to binary
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
  cv.Sobel(src, dstx, cv.CV_8U, 1, 0, 3, 1, 0, cv.BORDER_DEFAULT);

  cv.imshow('outputCanvas', dstx);
  src.delete();
  dstx.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
};

document.getElementById('sobelY').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");

  let src = cv.imread('imageSrc');
  let dsty = new cv.Mat();
  //convert to binary
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
  cv.Sobel(src, dsty, cv.CV_8U, 0, 1, 3, 1, 0, cv.BORDER_DEFAULT);

  cv.imshow('outputCanvas', dsty);
  src.delete();
  dsty.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
};
