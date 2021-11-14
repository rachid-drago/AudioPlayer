import './libs/webaudio-controls.js';

const getBaseURL = () => {
    return new URL('.', import.meta.url);
};



const template = document.createElement("template");
template.innerHTML = /*html*/`
  <style>
      #gain_slider{
                margin-top:25px;
                display: flex;
                float:left;            
              }
      #switch1_wrapper{
          float:right;
          justify-content:center;
          display:flex;
          flex-direction:column;
      }
      #gains{
          float:right;
 
      }
      #_gain{
          background-color:yellow;
      }
      #g_label{
          font-size:8px;
          margin-left:7px;
      }
      hr{
          color:black;
          height:3px;
          background-color:black;
      }
      #vmeter{
          margin-bottom:15px;
          margin-left:15px;
      }
      
      #right{
          float:right;
          margin-right:10px;
          display:flex;
          flex-direction:column;
            justify-content:center
      }
      li:hover{
          font-size:13px;
          cursor:pointer;
      }
    #ol-wrapper{
        width:195px;
        float:left;
        margin-left:-20px;
        height:100px !important;      overflow: overlay;
        overflow-x:hidden;

    }
    #ol-wrapper::-webkit-scrollbar{
    -webkit-appearance: none;
    width: 4px;
}

#ol-wrapper::-webkit-scrollbar-track{
    margin: 7px 0;
    border-radius: 10px;
    background-color: #e1e1e1;
}

#ol-wrapper::-webkit-scrollbar-thumb{
    border-radius: 4px;
    border: 0px solid rgba(255,255,255,0);
    background-clip: content-box;
    background-color: #a0a0a0;
}
    li{
        font-size:8px;
        font-weight:bolder;
        border:0px;
        
    }
  canvas {
      border:1px solid black;
      background-color: black;
  }

  #silver{
    box-sizing: content-box;
     background-image: URL('./myComponents/assets/imgs/silver2.jpg');
     background-repeat: repeat-x repeat-y;
	 background-attachment: fixed;
  	background-size: 100% 100%;
    height:275px;
    box-shadow: 10px 5px 5px;
    border-radius: 10px;
  }
  .elementplaylist{
      padding:1px;
  }

  #progress {
      height:10px;
    width: 200px;
      color: black;
      background-color: black;
      -webkit-appearance: none;
      outline: none; /* Remove outline */
        opacity: 0.7;
        cursor: pointer;
  }
  #progress::-webkit-slider-thumb {
      height:10px;
  -webkit-appearance: none;
  appearance: none;
  width: 5px;
   
  background-color: red;
  cursor: pointer;
}
.container{
    text-align:center;

}
  </style>

 
<div class="container">
    <div id = "silver">
    <br>

  

  <audio id="myPlayer" crossorigin="anonymous"></audio>



    <webaudio-switch id="switch3"
     src="./assets/imgs/switch_toggle2.png"
      width="32" height="32">
      </webaudio-switch>
      <webaudio-switch id="switch2"
     src="./assets/imgs/switch_toggle.png"
     type="kick"
      width="32" height="32">

    </webaudio-switch>
    <span id="buttons">
    <webaudio-switch id="btn1"
     src="./assets/imgs/switch_press.png"
     type="kick"
      width="32" height="32"> 
        </webaudio-switch>
    
        <webaudio-switch id="btn2"
     src="./assets/imgs/switch_press.png"
     type="kick"
      width="32" height="32"> 
        </webaudio-switch>
    
        <webaudio-switch id="btn3"
     src="./assets/imgs/switch_press.png"
     type="kick"
      width="32" height="32"> 
        </webaudio-switch>
        
</span>
    <webaudio-switch id="loop"
     src="./assets/imgs/redbutton128.png"
      width="32" height="32">

    </webaudio-switch>
    <span style="font-size:10px;font-weight:bold">
    <label id="currenttime"></label>
 <label id="currentsong"></label>
</span>
    <div id="switch1_wrapper">
    <webaudio-switch id="switch1"
     src="./assets/imgs/switch_toggle.png"
      width="32" height="32">

    </webaudio-switch>

    <span style="color:brown;font-size:10px;font-weight:bold;margin-right:15px;">Play/Pause</span>
</div>
<hr>
<!--     <webaudio-knob id="vitesseKnob" 
      src="./assets/imgs/Vintage_Knob.png" 
      min=0.2 max=4 step=0.1 value=1 
      diameter="32" 
      tooltip="vitesse: %d">
    </webaudio-knob>

    <webaudio-knob id="bal" 
      src="./assets/imgs/WOK.png" 
      value = 0
      min=-1 max=1 step=0.1
      tooltip="value: %d"
      diameter="40" 
      sprites= "127"
    >
    </webaudio-knob> -->




    <span id="_switches">


<!--     <webaudio-switch id="switch1"
     src="./assets/imgs/switch_toggle.png"
      width="32" height="32">

    </webaudio-switch> -->

<!--     <webaudio-switch id="switch2"
     src="./assets/imgs/switch_toggle.png"
     type="kick"
      width="32" height="32">

    </webaudio-switch>
 -->

</span>
<div id="right">
<webaudio-knob id="vmeter" 
    width="60" height="60"
    value=50

      src="./assets/imgs/Vintage_VUMeter_2.png" 
      tooltip="Volume: %d">
    </webaudio-knob>

<webaudio-knob id="vintage" 

src="./assets/imgs/Vintage_Knob.png" 
value=5 min=0 max=10 step=0.01 
diameter="90" 
tooltip="Volume: %d">
</webaudio-knob>
<span style="margin-left:30px">
<webaudio-switch id="mute"
    value = 0
     src="./assets/imgs/mute.png"
      width="32" height="32">

    </webaudio-switch>
</span>
</div>
  

    
<div id="left">
    <span id="ol-wrapper">
    <span id="list" width=75></span>
</span>
    </div>

<!--     <webaudio-switch id="On"
     src="./assets/imgs/on2.png"
      width="32" height="32">

    </webaudio-switch> -->

<!--     <webaudio-switch id="mute"
    value = 0
     src="./assets/imgs/mute.png"
      width="32" height="32">

    </webaudio-switch> -->
    <div style="display:flex;flex-direction:column;width:210px;background-color:black;float:right;margin-top:20px">
    <canvas id="myCanvas" width=250 height=150 style="margin-top:-20px;margin-left:0px"></canvas>
    <input id="progress" type="range" value=0>
</div>




  <br>
  
    <span id="gains">

  <webaudio-knob id="gain0" 
      src="./assets/imgs/Vintage_Knob.png" 
      value="0" step="1" min="-30" max="30" 
      diameter="32" 
      tooltip="60Hz: %d">
    </webaudio-knob>


    <webaudio-knob id="gain1" 
      src="./assets/imgs/Vintage_Knob.png" 
      value="0" step="1" min="-30" max="30" 
      diameter="32" 
      tooltip="170Hz: %d">
    </webaudio-knob>

    <webaudio-knob id="gain2" 
      src="./assets/imgs/Vintage_Knob.png" 
      value="0" step="1" min="-30" max="30" 
      diameter="32" 
      tooltip="350Hz: %d">
    </webaudio-knob>

    <webaudio-knob id="gain3" 
      src="./assets/imgs/Vintage_Knob.png" 
      value="0" step="1" min="-30" max="30" 
      diameter="32" 
      tooltip="1000Hz: %d">
    </webaudio-knob>

    <webaudio-knob id="gain4" 
      src="./assets/imgs/Vintage_Knob.png" 
      value="0" step="1" min="-30" max="30" 
      diameter="32" 
      tooltip="3500Hz: %d">
    </webaudio-knob>

    <webaudio-knob id="gain5" 
      src="./assets/imgs/Vintage_Knob.png" 
      value="0" step="1" min="-30" max="30" 
      diameter="32" 
      tooltip="10000Hz: %d">
    </webaudio-knob>
    <div style="margin-bottom:100px;">
    <label id="g_label">60Hz</label>
    <label id="g_label">170Hz</label>
    <label id="g_label">350Hz</label>
    <label id="g_label">1000Hz</label>
    <label id="g_label">3500Hz</label>
    <label id="g_label">10000Hz</label>
</div>
</span >
    <br>
    <span style="margin-top:80px;margin-left:20px;display:flex">
        <span style="margin-top:20px;display:flex">
            <br>
    <webaudio-knob id="vitesseKnob" 
      src="./assets/imgs/Vintage_Knob.png" 
      min=0.2 max=4 step=0.1 value=1 
      diameter="48" 
      tooltip="vitesse: %d">
    </webaudio-knob>

    <webaudio-knob id="bal" 
      src="./assets/imgs/WOK.png" 
      value = 0
      min=-1 max=1 step=0.1
      tooltip="value: %d"
      diameter="60" 
      sprites= "127"
    >
    </webaudio-knob>
    
</span>
    <span id="gain_slider">
<webaudio-slider 
style="margin-left:10px;"
    value="10" 
    step="0.1" 
    min="0" 
    max="10"
    width="13" height="60"
    knobwidth="15" 
    knobheight="15" 
    id="gain"
    src="./assets/imgs/vsliderbody.png" 
    knobsrc="./myComponents/assets/imgs/vsliderknob.png" 
    >

    </webaudio-slider>
    
</span>
</span>

<br>
  </div>
</div>
 

  `;
