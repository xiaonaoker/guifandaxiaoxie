window.onload=function() {
    var a,i,arr,pattern=/\.|\,|\?|\!|\:|\;/gi,
        btn1=document.getElementById("btn1"),
        btn2=document.getElementById("btn2"),
        rst=document.getElementById("rst");

    btn1.onclick=function(){
        var ipt=document.getElementById("ipt").value;
        ipt=ipt.toLocaleLowerCase();
        arr=ipt.split("");
        arr[0]=arr[0].replace(arr[0].charAt(0),arr[0].charAt(0).toUpperCase());
        for(i=0;i<arr.length-1;i++){
            var judgement=pattern.test(arr[i]);
            if(judgement==true){
                arr[i+1]=arr[i+1].replace(arr[i+1].charAt(0),arr[i+1].charAt(0).toUpperCase());
            }
        }
        rst.innerHTML=arr.join("");
    };

    btn2.onclick=function(){
    var ipt=document.getElementById("ipt");
        rst.innerHTML="";
        ipt.value="";
    }
};
//i am a student;i AM A GOOD GIRL!you're a PIG?ahh yes!XIEXIN Is a Pig.

