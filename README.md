# hexo-tag-codepen-x

[中文文档](./zh/README.md)|**English**


> This is a plug-in that allows `Hexo` blogs to use `codeopen`
>
> [Hexo Docs](https://hexo.io/docs/)
>
> [CodeOpen](https://codepen.io/pen/)

## Install

```shell
npm i hexo-tag-codepen-x
```

## Usage

### ①Global configuration

Set the file `_ config.yml` under the Hexo blog directory

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
click_load   | `boolean`     | Use Click-to-Load (The result in Embedded Pens can either load right away, or be in a preview state where they need to be clicked to load, which can be good for performance.)
editable     | `boolean`     | Make Code Editable (You can make the code in this Embedded Pen editable, meaning you can change code and see the results, just like in the Pen Editor here. Editable Embeds require more resources than non-editable Embeds.)
user         | `xu-ux`       | Codeopen UserId
theme        | `light/dark`  | The embedded container theme（dark or light）
default_tabs | `html,result` | Default tab page  （html,result,js）
height       | `600`         | Height of the embedded container
width        | `100%`        | Width of the embedded container 
style        | `Object`      | Custom styles

### ②Using tag in MD files

```ejs
{% codepen slugHash user|anon tabs theme height width %}
```

Field        | Value         | Desc
-------------|---------------|-----------
slugHash     | `XWgPqjN`     | Codeopen Unique ID
user         | `xu-ux`       | Codeopen UserId
theme        | `light/dark`  | The embedded container theme（dark or light）
default_tabs | `html,result` | Default tab page  （html,result,js）
height       | `600`         | Height of the embedded container
width        | `100%`        | Width of the embedded container 

**The value inside the tag is used first, followed by the value of the global configuration**

```md
{% codepen XWgPqjN %}
```
OR
```md
{% codepen XWgPqjN xu-ux %}
```
OR
```md
{% codepen XWgPqjN xu-ux js,result dark 600 %}
```
OR



**Display：**

![image-20210924225555974](https://cdn.jsdelivr.net/gh/xu-ux/static/img/blog/2021/202109242256549.png)

