---
id: introduction
title: Getting Started
sidebar_label: Introduction
---

We prepare and update this guide to help you use Procyon Framework. And we hope you find out
all answers to your questions. It's time to build your application by using Procyon.

## What is Procyon? 

Procyon is a HTTP web framework written in Go. If you need a comphrensive web framework, then use Procyon.
Because it provides a lot of modules which include several features.

* It makes it easy to create production-grade applications. 
* It aims to ease to build, develop and deploy your web applications quickly in Go.

## Modules
There are a number of modules in Procyon Framework :

* **procyon :**  It is main module that provides all features of Procyon.

* **procyon-core :** This provides core features and utilities for all modules.

* **procyon-configure :** This includes and provides configurations that configure application automatically.

* **procyon-context :** This provides context for Procyon applications.

* **procyon-web :** It provides web support for developing web application.

* **procyon-tx :** This provides features and components that ease to manage all transactions in Procyon application.

* **procyon-orm :** This provides ORM support for database connection. It only supports GORM library for now.

* **procyon-peas :** This allow us to manage our instances which are created in Procyon application. Peas are very similar to Java Beans.
They can be called as Go Beans :)


## How to use Procyon?

It is so easy to use Procyon Framework. The only thing you have to do is to add the **Procyon** module into your **go.mod** and 
import it into your code file.
```go
import (
	"github.com/procyon-projects/procyon"
)
```
Next, You need to invoke the method **procyon.NewProcyonApplication** to create a procyon application in main function.
```go
myApp := procyon.NewProcyonApplication()
```
After that, invoke the method **Run** to run the application. It is easy that much to have a simple Procyon application.
```go
myApp.Run()
``` 
Eventually, your code snippet will look like the following.  It is easy that much to have a simple Procyon application.
```go
import (
	"github.com/procyon-projects/procyon"
)

func main() {
	myApp := procyon.NewProcyonApplication()
	myApp.Run()
}
```

After running, you will see the following console.

![Image of Yaktocat](/img/run-console.png)


## How to contribute to Procyon?
* Contribute to our projects and become a member of our team
* Report bugs you find

## License
Procyon Framework is released under version 2.0 of the Apache License.