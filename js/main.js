let togleLog = true
let userData = {
    login: "login",
    password: "password"
}
document.addEventListener("DOMContentLoaded", ready);
const mainText = document.getElementById("mainText")
const styleTextMain = getComputedStyle(mainText)
const boldText = document.getElementById("boldText")
const italicText = document.getElementById("italicText")
const underLineText = document.getElementById("underLineText")
const lineThroughText = document.getElementById("lineThroughText")
const positionTextLeft = document.getElementById("positionTextLeft")
const positionTextCenter = document.getElementById("positionTextCenter")
const positionTextRight = document.getElementById("positionTextRight")
const fontFamilyText = document.getElementById("fontFamilyText")
const fontSizeText = document.getElementById("fontSizeText")
const colorText = document.getElementById("colorText")
const bGCText = document.getElementById("bGCText")
const colorFormX = document.getElementById("colorFormX")
const colorFormElements = document.querySelectorAll("#colorFormElements div")
const colorFormElement = document.getElementById("colorFormElements")
const choseImage = document.getElementById("choseImage")
const choseFile = document.getElementById("choseFile")
const choseColor = document.getElementById("choseColor")
const inputFile = document.getElementById("inputFile")
const bgcolorFormX = document.getElementById("bgcolorFormX")
const bgcolorForm = document.getElementById("bgcolorForm")
const bgColorFormElements = document.querySelectorAll("#bgColorFormElements div")
const bgColorFormElement = document.getElementById("bgColorFormElements") //??
const fbgcolorFormElements = document.querySelectorAll("#fbgcolorFormElements div")
const fbgcolorFormElement = document.getElementById("fbgcolorFormElements") //??
const wrapperForBgElrm1 = document.getElementById("wrapperForBgElrm1")
const wrapperForBgElrm2 = document.getElementById("wrapperForBgElrm2")
const wrapperForBgElrm3 = document.getElementById("wrapperForBgElrm3")
const login = document.getElementById("login")
const btnAutorization = document.getElementById("btnAutorization")
const pleaseCheck = document.getElementById("pleaseCheck")
const formLogin = document.getElementById("formLogin")
const formPassword = document.getElementById("formPassword")
const editText = document.getElementById("editText")
const wraperFirstSection = document.getElementById("wraperFirstSection")
const firstTools = document.getElementById("firstTools")
const mainTextEdit = document.getElementById("mainTextEdit")
const save = document.getElementById("save")
countTR = document.getElementById("countTR")
widthTD = document.getElementById("widthTD")
widthBorderTD = document.getElementById("widthBorderTD")
btnResetTable = document.getElementById("btnResetTable")
countTD = document.getElementById("countTD")
heightTD = document.getElementById("heightTD")
selectTableStyle = document.getElementById("selectTableStyle")
selectTableColor = document.getElementById("selectTableColor")
btnCreateTable = document.getElementById("btnCreateTable")
const btnOlCreate = document.getElementById("btnOlCreate")
const btnOlReset = document.getElementById("btnOlReset")
const CreateOlp = document.getElementById("CreateOlp")
const OlTipe = document.getElementById("OlTipe")
const OlLiItem = document.getElementById("OlLiItem")
const createOl = document.getElementById("createOl")
const btnUlCreate = document.getElementById("btnUlCreate")
const btnUlReset = document.getElementById("btnUlReset")
const CreateUlp = document.getElementById("CreateUlp")
const UlTipe = document.getElementById("UlTipe")
const UlLiItem = document.getElementById("UlLiItem")
const createUl = document.getElementById("createUl")
const wrapperCreateTable = document.getElementById("wrapperCreateTable")
const craateTable = document.getElementById("craateTable")
const invalid = document.getElementById("invalid")


