
# ::: df.sh :::
# @torresjrjr
# df.sh , dotfiles.
# Run this file at the home directory.

DF_URL='https://raw.githubusercontent.com/torresjrjr/torresjrjr.github.io/master/df/'

# function: pull dotfile
pulldf() {
    echo Pulling $1
    curl $DF_URL$1 -# > $1
}

pulldf .vimrc

# END