var filters = [];
class MyAudioPlayer extends HTMLElement {
    
    constructor() {
        super();
        // Récupération des attributs HTML
        //this.value = this.getAttribute("value");

        // On crée un shadow DOM
        this.attachShadow({ mode: "open" });

        console.log("URL de base du composant : " + getBaseURL())

        this.nbBranches = 6;
        this.ecart = 1;

        this.angleIConst = 0;
        this.angleJ = 2 * this.ecart * Math.PI / (this.nbBranches);

        this.angleAlpha = 0;
    }

    
    

    connectedCallback() {
        
        // Appelée automatiquement par le browser
        // quand il insère le web component dans le DOM
        // de la page du parent..

        // On clone le template HTML/CSS (la gui du wc)
        // et on l'ajoute dans le shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // fix relative URLs
        this.fixRelativeURLs();

        let _playlist = this.getAttribute ("playlist");
        this.playlist =[];
        if (_playlist != null) {
            _playlist.split(",").forEach ((e) => {
                this.playlist.push (e.trim ())
            })
            console.log(this.playlist)
        }

        
        
        let ul = document.createElement("ol");
         
        this.playlist.forEach((element) => {
            let li = document.createElement("li");
            let ind = element.lastIndexOf('/');
            let ch = element.slice(ind + 1);
            li.innerHTML = ch;
            li.className = "elementplaylist";
            ul.appendChild(li);
            li.addEventListener("click", (e) => {
                this.player.src = element;
                let ind = this.player.src.lastIndexOf('/');
                let ch = this.player.src.slice(ind + 1);
                this.shadowRoot.querySelector("#currentsong").innerHTML = ch;
                this.player.play();
            } )
        });

        
        this.shadowRoot.querySelector("#list").appendChild(ul);
        

        this.player = this.shadowRoot.querySelector("#myPlayer");
        this.player.src = this.playlist[0];
        let ind = this.player.src.lastIndexOf('/');
                let ch = this.player.src.slice(ind + 1);
        this.shadowRoot.querySelector("#currentsong").innerHTML = ch;
        // récupérer le canvas
        this.canvas = this.shadowRoot.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext("2d");

        // Récupération du contexte WebAudio
        this.audioCtx = new AudioContext();

        // on définit les écouteurs etc.
        this.defineListeners();
        



        // On construit un graphe webaudio pour capturer
        // le son du lecteur et pouvoir le traiter
        // en insérant des "noeuds" webaudio dans le graphe
        this.buildAudioGraph();
        // on démarre l'animation
        
            this.drawCanvas();


           
    }
    drawCanvas() {
        if (this.shadowRoot.querySelector("#switch3").value == 1) {
            
                this.animationLoop();
            
        }else if (this.shadowRoot.querySelector("#switch3").value == 0){
            
                this.visualize2();
            
            
        }else if (this.shadowRoot.querySelector("#On").value == 1){
            
            //this.drawFantaisie();
    }
        requestAnimationFrame(() => {
            this.drawCanvas();
        });
    }
    buildAudioGraph() {
        let audioContext = this.audioCtx;

        //var filters = [];
        
       let mediaElement = this.player;

       let playerNode = audioContext.createMediaElementSource(mediaElement);

       mediaElement.onplay = (e)=>{audioContext.resume();}

        // fix for autoplay policy
        mediaElement.addEventListener('play',() => this.audioCtx.resume());
  

        // Create an analyser node
        this.analyserNode = audioContext.createAnalyser();

        // Try changing for lower values: 512, 256, 128, 64...
        this.analyserNode.fftSize = 128;
        this.bufferLength = this.analyserNode.frequencyBinCount;
        this.dataArray = new Uint8Array(this.bufferLength);
        this.angleIConst = 2 * Math.PI / this.bufferLength;


        // create the equalizer. It's a set of biquad Filters


    // Set filters
    [60, 170, 350, 1000, 3500, 10000].forEach(function(freq, i) {
        var eq = audioContext.createBiquadFilter();
        eq.frequency.value = freq;
        eq.type = "peaking";
        eq.gain.value = 0;
        filters.push(eq);
      });
  
     // Connect filters in serie
     playerNode.connect(filters[0]);
     for(var i = 0; i < filters.length - 1; i++) {
        filters[i].connect(filters[i+1]);
      }

      // Master volume is a gain node
        this.masterGain = audioContext.createGain();
        this.masterGain.value = 1;
 

   // connect the last filter to the speakers
   filters[filters.length - 1].connect(this.masterGain);

        // for stereo balancing, split the signal
        
        this.stereoPanner = audioContext.createStereoPanner();

        // lecteur audio -> analyser -> haut parleurs
        this.masterGain.connect(this.stereoPanner)
        playerNode.connect(this.stereoPanner);
        this.stereoPanner.connect(this.analyserNode);
        this.analyserNode.connect(audioContext.destination);
    }


animationLoop() {
    
    // 1 on efface le canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    

    // 2 on dessine les objets
    //this.ctx.fillRect(10+Math.random()*20, 10, 100, 100);
    // Get the analyser data
    this.analyserNode.getByteFrequencyData(this.dataArray);

    let barWidth = this.canvas.width / this.bufferLength;
    let barHeight;
    let x = 0;

    // values go from 0 to 256 and the canvas heigt is 100. Let's rescale
    // before drawing. This is the scale factor
    let heightScale = this.canvas.height / 128;

    for (let i = 0; i < this.bufferLength; i++) {
        barHeight = this.dataArray[i];
       // ctx.rotate(i * bufferLength * 4)
        this.ctx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
        barHeight *= heightScale;
        this.ctx.fillRect(x, this.canvas.height - barHeight / 2, barWidth, barHeight / 2);

        // 2 is the number of pixels between bars
        x += barWidth + 1;
    }
    // 3 on deplace les objets

    // 4 On demande au navigateur de recommencer l'animation
    
}

drawFantaisie () {
    
    this.ctx.clearRect (0, 0, this.canvas.width, this.canvas.height)

    this.analyserNode.getByteFrequencyData(this.dataArray);
    let barWidth = this.canvas.width / this.bufferLength;
    let barHeight;
    let heightScale = this.canvas.height / 128;

    this.ctx.save ()
    this.ctx.translate (this.canvas.width / 2, this.canvas.height / 2)
    this.ctx.rotate (this.angleAlpha)
    
    let angleI = 0;

    for (let i = 0; i < this.bufferLength; i++) {
        angleI = i * this.angleIConst
        for (let k=-1; k<2; k=k+2) {
            this.ctx.save ()
            this.ctx.rotate (k*angleI)

            for (let j=0; j<this.nbBranches; j++) {
                for (let t=0; t<2; t++) {
                    this.ctx.save ()
                    this.ctx.rotate (j* this.angleJ)
                    barHeight = this.dataArray[i];

                    this.ctx.fillStyle = 'rgb(' + 50 + ',' + 
                                                            50 + ',' + 
                                                            (barHeight + 120) + ')';
                    this.ctx.fillRect(0, 0, barWidth, barHeight * heightScale/ 2);
                    this.ctx.restore ()
                }
            }
            this.ctx.restore ()
        }
    }
    this.ctx.restore ()

    
}

