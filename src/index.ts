import { logger } from '../lib/logger'

const log = logger('silly', './logs/')

// 0
log.error(new Error('error msg'))
// 1
log.warn('WARN!')
// 2
log.info('info <3')
// 3
log.verbose('verbose')
// 4
log.debug('debug')
// 5
log.silly('silly!')
