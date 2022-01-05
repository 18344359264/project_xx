$(function () {

    template.defaults.imports.newTime = function (date) {

        let itme = new Date(date);
        let y = itme.getFullYear();
        y = y < 10 ? "0" + y : y;
        let m = itme.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        let d = itme.getDate();
        d = d < 10 ? "0" + d : d;
        let h = itme.getHours();
        h = h < 10 ? "0" + h : h;
        let mm = itme.getMinutes();
        mm = mm < 10 ? "0" + mm : mm;
        let s = itme.getSeconds();
        s = s < 10 ? "0" + s : s;
        return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s

    }

    function getNew() {

        $.get("http://www.liulongbin.top:3006/api/news", function (r) {

            if (r.status !== 200) {
                return alert(r.msg)
            }
            for (let i = 0; i < r.data.length; i++) {
                r.data[i].tags = r.data[i].tags.split(",")
            }

            let htmlStr = template('html-news', r)

            console.log(r);
            $("#news-list").html(htmlStr)
        })

    }
    getNew()

})
