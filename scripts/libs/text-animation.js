
// set up text to print, each item in array is new line
let aText = new Array(
  "2019年9月からプログラミングスクールに通い、現在、SESとして現場で働いてます。",
  "現場の経験としては、Javaアプリケーションのテストやお客様のQA対応などの業務をしてきました。",
  "どうぞよろしくお願いします！！"
);
let iSpeed = 100; // time delay of print out ⇨プリントアウトの時間遅延
let iIndex = 0; // start printing array at this posision⇨この位置でアレイの印刷を開始します
let iArrLength = aText[0].length; // the length of the text array⇨テキスト配列の長さ
let iScrollAt = 20; // start scrolling up at this many lines⇨この数行で上にスクロールし始めます
 
let iTextPos = 0; // initialise text position⇨テキストの位置を初期化する
let sContents = ''; // initialise contents letiable⇨コンテンツ変数を初期化します
let iRow; // initialise current row⇨現在の行を初期化する
const destination = document.querySelector(".home__text");
function typewriter() {
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 1500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();
