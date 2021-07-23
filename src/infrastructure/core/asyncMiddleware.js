
import log from '../services/log'
import progress from 'nprogress'

function asyncHandler(callback) {

    return async (object) => {
        try {
            await callback(object);
        } catch (error) {
            progress.isStarted() ? progress.done() : false

            object != undefined ? object.handler != undefined ? object.handler() : false : false;
            log(error, 'Async function')
        }

    };

}
export default { asyncHandler };