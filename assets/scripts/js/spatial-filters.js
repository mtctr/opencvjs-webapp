document.getElementById('blur').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");

  let src = cv.imread('imageSrc');
  let dst = new cv.Mat();
  let ksize = new cv.Size(3, 3);
  let anchor = new cv.Point(-1, -1);

  cv.blur(src, dst, ksize, anchor, cv.BORDER_DEFAULT);

  cv.imshow('outputCanvas', dst);
  src.delete();
  dst.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

document.getElementById('gaussian').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");

  let src = cv.imread('imageSrc');
  let dst = new cv.Mat();
  let ksize = new cv.Size(3, 3);

  cv.GaussianBlur(src, dst, ksize, 0, 0, cv.BORDER_DEFAULT);

  cv.imshow('outputCanvas', dst);
  src.delete();
  dst.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

document.getElementById('median').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");

  let src = cv.imread('imageSrc');
  let dst = new cv.Mat();
  let ksize = 3; //aperture linear size; it must be odd and greater than 1,

  cv.medianBlur(src, dst, ksize);

  cv.imshow('outputCanvas', dst);
  src.delete();
  dst.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

document.getElementById('bilateral').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");

  let src = cv.imread('imageSrc');
  let dst = new cv.Mat();

  cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
  cv.bilateralFilter(src, dst, 9, 75, 75, cv.BORDER_DEFAULT);

  cv.imshow('outputCanvas', dst);
  src.delete();
  dst.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

document.getElementById('laplacian').onclick = function() {
  this.disabled = true;
  document.body.classList.add("loading");

  let src = cv.imread('imageSrc');
  let dst = new cv.Mat();

  cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
  cv.Laplacian(src, dst, cv.CV_8U, 1, 1, 0, cv.BORDER_DEFAULT);

  cv.imshow('outputCanvas', dst);
  src.delete();
  dst.delete();
  this.disabled = false;
  document.body.classList.remove("loading");
  document.getElementById('downloadButton').style.visibility = 'visible';
};

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
  document.getElementById('downloadButton').style.visibility = 'visible';
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
  document.getElementById('downloadButton').style.visibility = 'visible';
};
