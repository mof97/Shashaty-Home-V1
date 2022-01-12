<template>
  <div id="HomePage">
    <header class = "" data-aos="fade-up">
      <img src="./assets/img/header_img.png" weidth = "" height = "" alt="header" class = "object-cover">
    </header>
    <div id="aboutSection">
      <div class="container">
        <div class="img" data-aos="fade-right">
            <img src="./assets/img/about_Img.webp" weidth = "" height = "" alt="about">
        </div>
        <div class="info py-5" data-aos="fade-left">
            <h1 class = "head-title"> Shashety Cinema </h1>
            <p class = "p-title"> An entertainment platform for watching international and Arab films and series, with a daily update of the latest cinematic works </p>
            <button class = "btn"> Visit the website </button>
            <h2 class = "head-title text-xl py-3"> You can get the APP </h2>
            <ul class = "flex items-center">
              <li class = "mr-2">
                <a href="https://apps.apple.com/us/app/shashety/id1448378384">
                  <img src="./assets/img/app_store.webp" weidth = "" height = "" alt="App Store Logo">
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=net.halasat.tv">
                  <img src="./assets/img/google_play.webp" weidth = "" height = "" alt="google play logo">
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>

    <div id="smartPanner" class = "py-8" data-aos="fade-up">
      <img src="./assets/img/smart_panner.webp" class = "object-cover" weidth = "" height = "" alt="smartPanner">
    </div>
    
    <div id="tv_section">
      <div class="container">
        <div class="section_img" data-aos="fade-left" >
          <img src="./assets/img/live_tv.webp" class = "h-90 object-cover" weidth = "" height = "" alt="live tv">
        </div>
        <div class="section_info self-center md:grid-cols-2" data-aos="fade-right">
          <h1 class = "head-title">Shashety Live TV</h1>
          <p class = "p-title md:mx-auto">A platform to display live channels and the most important local and international sports matches with a wide range of entertainment channels</p>
          <button class = "btn"> Visit the website </button>
        </div>
      </div>
    </div>

     <div id="share_section">
      <div class="container">
        <div class="section_info self-center" data-aos="fade-right">
          <h1 class = "head-title">Shashety Share</h1>
          <p class = "p-title md:mx-auto">A platform for sharing digital content that contains the largest library of programs and electronic games that are ready and can be activated and used</p>
          <button class = "btn"> Visit the website </button>
        </div>
        <div class="section_img" data-aos="fade-left">
          <img src="./assets/img/share_img.webp" class = "h-90 object-cover" weidth = "" height = "" alt="shear">
        </div>
      </div>
    </div>

    <div id="Footer" class = "py-5">
      <p class = "text-white text-center"> copyright © 2022 <span class = "font-bold underline">Shashety</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
