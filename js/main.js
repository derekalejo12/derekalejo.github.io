const msg = "";
const contner = document.getElementById("msg");
const upprcse = msg.toUpperCase();

const names = [
  { name: "derek", lastname: "alejo" },
  { name: "diane", lastname: "alejo" },
];
names.forEach(function (val, index) {
  const fname = [val.name, val.lastname].join(" ");
  console.log(fname);
});
contner.append(upprcse);
const mapname = names.map(getnames);
console.log(mapname);

const d1 = new Date().toISOString().substr(0, 10);

function getnames(datanames) {
  namelis = [datanames.name, datanames.lastname].join(" ");
  return namelis;
}

const dob = document.getElementById("dob");
dob.addEventListener("change", getbday);

function getbday() {
  // alert('hey')
  document.getElementById("age").value = "";
  const tday = new Date();
  const boddate = new Date(this.value);
  let bday = tday.getFullYear() - boddate.getFullYear();
  const monthd = tday.getMonth() - boddate.getMonth();
  if (monthd < 0) {
    bday--;
  }
  if (bday < 120 && bday > 0) {
    document.getElementById("age").value = bday;
  }
  // + " and " + monthd
  // console.log(bday)
}
const chk = document.getElementById("btncheck");
chk.addEventListener("click", processclick);

function processclick() {
  const radiios = document.querySelectorAll('input[name="gender"]');
  let rval;
  for (const rb of radiios) {
    if (rb.checked) {
      rval = rb.value;
    }
  }
  console.log(rval);
}
const changepicture = document.getElementById("changepic");

changepicture.addEventListener("change", readpath);

function readpath() {
  const pth = this.files[0];
  let pthreader = new FileReader();
  pthreader.addEventListener("load", function (e) {
    console.log(e);
    document.getElementById("imgpic").setAttribute("src", e.target.result);
  });
  //  reader.onload = function (e) {
  //     $('#img-upload').attr('src',e.target.result);
  // }
  pthreader.readAsDataURL(pth);

  //  console.log(aa)
}
