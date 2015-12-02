package models

import (
	"github.com/astaxie/beego/orm"

	_ "github.com/lib/pq"
)

func init() {
	orm.Debug = true
	orm.RegisterDriver("postgres", orm.DR_Postgres)
	connstr := "user=position password=123456 dbname=position"
	orm.RegisterDataBase("default", "postgres", connstr)

	orm.RegisterModel(new(Job), new(Company))

	//	createTables()
}

func createTables() error {
	name := "default"
	force := false
	verbose := true
	err := orm.RunSyncdb(name, force, verbose)
	return err
}
