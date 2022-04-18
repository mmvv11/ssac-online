// 1. title, date, users 세가지 키값을 가지는 객체를 선언합니다.
// 2. title에는 "코하전자"
// 3. date에는 "2020-10-10"
// 4. users에는 빈 배열을 선언합니다.
const obj = { title: "코하전자", date: "2020-10-10", users: [] };
// 5. users 속성에 객체로 `email: "dummy@dummy.com", password: "a123"` 을 추가합니다.

obj.users.push({ email: "dummy@dummy.com", password: "a123" });

console.log(obj);
