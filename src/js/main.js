var photoGallery = function photoGallery (el, arr) {
    el = $(el);
    // Creating gallery container and adding a class
    var gallery = $('<div></div>', {class: 'gallery'});

    // creating gallery scroll div and adding a class
    var scroll = $('<div></div>', {class: 'gallery-scroll'});

    // Creating current gallery image tag and adding a class
    var current = $('<img>', {class: 'gallery-current'});

    // Appending to gallery element
    gallery.append(current);
    gallery.append(scroll);
    // Appending to element passed into function
    el.append(gallery);

    function setCurrentSrc (url) {
        current.attr('src', url);
    }

    // Reduce the array of images to a single jQuery object
    var scrollElements = arr.reduce(function (prev, next) {
        // Create a new image
        var image = $('<img>');
        // Set the 'src' attribute to the url of the current img in the array
        image.attr('src', next);
        // Add and return the updated collection
        return prev.add(image);
    }, $());

    // Event listener for galleryScroll
    scroll.on('click', function (e) {

        if ($(e.target).is('img')) {
            current.attr('src', $(e.target).attr('src'));
        };
    });

    scroll.append(scrollElements);

    setCurrentSrc(arr[0]);

    var obj = {
        destroy: function () {
            $('.gallery').remove();
            $('.gallery-scroll').remove();
            $('.gallery-current').remove();
        },
        addImage: function (str) {
            var image = $('<img>');
            image.attr('src', str);
            scroll.append(image);
        },
        removeImage: function (str) {
            var removeImg = scroll.find('[src="' + str + '"]');
            removeImg.remove();
        }
    };

    return obj;
};

var nextGallery = photoGallery(document.body, ['src/img/img1.jpg', 'src/img/img2.jpg', 'src/img/img3.jpg', 'src/img/img4.jpg', 'src/img/img5.jpg', 'src/img/img6.jpeg', 'src/img/img7.jpg', 'src/img/img8.jpg']);
nextGallery.addImage('src/img9.jpg');
nextGallery.removeImage('src/img9.jpg');

photoGallery(document.body, ['src/moreimages/img1.jpg', 'src/moreimages/img2.jpg', 'src/moreimages/img3.jpg', 'src/moreimages/img4.jpg']);

