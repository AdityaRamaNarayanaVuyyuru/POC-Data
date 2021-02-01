
		function my(){
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//var ahr=document.querySelector('a').href;
if (isMobile==true) {
 document.getElementById('pid').innerHTML= "https://m.punjabkesari.in/national/news/naidu-s-advice-to-pakistan-and-china-about-article-370-1218535"
  //document.querySelector('a').setAttribute("href", "https://m.punjabkesari.in/national/news/naidu-s-advice-to-pakistan-and-china-about-article-370-1218535");
}
else
{
	 document.getElementById('pid').innerHTML= "https://www.punjabkesari.in/national/news/naidu-s-advice-to-pakistan-and-china-about-article-370-1218535"

 // document.querySelector('a').setAttribute("href", "https://www.punjabkesari.in/national/news/naidu-s-advice-to-pakistan-and-china-about-article-370-1218535");
}

		}
	