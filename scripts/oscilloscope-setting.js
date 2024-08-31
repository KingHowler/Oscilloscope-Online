if (!window.settings) {
    window.settings = {};
}

document.getElementById('settingsForm').addEventListener('submit', async(event) => {
    event.preventDefault();
    const port = await navigator.serial.requestPort();
    const formData = new FormData(event.target);
    window.settings = {
        drawPoints: formData.get('drawPoints') !== null,
        drawSubGrid: formData.get('drawSubGrid') !== null,
        xAxisTitle: formData.get('xAxisTitle'),
        yAxisTitle: formData.get('yAxisTitle'),
        minY: parseInt(formData.get('minY')),
        maxY: parseInt(formData.get('maxY')),
        yGap: parseFloat(formData.get('yGap')),
        minX: parseInt(formData.get('minX')),
        maxX: parseInt(formData.get('maxX')),
        xGap: parseFloat(formData.get('xGap')),
        baud: parseInt(formData.get('baudrate')),
        port: port
    };
    sessionStorage.setItem('settings', JSON.stringify(settings));
    window.location.href = "oscilloscope.html";     
});