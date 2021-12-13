const categoryList = [
  {
    id: 'er2r232',
    content: '프로젝트 개발',
    isFix: false,
  },
  {
    id: 'we23rr2',
    content: '운동',
    isFix: false,
  },
  {
    id: 'gf23rr3mfk',
    content: '독서',
    isFix: false,
  },
];
const job = sec => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (sec) resolve('success');
      else reject('failure');
    }, sec);
  });
};
let id = 'a';

export const createCategoryItem = async item => {
  const result = await job(100);
  categoryList.push({
    ...item,
    id,
  });
  id += 'a';
  return result;
};

export const readCategoryList = async () => {
  await job(100);
  const result = categoryList;

  return result;
};

export const updateCategoryItem = async ({ id, content }) => {
  const result = await job(100);
  categoryList.forEach(ele => {
    if (ele.id === id) {
      ele.content = content;
    }
  });
  return result;
};

export const deleteCategoryItem = async ({ id }) => {
  const result = await job(100);
  categoryList.splice(
    categoryList.findIndex(ele => ele.id === id),
    1,
  );
  return result;
};
