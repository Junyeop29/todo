export const passwordCheck = str => {
  //문자, 숫자, 특수문자 최소 1개
  //8자리 ~ 16자리까지 허용
  const PWD_RULE = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
  return PWD_RULE.test(str);
};
