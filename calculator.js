function getValue(val){
    if(val == 'AC')
    {
        document.getElementById("text-box").value = "";
    }
    else
    document.getElementById("text-box").value = document.getElementById("text-box").value + val;

}

function calc(){
    var inputs = document.getElementById("text-box").value;
    var result = eval(inputs);
    document.getElementById("text-box").value = result;
}

function erase(){
    var i = document.getElementById("text-box").value;
    var r = i.charAt(i.length-1)
    var newres = i.replace(r,'')
    document.getElementById("text-box").value = newres;
}