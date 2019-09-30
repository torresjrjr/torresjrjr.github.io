" ::: ~/.vimrc :::
" @torresjrjr
" ===========


" Settings
" --------

set nocompatible    " Turn off compatibility with Vi.
syntax on           " Turn on syntax highlighting.
filetype plugin on  " Enable plugins.
set showcmd         " Show commands and keystrokes.
set number          " Turn on numbered lines.
set hlsearch        " Highlight searches.

set tabstop=4       " Displays \t in files as n spaces.
set softtabstop=4   " Size of entered <Tab>.
set shiftwidth=0    " Tab-width in vim behaivour. If 0, defaults to tabstop.


" Mappings
" --------

" Remap ESC to `kj` in INSERT MODE.
inoremap kj <esc>

" Shortcut to build (save and run) a python script.
nnoremap <C-b> <esc>:w<space>!python<cr>


" Plugins
" -------

set runtimepath^=~/.vim/bundle/goyo.vim


" END
