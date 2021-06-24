document.getElementById('output').style.visibility = 'hidden'

document.getElementById('kginput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility = 'visible'
    let kgrams = e.target.value;
    document.getElementById('grams-output').innerHTML = kgrams*1000;
    document.getElementById('mili-output').innerHTML = kgrams*10000000;
    document.getElementById('pounds-output').innerHTML = kgrams*0.453592;
});