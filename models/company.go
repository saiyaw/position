package models

import (
	"time"

	_ "github.com/lib/pq"
)

type Company struct {
	Id       int64 `orm:"pk;auto"`
	Name     string
	Address  string
	Industry string
	Scale    string

	Created time.Time `orm:"auto_now_add;type(datetime)"`
	Updated time.Time `orm:"auto_now;type(datetime)"`
}
