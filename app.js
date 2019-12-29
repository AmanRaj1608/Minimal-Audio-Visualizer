// import { hslToRgb } from './hslToRgb.js'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 2000;
canvas.height = 2000;

// Global Variables
let analyzer;
let bufferLength;

/*
We will need 3 functions
1. getAudio() to get audio 
2. drawTimeData() to draw time sine graph
3. drawFrequency() to draw frequency bars 
*/

async function getAudio() {
    const stream = await navigator.mediaDevices
        .getUserMedia({ audio: true })
        .catch(() => { console.log("Please allow mic to run the appliction") })

    // Create a new instance of AudioContext
    const audioCtx = new AudioContext();
    // We have a nice interface AnalyserNode which take the generated data,
    // process it, and create audio visualizations.
    analyzer = audioCtx.createAnalyser();
    // The createMediaElementSource() method of the AudioContext Interface is used to
    // create a new MediaElementAudioSourceNode object, given an existing HTML
    // <audio> or <video> element, the audio from which can then be played and manipulated
    audioCtx.createMediaStreamSource(stream).connect(analyzer);

    // The fftSize property is an unsigned long value and represents the window size in 
    // samples that is used when performing a Fast Fourier Transform (FFT) to get frequency domain data.
    analyzer.fftSize = 2 ** 8;

    // how many pieces of data are there
    bufferLength = analyzer.frequencyBinCount;

    // Pull the data off the audio
    const timeData = new Uint8Array(bufferLength);
    const frequencyData = new Uint8Array(bufferLength);
    drawTimeData(timeData);
    drawFrequency(frequencyData);
}

function drawTimeData(timeData) {
    // Inject the time data into our timeData array
    analyzer.getByteTimeDomainData(timeData);

    // Converting data into sine wave 

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // canvas drawing wave
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#ffc600';
    ctx.beginPath();
    const sliceWidth = canvas.width / bufferLength;
    let x = 0;
    timeData.forEach((data, i) => {
        const v = data / 128;
        const y = (v * canvas.height) / 2;
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        x += sliceWidth;
    });

    ctx.stroke();

    requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
    // get the frequency data into our frequencyData array
    analyzer.getByteFrequencyData(frequencyData);

    // Drawing wave on canvas
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;
    frequencyData.forEach(amount => {
        // Taking percentage (0->255)->(0-100)
        const percent = amount / 255;

        // Convert the colour to HSL to add different colour
        // https://mothereffinghsl.com/
        const [h, s, l] = [360 / (percent * 360) - 0.6, 0.9, 0.5];
        const barHeight = canvas.width * percent * 0.5;
        const [r, g, b] = hslToRgb(h, s, l);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, canvas.width - barHeight, barWidth, barHeight);

        x += barWidth + 2;
    });

    requestAnimationFrame(() => drawFrequency(frequencyData));
}


getAudio();
