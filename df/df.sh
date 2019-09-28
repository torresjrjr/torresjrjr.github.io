
# ::: df.sh :::
# @torresjrjr
# df.sh , dotfiles.
# Run this file at the home directory.

BASE_URL='https://raw.githubusercontent.com/torresjrjr/torresjrjr.github.io/master/df/'

DOTFILE='.vimrc'
curl $BASE_URL$DOTFILE > $DOTFILE

# END
