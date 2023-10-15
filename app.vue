<template>
  <div>
    <o-header/>
    <o-hero/>
    <o-targets/>
    <div id="layout" class="-mb-7 -md-mb-15">
      <header class="m-header -container -mb-4">
        <p class="a-header__abstract">THE LAYOUT</p>
      </header>
      <o-no-gutter/>
    </div>
    <div id="responsive" class="-mb-7 -md-mb-15">
      <header class="m-header -container -mb-4">
        <p class="a-header__abstract">THE RESPONSIVE</p>
      </header>
      <o-breakpoints/>
    </div>
    <div id="modifiers" class="-mb-7 -md-mb-15">
      <header class="m-header -container -mb-4">
        <p class="a-header__abstract">THE MODIFIERS</p>
        <p class="a-header__description -col-12 -lg-col-9">
          Aguia has a lot of simple classes ready to use.
          This classes work as helpers to make the responsive a lite easier.
          <br/>Sometimes it's better to use a utility class rather than create a whole new class just to float an
          element.
        </p>
      </header>
      <o-wrap/>
      <o-gutter/>
      <o-gap-wrap/>
      <o-text>/</o-text>
      <o-flex-modifiers/>
      <div class="o-other-modifiers -container">
        <header class="m-header -col-12 -mb-2">
          <h2 class="a-header__tile">More modifiers</h2>
          <p class="a-header__description -col-12 -lg-col-9">
            In addition to the modifiers displayed, you can also use other basic modifiers that make responsive easier.
          </p>
        </header>
        <div class="m-text__wrapper">
          <p class="a-flex-modifiers__text">Float modifiers:</p>
          <ul class="m-flex-modifiers__list -list-code">
            <li class="a-list__item"><b>To float left:</b> -pull</li>
            <li class="a-list__item"><b>To float right:</b> -push</li>
            <li class="a-list__item"><b>To clear float row:</b> -clear</li>
          </ul>
        </div>
        <div class="m-text__wrapper">
          <p class="a-flex-modifiers__text">Position modifiers:</p>
          <ul class="m-flex-modifiers__list -list-code">
            <li class="a-list__item"><b>To position static:</b> -position-static</li>
            <li class="a-list__item"><b>To position relative:</b> -position-relative</li>
            <li class="a-list__item"><b>To position fixed:</b> -position-fixed</li>
            <li class="a-list__item"><b>To position absolute:</b> -position-absolute</li>
            <li class="a-list__item"><b>To position sticky:</b> -position-sticky</li>
          </ul>
        </div>
        <div class="m-text__wrapper">
          <p class="a-flex-modifiers__text">Padding:</p>
          <ul class="m-flex-modifiers__list -list-code">
            <li class="a-list__item"><b>To padding:</b> -p-n</li>
            <li class="a-list__item"><b>To padding top:</b> -pt-n</li>
            <li class="a-list__item"><b>To padding bottom:</b> -pb-n</li>
            <li class="a-list__item"><b>To padding left:</b> -pl-n</li>
            <li class="a-list__item"><b>To padding right:</b> -pr-n</li>
          </ul>
          <p class="a-flex-modifiers__text">Margin:</p>
          <ul class="m-flex-modifiers__list -list-code">
            <li class="a-list__item"><b>To margin:</b> -m-n</li>
            <li class="a-list__item"><b>To margin top:</b> -mt-n</li>
            <li class="a-list__item"><b>To margin bottom:</b> -mb-n</li>
            <li class="a-list__item"><b>To margin left:</b> -ml-n</li>
            <li class="a-list__item"><b>To margin right:</b> -mr-n</li>
          </ul>
          <p class="a-flex-modifiers__text">
            Padding and margin modifiers modify their property with a default size of <b>.75rem * n</b>.<br/> Where n is
            a number from 0 to twice the grid columns.
          </p>
        </div>
      </div>
    </div>
    <o-footer/>
  </div>
</template>
