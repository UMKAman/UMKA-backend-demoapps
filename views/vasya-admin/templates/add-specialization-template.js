<script type="text/template" id="add-specialization-template">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Добавление категории</h4>
      </div>
      <div class="modal-body">
       <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              Название: 
            </div>
            <div class="col-md-4">
              <input class="name">
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              Название на английском: 
            </div>
            <div class="col-md-4">
              <input class="nameEn">
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              Цвет:
            </div>
            <div class="col-md-4">
              <input class="jscolor">
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 for-image">
              Изображение: 
            </div>
            <div class="col-md-4">
              <input type="file" class="form-control-file" id="pic-input"></input>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary add">Добавить</button>
      </div>
    </div>
  </div>
</script>