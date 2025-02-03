// 題目 - 樂呵呵健身房
// 樂呵呵健身房目前有 8 位會員

const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
let purchaseRecords = [];

// 第一階段：新增課程購買記錄（優惠定價）
// 撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：

// 購買數量 / 單價(每堂課)

// 1 - 10 堂 / 1500 元
// 11 - 20 堂 / 1300 元
// 21 堂以上 / 1100 元


// 記錄內容：

// 會員名稱(name)：字串
// 購買課程數量(courses)：數字
// 課程單價（自動計算）
// 總金額（courses × 單價）
// 功能要求：
// 使用陣列 purchaseRecords 儲存每筆記錄。
// 如果輸入無效（如名稱為空或數值不正確），提示輸入錯誤，並不儲存該記錄。
// 成功新增後，印出「新增購買記錄成功！會員[會員名稱] 購買[數量] 堂課，總金額為[金額] 元。」
function checkInput(nameInput, coursesInput) {
  if (!(members.includes(nameInput)) || typeof coursesInput !== 'number') {
    console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。');
    return false;
  }

  return true;
};

function addPurchaseRecord(name, courses) {
  if (!checkInput(name, courses)) {
    return; // 如果輸入無效，終止函數執行
  }

  let price = 0;

  // 根據購買堂數套用優惠價格
  if (courses <= 10) {
    price += courses * 1500
  } else if (courses <= 20) {
    price += courses * 1300
  } else {
    price += courses * 1100
  };

  purchaseRecords.push([name, courses, price]);

  console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${price} 元。`);
};

addPurchaseRecord('Alice', 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");

console.log(purchaseRecords);

// 第二階段：計算目前的總營業額
// 新增函式 calculateTotalPrice，計算目前的總營業額為多少。

// 印出 console.log 文字為 目前總營業額為 ${ totalPrice } 元
function calculateTotalPrice(data) {
  let totalPrice = 0;

  for (i = 0; i < data.length; i++) {
    totalPrice += data[i][2];
  };

  console.log(`目前總營業額為 ${totalPrice} 元`);
};

calculateTotalPrice(purchaseRecords);

// 第三階段：篩選出還沒有購課的會員
// 新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出

// 印出 console.log 文字為 未購買課程的會員有：.......
function filterNoPurchaseMember(data) {
  let purchaseMembers = [];

  purchaseRecords.forEach(item => purchaseMembers.push(item[0]))

  console.log(purchaseMembers);

  let noPurchaseMembers = data.filter((item) => !purchaseMembers.includes(item));

  console.log(noPurchaseMembers);
};

filterNoPurchaseMember(members);