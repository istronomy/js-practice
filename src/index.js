import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得、addボタン押下後初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // div tag生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  // p tag生成
  const p = document.createElement("p");
  console.log(p);
  p.innerText = inputText;
  console.log(p);

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
    alert("done");
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    //const deleteTarget = deleteButton.parent"Node.parentNode;
    const deleteTarget = deleteButton.closest("li");
    //console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  li.appendChild(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
