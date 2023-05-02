const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');


module.exports = (phase) => {
    if(phase===PHASE_DEVELOPMENT_SERVER){
        return{
            env: {
                mongodb_username: 'Mykhailo',
                mongodb_password: '32167Mike',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'nextjs-course-events-dev'
            }
        }
    }


    return {
        env: {
            mongodb_username: 'Mykhailo',
            mongodb_password: '32167Mike',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'nextjs-course-events-prod'
        }
    }
}
