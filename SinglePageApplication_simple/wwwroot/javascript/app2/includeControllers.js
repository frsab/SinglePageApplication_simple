function include(fileName) {
    document.write("<script type='text/javascript' src='" + fileName + "'></script>");
  //  console.log("<script type='text/javascript' src='" + fileName + "'></script>");
}

var myFiles = ["add_annonceCtrl.js", "annoncesCtrl.js", "mainCtrl.js", "researchCtrl.js", "statsCtrl.js"];
var myF="s"
function includeFiles(folder, filesNames) {
    for (var i = 0; i <= 4; i++) {
      //  console.log(folder+filesNames[i]);
        include(folder+filesNames[i]);
    }
    return "succes";
}
myF=includeFiles("../javascript/app2/controllers/", myFiles);
if (myF === "succes") {
    console.log(myF+ " importation .. "+ myFiles);
}
