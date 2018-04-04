<script type="text/template" id="specialization-template">
    <div class="panel-heading" role="tab" id="heading-{{= id }}">
      <h4 class="panel-title">
        <a class="collapsed" role="button" id="header-{{= id }}" data-toggle="collapse" data-parent="#accordion" href="#collapse-{{= id }}" aria-expanded="false" aria-controls="collapse-{{= id }}">
          {{= name }}
        </a>
      </h4>
    </div>
    <div id="collapse-{{= id }}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-{{= id }}">
      <div class="panel-body" id="spec-{{= id }}" style="background-color: {{= color }}">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              Название: 
            </div>
            <div class="col-md-4">
              <input class="name" value="{{= name }}">
            </div>
            <div class="col-md-2">
              <button class="btn btn-block btn-success save">Сохранить</button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              Название на английском: 
            </div>
            <div class="col-md-4">
              <input class="nameEn" value="{{= nameEn }}">
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              Цвет:
            </div>
            <div class="col-md-4">
              <input class="jscolor" value="{{= color }}">
            </div>
            <div class="col-md-2">
              <button class="btn btn-block btn-danger delete">Удалить</button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 for-image">
              Изображение: 
              {{ if (typeof pic !== 'undefined' && pic) { }}
                <img src="{{= pic }}" class="img-responsive">
              {{ } else { }}
                Нет изображения
              {{ } }}
            </div>
            <div class="col-md-4">
              <input type="file" class="form-control-file" id="pic-input"></input>
            </div>
          </div>
          <div class="row">
            {{ if (level < 3) { }}
            <button class="btn btn-warning addSpec"><i class="fa fa-plus"></i>Добавить подкатегорию</button>
            {{ } }}
            <div class="for-children"></div>
          </div>
        </div>
      </div>
    </div>
</script>