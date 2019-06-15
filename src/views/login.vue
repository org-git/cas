<template>
  <section>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Login</h3>
      </div>
      <div class="panel-body">
        <form role="form" class="form-horizontal col-md-6 col-md-offset-6">
          <div class="form-group">
            <label for="username" class="control-label col-md-4">UserName</label>
            <div class="input-group col-md-8">
              <input type="text" class="form-control" id="username" placeholder="username">
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="control-label col-md-4">Password</label>
            <div class="input-group col-md-8">
              <input type="password" class="form-control" id="password" placeholder="password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-offset-4 col-md-8">
              <button type="button" class="btn btn-primary">
                <span class="glyphicon glyphicon-search"></span>Login
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="panel-footer">
        <span class="text-danger">****</span>
      </div>
    </div>
  </section>
</template>
