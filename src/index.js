import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得、addボタン押下後初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // div tag生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p tag生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // li tag生成
  const li = document.createElement("li");
  li.appendChild(div);

  // div tagの下に要素を設定
  div.appendChild(p);

  // li tagの下に要素を設定
  document.getElementById("incomplete-list").appendChild(li);

  //alert(inputText);
  // button tag生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "done";
  completeButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    deleteFromIncompleteList(deleteTarget);
    // 完了リストに追加する要素
    const addTarget = completeButton.closest("div");

    // TODO内容テキスト取得
    const text = addTarget.firstChild.innerText;
    console.log(text);

    // div類化を初期化
    addTarget.textContent = null;

    // li tag生成
    const li = document.createElement("li");
    // div tag生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p tag生成
    const p = document.createElement("p");
    p.innerText = text;

    // button生成
    const backButton = document.createElement("button");
    backButton.innerText = "undo";

    //addTarget.appendChild(div);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);

    console.log(li);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    //const deleteTarget = deleteButton.parent"Node.parentNode;
    const deleteTarget = deleteButton.closest("li");
    deleteFromIncompleteList(deleteTarget);
  });

  // 未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  li.appendChild(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
