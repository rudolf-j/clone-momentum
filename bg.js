const CLIENT_ID = `kvjuDb9IFALQxATLJR1o_i3Nqn3nLpaz1EVw38c98vI`;
const COLLECTIONS = `12134442`;
const bg = document.querySelector("#background li");

function loadImg(url){
    $("<img>").attr("src", url).on("load", function(){
        bg.style.background = `url(${url})`;
        bg.style.backgroundSize = "cover";
        bg.style.backgroundPosition = "center";
        bg.style.backgroundAttachment = "fixed";
        bg.style.backgroundRepeat = "norepeat";
        $("#background").fadeTo(0,0);
        $("#background").fadeTo(200,1);
        this.remove();
    });
}

fetch(`https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&collections=${COLLECTIONS}`)
  .then((Response) => {return Response.json()})
  .then((json) => { loadImg(json.urls.regular) });