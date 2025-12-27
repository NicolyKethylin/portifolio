export function iniciarWave() {
    const canvas1 = document.getElementById('wave-canvas-1');
    const ctx1 = canvas1.getContext('2d');
    const canvas2 = document.getElementById('wave-canvas-2');
    const ctx2 = canvas2.getContext('2d');

    function resizeCanvas(canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function resizeAll() {
        resizeCanvas(canvas1);
        resizeCanvas(canvas2);
    }

    resizeAll();
    window.addEventListener('resize', resizeAll);

    let t = 0;

    function drawWave(ctx, canvas, color, offset = 0, amp = 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = color;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x++) {
            const y =
                canvas.height / 2 +
                30 * amp * Math.sin((2 * Math.PI / canvas.width) * x + t * 0.5 + offset) +
                10 * amp * Math.sin((2 * Math.PI / (canvas.width / 2)) * x - t * 0.3 + offset);
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.stroke();
    }

   function animate() {
        drawWave(ctx1, canvas1, "rgba(46,54,61,0.12)", 0, 1);
        drawWave(ctx2, canvas2, "rgba(46,54,61,0.12)", Math.PI / 6, 0.8);
        t += 0.015;
        requestAnimationFrame(animate);
    }
    animate();
};