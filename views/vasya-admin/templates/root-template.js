<script type="text/template" id="root-template">

  <header class="main-header">
    <a href="#" class="logo">
      <span class="logo-mini"><b>U</b>mka</span>
      <span class="logo-lg"><b>Umka</b>Admin</span>
    </a>
    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span class="hidden-xs">{{= app.userName }}</span>
            </a>
          </li>
          <li>
            <a href="#" class="exit">Выйти</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <aside class="main-sidebar"></aside>

  <div class="content-wrapper"></div>
  <div id="for-modal"></div>
  <footer class="main-footer">
   Футер
  </footer>
</script>