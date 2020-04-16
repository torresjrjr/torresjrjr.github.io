" ~/.vim/maps/markdown.maps.vim
" Vim mappings for Markdown syntax.

" Headings
" --------
autocmd Filetype markdown inoremap <CR>h1<Tab>  <Esc>yypVr=o
autocmd Filetype markdown inoremap <CR>h2<Tab>  <Esc>yypVr-o
autocmd Filetype markdown inoremap <CR>h3<Tab>  <Esc>I###<Space><Esc>o

" Formatting
" ----------
autocmd Filetype markdown inoremap b<Tab>  **&**{&}<Esc>2F&
autocmd Filetype markdown inoremap i<Tab>   _&_{&}<Esc>2F&

" Embedding
" ---------
autocmd Filetype markdown inoremap link<Tab>    []({&})<Esc>F[a
autocmd Filetype markdown inoremap image<Tab>  ![]({&})<Esc>F[a
autocmd Filetype markdown inoremap cite<Tab>    [][{&}]<Esc>2F[a
autocmd Filetype markdown inoremap ref<Tab>     []:<Space>{&}<Esc>F[a

" END
