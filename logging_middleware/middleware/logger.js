const logger = (req, res, next) => {

    const startTime = Date.now();

    res.on("finish", () => {

        const endTime = Date.now();

        const responseTime = endTime - startTime;

        console.log({
            method: req.method,
            url: req.originalUrl,
            statusCode: res.statusCode,
            timestamp: new Date().toISOString(),
            responseTime: `${responseTime} ms`
        });

    });

    next();
};

module.exports = logger;