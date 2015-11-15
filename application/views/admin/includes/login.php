

<form class="log-form" action="<?php echo site_url('admin/login')?>" method="post">
	<label class="lbl-do" for="username">Enter username</label>
	<div class="input-wrp-do">
		<input id="username" class="input-do" name="user" type="text" placeholder="Ex.John">
		<i class="val val-user"></i>
	</div>

	<label class="lbl-do" for="password">Enter password</label>	
	<div class="input-wrp-do">
		<input class="input-do" id="password" type="password" name="password" placeholder="Your password here">
		<i class="val val-password"></i>
	</div>

	<button class="btn-do" type="submit" name="login">Enter</button>
</form>