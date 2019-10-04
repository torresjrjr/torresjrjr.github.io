" ~/.vim/maps/html.maps.vim
" Vim mappings for .html syntax.

" Headings
" --------
autocmd Filetype html inoremap h1<Tab> <h1>&</h1>{&}<Esc>2F&s
autocmd Filetype html inoremap h2<Tab> <h2>&</h2>{&}<Esc>2F&s
autocmd Filetype html inoremap h3<Tab> <h3>&</h3>{&}<Esc>2F&s
autocmd Filetype html inoremap h4<Tab> <h4>&</h4>{&}<Esc>2F&s
autocmd Filetype html inoremap h5<Tab> <h5>&</h5>{&}<Esc>2F&s
autocmd Filetype html inoremap h6<Tab> <h6>&</h6>{&}<Esc>2F&s

" Objects
" -------
autocmd Filetype html inoremap div<Tab> <div>&</div>{&}<Esc>2F&s
autocmd Filetype html inoremap div.<Tab> <div class="&">{&}</div>{&}<Esc>3F&s
autocmd Filetype html inoremap div#<Tab> <div id="&">{&}</div>{&}<Esc>3F&s
autocmd Filetype html inoremap div.#<Tab> <div class="&" id="{&}">{&}</div>{&}<Esc>4F&s
autocmd Filetype html inoremap p<Tab> <h6>&</h6>{&}<Esc>2F&s

" Formatting
" ----------
autocmd Filetype html inoremap b<Tab> <b>&</b>{&}<Esc>2F&s
autocmd Filetype html inoremap i<Tab> <i>&</i>{&}<Esc>2F&s
autocmd Filetype html inoremap u<Tab> <u>&</u>{&}<Esc>2F&s
autocmd Filetype html inoremap code<Tab> <code>&</code>{&}<Esc>2F&s
autocmd Filetype html inoremap pre<Tab> <pre>&</pre>{&}<Esc>2F&s

" Embedding
" ---------
autocmd Filetype html inoremap a<Tab> <a href="&">{&}</a>{&}<Esc>3F&s
autocmd Filetype html inoremap img<Tab> <img src="&"/>{&}<Esc>2F&s
autocmd Filetype html inoremap video<Tab> <video width="320" height="240" controls>\n\
  <source src="{&}" type="video/{&mp4}">\n\
  Video tag is unsupported.\n\
</video>{&}<Esc>3F&ca{
