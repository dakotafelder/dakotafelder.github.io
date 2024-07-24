(function() {
    var canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');
    
    function generateNoise() {
        var imageData = ctx.createImageData(canvas.width, canvas.height);
        var buffer32 = new Uint32Array(imageData.data.buffer);
        var length = buffer32.length;
        
        for (var i = 0; i < length; i++) {
            if (Math.random() < 0.9) { // 10% chance for black pixel
                buffer32[i] = 0xff000000; // Black
            } else {
                buffer32[i] = 0xff414141; // Gray
            }
        }
        
        ctx.putImageData(imageData, 0, 0);
        document.body.style.backgroundImage = 'url(' + canvas.toDataURL('image/png') + ')';
    }
    
    function animateNoise() {
        generateNoise();
        setTimeout(animateNoise, 30); // Change every 100 milliseconds
    }
    
    animateNoise();
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        generateNoise();
    });
})();