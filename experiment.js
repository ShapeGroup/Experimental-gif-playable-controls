
  // NOT WORKING - It's a note of experiment

  let banner      = document.querySelectorAll('figure>*')[0];
  if(banner.src.endsWith(".gif"))
  {

      banner.onload = () =>
      {

          /// APPROACH TYPE 01
          // banner.insertAdjacentHTML('afterend', `<embed type="video/webm" class="videogif" src="`+banner.src+`"></embed>`);
          //
          // setTimeout(()=>{
          //
          //     var gifprinter      = banner.nextElementSibling;
          //     gifprinter.width    = banner.offsetWidth;
          //     gifprinter.height   = banner.offsetHeight;
          //
          //     banner.remove();
          //
          //         gifprinter.onclick = ev_t => { console.log('try stop',gifprinter );  gifprinter.pause(); } //gifprinter.stop();
          //         play.onclick = ev_t => { console.log('try play',gifprinter );  gifprinter.play(); } //gifprinter.stop();
          // },200)

          /// APPROACH TYPE 02
          // banner.insertAdjacentHTML('afterend', `<div class="printedgif"></div>`);
          //
          // gifprinter          = banner.nextElementSibling;
          // gifprinter.width    = banner.offsetWidth;
          // gifprinter.height   = banner.offsetHeight;
          //
          // gifprinter.style.backgroundImage = "url('"+banner.src+"')";
          // banner.remove();

          /// APPROACH TYPE 03
          // console.log("gif is loaded");
          //
          // var canvas = document.createElement('canvas');
          // canvas.width = banner.offsetWidth;
          // canvas.height = banner.offsetHeight;
          //
          // var projector = banner.parentNode.previousElementSibling;
          // projector.style.width = canvas.width;
          // projector.style.height = canvas.height;
          //
          // console.log("start animator");
          //
          // let animator = setInterval( () =>{

          /// TYPE > 03-a
          //     // if(audio.paused) { window.clearInterval(animator); }
          //
          //     let drawer = canvas.getContext("2d");
          //     drawer.clearRect(0, 0, canvas.width, canvas.height);
          //     drawer.drawImage(banner, 0, 0, canvas.width, canvas.height)
          //     animationsequence = canvas.toDataURL( 'image/*', 20 );
          //     projector.src = animationsequence;
          //
          // },200);

          /// TYPE > 03-b
          // function animator(){
          //
          //     drawer.drawImage(banner,0,0,canvas.width,canvas.height);
          //     animationsequence = canvas.toDataURL( 'image/*', 20 );
          //     projector.src = animationsequence;
          //     console.log('drawer run... ',animationsequence);
          //
          //     window.requestAnimationFrame(animator);
          //
          // } animator();

      }
  }
