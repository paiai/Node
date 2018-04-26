// 주식 정보 가져오기

var client = require('cheerio-httpcli')

var code = '005930.KS'; // 삼성전자
var url = 'http://finance.yahoo.com/q/hp';
//var url = 'https://finance.yahoo.com/quote/005930.KS/history?p=005930.KS';


client.fetch(url, {
    "s" : code
}, function(err, $, res){
    if(err) {
        console.log(err);
        return;
    }

    var str = $("#quote-header-info > div > div > div > span:nth-child(1)").text();
    str = str.replace(/,/g, ""); // 쉼표 제거

    var arr = str.match(/\d+\.\d+/); // 숫자.숫자 만 추출하기(\d 는 숫자)

    console.log(code);
    console.log("Price: " + arr[0]);
})