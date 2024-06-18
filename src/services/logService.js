import Raven from "raven-js";

function init() {
    Raven.config("https://e68add1a69e8e0c6dbce6b240f92ee0f@o4507422504517632.ingest.us.sentry.io/4507422537482240", {
        release: '1-0-0',
        environment: 'development-test',
    }).install();
    
}
function log(error){
    Raven.captureException(error);
}

export default {
    init,
    log
};