function ajax({url,data={},type='get'}={}) {
    function data2url(data) {
        var arr=[];
        data.t=Math.random();
        for(var name in data){
            arr.push(name+'='+data[name])//['a=1','b=2']
        }
        return arr.join('&')
    }

    if(!url){
        alert('路径必须写');
        return;
    }

    var promise=new Promise((resolve, reject)=>{
        var xhr=new XMLHttpRequest();

        switch (type.toLowerCase()){
            case 'get':
                xhr.open('get',url+'?'+data2url(data),true);
                xhr.send();
                break;
            case 'post':
                xhr.open('post',url,true);
                xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
                xhr.send(data2url(data));
                break
        }

        xhr.onreadystatechange=function () {
            if(xhr.readyState==4){
                if(xhr.status>=200 && xhr.status<300 || xhr.status==304){
                    resolve(xhr.responseText)
                }else{
                    reject(xhr.status)
                }
            }
        }
    })

    return promise;
}