const videoSource = document.getElementById('videoSource');
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isSafari || isMobile) {
    videoSource.src = 'assets/output.mov';
    videoSource.type = 'video/quicktime';
} else {
    videoSource.src = 'assets/output.webm';
    videoSource.type = 'video/webm';
}

// Show the video once it's fully loaded
videoElement.addEventListener('loadeddata', function() {
    videoElement.style.display = 'block';
});

//blob code =============================================

const blobPath = document.getElementById('blobPath');
const gradient = document.getElementById('gradient');

// Generate random blob points
function generateBlobPoints() {
    const points = 8;
    const angleStep = (Math.PI * 2) / points;
    const pathData = [];
    
    for (let i = 0; i < points; i++) {
        const angle = i * angleStep;
        const radius = 60 + Math.random() * 40; // Random radius between 60 and 100
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        pathData.push({ x, y });
    }
    
    return pathData;
}

// Create a smooth path using Catmull-Rom splines
function catmullRom2bezier(points) {
    const d = [];
    for (let i = 0; i < points.length; i++) {
        const p0 = points[i - 1 < 0 ? points.length - 1 : i - 1];
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        const p3 = points[(i + 2) % points.length];

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;

        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        d.push(`C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`);
    }
    return `M${points[0].x},${points[0].y} ${d.join(' ')} Z`;
}

// Animate the blob path
function animateBlob() {
    const points = generateBlobPoints();
    gsap.to(blobPath, {
        duration: 5,
        attr: { d: catmullRom2bezier(points) },
        ease: "none",
        onComplete: animateBlob
    });
}

// Animate the gradient
function animateGradient() {
    gsap.to(gradient, {
        duration: 30,
        attr: {
            gradientTransform: "rotate(360)"  // Rotate the gradient by 360 degrees
        },
        ease: "linear",
        repeat: -1
    });
}

const initialPoints = generateBlobPoints();
blobPath.setAttribute('d', catmullRom2bezier(initialPoints));
animateBlob();
animateGradient();