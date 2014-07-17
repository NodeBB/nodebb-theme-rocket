<div class="row home" itemscope itemtype="http://www.schema.org/ItemList">
	<div class="col-sm-12">
		<!-- BEGIN categories -->
		<div class="{categories.class} col-lg-3 col-sm-12 col-xs-12 card-holder" data-cid="{categories.cid}" data-numRecentReplies="{categories.numRecentReplies}">
			<div class="card-content category-header-image-{categories.imageClass}" style="background-image: url({categories.backgroundImage}); border-color: {categories.color};">
				<meta itemprop="name" content="{categories.name}">
				<h2><a href="category/{categories.slug}" style="color: {categories.color} !important;">{categories.name}</a></h2>

				<div class="topics-holder">
					<!-- BEGIN posts -->
					<div class="topic-card">
						<h3><a href="topic/{categories.posts.topic.slug}" style="color: {categories.color};">{categories.posts.topic.title}</a></h3>
						<!--<div class="card-reply">	
							<img src="{categories.posts.user.picture}" class="pull-left avatar" />
							<p><strong>{categories.posts.user.username}</strong>: {categories.posts.content}</p>
						</div>-->
					</div>
					<!-- END posts -->
				</div>

			</div>

			<hr style="border-color: {categories.color};" />

			<div class="card-footer">
				<div class="pull-left">
					<span class="icon-heart"></span><span class="card-stat">23</span>
					<span class="icon-comment"></span><span class="card-stat">2</span>
				</div>
				<div class="pull-right">
					<span class="icon-star"></span>
				</div>
			</div>
		</div>
		<!-- END categories -->
	</div>
</div>