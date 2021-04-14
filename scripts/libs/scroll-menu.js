//ページ内リンクスムーススクロール
$('a[href^="#"]').on('click', function () {
  let adjust = 120
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top - adjust;
  $("html, body").animate({scrollTop: position}, 550, "swing");
  return false;
});