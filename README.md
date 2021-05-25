[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">


  <h3 align="center">ffmpeg-watchfolder</h3>

  <p align="center">
    Automatically convert video files dropped into a folder using ffmpeg.
    <br />
    <a href="https://github.com/dgahagan/ffmpeg-watchfolder"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/dgahagan/ffmpeg-watchfolder">View Demo</a>
    ·
    <a href="https://github.com/dgahagan/ffmpeg-watchfolder/issues">Report Bug</a>
    ·
    <a href="https://github.com/dgahagan/ffmpeg-watchfolder/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I kept getting requests to convert video files into a usable format. Something that would play on most media players and devices. After using VLC and FFMPEG to convert these files manually I decided to spent 45 minutes making this script.

### Built With

* [chokidar](https://github.com/paulmillr/chokidar)
* [ffmpeg-on-progress](https://github.com/transitive-bullshit/ffmpeg-on-progress)
* [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dgahagan/ffmpeg-watchfolder.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

1. Create 2 folders in the project folder. 'input' and 'output'

2. Run the app
    ```sh
    node app
    ```
3. Copy any files that need to be converted into the 'input' folder. The converted files will be placed in the 'output' folder.


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@dangahagan](https://twitter.com/dangahagan) - dangahagan@protonmail.com

Project Link: [https://github.com/dgahagan/ffmpeg-watchfolder](https://github.com/dgahagan/ffmpeg-watchfolder)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* Windows Media Player - For not playing HEVC and HEIF
* FFmpeg for handling everything






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dgahagan/ffmpeg-watchfolder.svg?style=for-the-badge
[contributors-url]: https://github.com/dgahagan/ffmpeg-watchfolder/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dgahagan/ffmpeg-watchfolder.svg?style=for-the-badge
[forks-url]: https://github.com/dgahagan/ffmpeg-watchfolder/network/members
[stars-shield]: https://img.shields.io/github/stars/dgahagan/ffmpeg-watchfolder.svg?style=for-the-badge
[stars-url]: https://github.com/dgahagan/ffmpeg-watchfolder/stargazers
[issues-shield]: https://img.shields.io/github/issues/dgahagan/ffmpeg-watchfolder.svg?style=for-the-badge
[issues-url]: https://github.com/dgahagan/ffmpeg-watchfolder/issues
[license-shield]: https://img.shields.io/github/license/dgahagan/ffmpeg-watchfolder.svg?style=for-the-badge
[license-url]: https://github.com/dgahagan/ffmpeg-watchfolder/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dangahagan