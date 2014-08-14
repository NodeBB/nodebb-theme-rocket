define('forum/theme/profile', function() {
    var Profile = {};

    Profile.addListeners = function() {
        var coverEl = $('.profile-cover');
        coverEl.find('.change').on('click', function() {
            coverEl.toggleClass('active', 1);
            coverEl.backgroundDraggable();
            coverEl.on('dragover', Profile.onDragOver);
            coverEl.on('drop', Profile.onDrop);
        });

        coverEl.find('.save').on('click', function() {
            coverEl.toggleClass('active', 0);
            coverEl.backgroundDraggable('disable');
            coverEl.off('dragover', Profile.onDragOver);
            coverEl.off('drop', Profile.onDrop);
        });
    };

    Profile.onDragOver = function(e) {
        e.stopPropagation();
        e.preventDefault();
        e.originalEvent.dataTransfer.dropEffect = 'copy';
    };

    Profile.onDrop = function(e) {
        var coverEl = $('.profile-cover');
        e.stopPropagation();
        e.preventDefault();
        
        var files = e.originalEvent.dataTransfer.files,
            reader = new FileReader();

        if (files.length && files[0].type.match('image.*')) {
            reader.onload = function(e) {
                coverEl.css('background-image', 'url(' + e.target.result + ')');
            }
            reader.readAsDataURL(files[0]);
        }

        // console.log(files);
    };

    return Profile;
});