<template>
  <!-- <nav class="navbar navbar-expand-lg">
  <div class="container">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar10"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbar10">
      <ul class="navbar-nav nav-fill w-100">
        <li class="nav-item">
          <a
            class="nav-link"
                        
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" 
            >My Pannel</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
                        
            >Profil</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav> -->

  <nav class="page__menu page__custom-settings menu">
    <ul class="menu__list r-list">
      <li class="menu__group">
        <routerLink to="/studentFeed">
        <a class="menu__link r-link text-underlined">home</a></routerLink>
      </li>
      <li class="menu__group">
        <a class="menu__link r-link text-underlined">Premium</a>
      </li>
      <li class="menu__group">
         <routerLink to="/mypannel">
        <a class="menu__link r-link text-underlined">My Pannel</a>
        </routerLink>
      </li>
      
      <li class="menu__group">
        <routerLink to="/teachersforstudent"
          ><a class="menu__link r-link text-underlined">teachers</a></routerLink
        >
      </li>

      <li class="menu__group">
        <routerLink to="/studentProfile"
          ><a class="menu__link r-link text-underlined">Profil</a></routerLink
        >
      </li>
      <li class="menu__group">
        <routerLink to="/about"
          ><a class="menu__link r-link text-underlined">about</a></routerLink
        >
      </li>
      <li id="logout" class="menu__group">
        <a id="logout" class="menu__link r-link text-underlined">logout</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
/*
=====
DEPENDENCES
=====
*/

.r-link {
  display: var(--rLinkDisplay, inline-flex) !important;
}
#logout {
  margin-left: 20%;
}

.r-link[href] {
  color: var(--rLinkColor) !important;
  text-decoration: var(--rLinkTextDecoration, none) !important;
}

.r-list {
  padding-left: var(--rListPaddingLeft, 0) !important;
  margin-top: var(--rListMarginTop, 0) !important;
  margin-bottom: var(--rListMarginBottom, 0) !important;
  list-style: var(--rListListStyle, none) !important;
}

/*
=====
CORE STYLES
=====
*/

.menu {
  --rLinkColor: var(--menuLinkColor, currentColor);
}

.menu__link {
  display: var(--menuLinkDisplay, block);
}

/* 
focus state 
*/

.menu__link:focus {
  outline: var(--menuLinkOutlineWidth, 2px) solid
    var(--menuLinkOutlineColor, currentColor);
  outline-offset: var(--menuLinkOutlineOffset);
}

/* 
fading siblings
*/

.menu:hover .menu__link:not(:hover) {
  --rLinkColor: var(--menuLinkColorUnactive, rgba(22, 22, 22, 0.35));
}

/*
=====
PRESENTATION STYLES
=====
*/

.menu {
  background-color: var(--menuBackgroundColor, #f0f0f0);
  box-shadow: var(
    --menuBoxShadow,
    0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 1px 2px 0 rgba(0, 0, 0, 0.24)
  );
}

.menu__list {
  display: flex;
}

.menu__link {
  padding: var(--menuLinkPadding, 1.5rem 2.5rem);
  font-weight: 700;
  text-transform: uppercase;
}

/* 
=====
TEXT UNDERLINED
=====
*/

.text-underlined {
  position: relative;
  overflow: hidden;

  will-change: color;
  transition: color 0.25s ease-out;
}

.text-underlined::before,
.text-underlined::after {
  content: "";
  width: 0;
  height: 3px;
  background-color: var(--textUnderlinedLineColor, currentColor);

  will-change: width;
  transition: width 0.1s ease-out;

  position: absolute;
  bottom: 0;
}

.text-underlined::before {
  left: 50%;
  transform: translateX(-50%);
}

.text-underlined::after {
  right: 50%;
  transform: translateX(50%);
}

.text-underlined:hover::before,
.text-underlined:hover::after {
  width: 100%;
  transition-duration: 0.2s;
}

/*
=====
SETTINGS
=====
*/

.page__custom-settings {
  --menuBackgroundColor: rgb(224, 230, 255);
  --menuLinkColor: #fff;
  --menuLinkColorUnactive: rgb(161, 178, 255);
  --menuLinkOutlineOffset: -0.5rem;
  cursor: pointer;
}

/*
=====
DEMO
=====
*/

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans,
    Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page {
  box-sizing: border-box;
  max-width: 640px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin: auto;
}

.page__menu:nth-child(n + 2) {
  margin-top: 3rem;
}

.substack {
  border: 1px solid #eee;
  background-color: #fff;
  width: 100%;
  max-width: 480px;
  height: 280px;
  margin: 1rem auto;
}

.linktr {
  display: flex;
  justify-content: center;
  background-color: rgb(209, 246, 255);
  padding: 2rem;
  text-align: center;
}

.linktr__goal {
  border: 2px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  color: rgb(8, 49, 112);
  box-shadow: rgb(8 49 112 / 24%) 0px 2px 8px 0px;
  border-radius: 2rem;
  padding: 0.5rem 1.25rem;
}

.r-link {
  --uirLinkDisplay: var(--rLinkDisplay, inline-flex);
  --uirLinkTextColor: var(--rLinkTextColor);
  --uirLinkTextDecoration: var(--rLinkTextDecoration, none);

  display: var(--uirLinkDisplay) !important;
  color: var(--uirLinkTextColor) !important;
  text-decoration: var(--uirLinkTextDecoration) !important;
}
</style>
