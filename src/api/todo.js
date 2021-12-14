const todoList = [
  {
    id: 'jflkwjefowjfk123kl1j',
    content: '화면설계',
    done: false,
    categoryId: 'ejfojwefio3jo2',
    child: [
      {
        id: 'sdfsdfee23',
        content: '피피티',
        done: false,
        createDate: new Date(),
      },
      {
        id: 'wefpejfp2j',
        content: '로직',
        done: false,
        createDate: new Date(),
      },
    ],
    createDate: new Date(),
  },
  {
    id: 'rflkelk3j4',
    content: 'vuex',
    done: false,
    categoryId: 'ejfojwefio3jo2',
    child: [],
    createDate: new Date(),
  },
  {
    id: 'efj;2k3l;2k;w;lerw',
    content: 'vue',
    done: true,
    categoryId: 'ejfojwefio3jo2',
    child: [],
    createDate: new Date(),
  },
];
let id = 'wejfowjefo123';

const job = sec => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (sec) resolve('success');
      else reject('failure');
    }, sec);
  });
};

export const createItem = async ({ content, categoryId }) => {
  const result = await job(100);
  todoList.push({
    id,
    content,
    done: false,
    categoryId,
    child: [],
    createDate: new Date(),
  });
  id += 'aa';
  return result;
};

export const readList = async ({ categoryId }) => {
  await job(100);
  const result = todoList.filter(ele => ele.categoryId === categoryId);
  return result;
};

export const updateItem = async ({ id, content }) => {
  const result = await job(100);
  todoList.forEach(ele => {
    if (ele.id === id) {
      ele.content = content;
    }
  });
  return result;
};

export const deleteItem = async ({ id }) => {
  const result = await job(100);
  todoList.splice(
    todoList.findIndex(ele => ele.id === id),
    1,
  );
  return result;
};

export const createItemChild = async ({ id, content }) => {
  const result = await job(100);
  todoList.forEach(ele => {
    if (ele.id === id) {
      ele.child.push({
        id,
        content,
        done: false,
        createDate: new Date(),
      });
    }
  });
  id += 'aa';
  return result;
};

export const toggleItem = async ({ id }) => {
  const result = await job(100);
  todoList.forEach(ele => {
    if (ele.id === id) {
      ele.done = !ele.done;
    }
  });
  return result;
};
