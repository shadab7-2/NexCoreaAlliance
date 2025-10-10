let img = document.getElementsByTagName("img")[0];
let btn = document.getElementsByTagName('input')[0];

btn.onclick = function(){
     if(btn.value == "On"){
                img.src = "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg";
                btn.value = "off";
                btn.style.background = "red"
            }else{
                img.src = "https://images.pexels.com/photos/577513/pexels-photo-577513.jpeg";
                btn.value = "On";
                btn.style.background = "red"
                
            }
}