inputUploadImg = document.querySelector("#uploadImage");
imgShow = document.querySelector("#img-show");
let spanResult = document.querySelector("#result span");

const uploadImage = () => {
  showResult("...");
  inputUploadImg.click();
  inputUploadImg.onchange = (e) => {
    src = URL.createObjectURL(e.target.files[0]);
    imgShow.setAttribute("src", src);
  };
};

const detect = () => {
  showResult("Carton");
};

const showResult = (text) => {
  spanResult.textContent = text;
};
