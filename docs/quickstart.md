---
id: quickstart
title: Quickstart
---

This quickstart gives you basic understanding of creating a simple endpoint and how to do
by using Procyon Framework.

## Components
Components are the part of Procyon Framework. Controller, Service, Repository, Initializers, etc.
are considered as component.  

## Register Components
If you have a component like a Controller, you need to notify it to Procyon as Go language
doesn't have annotation and similar reflection library like Java. You don't need to be worried about it.
The only thing you have to do is to use method **core.Register** in **init**, as the following below.
It is placed in module **procyon-core**.

**Note that you have to give a function with only one return parameter, which will create a instance of the controller.**

**config.go**
```go
import (
	core "github.com/procyon-projects/procyon-core"
	"github.com/procyon-projects/procyon-test-app/controller"
)

func init() {
	/* Controllers */
	core.Register(controller.NewHelloWorldController)
}

```
## First Controller
The first thing you have to do to have a controller component in Procyon is to implement
interface **Controller**.

The interface **Controller** looks like the following below. It is placed in module **procyon-web**.

```go
type Controller interface {
	RegisterHandlers(registry HandlerRegistry)
}
```

A simple controller will looks like the following below. It might change based on your needs.

```go
type HelloWorldController struct {
}

func NewHelloWorldController() HelloWorldController {
	return HelloWorldController{}
}

func (controller HelloWorldController) RegisterHandlers(registry web.HandlerRegistry) {
	...
}

func (controller HelloWorldController) HelloWorld() (*web.ResponseEntity, error) {
	return web.NewResponseEntity(web.WithBody("Hello World")), nil
}
```

## Registry Handlers
Your handler registrations should be done by using **registry** which will 
be passed into the method **RegisterHandlers**, as you can see the following.

```go
func (controller HelloWorldController) RegisterHandlers(registry web.HandlerRegistry) {
	registry.Register(
		web.NewHandler(controller.HelloWorld, web.WithPath("/api/helloworld"))
	)
}
```

You can see complete code below. It is easy that much to create a controller and register
your handlers.

**controller.go**
```go
type HelloWorldController struct {
}

func NewHelloWorldController() NewHelloWorldController {
	return HelloWorldController{}
}

func (controller HelloWorldController) RegisterHandlers(registry web.HandlerRegistry) {
	registry.Register(
		web.NewHandler(controller.HelloWorld, web.WithPath("/api/helloworld"))
	)
}

func (controller HelloWorldController) HelloWorld() (*web.ResponseEntity, error) {
	return web.NewResponseEntity(web.WithBody("Hello World")), nil
}
```

## Run Application
If you run your application without giving any parameter port, it will start on port 8080
as you can see following.

![Image of Yaktocat](/img/run-console.png)

If you want to change the port on which the application start, you can specify parameter **--server.port**.
When you specify the parameter port as 3030 (**--server.port=3030**), your application will start on **port 3030**. 


## Request the endpoint
We assume that you do all steps which needs to be done and have a running application, then it's time to request
the endpoint **/api/helloworld** which we create.

...

If you want to have a good understanding of Procyon framework and work with advanced examples, move on.
However, you might want to look into the result of Benchmarks before moving on. Next part, the Benchmark results will be shown.