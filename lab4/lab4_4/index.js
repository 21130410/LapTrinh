// Lấy các phần tử từ DOM
const textA = document.getElementById("textA");
const textB = document.getElementById("textB");
const countButton = document.getElementById("countButton");
const countDisplay = document.getElementById("count");

// Đặt sự kiện click cho nút Đếm
countButton.addEventListener("click", function () {
  const contentA = textA.value;
  const contentB = textB.value;
  
  // Sử dụng biểu thức chính quy để đếm số lần xuất hiện của B trong A
  const regex = new RegExp(contentB, 'g');
  const count = (contentA.match(regex) || []).length;
  
  // Hiển thị kết quả lên trang
  countDisplay.textContent = count;
});