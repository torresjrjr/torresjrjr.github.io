# ::: df.sh ::: #
# @torresjrjr
# A bash script to sync dotfiles.
# Run this file at the home directory.

RAW_DF_URL='https://raw.githubusercontent.com/torresjrjr/torresjrjr.github.io/master/df/'

# FUNCTIONS #
pulldf() { echo Pulling $1; curl $RAW_DF_URL$1 -# > $1 }
catdf() { echo Pulling $1; curl $RAW_DF_URL$1 -# >> $1 }

# MAIN SEQUENCE #
echo "::: df.sh :::"
echo "Syncing dotfiles"

pulldf .vimrc

echo "DONE"
# END
