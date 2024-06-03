//dark-mode
function lm() {
    var element = document.body;
    var lightmodenavbar=document.getElementById('lightmodenavbar');
    var darkmodenavbar=document.getElementById('darkmodenavbar');
    var navbar = document.getElementById('navbar');
    element.classList.toggle("light-mode");
    navbar.classList.toggle("navbar-light");

    if (darkmodenavbar.style.display==="none")
    {
        lightmodenavbar.style.display="block";
        darkmodenavbar.style.display="none";
    }
    else
    {
        lightmodenavbar.style.display="none";
        darkmodenavbar.style.display="block";
    }


}




// Get the reference to the div element with class "cc5"
const divElement = document.querySelector(".cc5");

// Attach a click event listener to the div
divElement.addEventListener("click", function() {
    // Define the URL to navigate to
    const link = "https://www.youtube.com/watch?v=f0BzD1zCye0";

    // // Open a new window with the specified link
    window.open(link, "_blank");
});



// Set the countdown duration in seconds
var countdownDuration = 60;

// Function to update countdown
function updateCountdown() {
    var countdownElement = document.getElementById("countdown");
    countdownElement.textContent = countdownDuration;
    countdownDuration--;
    if (countdownDuration < 0) {
        // Redirect after countdown ends
        window.location.replace("https://github.com/"); // Replace URL with your desired destination
    } else {
        setTimeout(updateCountdown, 1000);
    }
}

// Start the countdown
updateCountdown();



$(document).ready(function () {
    var containers = $('.container');

    if (containers.length) {
        containers.each(function () {
            var container = $(this);

            // Support small text - copy to fill screen width
            if (container.find('.scrolling-text').outerWidth() < $(window).width()) {
                var windowToScrolltextRatio = Math.round($(window).width() / container.find('.scrolling-text').outerWidth()),
                    scrollTextContent = container.find('.scrolling-text .scrolling-text-content').text(),
                    newScrollText = '';
                for (var i = 0; i < windowToScrolltextRatio; i++) {if (window.CP.shouldStopExecution(0)) break;
                    newScrollText += ' ' + scrollTextContent;
                }window.CP.exitedLoop(0);
                container.find('.scrolling-text .scrolling-text-content').text(newScrollText);
            }

            // Init variables and config
            var scrollingText = container.find('.scrolling-text'),
                scrollingTextWidth = scrollingText.outerWidth(),
                scrollingTextHeight = scrollingText.outerHeight(true),
                startLetterIndent = parseInt(scrollingText.find('.scrolling-text-content').css('font-size'), 10) / 4.8,
                startLetterIndent = Math.round(startLetterIndent),
                scrollAmountBoundary = Math.abs($(window).width() - scrollingTextWidth),
                transformAmount = 0,
                leftBound = 0,
                rightBound = scrollAmountBoundary,
                transformDirection = container.hasClass('left-to-right') ? -1 : 1,
                transformSpeed = 100;



            // Read transform speed
            if (container.attr('speed')) {
                transformSpeed = container.attr('speed');
            }

            // Make scrolling text copy for scrolling infinity
            container.append(scrollingText.clone().addClass('scrolling-text-copy'));
            container.find('.scrolling-text').css({ 'position': 'absolute', 'left': 0 });
            container.css('height', scrollingTextHeight);

            var getActiveScrollingText = function (direction) {
                var firstScrollingText = container.find('.scrolling-text:nth-child(1)');
                var secondScrollingText = container.find('.scrolling-text:nth-child(2)');

                var firstScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(1)').css("left"), 10);
                var secondScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(2)').css("left"), 10);

                if (direction === 'left') {
                    return firstScrollingTextLeft < secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                } else if (direction === 'right') {
                    return firstScrollingTextLeft > secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                }
            };

            $(window).on('wheel', function (e) {
                var delta = e.originalEvent.deltaY;

                if (delta > 0) {
                    // going down
                    transformAmount += transformSpeed * transformDirection;
                    container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(10deg)');
                } else
                {
                    transformAmount -= transformSpeed * transformDirection;
                    container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(-10deg)');
                }
                setTimeout(function () {
                    container.find('.scrolling-text').css('transform', 'translate3d(' + transformAmount * -1 + 'px, 0, 0)');
                }, 10);
                setTimeout(function () {
                    container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(0)');
                }, 500);





                // Boundaries
                if (transformAmount < leftBound) {
                    var activeText = getActiveScrollingText('left');
                    activeText.css({ 'left': Math.round(leftBound - scrollingTextWidth - startLetterIndent) + 'px' });
                    leftBound = parseInt(activeText.css("left"), 10);
                    rightBound = leftBound + scrollingTextWidth + scrollAmountBoundary + startLetterIndent;

                } else if (transformAmount > rightBound) {
                    var activeText = getActiveScrollingText('right');
                    activeText.css({ 'left': Math.round(rightBound + scrollingTextWidth - scrollAmountBoundary + startLetterIndent) + 'px' });
                    rightBound += scrollingTextWidth + startLetterIndent;
                    leftBound = rightBound - scrollingTextWidth - scrollAmountBoundary - startLetterIndent;
                }
            });
        });
    }
});


