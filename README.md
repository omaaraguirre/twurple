# TwitchBot

A Twitch Bot.

## Requirements

- Node v20.6.0+

## Installation

1. Clone the repository.

    ```bash
    git clone https://github.com/omaaraguirre/twurple.git
    ```

2. Install dependencies.

    ```bash
    cd twurple
    npm install
    ```

3. Follow the [instructions](https://dev.twitch.tv/docs/authentication/register-app/) to register your twitch app and get your credentials.

4. Create a `.env` file.

    ```bash
    touch .env
    ```

5. Add the following to the `.env` file and replace the values with your own.

    ``` 
    BOT = your_bot_name
    CLIENT_ID = your_bot_client_id
    CLIENT_SECRET = your_bot_client_secret
    REDIRECT_URI = your_bot_redirect_uri
    AUTH_CODE = your_bot_auth_code
    ```

6. Run the bot.

    ```bash
    npm run dev
    ```

## Usage

In `src/config.js` you can change the channels you want the bot to join and a default color.

```javascript
export const channels = ['omaaraguirre']
export const defaultColor = '#a970ff'
```

In `src/twurple/events.js` you can manage the events for the bot to listen. For example:

```javascript
client.onConnect(() => {
 // Do something
})
```

In `src/twurple/commands.js` you can manage the commands for the bot to use. For example:

```javascript
export const ping = createBotCommand('ping', (params, bot) => {
 // Do something
})
```

The bot automatically saves the auth tokens in `src/tokens/botname.json` and the data in `src/db/db.json` (using [lowdb](https://github.com/typicode/lowdb)). As this is sensitive data, please do not share it with anyone and make sure your `.gitignore` file includes these files.

## License

[MIT](https://choosealicense.com/licenses/mit/)
