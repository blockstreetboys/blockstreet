# Getting started

```bash
npm install
export PATH=$PWD/node_modules/.bin:$PATH
if ! which react-scripts 1>/dev/null ; then
    echo "Could not find react-scripts"
    exit 1
fi
npm start
```

# Troubleshooting

* If you get `Error: watch .../blockstreet/client/public ENOSPC` then run:

    ```bash
    sudo bash -c 'echo 524288 >/proc/sys/fs/inotify/max_user_watches'
    ```