 visualize2() {
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    this.ctx.fillRect (0, 0, this.canvas.width, this.canvas.height);

    this.analyserNode.getByteFrequencyData(this.dataArray);
    var nbFreq = this.dataArray.length;
    
    var SPACER_WIDTH = 5;
    var BAR_WIDTH = 2;
    var OFFSET = 100;
    var CUTOFF = 23;
    var HALF_HEIGHT = this.canvas.height/2;
    var numBars = 1.7*Math.round(this.canvas.width / SPACER_WIDTH);
    var magnitude;
  
    this.ctx.lineCap = 'round';

    for (var i = 0; i < numBars; ++i) {
       magnitude = 0.3*this.dataArray[Math.round((i * nbFreq) / numBars)];
        
       this.ctx.fillStyle = "hsl( " + Math.round((i*360)/numBars) + ", 100%, 50%)";
       this.ctx.fillRect(i * SPACER_WIDTH, HALF_HEIGHT, BAR_WIDTH, -magnitude);
       this.ctx.fillRect(i * SPACER_WIDTH, HALF_HEIGHT, BAR_WIDTH, magnitude);

    }
    
    // Draw animated white lines top
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();

    for (i = 0; i < numBars; ++i) {
        magnitude = 0.3*this.dataArray[Math.round((i * nbFreq) / numBars)];
          if(i > 0) {
            //console.log("line lineTo "  + i*SPACER_WIDTH + ", " + -magnitude);
            this.ctx.lineTo(i*SPACER_WIDTH, HALF_HEIGHT-magnitude);
        } else {
            //console.log("line moveto "  + i*SPACER_WIDTH + ", " + -magnitude);
            this.ctx.moveTo(i*SPACER_WIDTH, HALF_HEIGHT-magnitude);
        }
    }
    for (i = 0; i < numBars; ++i) {
        magnitude = 0.3*this.dataArray[Math.round((i * nbFreq) / numBars)];
          if(i > 0) {
            //console.log("line lineTo "  + i*SPACER_WIDTH + ", " + -magnitude);
            this.ctx.lineTo(i*SPACER_WIDTH, HALF_HEIGHT+magnitude);
        } else {
            //console.log("line moveto "  + i*SPACER_WIDTH + ", " + -magnitude);
            this.ctx.moveTo(i*SPACER_WIDTH, HALF_HEIGHT+magnitude);
        }
    }    
    this.ctx.stroke();
    
    this.ctx.restore();
  
  //requestAnimationFrame(visualize2);
  
}


fixRelativeURLs() {
    const elems = this.shadowRoot.querySelectorAll("webaudio-knob, webaudio-slider, webaudio-switch, img");
    elems.forEach(e => {
        const path = e.src;
        if (path.startsWith(".")) {
            e.src = getBaseURL() + path;
        }
    });
}


defineListeners() {
    

        
    

    this.shadowRoot.querySelector("#loop").onclick = () => {
        if (this.shadowRoot.querySelector("#loop").value == 1)
        this.player.loop = true;
        else this.player.loop = false;
    }  

    this.shadowRoot.querySelector("#switch1").onclick = () => {
        
            if (this.shadowRoot.querySelector("#switch1").value == 1)  {
                this.player.play();
                this.audioCtx.resume();
            }  if (this.shadowRoot.querySelector("#switch1").value == 0)  {
                this.player.pause();
            }
        
        
    }



    this.shadowRoot.querySelector("#switch2").onclick = () => {
        this.player.currentTime = 0;
        for (var i =0; i<6; i++ ){
            filters[i].gain.value = 0;
            this.shadowRoot.querySelector("#gain"+i).value = 0
        }
        this.player.playbackRate = 1;
        this.shadowRoot.querySelector("#vitesseKnob").value = 1;
    }


    this.shadowRoot.querySelector("#btn1").onclick = () => {
        this.player.currentTime -= 10;
    }

    this.shadowRoot.querySelector("#btn2").onclick = () => {
        this.player.currentTime += 10;
    }

    

    this.shadowRoot.querySelector("#vintage").oninput = (event) => {
        this.player.volume = parseFloat(event.target.value) /10;
        console.log("volume =  " + this.player.volume);
        this.shadowRoot.querySelector("#vmeter").value = event.target.value * 10;
    }

    this.shadowRoot.querySelector("#vitesseKnob").oninput = (event) => {
        this.player.playbackRate = parseFloat(event.target.value);
        console.log("vitesse =  " + this.player.playbackRate);
    }

    this.shadowRoot.querySelector("#gain").oninput = (event) => {
        var value = parseFloat(event.target.value);
        this.masterGain.gain.value =  value/10;
        console.log("masterGain =  " + value);
    }

    this.shadowRoot.querySelector("#bal").oninput = (event) => {
        var value = parseFloat(event.target.value);
        this.stereoPanner.pan.value = value;
        console.log("balance =  " + value);
    }

    this.shadowRoot.querySelector("#gain5").oninput = (event) => {
        var value = parseFloat(event.target.value);
        filters[5].gain.value = value;
        console.log("gain10000hz =  " + value);
    }
    this.shadowRoot.querySelector("#gain4").oninput = (event) => {
        var value = parseFloat(event.target.value);
        filters[4].gain.value = value;
        console.log("gain3500hz =  " + value);
    }
    this.shadowRoot.querySelector("#gain3").oninput = (event) => {
        var value = parseFloat(event.target.value);
        filters[3].gain.value = value;
        console.log("gain1000hz =  " + value);
    }
    this.shadowRoot.querySelector("#gain2").oninput = (event) => {
        var value = parseFloat(event.target.value);
        filters[2].gain.value = value;
        console.log("gain350 =  " + value);
    }
    this.shadowRoot.querySelector("#gain1").oninput = (event) => {
        var value = parseFloat(event.target.value);
        filters[1].gain.value = value;
        console.log("gain170hz =  " + value);
    }
    this.shadowRoot.querySelector("#gain0").oninput = (event) => {
        var value = parseFloat(event.target.value);
        filters[0].gain.value = value;
        console.log("gain60hz =  " + value);
    }

    this.shadowRoot.querySelector("#progress").onchange = (event) => {
        this.player.currentTime = parseFloat(event.target.value);
    }

    this.player.ontimeupdate = (event) => {
        let progressSlider = this.shadowRoot.querySelector("#progress");
        progressSlider.max = this.player.duration;
        progressSlider.min = 0;
        progressSlider.value = this.player.currentTime;
    
        this.shadowRoot.querySelector("#currenttime").innerHTML= this.convertMillisecondeToMinute (this.player.currentTime) + " / " + this.convertMillisecondeToMinute (this.player.duration);
    }


    this.shadowRoot.querySelector("#mute").onclick = () => {
        if (this.shadowRoot.querySelector("#mute").value == 1) {
            this.player.muted = true;
        } else this.player.muted = false;
        
    }
    


}
convertMillisecondeToMinute (millisecondes) {
    let secondes = millisecondes % 1000;
    let minutes = (secondes / 60) | 0;
    secondes = (secondes - minutes * 60) | 0;

    minutes =  (minutes <10) ? "0" + minutes : minutes
    secondes =  (secondes <10) ? "0" + secondes : secondes
    return minutes + ":" + secondes
}

    // L'API du Web Component
   
}



customElements.define("my-player", MyAudioPlayer);
