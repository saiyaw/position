package models

import (
	"log"
	"time"

	"github.com/astaxie/beego/orm"
	_ "github.com/lib/pq"
)

type Job struct {
	Id               int64 `orm:"pk;auto"`
	Companyid        int64
	Salary           string
	RecruitingNumber uint32 // '0:male, 1: female'
	Url              string
	Description      string
	Requirement      string
	Survey           string
	Created          time.Time `orm:"auto_now_add;type(datetime)"`
	Updated          time.Time `orm:"auto_now;type(datetime)"`
}

func (j Job) Get() error {
	o := orm.NewOrm()
	err := o.Read(j)
	return err
}

func (j *Job) Insert() {
	o := orm.NewOrm()
	o.Begin()

	id, err := o.Insert(j)
	if err != nil {
		log.Println(err.Error())
		o.Rollback()
	} else {
		//		log.Println(id)
		j.Id = id
	}

	o.Commit()
}

func (j Job) GetPatients() []Job {
	o := orm.NewOrm()
	var result []Job
	o.QueryTable("job").OrderBy("Id").All(&result)
	return result
}
