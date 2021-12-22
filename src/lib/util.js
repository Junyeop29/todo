export const checkPassword = str => {
  //문자, 숫자, 특수문자 최소 1개
  //8자리 ~ 16자리까지 허용
  const PWD_RULE = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
  return PWD_RULE.test(str);
};

export const changeDateStr = paramDate => {
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const day = dayNames[paramDate.getDay()]; // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.

  const year = paramDate.getFullYear();
  const month = paramDate.getMonth() + 1;
  const date = paramDate.getDate();

  const dateStr = `${year}년 ${month}월 ${date}일 ${day}`;
  return dateStr;
};
