function shrekLoad(){
    var randy = Math.floor(Math.random()*20);
    console.log(randy);
    if (randy == 2){
        document.getElementById('pageTitle').textContent = "Nem Shrekcurity";
        document.getElementById('pageDesc').textContent = "Csak megfenyegedtek ):";
        document.getElementById('indexHeader').style.backgroundImage="url('képek/shreak_easteregg.jpg')";
        document.getElementById('indexHeader').style.backgroundSize="contain";
    }
    else{
        document.getElementById('pageTitle').textContent = "Forest Garden";
        document.getElementById('pageDesc').textContent = "Főoldalunk";
        document.getElementById('indexHeader').style.backgroundImage="url('képek/imgheader_fooldal.jpg')";
    }
}