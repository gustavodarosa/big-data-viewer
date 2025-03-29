const LazyLoader = {
    currentPosition: 0,
    chunkSize: 100, // Number of lines to load at a time

    load: function(data, callback) {
        const totalLines = data.length;

        const loadChunk = () => {
            const endPosition = Math.min(this.currentPosition + this.chunkSize, totalLines);
            const chunk = data.slice(this.currentPosition, endPosition);
            this.currentPosition = endPosition;

            callback(chunk);

            if (this.currentPosition < totalLines) {
                requestAnimationFrame(loadChunk); // Schedule the next chunk
            }
        };

        loadChunk(); // Start loading the first chunk
    },

    reset: function() {
        this.currentPosition = 0; // Reset the loader position
    }
};

export default LazyLoader;