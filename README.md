# kitty-grid
fluid and modern scss grid based on flexbox and css variables, bem ready, hot like your girl :)

![kitty grid](https://chpic.su/_data/stickers/k/kocheng/kocheng_036.webp)

It includes 2 files:
1. with desktop-first set - i use it on my work :(
2. with mobile-first set - if you like bootstrap or this approach at whole import this file to your project

## Short info, browser support
This grid based on css variables, so to know browser support see next link https://caniuse.com/#search=css%20var - 94.68% - nice result, but forget ie11<=, or use polyfill

Kitty grid system based on scss mixins and default css classes which set containers, rows, offsets and columns to layout and align content.

> Look at this page with examples, its easy breezy, really, just believe me ;)

## Get started and basic usage
At first import desktop-first or mobile-first set to your project. Nice, now you have the best full fluid grid))

Use `.container` for content it has max-width value or use `.container-fluid` for full width content.

Use `.row` to create flex container with basic set, or you may include mixin `row` for your own class. Use class `.row_no-gutter` to make margins 0 in container or include `no-gutter` mixin to your own.

Include `col` mixin to set item as column and next include `size` mixin to set size. Size mixin need argument - its a part of all columns in row e.g. `@include size(1/5);`, `@include size(3/12);`  or it is content width `@include size(auto);` or it use `@include size(adaptive);` to  automatically layout column width.

Use `offset` mixin to move column to right, like `size` mixin it needs argument - part of needed columns in row

To change column size or custom css values on different screen sizes include one of mixin - sm, md, lg, xlg.

> Example of html layout:

      <div class="container">
            <div class="row">
                  <div class="row__item">1</div>
                  <div class="row__item">1</div>
                  <div class="row__item">1</div>
                  <div class="row__item">1</div>
                  <div class="row__item row__item_mobile-small">1</div>
            </div>
      </div>
      
> Scss:

      .row__item {
            @include col();
            @include size(1/5);
            color: black;
            
            @include md {
                  @include size(adaptive);
                  color: red;
            }
            
            @include sm {
                  @include size(auto);
                  color: purple;
            }
            
            &_mobile-offset {
                  @include size(1/7);
                  @include offset(2/7);
            }
            
      }
      
Additionally you may change default gutters wich used in mixin, just set them instead default

> html:

      <div class="container">
            <div class="custom-row">
                  <div class="custom-row__item">2</div>
                  <div class="custom-row__item">2</div>
                  <div class="custom-row__item">2</div>
                  <div class="custom-row__item">2</div>
            </div>
      </div>
      
> Scss:

      .custom-row {
            @include row(-20px);
      
      @include md {
            @include row(-5px);
      }
      
            $__item {
                  @include col(20px);
                  @include size(1/5, 20px);

                  @include md {
                        @include col(5px);
                        @include size(1/5, 5px);
                  }

            }
      }
      
 As you may see, this grid is max fluid and responsive, so use it and good luck in work!

