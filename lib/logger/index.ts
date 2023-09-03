import { join } from 'path'
import type winston from 'winston'
import { transports, format, createLogger } from 'winston'
import { type TLogLevel, type TPathToLoggerOutDir } from './types/types'

const logger = (level: TLogLevel, PathToLoggerOutDir: TPathToLoggerOutDir): winston.Logger => {
  if (PathToLoggerOutDir.replaceAll(' ', '').length < 0) throw new Error('message')
  if (level === 'debug' || level === 'warn') {
    return logDevelop(level, PathToLoggerOutDir)
  }
  return log(level, PathToLoggerOutDir)
}

const log = (level: TLogLevel, PathToLoggerOutDir: string): winston.Logger => {
  return createLogger({
    level,
    format: format.combine(
      format.timestamp(),
      format.json()
    ),
    transports: [
      new transports.File({
        filename: join(PathToLoggerOutDir, `${formattedDate}.log`)
      })
    ]
  })
}

const logDevelop = (level: TLogLevel, PathToLoggerOutDir: string): winston.Logger => {
  return createLogger({
    level,
    format: format.combine(
      format.timestamp(),
      format.json()
    ),
    transports: [
      new transports.Console(),
      new transports.File({
        filename: join(PathToLoggerOutDir, `${formattedDate}.log`)
      })
    ]
  })
}

const currentDate = new Date()
export const formattedDate = currentDate.toISOString().slice(0, 16).replace('T', '-')

export { logger }
