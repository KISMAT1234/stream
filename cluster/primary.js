const cluster = require('cluster');
const os = require('os');
const path = require('path');

const newPath = path.dirname(__filename);
const cpuCount = os.cpus().length;

console.log(`CPU count: ${cpuCount}`);
console.log(`Primary pid = ${process.pid}`);

if (cluster.isPrimary) {
    cluster.setupPrimary({
        exec: path.join(newPath, 'index.js'),
    });

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} has been killed`);
        console.log('Starting another worker');
        cluster.fork();
    });
}
