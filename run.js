var args = process.argv.slice(2),
    utils = require('./utils.js'),
    config = require('./config.js');

module.exports = function(cfg) {
    // save configuration keys to mutable shared config 1 by 1
    for (var k in cfg) {
        config[k] = cfg[k];
    }
    config.conn = utils.makeConnString();
    var cmd = args[0] || config.cmd;
    console.log('executing', cmd);
    switch (cmd) {
        case 'create':
            require('./cmds/create_migration.js')(args[1]);
            break;
        case 'migrate':
            require('./cmds/migrate.js')();
            break;
        case 'rollback':
            require('./cmds/rollback.js')();
            break;
        default:
            console.log('unknown command');
    }
};
