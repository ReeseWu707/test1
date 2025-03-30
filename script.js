// 火星文轉換對照表
const marsTextMap = {
  '你好': 'ㄋ豪',
  '我': '偶',
  '的': 'ㄉ',
  '怎麼辦': '種摸辦',
  '感謝': '乾蝦',
  '好啊': '好ㄚ',
  '我知道了': '偶知道ㄌ',
  '要不要': '要ㄅ要',
  '你': 'ㄋ',
  '對啊': 'ㄉㄨㄚ',
  '吃': 'ㄘ',
  '好': '豪',
  '說': '縮',
  '嗎': 'ㄇ',
  '他': 'ㄊ',
  '那個': '那ㄍ',
  '這個': '這ㄍ',
  '吧': 'ㄅ',
  '了': 'ㄌ'
};

// 取得 DOM 元素
const inputBox = document.querySelector(".text-box:first-of-type");
const outputBox = document.querySelector(".text-box:last-of-type");
const convertBtn = document.querySelector(".convert-btn");

// 轉換函式
function convertToMarsText(text) {
  let convertedText = text;
  for (const [key, value] of Object.entries(marsTextMap)) {
      const regex = new RegExp(key, "g"); // 全部替換
      convertedText = convertedText.replace(regex, value);
  }
  return convertedText;
}

// 綁定按鈕事件
convertBtn.addEventListener("click", () => {
  const inputText = inputBox.value;
  const marsText = convertToMarsText(inputText);
  outputBox.value = marsText;
});