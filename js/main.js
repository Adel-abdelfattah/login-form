let registerBtn = document.getElementById("sign_up");
let registerModle = document.getElementById("register");
let logInModle = document.getElementById("login");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
  let emailDom = document.getElementById("register-email").value;
  let passwordDom = document.getElementById("register-password").value;

  let l = users.length;
  let userId = (l === 0) ? 0 : users.find((item) => item.id == l).id;
  if (emailDom === "" || passwordDom === "") {
    alert("Please fill in the data");
  } else {
    let user = users.some((item) => item.email == emailDom);
    if (user) {
      alert("This email is already exist");
      
    } else {
      let newId = ++userId;
      let newUser = {
        id: newId,
        email: emailDom,
        password: passwordDom,
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setTimeout(() => {
        window.location = "index.html";
      }, 500);
    };
    
  }
}

let loginBtn = document.getElementById("sign-in");

loginBtn.addEventListener("click", login);


function login(e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem('users'));
  let emailDom = document.getElementById("login-email").value;
  let passwordDom = document.getElementById("login-password").value;

  if (users) {
    let loger = users.some((item) => item.email === emailDom);
    if (loger) {
      let logger = users.find((item) => item.email === emailDom);
      if (logger.password === passwordDom) {
        setTimeout(() => {
          window.location = "index.html";
        }, 1500);
      } else {
        alert("Please check your password");
      };
    } else {
      alert("Please register first");
    };
  } else {
    alert("Please register first");
  };
}























