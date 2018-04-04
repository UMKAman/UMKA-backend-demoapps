<script type="text/template" id="chat-manager-details-template">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Детали</h4>
      </div>
      <div class="modal-body">
       <div class="container-fluid">
           <div class="row">
        <div>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <span class="fa fa-comment"></span>Чат с {{= userName }}
              <div class="btn-group pull-right">
                
              </div>
            </div>
            <div class="panel-body">
              <ul class="chat">
                {{ msgs.forEach(function(_msg) { }} 
                  {{= _msg }}
                {{ }) }}
              </ul>
            </div>
            <div class="panel-footer">
                <div class="input-group">
                    <input id="btn-input" type="text" class="form-control input-sm" placeholder="Сообщение..." />
                    <span class="input-group-btn">
                        <button class="btn btn-warning btn-sm" id="btn-chat">
                            Отправить</button>
                    </span>
                </div>
            </div>
          </div>
      </div>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
      </div>
    </div>
  </div>
</script>