---
layout: layouts/base.njk
title: Programming Roadmap and Resources
---

{%- for item in navigation -%}

<a href="{{ item.link }}">{{ item.text }} </a> <br/>

{%- endfor -%}
