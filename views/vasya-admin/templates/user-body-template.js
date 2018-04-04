<script type="text/template" id="user-body-template">
    <div id="users" class="container-fluid"></div>
    {{ if (search) { }}
        <div id="search" class="container-fluid" style="margin-top: 50px;">
            <h3>Поиск:</h3>
            <div class="row">
                <div class="col-md-10">
                    <input type="text" class="form-control" id="search-string">
                </div>
                <div class="col-md-2">
                    <button class="btn btn-block btn-primary search"><i class="fa fa-search"></i></button>
                </div>
            </div>
        </div>
        <div id="results" class="container-fluid"></div>
    {{ } }}
</script>