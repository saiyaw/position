package controllers

import "github.com/astaxie/beego"

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Layout = "layout.tpl"
	c.TplNames = "index.tpl"
}

type ViewController struct {
	beego.Controller
}

func (c *ViewController) Get() {
	c.Layout = "layout.tpl"
	c.TplNames = "view.tpl"
}

type ListController struct {
	beego.Controller
}

func (c *ListController) Get() {
	c.Layout = "layout.tpl"
	c.TplNames = "list.tpl"
}
