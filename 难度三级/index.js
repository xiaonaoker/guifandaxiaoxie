window.onload=function() {
    var a,i,arr,
        btn1=document.getElementById("btn1"),
        btn2=document.getElementById("btn2"),
        rst=document.getElementById("rst");

    btn1.onclick=function(){
        var ipt=document.getElementById("ipt").value;
        ipt=ipt.toLocaleLowerCase();//字符串全变小写
        ipt=ipt.replace(/\,|\!|\?|\;/g, ".");//把标点符号全部变成句号
        arr=ipt.split(".");

        for(i=0;i<arr.length-1;i++){
            arr[i]=arr[i].replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase());
        }
        rst.innerHTML=arr.join(".");
    };

    btn2.onclick=function(){
    var ipt=document.getElementById("ipt");
        rst.innerHTML="";
        ipt.value="";
    }
};

//charAt(0):字符串的第n个字符
//toLowerCase转小写，toUpperCase转大写
//splice:从指定位置删除掉几个字符（并用什么代替）//数组
//slice:返回已有数组中选定的位置开始到结束的子数组//数组
//replace(,)后面一位代替前面一位
//split:字符串按指定pattern拆分的数组//返回一个数组
// substring(start,end)：截取从start到end之间的字符串
// substr(start,length)表示从start位置开始，截取length长度的字符串。
//exec:返回包含字符串的数组
//i am a student;i AM A GOOD GIRL!you're a PIG?ahh yes!XIEXIN Is a Pig,

