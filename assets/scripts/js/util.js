document.body.classList.add("loading");
document.getElementById('downloadButton').style.visibility = 'hidden';

function onOpenCvReady() {
  document.body.classList.remove("loading");
  let blankCanvas = document.getElementById('blankCanvas');
  let blank = cv.imread("blankCanvas");
  cv.imshow('outputCanvas', blank);
}

let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');

inputElement.onchange = function(event) {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
};

imgElement.onload = function() {
  let image = cv.imread(imgElement);
  //cv.imshow('outputCanvas', image);
  image.delete();
};

document.getElementById('downloadButton').onclick = function() {
  this.href = document.getElementById("outputCanvas").toDataURL();
  this.download = "image.png";
};
