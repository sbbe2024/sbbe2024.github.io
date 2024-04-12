---
title: Local do Evento
nav:
  order: 5
  tooltip: Sobre o local do I Congresso da SBBE.
---

# {% include icon.html icon="fa-solid fa-location-dot" %}Local do Evento

O I Congresso da Sociedade Brasileira de Biologia Evolutiva ocorrerá no campus da Universidade Federal do Paraná (UFPR) na cidade de Curitiba.   

{%
  include button.html
  type="email"
  text="jane@smith.com"
  link="jane@smith.com"
%}
{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
%}
{%
  include button.html
  type="address"
  tooltip="Endereço do local do SBBE2024 no Google Maps."
  link="https://maps.app.goo.gl/vfkBnX4yWVTmu1i79"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/GralhaAzul.jpg"
  caption="Auditório Gralha Azul"
  subcaption="TEST"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/Bissoli.jpg"
  caption="Auditório Maurício Bissoli"
%}

{% endcapture %}

{% include section.html dark=true %}


{% include cols.html col1=col1 col2=col2 col3=col3 %}
