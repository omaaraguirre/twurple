import chalk from 'chalk'

export const info = text => {
  console.log(chalk.blueBright(text))
}

export const error = text => {
  console.log(chalk.redBright(text))
}

export const success = text => {
  console.log(chalk.greenBright(text))
}

export const warn = text => {
  console.log(chalk.yellowBright(text))
}
