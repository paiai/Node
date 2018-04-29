var request = require('request');
var fs = require('fs');
var client = require('cheerio-httpcli');
var urlType = require('url');

var savedir = __dirname + "/img";
if ( !fs.existsSync(savedir) ) {
    fs.mkdirSync(savedir);  // 디렉토리가 없는 경우 생성
} 

var url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
var param = {};

// HTML 파일 획득
client.fetch(url, param, function(err, $, res) {
    if (err) { console.log("error"); return; }

    $("img").each(function(idx) {
        var src = $(this).attr('src');
        src = urlType.resolve(url, src);

        var fname = urlType.parse(src).pathname;
        fname = savedir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g, '_'); // 알파벳, 숫자, 도트 이외에는 문자를 "_" 로 변환

        request(src).pipe(fs.createWriteStream(fname));
    })
})