package routers

import (
	"github.com/astaxie/beego"
	"github.com/saiyawang/position/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	//	beego.Router("/scan", &controllers.ScanController{})
	beego.Router("/list", &controllers.ListController{})
	beego.Router("/view", &controllers.ViewController{})

	//	beego.Router("/insertpatient", &controllers.PatientController{}, "POST:InsertOnePatient")
	//	beego.Router("/getpatients", &controllers.PatientController{}, "GET:GetPatients")
}
