<script type="text/template" id="feedback-details-template">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Детали</h4>
      </div>
      <div class="modal-body">
       <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              Имя: 
            </div>
            <div class="col-md-4">
              {{= userName }}
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              Город:
            </div>
            <div class="col-md-4">
              {{= city }}
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              Пол:
            </div>
            <div class="col-md-4">
              {{= gender }}
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              Телефон:
            </div>
            <div class="col-md-4">
              {{= phone }}
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              Сообщения: 
            </div>
            <div class="col-md-8">
              <ul class="list-group">
                {{ msgs.forEach(function(_msg) { }}
                  <li class="list-group-item" style="word-wrap: break-word;">{{= _msg }}</li>
                {{ }) }}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-success accept">Принять</button>
      </div>
    </div>
  </div>
</script>