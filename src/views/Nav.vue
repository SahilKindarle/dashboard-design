<template>
  <div>
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="../assets/wallpaper.jpg" />
          </div>
          <a href="#user">
            <img class="circle" src="../assets/sahil.jpeg" />
          </a>
          <a href="#name">
            <span class="white-text name">John Doe</span>
          </a>
          <a href="#email">
            <span class="white-text email">jdandturk@gmail.com</span>
          </a>
        </div>
      </li>
      <li style="margin-top:30px">
        <a href="/tickets" class="waves-effect">
          <i class="material-icons pulse" style="color:#CEC3B4">featured_play_list</i>
          <span class="left">Tickets</span>
          <!-- <img src="../assets/iconpro.png" alt class="left" style="margin:5%" />Tickets -->
        </a>
      </li>
      <li>
        <a href="/toilets" class="waves-effect">
          <i class="material-icons pulse" style="color:#3F78DF">view_week</i>
          <span class="left">Toilets</span>
          <!-- <img src="../assets/iconpro.png" alt class="left" style="margin:5%" />Tickets -->
        </a>
      </li>
      <li>
        <a href="#!" class="waves-effect">
          <i class="material-icons pulse" style="color:#62D48C">fiber_smart_record</i>
          <span class="left">Janitors</span>
          <!-- <img src="../assets/iconpro.png" alt class="left" style="margin:5%" />Tickets -->
        </a>
      </li>
      <li>
        <a href="/contacts" class="waves-effect">
          <i class="material-icons pulse" style="color:#004d40"
            >account_circle</i
          >
          <span class="left">Contacts</span>
          <!-- <img src="../assets/iconpro.png" alt class="left" style="margin:5%" />Tickets -->
        </a>
      </li>
      <li>
        <a href="#!" class="waves-effect">
          <i class="material-icons pulse" style="color:#ed8a0a">live_help</i>
          <span class="left">Help Center</span>
          <!-- <img src="../assets/iconpro.png" alt class="left" style="margin:5%" />Tickets -->
        </a>
      </li>
    </ul>

    <div class="row center" style="padding-top:30px;margin-left:0px;">
      <div class="left">
        <!-- <i class="material-icons sidenav-trigger" data-target="slide-out">drag_handle</i> -->
        <!-- <i class="material-icons sidenav-trigger" data-target="slide-out">short_text</i> -->
        <img src="../assets/menu.png" alt class="sidenav-trigger" data-target="slide-out" style="margin-left:30px" />
      </div>
      <div class="center">
        <h5 class="center" style="margin:0;">THE HUMBLE SHIT</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-footer {
  position: sticky;
  bottom: 0;
}
</style>
