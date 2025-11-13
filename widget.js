(function () {
    const widgetName = "IncomingCallAlert";

    // Register the widget
    window.desktop.registerWidget(widgetName, {
        onInit: function () {
            console.log(`${widgetName} initialized`);
        },
        onReady: function () {
            console.log(`${widgetName} ready`);

            // Subscribe to call delivered event
            window.desktop.subscribe("CALL_DELIVERED", (eventData) => {
                console.log("Incoming call detected:", eventData);

                // Play alert sound
                const audio = new Audio("https://example.com/alert.mp3");
                audio.play().catch(err => console.error("Audio play failed:", err));
            });
        }
    });
})();

