if (!window.settings) {
    window.settings = {};
}

document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
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
        xGap: parseFloat(formData.get('xGap'))
    };
    //console.log(settings);
    sessionStorage.setItem('settings', JSON.stringify(settings));
    // You can pass these settings to your JavaScript functions here.
    window.location.href = "oscilloscope.html";
});