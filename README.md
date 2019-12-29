<p align="center"><img src="https://image.flaticon.com/icons/png/512/1066/1066180.png" width="200"></p>
<h2 align="center">Minimal Audio Visualizer</h2>
<p align="center">
  <a href="https://github.com/AmanRaj1608/Minimal-Audio-Visualizer/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/AmanRaj1608/Minimal-Audio-Visualizer"></a>
  <a href="https://github.com/AmanRaj1608/Minimal-Audio-Visualizer/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/AmanRaj1608/Minimal-Audio-Visualizer"></a>
  <a href="https://github.com/AmanRaj1608/Minimal-Audio-Visualizer/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/AmanRaj1608/Minimal-Audio-Visualizer"></a>
  <a href="https://img.shields.io/twitter/url?style=social&url=Try%20this"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FAmanRaj1608"></a>
  <a href="https://github.com/AmanRaj1608/Minimal-Audio-Visualizer"><img alt="GitHub license" src="https://img.shields.io/github/license/AmanRaj1608/Minimal-Audio-Visualizer"></a>
</p>
<hr>

<p align="center"><img src="./example.gif" width="300"></p>


This audio visualizer makes a real-time frequency and time-domain analysis information. Have you ever watched NCS videos? Do you like watching Waves dancing on your screen while listening to music? Well, now you can do it.

Enjoy your own music with Minimal Audio Visualizer. Simply play music and open https://amanraj1608.github.io/Minimal-Audio-Visualizer/


Code have explanations and easy to understand. Feel free to add a feature and make a PR.

**Caution:** Don't increase the fftSize greater than 2^12 unless you have Mac Cheese Grater 😆

---
### TODO 📝
- Add Button to add control number of bars.
- Add more Designs
---
### How it works?

I invested some time reading MDN docs and found this `AudioContext API` having lots of methods that musicians will love to try.

Using `AnalyserNode` we take the generated data, process it, and create audio visualizations.
 

![MDN](https://media.prod.mdn.mozit.cloud/attachments/2016/04/06/12970/723014357f66e15dbb415ac4aa950801/fttaudiodata_en.svg)

The `AnalyserNode.fftSize` property is an unsigned long value and represents the window size in samples that is used when performing a [Fast Fourier Transform (FFT)](https://en.wikipedia.org/wiki/Fast_Fourier_transform) to get frequency domain data.

There are also much more things `AudioContext` which can be used used like :
- GainNode - Changing the volume of a sound
- createBiquadFilter - Applying a simple filter effect to a sound
and many more.

I found these MDN links useful 
- https://developer.mozilla.org/en-US/docs/Web/API/AudioContext 
- https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode 
- https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize 
- https://stackoverflow.com/questions/14789283/what-does-the-fft-data-in-the-web-audio-api-correspond-to


---
<p align="center"> Made with ❤️ by <a href="https://github.com/amanraj1608">Aman Raj</a></p>

---
