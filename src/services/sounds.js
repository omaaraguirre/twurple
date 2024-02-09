/* eslint-disable no-undef */
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import player from 'play-sound'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const noti = () => player().play(path.join(__dirname, '../sounds/noti.wav'))
export const beep = () => player().play(path.join(__dirname, '../sounds/beep.wav'))
export const quack = () => player().play(path.join(__dirname, '../sounds/quack.wav'))
export const pup = () => player().play(path.join(__dirname, 'sounds/pup.wav'))
