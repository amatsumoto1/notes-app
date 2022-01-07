if (process.env.NODE_ENV === 'production') {
    require('./src');
} else {
    require('nodemon')({script: 'dev.ts'});
}