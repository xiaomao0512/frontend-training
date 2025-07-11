async function getUsers() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json();
        console.log(users);

        let list = document.getElementById("userList");

        users.forEach(user => {
            let li = document.createElement("li");
            li.innerText = `${user.name} (${user.email})`;
            list.appendChild(li);
        });
    } catch (error) {
      console.error("出錯了", error);
    }
}
getUsers();
async function demo() {
  console.log("我要叫便當了...");
  let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await res.json();
  console.log("便當來了：", data.title);
  console.log("等完啦！");
}
demo();
