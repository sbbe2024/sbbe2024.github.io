---
title: Apoio
nav:
  order: 6
  tooltip: Sobre os apoiadores do I Congresso da SBBE.
---

# {% include icon.html icon="fa-solid fa-money-check-dollar" %}Apoio

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dui suscipit, dignissim quam in, egestas turpis. Praesent at sapien tellus. Fusce mollis porta cursus. Quisque libero tortor, commodo sed sollicitudin in, consequat eu sem. Ut elementum porta purus eu tincidunt. Nulla hendrerit diam sit amet lectus feugiat ultricies. Etiam placerat metus vel nunc varius eleifend. Curabitur luctus turpis id ipsum molestie rutrum quis sit amet mauris. Integer imperdiet augue in sodales maximus.

## First sponsor.
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
  image="images/Sponsors/SMBE.png"
  text=text
%}

## Second sponsor.
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
  image="images/Sponsors/UFPR.png"
  flip=true
  text=text
%}

## Third sponsor.
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