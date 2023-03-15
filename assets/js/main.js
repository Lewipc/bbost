let $id = id => document.getElementById(id);
var [login, register, form] = ['login', 'register', 'form'].map(id => $id(id));

[login, register].map(element => {
  element.onclick = function () {
    [login, register].map($ele => {
      $ele.classList.remove("active");
    });
    this.classList.add("active");
    this.getAttribute("id") === "register" ? form.classList.add("active") : form.classList.remove("active");
    this.getAttribute("id") === "register" ? $("#form").css({ height: "500px" }) : $("#form").removeAttr("style");
    this.getAttribute("id") === "register" ? $(document).prop('title', 'Luxury Services - Register') : $(document).prop('title', 'Luxury Services - Login');
  };
});