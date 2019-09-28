
# ::: df.sh :::
# @torresjrjr
# df.sh , dotfiles.
# Run this file at the home directory.

DF_URL='https://raw.githubusercontent.com/torresjrjr/torresjrjr.github.io/master/df/'

sync_dotfile() {
    curl $DF_URL$1 > $1
}

sync_dotfile '.vimrc'

# END
