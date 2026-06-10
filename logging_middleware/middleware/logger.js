module.exports = (req, res, next) => {

    const start = Date.now();

    res.on("finish", () => {

        const responseTime = Date.now() - start;

        console.log({
            method: req.method,
            url: req.originalUrl,
            statusCode: res.statusCode,
            timestamp: new Date().toISOString(),
            responseTime: `${responseTime}ms`
        });

    });

    next();
};