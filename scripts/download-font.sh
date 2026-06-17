xiaolai=src/fonts/Xiaolai-Regular.ttf

if [ ! -f "$xiaolai" ]; then
    curl --location https://github.com/lxgw/kose-font/releases/download/v3.126/Xiaolai-Regular.ttf \
        --output $xiaolai --create-dirs
fi