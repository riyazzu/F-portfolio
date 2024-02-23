




var current = 0;  // 첫 번째 이미지
showSlides();  // 기본적으로 첫 번째 이미지 표시
function showSlides() {
  var slides = document.querySelectorAll(".slide > img");  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // 모든 이미지 감춤
  }
  current++; // 다음 이미지로 이동
  if(current > slides.length)  // 마지막 이미지라면
    current = 1;   // 첫 번째로 이동
  slides[current - 1 ].style.display = "block";  // 현재 위치 이미지 표시
  setTimeout(showSlides, 2000);   // 2초마다 showSlides 함수 반복 실행 
}

var current1 = 0;  // 첫 번째 이미지
showSlides1();  // 기본적으로 첫 번째 이미지 표시
function showSlides1() {
  var slides1 = document.querySelectorAll(".slide3 > img");  
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  // 모든 이미지 감춤
  }
  current1++; // 다음 이미지로 이동
  if(current1 > slides1.length)  // 마지막 이미지라면
    current1 = 1;   // 첫 번째로 이동
  slides1[current1 - 1 ].style.display = "block";  // 현재 위치 이미지 표시
  setTimeout(showSlides1, 2500);   // 2초마다 showSlides 함수 반복 실행 
}