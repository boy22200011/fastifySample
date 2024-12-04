// 模擬數據
let users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];

export async function getUsers() {
  return users;
}

export async function createUser(user: { name: string }) {
  const newUser = { id: users.length + 1, name: user.name };
  users.push(newUser);
  return newUser;
}

// 假設從資料庫取得用戶資料，這裡可以模擬資料
export async function getUserList() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
    ];
  }
  