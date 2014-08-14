define('forum/theme/profile', function() {
    var Profile = {};

    Profile.addListeners = function() {
        var coverEl = $('.profile-cover');
        coverEl.find('.change').on('click', function() {
            coverEl.toggleClass('active', 1);
            coverEl.backgroundDraggable();
            coverEl.on('dragover', Profile.cover.onDragOver);
            coverEl.on('drop', Profile.cover.onDrop);
        });

        coverEl.find('.save').on('click', Profile.cover.save);
    };

    Profile.cover = {};

    Profile.cover.load = function() {
        socket.emit('plugins.rocket.cover.get', function(err, data) {
            if (!err) {
                var coverEl = $('.profile-cover');
                if (data['rocket:cover:url']) coverEl.css('background-image', 'url(' + RELATIVE_PATH + '/theme-rocket/cover/' + data['rocket:cover:url'] + ')');
                if (data['rocket:cover:position']) coverEl.css('background-position', data['rocket:cover:position']);
                delete Profile.cover.newCover;
            } else {
                app.alertError(err.message);
            }
        });
    };

    Profile.cover.onDragOver = function(e) {
        e.stopPropagation();
        e.preventDefault();
        e.originalEvent.dataTransfer.dropEffect = 'copy';
    };

    Profile.cover.onDrop = function(e) {
        var coverEl = $('.profile-cover');
        e.stopPropagation();
        e.preventDefault();
        
        var files = e.originalEvent.dataTransfer.files,
            reader = new FileReader();

        if (files.length && files[0].type.match('image.*')) {
            reader.onload = function(e) {
                coverEl.css('background-image', 'url(' + e.target.result + ')');
                coverEl.backgroundDraggable();
                Profile.cover.newCover = e.target.result;
            }
            reader.readAsDataURL(files[0]);
        }
    };

    Profile.cover.save = function() {
        var coverEl = $('.profile-cover');

        coverEl.addClass('saving');

        socket.emit('plugins.rocket.cover.update', {
            imageData: Profile.cover.newCover || undefined,
            position: $('.profile-cover').css('background-position')
        }, function(err, imagePath) {
            if (!err) {
                coverEl.toggleClass('active', 0);
                coverEl.backgroundDraggable('disable');
                coverEl.off('dragover', Profile.cover.onDragOver);
                coverEl.off('drop', Profile.cover.onDrop);
                Profile.cover.load();
            } else {
                app.alertError(err.message);
            }

            coverEl.removeClass('saving');
        });
    };

    return Profile;
});