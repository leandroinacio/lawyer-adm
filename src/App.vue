<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" 
      integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <!-- Navigation -->
    <nav id="mainNav" class="navbar static-top navbar-toggleable-md navbar-inverse bg-inverse">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <div class="collapse navbar-collapse" id="navbarExample">
            <ul class="sidebar-nav navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/"> Início</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/records"> Registros</router-link>
                    <!--<a class="nav-link" href="#"><i class="fa fa-fw fa-area-chart"></i> Charts</a>-->
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/owner"> Usuários</router-link>
                    <!--<a  href="#"><i class="fa fa-fw fa-table"></i> Tables</a>-->
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti"><i class="fa fa-fw fa-sitemap"></i> Menu Levels</a>
                    <ul class="sidebar-second-level collapse" id="collapseMulti">
                        <li>
                            <a href="#">Second Level Item</a>
                        </li>
                        <li>
                            <a href="#">Second Level Item</a>
                        </li>
                        <li>
                            <a class="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2">Third Level</a>
                            <ul class="sidebar-third-level collapse" id="collapseMulti2">
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle mr-lg-2" href="#" id="messagesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-fw fa-envelope"></i> <span class="hidden-lg-up">Messages <span class="badge badge-pill badge-primary">12 New</span></span>
                        <span class="new-indicator text-primary hidden-md-down"><i class="fa fa-fw fa-circle"></i><span class="number">12</span></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="messagesDropdown">
                        <h6 class="dropdown-header">New Messages:</h6>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                            <strong>David Miller</strong> <span class="small float-right text-muted">11:21 AM</span>
                            <div class="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                            <strong>Jane Smith</strong> <span class="small float-right text-muted">11:21 AM</span>
                            <div class="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                            <strong>John Doe</strong> <span class="small float-right text-muted">11:21 AM</span>
                            <div class="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item small" href="#">
                            View all messages
                        </a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle mr-lg-2" href="#" id="alertsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-fw fa-bell"></i> <span class="hidden-lg-up">Alerts <span class="badge badge-pill badge-warning">6 New</span></span>
                        <span class="new-indicator text-warning hidden-md-down"><i class="fa fa-fw fa-circle"></i><span class="number">6</span></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="alertsDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <form class="form-inline my-2 my-lg-0 mr-lg-2">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for...">
                            <span class="input-group-btn">
                        <button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>
                    </span>
                        </div>
                    </form>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-fw fa-sign-out"></i> Logout</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="content-wrapper py-3">

        <div class="container-fluid">
            <router-view></router-view>
    
        </div>
    </div>
    
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fa fa-chevron-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.row {
  margin-bottom: 10px;
}
body {
  background: #292b2c; }

body.fixed-nav {
  padding-top: 54px; }
  @media (min-width: 992px) {
    body.fixed-nav {
      padding-top: 56px; } }

.content-wrapper {
  background: white; }
  @media (min-width: 992px) {
    .content-wrapper {
      margin-left: 250px; } }

.scroll-to-top {
  line-height: 45px;
  position: fixed;
  right: 15px;
  bottom: 15px;
  display: none;
  width: 50px;
  height: 50px;
  text-align: center;
  color: white;
  background: rgba(41, 43, 44, 0.5); }
  .scroll-to-top:hover, .scroll-to-top:focus {
    color: white; }
  .scroll-to-top:hover {
    background: #292b2c; }

.smaller {
  font-size: .7rem; }

.o-hidden {
  overflow: hidden !important; }

.z-0 {
  z-index: 0; }

.z-1 {
  z-index: 1; }

.card-block-icon {
  font-size: 5rem;
  position: absolute;
  z-index: 0;
  top: -25px;
  right: -25px;
  -webkit-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  transform: rotate(15deg); }

@media (min-width: 576px) {
  .card-columns {
    column-count: 1; } }

@media (min-width: 768px) {
  .card-columns {
    column-count: 2; } }

@media (min-width: 1200px) {
  .card-columns {
    column-count: 2; } }

.navbar-inverse input.form-control {
  border-color: #eceeef; }

#mainNav .navbar-collapse {
  overflow: auto;
  max-height: 75vh; }
  #mainNav .navbar-collapse .navbar-nav.sidebar-nav .nav-link-collapse:after {
    font-family: 'FontAwesome';
    float: right;
    content: '\f107';
    color: #464a4c; }
  #mainNav .navbar-collapse .navbar-nav.sidebar-nav .nav-link-collapse.collapsed:after {
    content: '\f105'; }
  #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-second-level,
  #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-third-level {
    padding-left: 0; }
    #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-second-level > li > a,
    #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-third-level > li > a {
      display: block;
      padding: .5em 0;
      color: #636c72; }
      #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-second-level > li > a:focus, #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-second-level > li > a:hover,
      #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-third-level > li > a:focus,
      #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-third-level > li > a:hover {
        text-decoration: none;
        color: #eceeef; }
  #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-second-level > li > a {
    padding-left: 1em; }
  #mainNav .navbar-collapse .navbar-nav.sidebar-nav .sidebar-third-level > li > a {
    padding-left: 2em; }
  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {
    position: relative;
    min-width: 45px; }
    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {
      font-family: 'FontAwesome';
      float: right;
      width: auto;
      content: '\f105';
      color: #464a4c;
      border: none; }
    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link .new-indicator {
      font-size: 1.1rem;
      position: absolute;
      top: 0;
      right: 25px; }
      #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link .new-indicator .number {
        font-size: .5rem;
        position: absolute;
        top: 6px;
        left: 0;
        width: 22.625px;
        text-align: center;
        color: white; }
  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown.show > .nav-link:after {
    content: '\f107'; }
  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {
    overflow: hidden;
    max-width: none;
    text-overflow: ellipsis; }

@media (min-width: 992px) {
  #mainNav .navbar-brand {
    width: 250px; }
  #mainNav .navbar-collapse {
    overflow: visible;
    max-height: none; }
    #mainNav .navbar-collapse .navbar-nav.sidebar-nav {
      position: absolute;
      top: 0;
      left: 0;
      overflow: auto;
      flex-direction: column;
      height: 100vh;
      margin-top: 56px;
      padding-bottom: 56px;
      background: #292b2c;
      -webkit-flex-direction: column;
      -ms-flex-direction: column; }
      #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item {
        width: 250px;
        padding: 0; }
        #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item > .nav-link {
          padding: 1em; }
        #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item .sidebar-second-level,
        #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item .sidebar-third-level {
          padding-left: 0;
          list-style: none;
          background: #292b2c; }
          #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item .sidebar-second-level > li,
          #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item .sidebar-third-level > li {
            width: 250px; }
            #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item .sidebar-second-level > li > a,
            #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item .sidebar-third-level > li > a {
              padding: 1em; }
        #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item .sidebar-second-level > li > a {
          padding-left: 2em; }
        #mainNav .navbar-collapse .navbar-nav.sidebar-nav > .nav-item .sidebar-third-level > li > a {
          padding-left: 3em; }
      #mainNav .navbar-collapse .navbar-nav.sidebar-nav li.active a {
        color: white;
        background-color: #464a4c; }
        #mainNav .navbar-collapse .navbar-nav.sidebar-nav li.active a:hover, #mainNav .navbar-collapse .navbar-nav.sidebar-nav li.active a:focus {
          color: white; }
    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {
      min-width: 0; }
      #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {
        width: 24px;
        text-align: center; }
    #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {
      max-width: 300px; 
    } 
  }
</style>
