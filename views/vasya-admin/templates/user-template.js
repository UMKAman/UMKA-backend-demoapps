<script type="text/template" id="user-template">
    <div class="col-md-5">
        {{= name }}
        <div class="pull-right">
        {{ if (isAdmin) { }}
            <span class="label label-danger">Администратор</span>
        {{ } }}
        {{ if (isManager) { }}
            <span class="label label-primary">Менеджер</span>
        {{ } }}
        </div>
    </div>
    <div class="col-md-1">
        {{= phone }}
    </div>
    <div class="col-md-1">
        {{= city }}
    </div>
    <div class="col-md-1">
        {{= gender }}
    </div>
    <div class="col-md-2">
        {{ if (!isAdmin) { }}
            <button class="btn btn-danger makeAdmin btn-block">Сделать админом</button>
        {{ } else { }}
            <button class="btn btn-warning removeAdmin btn-block">Убрать из админов</button>
        {{ } }}
    </div>
    <div class="col-md-2">
        {{ if (!isManager) { }}
            <button class="btn btn-primary btn-block makeManager">Сделать менеджером</button>
        {{ } else { }}
            <button class="btn btn-info btn-block removeManager">Убрать из менеджеров</button>
        {{ } }}
    </div>
</script>