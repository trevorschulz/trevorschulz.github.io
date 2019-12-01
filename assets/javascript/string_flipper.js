function myFunction() {
    var string = document.getElementById("string").value;
    var str = string;
    var res = str.split("");
    var flip = res.reverse();
    var rev = flip.toString();
    var comma = /,/gi
    var final = (rev.replace(comma, ''))
    document.getElementById("demo").innerHTML = final;
}