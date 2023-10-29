// Lấy hình ảnh từ DOM
const image = document.getElementById("rotateImage");

// Hàm xoay hình ảnh 90 độ
function rotateImage() {
  image.style.transform = "rotate(15deg)";
}

// Sử dụng vòng lặp và setTimeout để xoay hình ảnh sau mỗi khoảng thời gian
const rotationInterval = 2000; // 2 giây

function rotateImageRepeatedly() {
  for (let i = 0; i < 5; i++) { // Ví dụ, xoay 5 lần
    setTimeout(() => {
      rotateImage();
      setTimeout(() => {
        image.style.transform = "rotate(-15deg)";
        image.style.transform = "rotate(-15deg)";
        image.style.transform = "rotate(-15deg)";   // Trở lại góc ban đầu sau xoay
      }, rotationInterval / 2);
    }, i * rotationInterval);
  }
}

// Gọi hàm xoay hình ảnh liên tục
rotateImageRepeatedly();