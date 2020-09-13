> use zenClass
switched to db zenClass
> db.createCollection("students")
{ "ok" : 1 }
> db.createCollection("courses")
{ "ok" : 1 }
> db.createCollection("Login")
{ "ok" : 1 }
> db.createCollection("Placements")
{ "ok" : 1 }
> db.createCollection("ZenAutomation")
{ "ok" : 1 }
> db.createCollection("CodeKata")
{ "ok" : 1 }
> db.mentors.insertMany([)
...     {"Name":"PERSON1",
...
...     "Email":"PERSON@guvi.com"
...
...     },
...     {
...         "Name": "PERSON2",
...         "Email":"PERSON2@guvi.com"
...     }
...
...
>
> db.createCollection("Mentors")
{ "ok" : 1 }
> db.Mentors.insertMany([
...     {"Name":"PERSON1",
...
...     "Email":"PERSON@guvi.com"
...
...     },
...     {
...         "Name": "PERSON2",
...         "Email":"PERSON2@guvi.com"
...     }
...
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f5e4e181dceec862b980d60"),
                ObjectId("5f5e4e181dceec862b980d61")
        ]
}
> db.students.insertMany([
...     {"UserName":"PERSON1",
...
...     "password":""
...
...     }
...
...
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f5e4ea31dceec862b980d62")
        ]
}
> db.courses.insertMany([
...     {"id":"courses",
...
...     "courses":[
...         {
...             "name":"NodeJS",
...             "role":"BackEnd"
...         },
...         {
...             "name":"JavaScript",
...             "role":"FrontEnd"
...         },
...         {
...             "name":"Html",
...             "role":"FrontEnd"
...         },
...         {
...             "name":"Css",
...             "role":"FrontEnd"
...         },
...         {
...             "name":"Python",
...             "role":"BackEnd"
...         }
...     ]
...
...     }
...
...
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f5e505a1dceec862b980d63")
        ]
}
>
> db.Login.insertMany([
...     {"Loginid":"Guvi",
...         "EmailID":"guvi@guvi.io",
...         "password":""
...
...
...
...     }
...
...
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f5e515e1dceec862b980d64")
        ]
}
> db.Placements.insertMany([
...     {"CompanyName":"ABC",
...       "Package": "6.4lpa"
...
...     },
...     {
...         "CompanyName":"BAC",
...         "Package":"16.4lpa"
...     },
...     {
...         "CompanyName":"zzz",
...         "Package":"5.4lpa"
...     },
...     {
...         "CompanyName":"PPP",
...         "Package":"7.3lpa"
...     }
...
...
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f5e52001dceec862b980d65"),
                ObjectId("5f5e52001dceec862b980d66"),
                ObjectId("5f5e52001dceec862b980d67"),
                ObjectId("5f5e52001dceec862b980d68")
        ]
}
> db.ZenAutomation.insertMany([
...     {
...         "userName":"sample Name",
...         "password":""
...     },
...     {
...         "userName":"sample Name 2",
...         "password":""
...     },
...     {
...         "userName":"sample Name 3",
...         "password":""
...     }
...
...
... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f5e52a41dceec862b980d69"),
                ObjectId("5f5e52a41dceec862b980d6a"),
                ObjectId("5f5e52a41dceec862b980d6b")
        ]
}
> db.students.find.pretty()
uncaught exception: TypeError: db.students.find.pretty is not a function :
@(shell):1:1
> db.students.find().pretty()
{
        "_id" : ObjectId("5f5e4ea31dceec862b980d62"),
        "UserName" : "PERSON1",
        "password" : ""
}
> db.courses.find().pretty()
{
        "_id" : ObjectId("5f5e505a1dceec862b980d63"),
        "id" : "courses",
        "courses" : [
                {
                        "name" : "NodeJS",
                        "role" : "BackEnd"
                },
                {
                        "name" : "JavaScript",
                        "role" : "FrontEnd"
                },
                {
                        "name" : "Html",
                        "role" : "FrontEnd"
                },
                {
                        "name" : "Css",
                        "role" : "FrontEnd"
                },
                {
                        "name" : "Python",
                        "role" : "BackEnd"
                }
        ]
}
> db.Login.find().pretty()
{
        "_id" : ObjectId("5f5e515e1dceec862b980d64"),
        "Loginid" : "Guvi",
        "EmailID" : "guvi@guvi.io",
        "password" : ""
}
> db.Placements.find().pretty()
{
        "_id" : ObjectId("5f5e52001dceec862b980d65"),
        "CompanyName" : "ABC",
        "Package" : "6.4lpa"
}
{
        "_id" : ObjectId("5f5e52001dceec862b980d66"),
        "CompanyName" : "BAC",
        "Package" : "16.4lpa"
}
{
        "_id" : ObjectId("5f5e52001dceec862b980d67"),
        "CompanyName" : "zzz",
        "Package" : "5.4lpa"
}
{
        "_id" : ObjectId("5f5e52001dceec862b980d68"),
        "CompanyName" : "PPP",
        "Package" : "7.3lpa"
}
> db.ZenAutomation.find().pretty()
{
        "_id" : ObjectId("5f5e52a41dceec862b980d69"),
        "userName" : "sample Name",
        "password" : ""
}
{
        "_id" : ObjectId("5f5e52a41dceec862b980d6a"),
        "userName" : "sample Name 2",
        "password" : ""
}
{
        "_id" : ObjectId("5f5e52a41dceec862b980d6b"),
        "userName" : "sample Name 3",
        "password" : ""
}
>


