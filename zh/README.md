# hexo-tag-codepen-x

中文文档|[English](../README.md)

> 这是一个让Hexo博客能够使用codeopen的插件


## 使用方法

### ①全局配置

在Hexo博客目录下设置`_config.yml`文件

```yaml
codepen:
  user: "xu-ux"
  theme: "33713"
  default_tabs: "js,result"
  height: 500
  width: "100%"
  click_load: false
  editable: true
  style: {height: 600px, border-radius: 10px}
```

Field        | Value         | Desc
-------------|---------------|-----------
click_load   | boolean       | Use Click-to-Load (The result in Embedded Pens can either load right away, or be in a preview state where they need to be clicked to load, which can be good for performance.)
editable     | boolean       | Make Code Editable (You can make the code in this Embedded Pen editable, meaning you can change code and see the results, just like in the Pen Editor here. Editable Embeds require more resources than non-editable Embeds.)
user         | xu-ux         | codeopen用户id
theme        | light/dark    | 嵌入的容器主题（dark或者light）
default_tabs | html,result   | 默认tab页面  （html,result,js）
height       | 600           | 嵌入的容器高度
width        | 默认 `100%`    | 嵌入的容器宽度 
style        | Object        | 自定义样式

### ②标签使用

```ejs
{% codepen slugHash user|anon tabs theme height width %}
```

Field        | Value         | Desc
-------------|---------------|-----------
slugHash     | XWgPqjN       | codeopen给的唯一值
user         | xu-ux         | codeopen用户id
theme        | light/dark    | 嵌入的容器主题（dark或者light）
default_tabs | html,result   | 默认tab页面  （html,result,js）
height       | 600           | 嵌入的容器高度
width        | 默认 `100%`    | 嵌入的容器宽度 

**优先使用标签内部的值，其次再使用全局配置的值**

```md
{% codepen XWgPqjN %}
```
或者
```md
{% codepen XWgPqjN xu-ux %}
```
或者
```md
{% codepen XWgPqjN xu-ux js,result dark 600 %}
```
等等



**效果：**

![image-20210924225555974](https://cdn.jsdelivr.net/gh/xu-ux/static/img/blog/2021/202109242256549.png)
