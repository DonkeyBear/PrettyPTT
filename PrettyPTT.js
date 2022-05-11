// ==UserScript==
// @name         PrettyPTT
// @description  讓網頁版PTT不再傷害你的眼睛。
// @namespace    https://github.com/DonkeyBear/PrettyPTT
// @version      0.1
// @author       DonkeyBear
// @match        https://www.ptt.cc/bbs/*
// @match        https://www.ptt.cc/man/*
// @grant        none
// ==/UserScript==

let colorPalette = {
  gray_1: "#121212",
  gray_2: "#181818",
  gray_3: "#222222",
  gray_4: "#323232",
  gray_5: "#383838",
  gray_6: "#4c4c4c",
  gray_7: "#aaa",
  blue_1: "#23315e",
  blue_2: "#1e3771",
  yellow_1: "ee8",
  yellow_2: "#bdb643",
  background: "#181818",
  border: "",
  text: "",
  searchbar_background: "#121212"
}

let elmBody = document.body.style;
let elmTopbar = document.querySelector("#topbar-container").style;
let elmLogo = document.querySelector("#logo").style;

let transparentElm = [];

if (document.querySelectorAll("#action-bar-container").length !== 0) {
  let elmActionBar = document.querySelector("#action-bar-container").style; // 上方功能按鈕區
  transparentElm.push(elmActionBar);
}
if (document.querySelectorAll(".r-list-container").length !== 0) {
  transparentElm.push(document.querySelector(".r-list-container").style);
}
if (document.querySelectorAll("#search-bar > .query").length !== 0) {
  let elmSearchBar = document.querySelector("#search-bar > .query").style;
}
if (document.querySelectorAll(".r-list-sep").length !== 0) {
  // 文章列表分隔線
  let elmSeparate = document.querySelector(".r-list-sep").style;
  elmSeparate.backgroundColor = colorPalette.gray_4;
  elmSeparate.height = "2px";
  elmSeparate.margin = "1.5ex 0";
}

if (document.querySelectorAll(".r-ent").length !== 0) {
  // 個別文章區塊
  for (let i of document.querySelectorAll(".r-ent")) {
    i.style.backgroundColor = colorPalette.gray_2;
  }
}

if (document.querySelectorAll(".b-list-container").length !== 0) {
  transparentElm.push(document.querySelector(".b-list-container").style);
}

if (document.querySelectorAll(".bbs-screen") !== 0) {
  transparentElm.push(document.querySelector(".bbs-screen").style);
}

if (document.querySelectorAll(".article-metaline").length !== 0) {
  document.querySelector(".bbs-screen").style.lineHeight = 1.5;
  document.querySelector(".article-metaline-right").style.lineHeight = "100%";
  for (let i of document.querySelectorAll(".article-metaline")) {
    i.style.lineHeight = "100%";
    i.style.backgroundColor = colorPalette.blue_2;
  }
  for (let i of document.querySelectorAll(".article-meta-value")) {
    i.style.backgroundColor = colorPalette.blue_2;
  }
  for (let i of document.querySelectorAll(".article-meta-tag")) {
    i.style.color = colorPalette.blue_2;
  }
  if (document.querySelectorAll(".push-userid").length !== 0) {
    for (let i of document.querySelectorAll(".push-userid")) {
      i.style.color = colorPalette.yellow_1;
    }
  }
  if (document.querySelectorAll(".push-content").length !== 0) {
    for (let i of document.querySelectorAll(".push-content")) {
      i.style.color = colorPalette.yellow_2;
    }
  }
}

if (transparentElm.length !== 0) {
  for (let i of transparentElm) {
    i.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}

elmBody.backgroundColor = colorPalette.gray_1;
elmTopbar.backgroundColor = colorPalette.blue_1;
elmLogo.color = colorPalette.yellow_1;