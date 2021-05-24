// 3- Promise
const url = "https://api.github.com/emojis";
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((obj) => {
    const table_body = document.getElementById("table-body");
    let count = 0;
    console.log(obj);
    for (let key in obj) {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      th.scope = "row";
      th.textContent = count + 1;
      tr.appendChild(th);
      td1.textContent = key;
      tr.appendChild(td1);
      td2.innerHTML = `<img src="${obj[key]}" width="50em">`;
      tr.appendChild(td2);
      table_body.appendChild(tr);
      count++;
      if (count == 50) break;
    }
  });