btnUlCreate.addEventListener("click", btnUlCreateF)
btnUlReset.addEventListener("click", btnUlResetF)
createUl.addEventListener("click", createUlF)
btnOlCreate.addEventListener("click", btnOlCreateF)
btnOlReset.addEventListener("click", btnOlResetF)
createOl.addEventListener("click", createOlF)
craateTable.addEventListener("click", craateTableF)
boldText.addEventListener("click", boldTextF)
italicText.addEventListener("click", italicTextF)
underLineText.addEventListener("click", underLineTextF)
lineThroughText.addEventListener("click", lineThroughTextF)
positionTextLeft.addEventListener("click", positionTextLeftF)
positionTextCenter.addEventListener("click", positionTextCenterF)
positionTextRight.addEventListener("click", positionTextRightF)
fontFamilyText.addEventListener("change", fontFamilyTextF)
fontSizeText.addEventListener("change", fontSizeTextF)
colorText.addEventListener("click", colorTextF)
colorFormX.addEventListener("click", colorFormXF)
inputFile.addEventListener("change", inputFileF)
bgcolorFormX.addEventListener("click", bgcolorFormXF)
bGCText.addEventListener("click", bGCTextF)
choseImage.addEventListener("click", choseImageF)
choseFile.addEventListener("click", choseFileF)
choseColor.addEventListener("click", choseColorF)
login.addEventListener("click", loginF)
btnAutorization.addEventListener("click", btnAutorizationF)
editText.addEventListener("click", editTextF)
save.addEventListener("click", saveF)
colorFormElement.addEventListener("click", colorFormElementF)
bgColorFormElement.addEventListener("click", bgColorFormElementF)
fbgcolorFormElement.addEventListener("click", fbgcolorFormElementF)
btnCreateTable.addEventListener("click", btnCreateTableF)
btnResetTable.addEventListener("click", btnResetTableF)

function choseImageF() {
    wrapperForBgElrm1.style.display = 'none'
    wrapperForBgElrm2.style.display = 'flex'
    wrapperForBgElrm3.style.display = 'none'
}

function choseFileF() {
    wrapperForBgElrm1.style.display = 'none'
    wrapperForBgElrm2.style.display = 'none'
    wrapperForBgElrm3.style.display = 'flex'
}

function choseColorF() {
    wrapperForBgElrm1.style.display = 'flex'
    wrapperForBgElrm2.style.display = 'none'
    wrapperForBgElrm3.style.display = 'none'
}

function boldTextF() {
    if (styleTextMain.fontWeight == "200") {
        mainText.style.fontWeight = 900
    } else {
        mainText.style.fontWeight = 200
    }
}

function italicTextF() {
    if (styleTextMain.fontStyle == "normal") {
        mainText.style.fontStyle = "italic"
    } else {
        mainText.style.fontStyle = "normal"
    }
}

function underLineTextF() {
    if (styleTextMain.textDecoration == "none solid rgb(0, 0, 0)") {
        mainText.style.textDecoration = "underline"
    } else {
        mainText.style.textDecoration = "none"
    }
}

function lineThroughTextF() {
    if (styleTextMain.textDecoration == "none solid rgb(0, 0, 0)") {
        mainText.style.textDecoration = "line-through"
    } else {
        mainText.style.textDecoration = "none"
    }
}

function positionTextLeftF() {
    mainText.style.alignItems = "flex-start"
}

function positionTextCenterF() {
    mainText.style.alignItems = "center"
}

function positionTextRightF() {
    mainText.style.alignItems = "flex-end"
}

function fontFamilyTextF() {
    console.log(fontFamilyText.valueText)
    mainText.style.fontFamily = fontFamilyText.value
}

function fontSizeTextF() {

    mainText.style.fontSize = fontSizeText.value
}

function colorTextF() {
    colorForm.style.display = 'flex'
}

function colorFormXF() {
    colorForm.style.display = 'none'
}

function bGCTextF() {
    bgcolorForm.style.display = 'flex'

}

function bgcolorFormXF() {
    bgcolorForm.style.display = 'none'
}

function ready() {

    for (let i = 0; i < colorFormElements.length; i++) {
        let o = Math.round(Math.random() * 1000)
        let x = Math.round(Math.random() * o)
        let y = Math.round(Math.random() * o)
        let z = Math.round(Math.random() * o)
        colorFormElements[i].style = `background-color:rgb(${x},${y},${z});`
    }
    for (let j = 0; j < bgColorFormElements.length; j++) {
        let o = Math.round(Math.random() * 1000)
        let x = Math.round(Math.random() * o)
        let y = Math.round(Math.random() * o)
        let z = Math.round(Math.random() * o)
        bgColorFormElements[j].style = `background-color:rgb(${x},${y},${z});`

    }
    let imgRandom
    for (let j = 0; j < fbgcolorFormElements.length; j++) {
        let imgRandom = Math.floor(1 + Math.random() * (9));
        fbgcolorFormElements[j].style = `background-image:url(/images/${imgRandom}.jpeg);;`
    }
}

function colorFormElementF(event) {
    mainText.style = `color:${event.target.style.backgroundColor}`
}

function bgColorFormElementF(event) {
    mainText.style = `background-color:${event.target.style.backgroundColor}`
}

