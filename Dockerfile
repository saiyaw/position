FROM grayzone/beego

MAINTAINER Albert Wang

ADD . /go/src/github.com/saiyawang/position

WORKDIR /go/src/github.com/saiyawang/position

RUN go build github.com/saiyawang/screening

RUN rm -rf /go/src/github.com/saiyawang/position/.git
RUN rm -rf /go/src/github.com/saiyawang/position/controllers
RUN rm -rf /go/src/github.com/saiyawang/position/routers
RUN rm -rf /go/src/github.com/saiyawang/position/tests
RUN rm -rf /go/src/github.com/saiyawang/position/main.go

EXPOSE 8081 8080

ENTRYPOINT ["/go/src/github.com/saiyawang/position/position"]

