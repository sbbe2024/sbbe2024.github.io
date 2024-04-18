---
title: Palestras Magnas
nav:
  order: 3
  tooltip: Palestrantes convidados.
---

# {% include icon.html icon="fa-solid fa-money-check-dollar" %}Palestras Magnas

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dui suscipit, dignissim quam in, egestas turpis. Praesent at sapien tellus. Fusce mollis porta cursus. Quisque libero tortor, commodo sed sollicitudin in, consequat eu sem. Ut elementum porta purus eu tincidunt. Nulla hendrerit diam sit amet lectus feugiat ultricies. Etiam placerat metus vel nunc varius eleifend. Curabitur luctus turpis id ipsum molestie rutrum quis sit amet mauris. Integer imperdiet augue in sodales maximus.

## Primeiro palestrante.
{% capture text %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dui suscipit, dignissim quam in, egestas turpis. Praesent at sapien tellus. Fusce mollis porta cursus. Quisque libero tortor, commodo sed sollicitudin in, consequat eu sem. Ut elementum porta purus eu tincidunt.

{%
  include button.html
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/Sponsors/optimizing_stim.png"
  text=text
%}

## Segundo palestrante.
{% capture text %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dui suscipit, dignissim quam in, egestas turpis. Praesent at sapien tellus. Fusce mollis porta cursus. Quisque libero tortor, commodo sed sollicitudin in, consequat eu sem. Ut elementum porta purus eu tincidunt.

{%
  include button.html
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/Sponsors/optimizing_stim.png"
  flip=true
  text=text
%}

## Terceiro palestrante.
{% capture text %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dui suscipit, dignissim quam in, egestas turpis. Praesent at sapien tellus. Fusce mollis porta cursus. Quisque libero tortor, commodo sed sollicitudin in, consequat eu sem. Ut elementum porta purus eu tincidunt.

{%
  include button.html
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/optimizing_stim.png"
  text=text
%}