---
title: 2021 高性价比 web 开发方案总结(未完结)
date: 2021-03-01
summary: |
  以国内小作坊式开发为主，从传统走向 DevOps。
  涉及三大平台：阿里云、Github、微信小程序，证书服务使用 OHTTPS。由于 Github 在国内访问较慢，需要额外的翻墙成本，但这是值得的。
tags:
  - 总结
---

# 2021 高性价比 web 开发方案总结(未完结)

![devops-flow](./devops-flow.svg)

## 需求

以一个 todo 项目为例，假设有以下需求：

- 能通过浏览器管理 todo 清单
- 能通过微信小程序管理 todo 清单

于是有了这样几个端：

- 后端，提供 api
- 浏览器端
- 微信小程序端

## DevOps 选型

按照惯例，先解决三个问题：

- 代码管理
- CI/CD
- 运维

考虑到低成本，应该尽量选择大的平台，避免自己搭建。

### 代码管理

