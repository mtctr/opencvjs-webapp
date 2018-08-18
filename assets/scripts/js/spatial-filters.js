
let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function() {
  let src = cv.imread(imgElement);
  let dstx = new cv.Mat();
  let dsty = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
  // You can try more different parameters
  cv.Sobel(src, dstx, cv.CV_8U, 1, 0, 3, 1, 0, cv.BORDER_DEFAULT);
  cv.Sobel(src, dsty, cv.CV_8U, 0, 1, 3, 1, 0, cv.BORDER_DEFAULT);
  // cv.Scharr(src, dstx, cv.CV_8U, 1, 0, 1, 0, cv.BORDER_DEFAULT);
  // cv.Scharr(src, dsty, cv.CV_8U, 0, 1, 1, 0, cv.BORDER_DEFAULT);
  cv.imshow('canvasInput', scr);
  cv.imshow('canvasOutputx', dstx);
  cv.imshow('canvasOutputy', dsty);
  src.delete(); dstx.delete(); dsty.delete();
};
