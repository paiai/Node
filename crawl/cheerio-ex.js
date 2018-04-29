var client = require('cheerio-httpcli');
var urlType = require('url');

/*
var url = "http://jpub.tistory.com";
var param = {};
client.fetch(url, param, function(err, $, res) {

        if (err) { console.log("error"); return; }

        // 다운로드한 전체 결과
        //var body = $.html();
        //console.log(body);

        // a 링크 추출
        $("a").each(function(idx) {
            var text = $(this).text();
            var _href = $(this).attr('href');

            if(!_href) return;
            // 상대 경로를 절대 경로로 변환
            var href = urlType.resolve(url, _href);
            console.log(text + " : " + _href + " => " + href);
        });
});
*/

var url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
var param = {};
client.fetch(url, param, function(err, $, res) {

        if (err) { console.log("error"); return; }

        // img 태그 추출
        $("img").each(function(idx){
            var src = $(this).attr('src');
            src = urlType.resolve(url, src);
            console.log(src);
        });
});