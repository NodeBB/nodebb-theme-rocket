<div class="main-header">
	<div class="container">
		<div class="pull-left title-logo">
			<a href="{relative_path}/">
				<img class="{brand:logo:display} forum-logo" src="{brand:logo}" />
			</a>
			<a href="{relative_path}/">
				<h1 class="forum-title">{title}</h1>
			</a>
		</div>
		<div class="pull-left">
			<ul class="main-menu">
				<li class="menu-feed"><h3><a href="{relative_path}/">Feed</a></h3></li>
				<li class="menu-recent"><h3><a href="{relative_path}/recent">Recent</a></h3></li>
				<li class="menu-popular"><h3><a href="{relative_path}/popular">Popular</a></h3></li>
			</div>
		</div>

		
	</div>
</div>
<div class="sub-header">
	<div class="container">
		<div class="pull-left">
			<div class="btn-group btn-breadcrumb dropdown">
			    <a href="{relative_path}/" id="btn-home" class="btn btn-default"><i class="fa fa-th fa-fw"></i></a>
			    <a href="#" class="btn btn-default btn-info" id="category-menu" data-toggle="dropdown"><i class="fa fa-plus fa-fw"></i> New Topic</a>
				<ul class="dropdown-menu" role="menu" aria-labelledby="category-menu" id="category-menu-list"></ul>
			</div>
		</div>
		<div class="pull-right">
			<button class="btn btn-lg btn-menu">[[global:header.unread]]</button>
			<button class="btn btn-lg btn-menu square"><i class="fa fa-plus fa-fw"></i></button>
		</div>
	</div>
</div>


<ul id="main-nav" class="nav pull-left" data-spy="affix" data-offset-top="70" data-offset-bottom="200">
	<!-- IF isLoggedIn -->
	<li>
		<a href="{relative_path}/unread"><i id="unread-count" class="fa fa-fw fa-inbox" data-content="0" title="[[global:header.unread]]"></i><span class="visible-xs-inline"> [[global:header.unread]]</span></a>
	</li>
	<!-- ENDIF isLoggedIn -->

	<li>
		<a href="{relative_path}/recent"><i class="fa fa-fw fa-clock-o" title="[[global:header.recent]]"></i><span class="visible-xs-inline"> [[global:header.recent]]</span></a>
	</li>
	<li>
		<a href="{relative_path}/tags"><i class="fa fa-fw fa-tags" title="[[global:header.tags]]"></i><span class="visible-xs-inline"> [[global:header.tags]]</span></a>
	</li>
	<li>
		<a href="{relative_path}/popular"><i class="fa fa-fw fa-fire" title="[[global:header.popular]]"></i><span class="visible-xs-inline"> [[global:header.popular]]</span></a>
	</li>
	<li>
		<!-- IF function.displayUsersLink -->
		<a href="{relative_path}/users"><i class="fa fa-fw fa-users" title="[[global:header.users]]"></i><span class="visible-xs-inline"> [[global:header.users]]</span></a>
		<!-- ENDIF function.displayUsersLink -->
	</li>
	<!-- IF isAdmin -->
	<li>
		<a href="{relative_path}/admin" target="_top"><i class="fa fa-fw fa-cogs" title="[[global:header.admin]]"></i><span class="visible-xs-inline"> [[global:header.admin]]</span></a>
	</li>
	<!-- ENDIF isAdmin -->
	<!-- IF searchEnabled -->
	<li class="visible-xs">
		<a id="mobile-search-button" href="{relative_path}/search"><i class="fa fa-search fa-fw" title="[[global:header.search]]"></i> [[global:header.search]]</a>
	</li>
	<!-- ENDIF searchEnabled -->
	<!-- BEGIN navigation -->
	<li class="{navigation.class}">
		<a href="{relative_path}{navigation.route}" title="{navigation.title}">
			<!-- IF navigation.iconClass -->
			<i class="fa fa-fw {navigation.iconClass}"></i>
			<!-- ENDIF navigation.iconClass -->

			<!-- IF navigation.text -->
			<span class="{navigation.textClass}">{navigation.text}</span>
			<!-- ENDIF navigation.text -->
		</a>
	</li>
	<!-- END navigation -->
</ul>