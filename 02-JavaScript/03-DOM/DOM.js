//JavaScript source code
let check = document.getElementById("check")
check.innerHTML = "Hello DOM";
console.log(check.outerHTML);

let configuration = document.getElementById("configuration");
configuration.append("append()");
configuration.prepend("prepend()");
configuration.before("before()");
configuration.after("after()");