$(document).ready(function () {
    var containers = $('.container');

    if (containers.length) {
        containers.each(function () {
            var container = $(this);

            // Support small text - copy to fill screen width
            if (container.find('.scrolling-text2').outerWidth() < $(window).width()) {
                var windowToScrolltextRatio = Math.round($(window).width() / container.find('.scrolling-text2').outerWidth()),
                    scrollTextContent = container.find('.scrolling-text2 .scrolling-text2-content2').text(),
                    newScrollText = '';
                for (var i = 0; i < windowToScrolltextRatio; i++) {if (window.CP.shouldStopExecution(0)) break;
                    newScrollText += ' ' + scrollTextContent;
                }window.CP.exitedLoop(0);
                container.find('.scrolling-text2 .scrolling-text2-content2').text(newScrollText);
            }

            // Init variables and config
            var scrollingText = container.find('.scrolling-text2'),
                scrollingTextWidth = scrollingText.outerWidth(),
                scrollingTextHeight = scrollingText.outerHeight(true),
                startLetterIndent = parseInt(scrollingText.find('.scrolling-text2-content2').css('font-size'), 10) / 4.8,
                startLetterIndent = Math.round(startLetterIndent),
                scrollAmountBoundary = Math.abs($(window).width() - scrollingTextWidth),
                transformAmount = 0,
                leftBound = 0,
                rightBound = scrollAmountBoundary,
                transformDirection = container.hasClass('left-to-right') ? -1 : 1,
                transformSpeed = 100;





            // Read transform speed
            if (container.attr('speed')) {
                transformSpeed = container.attr('speed');
            }

            // Make scrolling text copy for scrolling infinity
            container.append(scrollingText.clone().addClass('scrolling-text2-copy'));
            container.find('.scrolling-text2').css({ 'position': 'absolute', 'left': 0 });
            container.css('height', scrollingTextHeight);

            var getActiveScrollingText = function (direction) {
                var firstScrollingText = container.find('.scrolling-text2:nth-child(1)');
                var secondScrollingText = container.find('.scrolling-text2:nth-child(2)');

                var firstScrollingTextLeft = parseInt(container.find('.scrolling-text2:nth-child(1)').css("left"), 10);
                var secondScrollingTextLeft = parseInt(container.find('.scrolling-text2:nth-child(2)').css("left"), 10);

                if (direction === 'left') {
                    return firstScrollingTextLeft < secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                } else if (direction === 'right') {
                    return firstScrollingTextLeft > secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                }
            };

            $(window).on('wheel', function (e) {
                var delta = e.originalEvent.deltaY;

                if (delta > 0) {
                    // going down
                    transformAmount += transformSpeed * transformDirection;
                    container.find('.scrolling-text2 .scrolling-text2-content2').css('transform', 'skewX(10deg)');
                } else
                {
                    transformAmount -= transformSpeed * transformDirection;
                    container.find('.scrolling-text2 .scrolling-text2-content').css('transform', 'skewX(-10deg)');
                }
                setTimeout(function () {
                    container.find('.scrolling-text2').css('transform', 'translate3d(' + transformAmount * -1 + 'px, 0, 0)');
                }, 10);
                setTimeout(function () {
                    container.find('.scrolling-text2 .scrolling-text2-content2').css('transform', 'skewX(0)');
                }, 500);


                // Boundaries
                if (transformAmount < leftBound) {
                    var activeText = getActiveScrollingText('left');
                    activeText.css({ 'left': Math.round(leftBound - scrollingTextWidth - startLetterIndent) + 'px' });
                    leftBound = parseInt(activeText.css("left"), 10);
                    rightBound = leftBound + scrollingTextWidth + scrollAmountBoundary + startLetterIndent;

                } else if (transformAmount > rightBound) {
                    var activeText = getActiveScrollingText('right');
                    activeText.css({ 'left': Math.round(rightBound + scrollingTextWidth - scrollAmountBoundary + startLetterIndent) + 'px' });
                    rightBound += scrollingTextWidth + startLetterIndent;
                    leftBound = rightBound - scrollingTextWidth - scrollAmountBoundary - startLetterIndent;
                }
            });
        });
    }
});
