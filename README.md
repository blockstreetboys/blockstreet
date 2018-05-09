# blockstreet
The De Facto, End-to-End Ethereum Dapp Launching Tutorial


If you would like to participate in our Alpha testing, please email us at ethblockstreet2018@gmail.com

Thank you!

## Running

### Start Client

```bash
cd .../blockstreet/client
npm install
export PATH=$PWD/node_modules/.bin:$PATH
which react-scripts 1>/dev/null || echo "Could not find react-scripts. Fix this before continuing."
npm start
```

A browser tab should be opened at http://localhost:3000/.

### Tutorial

Next, run through the tutorial.

Before clicking any download links on the "Blastoff!" page, start the server.

### Start Server

```bash
cd .../blockstreet/server
npm install
npm start
```

## Troubleshooting Client

* If you get `Error: watch .../blockstreet/client/public ENOSPC` then run:

    ```bash
    sudo bash -c 'echo 524288 >/proc/sys/fs/inotify/max_user_watches'
    ```
