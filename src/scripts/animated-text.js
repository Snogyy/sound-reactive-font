const refrestInput = document.getElementById("refresh");
let sensitivityInput = document.getElementById("sensibility");
let currentMinDecibels = -95;
let analyser;

const el = document.querySelector("#app-text");

var bins = 16;

window.addEventListener("load", initVisualizer, false);

function initVisualizer() {
  // Older browsers might not implement mediaDevices at all, so we set an empty object first
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }

  // Some browsers partially implement mediaDevices. We can't just assign an object
  // with getUserMedia as it would overwrite existing properties.
  // Here, we will just add the getUserMedia property if it's missing.
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function (constraints) {
      // First get ahold of the legacy getUserMedia, if present
      var getUserMedia =
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(
          new Error("getUserMedia is not implemented in this browser")
        );
      }

      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function (resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    };
  }

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function (stream) {
      // Set up a Web Audio AudioContext and AnalyzerNode, configured to return the
      // same number of bins of audio frequency data.
      var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();

      analyser.minDecibels = currentMinDecibels;
      analyser.maxDecibels = -10;
      analyser.smoothingTimeConstant = 0.5;

      var source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      analyser.fftSize = bins * 2;

      var dataArray = new Uint8Array(bins);

      const avgHistory = [];

      sensitivityInput.addEventListener("input", (e) => {
        const val = e.target.value;

        currentMinDecibels = map(val, 0, 100, -70, -120);
        analyser.minDecibels = currentMinDecibels;
        localStorage.setItem("minDecibels", currentMinDecibels);
      });

      function setFontFeatures(avg) {
         const els = [el];

        avgHistory.push(avg);
        if (avgHistory.length > els.length) {
          avgHistory.shift();
        }

        for (let i = els.length - 1; i >= 0; i--) {
          const el = els[i];
          el.style.fontVariationSettings = `"wght" ${map(
            avgHistory[i],
            0,
            64,
            10,
            100
          )}`;
        }
        updateTextAreaRows();
      }

      function draw(now) {
        analyser.getByteFrequencyData(dataArray);

        // Use that data to drive updates to the fill-extrusion-height property.
        let avg = 0;
        for (var i = 0; i < bins; i++) {
          avg += dataArray[i];
        }
        avg /= bins;

        setFontFeatures(avg);

        requestAnimationFrame(draw);
      }

      requestAnimationFrame(draw);
    })
    .catch(function (err) {
      console.log("The following error occured: " + err);
    });
}

function map(value, min1, max1, min2, max2) {
  var returnvalue = ((value - min1) / (max1 - min1)) * (max2 - min2) + min2;
  return returnvalue;
}


refrestInput.addEventListener("click", () => {
    currentMinDecibels = -95;
    sensitivityInput.value = 50;
    if (analyser) {
        analyser.minDecibels = currentMinDecibels;
    }
    localStorage.removeItem("minDecibels");
});

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("minDecibels");
    if (saved !== null) {
        currentMinDecibels = saved;
    }
});
