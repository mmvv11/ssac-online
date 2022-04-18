// continue 예제
// 1부터 10까지 출력하는 반복문에서 5는 건너뛰고 출력하게 만들기
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
