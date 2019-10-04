" ~/.vim/maps/maps.vim
" A collection of mappings for various syntaxes.

" Universal mappings
" ------------------

" Go to next snippet cursor place holder.
inoremap <Tab><Tab> <Esc>/{&}<CR>ca{


" Filetype specific syntax mappings
" ---------------------------------

source $HOME/.vim/maps/markdown.maps.vim
source $HOME/.vim/maps/html.maps.vim


" END