function fbgcolorFormElementF(event) {
    mainText.style = `background-image:${event.target.style.backgroundImage};`
    console.log(event.target.style.backgroundImage)
}

function inputFileF() {
    let url = URL.createObjectURL(this.files[0]);
    mainText.style.backgroundImage = "url(" + url + ")";
    mainText.style.backgroundSize = 'cover';
}

function loginF() {
    if (togleLog) {
        loginForm.style.display = "block";
        togleLog = false
    } else {
        loginForm.style.display = "none";
        togleLog = true
    }
}

function btnAutorizationF() {

    if (formLogin.value == "" && formPassword.value == "") {
        pleaseCheck.innerText = "value is empty"
    } else if (userData.login == formLogin.value && userData.password == formPassword.value) {
        {
            loginForm.style.display = "none";
            togleLog = true
        }
    } else {
        pleaseCheck.innerText = "check your password"
    }


}

function editTextF() {

    firstTools.style.display = "none"
    wraperFirstSection.style.display = "flex"
    mainTextEdit.value = mainText.innerHTML
    mainTextEdit.style.display = "block"
    mainText.style.display = "none"
    changeEditTextFlag = false
}

function saveF() {
    firstTools.style.display = "flex"
    wraperFirstSection.style.display = "none"
    mainText.innerHTML = mainTextEdit.value
    mainTextEdit.style.display = "none"
    mainText.style.display = "flex"
    changeEditTextFlag = true
}

function btnOlCreateF() {

    let res = ''
    if (OlLiItem.value == "" || OlTipe.value == "") {
        CreateOlp.style.display = "block"
    } else {
        // res=mainTextEdit.value
        CreateOlp.style.display = "none"
        for (i = 1; i <= OlLiItem.value; i++) {
            res += `<li>Item${i}</li>`
        }
        mainTextEdit.value += `<ol style="list-style-type:${OlTipe.options[OlTipe.options.selectedIndex].value }" >${res}</ol>`
        wrapperCreateOl.style.display = "none"
        wraperFirstSection.style.display = "flex"
    }

}

function btnOlResetF() {
    OlLiItem.value = ""
    OlTipe.value = ""
}

function createOlF() {
    wrapperCreateOl.style.display = "flex"
    wraperFirstSection.style.display = "none"
}

function btnUlCreateF() {

    let res = ''
    if (UlLiItem.value == "" || UlTipe.value == "") {
        CreateUlp.style.display = "block"
    } else {
        CreateUlp.style.display = "none"
        for (i = 1; i <= UlLiItem.value; i++) {
            res += `<li>Item${i}</li>`
        }
        mainTextEdit.value += `<ul style="list-style-type:${UlTipe.options[UlTipe.options.selectedIndex].value }" >${res}</ul>`
        wrapperCreateUl.style.display = "none"
        wraperFirstSection.style.display = "flex"
    }
}

function btnUlResetF() {
    UlLiItem.value = ""
    UlTipe.value = ""
}

function createUlF() {
    wrapperCreateUl.style.display = "flex"
    wraperFirstSection.style.display = "none"
}

function btnResetTableF() {
    countTR.value = ""
    widthTD.value = ""
    widthBorderTD.value = ""
    countTD.value = ""
    heightTD.value = ''
}

function craateTableF() {
    wrapperCreateTable.style.display = "flex"
}

function btnCreateTableF() {
    if (widthTD.value == "" || heightTD.value == "" || widthBorderTD.value == "" ||
        selectTableStyle.options[selectTableStyle.selectedIndex] == "" ||
        countTR.value == "" || countTD.value == ""
    ) {
        invalid.style.display = "flex"
    } else {

        wrapperCreateTable.style.display = "none"
        let arrTR = []
        let arrTD = []
        let arrTDRes = []
        let arrTRRes = []
        let TR
        let TD = `<td style="width:${widthTD.value}; height:${heightTD.value};
    border:${widthBorderTD.value}px ${selectTableStyle.options[selectTableStyle.selectedIndex].text} ${   selectTableColor.options[selectTableColor.selectedIndex].text}" >TD</td>`
        for (let i = 0; i <= countTR.value; i++) {
            if (arrTDRes[0] !== null) {
                TR = `<tr>${arrTDRes}</tr>`
                arrTR.push(TR)
                arrTD = []
            } else continue
            for (let j = 0; j < countTD.value; j++) {
                arrTD.push(TD)
                arrTDRes = arrTD.join(' ')
            }
        }
        arrTRRes = arrTR.join(' ')
        mainTextEdit.value += `<table>${arrTRRes}</table>`
    }
}