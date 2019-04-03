window.onload = function(){
    
    var i=0,text;
    text = "WELCOME TO ATTENDLOG";

    function typing() {
        if(i<text.length){
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing,400);
        }
    }
    typing();



    document.getElementById('inner-box').addEventListener('click', 
        function(){
        document.querySelector('.big-modal').style.display = 'flex';
    });

    

    document.querySelector('#closed').addEventListener('click',
        function(){
        document.querySelector('.big-modal').style.display = 'none';
    });

}