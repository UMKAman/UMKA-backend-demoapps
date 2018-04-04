define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Аутенфикация пользователя",
    "name": "userAuth",
    "group": "Auth",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>телефон</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>код-отправленный по СМС</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>информация о девайсе, к которому будет привязан токен</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    phone : \"+79998887766\",\n    code : \"0234\",\n    device: \"Android device\"\n    fireToken: fireToken девайса\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>jwt token for use</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"jwt\" : \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDkzNjI4Mzg1fQ.L9Dci-cIBuybcX6OYIJbNBjgMla9Cw8yJ-V86CaX0CY\",\n    \"user\": { model.user }\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth",
    "title": "Запрос СМС для проверки номера телефона для регистрации/нового устройства пользователя",
    "name": "userAuthRequest",
    "group": "Auth",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>телефон</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    phone : \"+79998887766\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"code\": \"3244\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/chat",
    "title": "create chat",
    "name": "createChat",
    "group": "Chat",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>user-id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "master",
            "description": "<p>master-id</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/ChatController.js",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/chat/:id",
    "title": "get chat by id",
    "name": "getChat",
    "group": "Chat",
    "version": "0.1.0",
    "filename": "api/controllers/ChatController.js",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/chat?master=masterId",
    "title": "get chat with master (masterId!! not userId!!)",
    "name": "getChatWithMaster",
    "group": "Chat",
    "version": "0.1.0",
    "filename": "api/controllers/ChatController.js",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/chat",
    "title": "get all users/master chats",
    "name": "getChats",
    "group": "Chat",
    "version": "0.1.0",
    "filename": "api/controllers/ChatController.js",
    "groupTitle": "Chat"
  },
  {
    "type": "put",
    "url": "/currency/:id",
    "title": "изменить валюту",
    "name": "changeCurrency",
    "group": "Currency",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>наименование валюты</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    name : \"рубль\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"id\":1,\n        \"name\": \"рубль\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/CurrencyController.js",
    "groupTitle": "Currency"
  },
  {
    "type": "post",
    "url": "/currency",
    "title": "создать валюту",
    "name": "createCurrence",
    "group": "Currency",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>наименование валюты</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    name : \"юань\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"id\":3,\n        \"name\": \"юань\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/CurrencyController.js",
    "groupTitle": "Currency"
  },
  {
    "type": "delete",
    "url": "/currency/:id",
    "title": "удалить валюту",
    "name": "deleteCurrency",
    "group": "Currency",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"id\":1,\n        \"name\": \"рубль\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/CurrencyController.js",
    "groupTitle": "Currency"
  },
  {
    "type": "get",
    "url": "/currency",
    "title": "получить все валюты",
    "name": "getCurrencies",
    "group": "Currency",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\":1,\n        \"name\": \"рубли\"\n    },\n    {\n        \"id\":2,\n        \"name\": \"доллар\"\n    },\n    ...\n]",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/CurrencyController.js",
    "groupTitle": "Currency"
  },
  {
    "type": "get",
    "url": "/currency/:id",
    "title": "Получить отдельную валюту",
    "name": "getCurrency",
    "group": "Currency",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    {\n        \"id\":1,\n        \"name\": \"рубли\"\n    }\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/CurrencyController.js",
    "groupTitle": "Currency"
  },
  {
    "type": "POST",
    "url": "/firetoken",
    "title": "set user's firetoken",
    "name": "setFireToken",
    "group": "FireToken",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>fire-token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>user-id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>device desctiption</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    token : \"asdasdasdas\",\n    user: 1,\n    device: 'Android device',\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/FireTokenController.js",
    "groupTitle": "FireToken"
  },
  {
    "type": "post",
    "url": "/master",
    "title": "create master",
    "name": "createMaster",
    "group": "Master",
    "version": "0.0.0",
    "filename": "api/controllers/MasterController.js",
    "groupTitle": "Master"
  },
  {
    "type": "delete",
    "url": "/master/:id",
    "title": "delete master",
    "name": "deleteMaster",
    "group": "Master",
    "version": "0.0.0",
    "filename": "api/controllers/MasterController.js",
    "groupTitle": "Master"
  },
  {
    "type": "get",
    "url": "/master/:id",
    "title": "get mater by id",
    "name": "getMaster",
    "group": "Master",
    "version": "0.0.0",
    "filename": "api/controllers/MasterController.js",
    "groupTitle": "Master"
  },
  {
    "type": "get",
    "url": "/master",
    "title": "get all masters",
    "name": "getMasters",
    "group": "Master",
    "version": "0.0.0",
    "description": "<p>user /master?where={&quot;field&quot;:value} for filter</p>",
    "filename": "api/controllers/MasterController.js",
    "groupTitle": "Master"
  },
  {
    "type": "post",
    "url": "/master/:id/specializations/:spid",
    "title": "добавить мастеру специализации",
    "name": "setMasterSpec",
    "group": "Master",
    "version": "0.0.0",
    "filename": "api/controllers/MasterController.js",
    "groupTitle": "Master"
  },
  {
    "type": "put",
    "url": "/master/:id",
    "title": "update master",
    "name": "updateMaster",
    "group": "Master",
    "version": "0.0.0",
    "filename": "api/controllers/MasterController.js",
    "groupTitle": "Master"
  },
  {
    "type": "post",
    "url": "/message",
    "title": "Создать сообщение",
    "name": "createMEssage",
    "group": "Message_DEPRECATED_",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>paramValue</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    pic : multipart/form-data,\n    sender : 16,\n    receiver: 132,\n    message: \"hi there\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>json-string of created message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1225,\n    \"sender\" : { user.model },\n    \"receiver\": { user.model },\n    \"message\": \"hi there\",\n    \"pic\" : \"link/to/pic\",\n    \"readed\": false\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MessageController.js",
    "groupTitle": "Message_DEPRECATED_"
  },
  {
    "type": "delete",
    "url": "/message/:id",
    "title": "Удалить сообщение",
    "name": "deletMessage",
    "group": "Message_DEPRECATED_",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>message-id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    id : 1554\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>json-string deleted message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1225,\n    \"sender\" : { user.model },\n    \"receiver\": { user.model },\n    \"message\": \"hi there\",\n    \"pic\" : \"link/to/pic\",\n    \"readed\": false\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MessageController.js",
    "groupTitle": "Message_DEPRECATED_"
  },
  {
    "type": "get",
    "url": "/message/:id",
    "title": "Получить сообщени по id",
    "name": "getMessage",
    "group": "Message_DEPRECATED_",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id-сообщения</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    id : 25\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>json-string of message model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 25,\n    \"sender\" : { user.model },\n    \"receiver\": { user.model },\n    \"message\": \"hi there\",\n    \"pic\" : \"link/to/pic\",\n    \"readed\": false\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MessageController.js",
    "groupTitle": "Message_DEPRECATED_"
  },
  {
    "type": "get",
    "url": "/message?where={\"receiver\":UserID}",
    "title": "Получить вообще все мессаджи получаемые",
    "name": "getMessages",
    "group": "Message_DEPRECATED_",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"messages\" : [\n        {\n            message1\n        },\n        {\n            message2\n        },\n        ...\n        ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MessageController.js",
    "groupTitle": "Message_DEPRECATED_"
  },
  {
    "type": "put",
    "url": "/message/:id",
    "title": "Внести изменение в сообщение (например readed true сделать)",
    "name": "setMessage",
    "group": "Message_DEPRECATED_",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>message-id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>paramValue</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    id : 25,\n    readed: true\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>json-string of message model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 25,\n    \"sender\" : { user.model },\n    \"receiver\": { user.model },\n    \"message\": \"hi there\",\n    \"pic\" : \"link/to/pic\",\n    \"readed\": true\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MessageController.js",
    "groupTitle": "Message_DEPRECATED_"
  },
  {
    "type": "post",
    "url": "/chatmessage",
    "title": "create chat message",
    "name": "createMessage",
    "group": "Message",
    "version": "0.1.0",
    "header": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\"Content-type\" : \"multipart/form-data\"",
          "type": "type"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>message text</p>"
          },
          {
            "group": "Parameter",
            "type": "blob",
            "optional": false,
            "field": "pic",
            "description": "<p>pic of message</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "chat",
            "description": "<p>chat message for</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/ChatMessageController.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/chatmessage/:id",
    "title": "get chat message by id",
    "name": "getMessage",
    "group": "Message",
    "version": "0.1.0",
    "filename": "api/controllers/ChatMessageController.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/chatmessage",
    "title": "get ALL chat message",
    "name": "getMessages",
    "group": "Message",
    "version": "0.1.0",
    "filename": "api/controllers/ChatMessageController.js",
    "groupTitle": "Message"
  },
  {
    "type": "post",
    "url": "/order",
    "title": "Создать заказ",
    "name": "createOrder",
    "group": "Order",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>paramValue</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    user : 114, //id ПОЛЬЗОВАТЕЛЯ!!!\n    master: 115, //id МАСТЕРА!!!\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>json-string creared order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 14445\n    \"user\" : {model.user},\n    \"master\": {model.master},\n    \"masterApprove\" : false\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/OrderController.js",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/order/:id",
    "title": "Delete order with id",
    "name": "deleteOrder",
    "group": "Order",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string with deleted order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\" : 14433\n    \"user\" : {model.user},\n    \"master\": {model.master},\n    \"masterApprove\" : true\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/OrderController.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order?where={\"master\":115}",
    "title": "Получить все ордеры мастера с id 115",
    "name": "getMasterOrders",
    "group": "Order",
    "version": "0.0.0",
    "filename": "api/controllers/OrderController.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order/:id",
    "title": "Получить ордер по ИД",
    "name": "getOrder",
    "group": "Order",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\" : 14433\n    \"user\" : {model.user},\n    \"master\": {model.master},\n    \"masterApprove\" : true\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/OrderController.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order",
    "title": "Получить вообще все ордеры",
    "name": "getOrders",
    "group": "Order",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "orders",
            "description": "<p>json-string array of orders</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    [\n        {\n            Order1,\n        },\n        {\n             Order2,\n        },\n        ...\n    ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/OrderController.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order?where={\"user\":114}",
    "title": "Получить все ордеры пользователя с id 114",
    "name": "getUserOrders",
    "group": "Order",
    "version": "0.0.0",
    "filename": "api/controllers/OrderController.js",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/order/:id",
    "title": "Изменить order",
    "name": "updateOrder",
    "group": "Order",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>paramValue</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    masterApprove : true,\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string updated order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\" : 14433\n    \"user\" : {model.user},\n    \"master\": {model.master},\n    \"masterApprove\" : true\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/OrderController.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/portfoliopic",
    "title": "create picture for portfolio",
    "name": "createPortfolioPic",
    "group": "PPic",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "blob",
            "optional": false,
            "field": "pic",
            "description": "<p>multipart/form-data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portfolio",
            "description": "<p>portfolio-id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    pic : multipart/form-data,\n    portfolio: 112\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\":33,\n    \"portfolio\": {model.portfolio},\n    \"pic\": \"/link/to/pic\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/PortfolioPicController.js",
    "groupTitle": "PPic"
  },
  {
    "type": "delete",
    "url": "/portfoliopic/:id",
    "title": "delete portfolioPic by id",
    "name": "deletePPic",
    "group": "PPic",
    "version": "0.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\":34,\n     \"portfolio\": {model.portfolio},\n     \"pic\": \"/link/to/pic\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/PortfolioPicController.js",
    "groupTitle": "PPic"
  },
  {
    "type": "get",
    "url": "/portfolioPic/:id",
    "title": "get portfoliopic by id",
    "name": "getPorfolioPic",
    "group": "PPic",
    "version": "0.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":34,\n     \"portfolio\": {model.portfolio},\n     \"pic\": \"/link/to/pic\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/PortfolioPicController.js",
    "groupTitle": "PPic"
  },
  {
    "type": "get",
    "url": "/portfolioPic",
    "title": "get all portfolioPics",
    "name": "getPorfolioPics",
    "group": "PPic",
    "version": "0.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    [\n     {\n         \"id\":33,\n         \"portfolio\": {model.portfolio},\n         \"pic\": \"/link/to/pic\"\n     },\n     {\n         \"id\":34,\n         \"portfolio\": {model.portfolio},\n         \"pic\": \"/link/to/pic\"\n     },\n     ...\n    ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/PortfolioPicController.js",
    "groupTitle": "PPic"
  },
  {
    "type": "get",
    "url": "/portfolioPic?where={\"portfolio\":114}",
    "title": "get portfoliopics for portfolio with id 114",
    "name": "getPortfolioPic",
    "group": "PPic",
    "version": "0.0.0",
    "filename": "api/controllers/PortfolioPicController.js",
    "groupTitle": "PPic"
  },
  {
    "type": "put",
    "url": "/portfoliopic/:id",
    "title": "update portfoliopic by id",
    "name": "updatePPic",
    "group": "PPic",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "blob",
            "optional": false,
            "field": "pic",
            "description": "<p>multipart/form-data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    pic : multipart/form-data\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\":34,\n     \"portfolio\": {model.portfolio},\n     \"pic\": \"/link/to/pic\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/PortfolioPicController.js",
    "groupTitle": "PPic"
  },
  {
    "type": "post",
    "url": "/portfolio/:Pid/pics/:PPid",
    "title": "создать ассоциацию картинки и портфолио",
    "name": "PPicToP",
    "group": "Portfolio",
    "description": "<p>Чтобы добавить картинку в портфолио, надо сначала создать картинку, потом сделать вот этот запрос, чтобы она ассоциировалась с этип портфолио.</p>",
    "version": "0.0.0",
    "filename": "api/controllers/PortfolioController.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "post",
    "url": "/portfolio",
    "title": "Create portfolio",
    "name": "createPortfolio",
    "group": "Portfolio",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>paramValue</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    master : 144,\n    description: \"Крутое портфолио\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string with created portfolio</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\" : 44323,\n    \"master\": { model.master },\n    \"description\": \"Крутое портфолио\",\n    \"pics\": [\n        {\n            \"id\": 445,\n            \"portfolio\" : 44323,\n            \"pic\": \"/link/to/pic\"\n        },\n        {\n            \"id\": 446,\n            \"portfolio\" : 44323,\n            \"pic\": \"/link/to/pic\"\n        },\n        ...\n    ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/PortfolioController.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "delete",
    "url": "/portfolio/:id",
    "title": "delete portfolio",
    "name": "deletePortfolio",
    "group": "Portfolio",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string with deleted portfolio</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \n     \"id\": 1,\n     \"master\": {model.master},\n     \"description\": \"new desc\",\n     \"pics\":[\n             {\n                 \"id\": 445,\n                 \"portfolio\" : 1,\n                 \"pic\": \"/link/to/pic\"\n             },\n             {\n                 \"id\": 446,\n                 \"portfolio\" : 1,\n                 \"pic\": \"/link/to/pic\"\n             },\n             ...\n     ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/PortfolioController.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "get",
    "url": "/portfolio?where={\"master\":113}",
    "title": "Получить все портфолио of master with id 114",
    "name": "getMasterPortfolio",
    "group": "Portfolio",
    "version": "0.0.0",
    "filename": "api/controllers/PortfolioController.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "get",
    "url": "/portfolio",
    "title": "Получить все портфолио",
    "name": "getPortfolios",
    "group": "Portfolio",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string array of portfolios</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    [\n        {\n            \"id\": 1,\n            \"master\": {model.master},\n            \"description\": \"Very cool portfolio\",\n            \"pics\":[\n             {\n                 \"id\": 445,\n                 \"portfolio\" : 1,\n                 \"pic\": \"/link/to/pic\"\n             },\n             {\n                 \"id\": 446,\n                 \"portfolio\" : 1,\n                 \"pic\": \"/link/to/pic\"\n             },\n             ...\n            ]\n        }\n    ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/PortfolioController.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "put",
    "url": "/portfolio/:id",
    "title": "update master's portfolio",
    "name": "updatePortfolio",
    "group": "Portfolio",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>&quot;new description&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    description : \"new desc\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string updated portfolio</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    {\n            \"id\": 1,\n            \"master\": {model.master},\n            \"description\": \"new desc\",\n            \"pics\":[\n             {\n                 \"id\": 445,\n                 \"portfolio\" : 1,\n                 \"pic\": \"/link/to/pic\"\n             },\n             {\n                 \"id\": 446,\n                 \"portfolio\" : 1,\n                 \"pic\": \"/link/to/pic\"\n             },\n             ...\n            ]\n        }\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/PortfolioController.js",
    "groupTitle": "Portfolio"
  },
  {
    "type": "post",
    "url": "/review",
    "title": "create review",
    "name": "createRevoew",
    "group": "Review",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "writter",
            "description": "<p>user-id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "master",
            "description": "<p>master-id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>review text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>review rating (1-5)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    writter : 112,\n    master: 12,\n    text: \"very cool master\",\n    rating: \"4.5\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string review model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 2,\n    \"master\": {master.model},\n    \"writter\": {user.model},\n    \"text\": \"very cool master\",\n    rating: \"4.5\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/ReviewController.js",
    "groupTitle": "Review"
  },
  {
    "type": "delete",
    "url": "/review/:id",
    "title": "delete review by id",
    "name": "deleteReview",
    "group": "Review",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string with deleted review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 3,\n     \"master\": {master.model},\n     \"writter\": {user.model},\n     \"text\": \"masta get low :(\",\n     rating: \"3\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/ReviewController.js",
    "groupTitle": "Review"
  },
  {
    "type": "get",
    "url": "/review/:id",
    "title": "get review by id",
    "name": "getReview",
    "group": "Review",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string with review object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\": 3,\n     \"master\": {master.model},\n     \"writter\": {user.model},\n     \"text\": \"very cool master\",\n     rating: \"4.5\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/ReviewController.js",
    "groupTitle": "Review"
  },
  {
    "type": "get",
    "url": "/review",
    "title": "get all revies",
    "name": "getReviews",
    "group": "Review",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string array of reviews</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    [\n        {\n             \"id\": 2,\n             \"master\": {master.model},\n             \"writter\": {user.model},\n             \"text\": \"very cool master\",\n             rating: \"4.5\"\n        },{\n             \"id\": 3,\n             \"master\": {master.model},\n             \"writter\": {user.model},\n             \"text\": \"very cool master\",\n             rating: \"4.5\"\n        },\n        ...\n    ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/ReviewController.js",
    "groupTitle": "Review"
  },
  {
    "type": "get",
    "url": "/review?where={\"writter\"=112}",
    "title": "get reviews written by user with id 112",
    "name": "getUserReviews",
    "group": "Review",
    "version": "0.0.0",
    "filename": "api/controllers/ReviewController.js",
    "groupTitle": "Review"
  },
  {
    "type": "put",
    "url": "/review/:id",
    "title": "update review",
    "name": "updateReview",
    "group": "Review",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>rating</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>review text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    rating : \"3\",\n    text : \"masta get low :(\",\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string with updated review</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 3,\n     \"master\": {master.model},\n     \"writter\": {user.model},\n     \"text\": \"masta get low :(\",\n     rating: \"3\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/ReviewController.js",
    "groupTitle": "Review"
  },
  {
    "type": "get",
    "url": "/search",
    "title": "Поиск мастеров",
    "name": "getMastersByFilter",
    "group": "Search",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/search?specialization=2&gender=Муж&visitathome=true&visit=false&minCost=3000&maxCost=5000&orderBy=cost",
        "type": "type"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specialization",
            "description": "<p>ид специализации (number)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Муж\"",
              "\"Жен\""
            ],
            "optional": false,
            "field": "gender",
            "description": "<p>пол</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "visitathome",
            "description": "<p>может приехать</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "visit",
            "description": "<p>принимает у себя</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "reviewsonly",
            "description": "<p>только с отзывами</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minCost",
            "description": "<p>минимальная стоимость</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maxCost",
            "description": "<p>максимальная стоимость</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"cost\"",
              "\"rating\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>порядок сортировки, сортирует по ASC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request",
            "description": "<p>строка поиска (ищет по имени пользователя)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lon",
            "description": "<p>широта (точки поиска)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>долгота (точки поиска)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dist",
            "description": "<p>радиус поиска (в КИЛОМЕТРАХ)</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/SearchController.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/service/minmaxCost",
    "title": "Получить минимальную и максимальную цены на работы мастеров",
    "name": "getMinMaxCost",
    "group": "Service",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"min\": \"200\",\n    \"max\": \"5000\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/ServiceController.js",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/specialization",
    "title": "create specialization",
    "name": "createSpec",
    "group": "Specialization",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pic",
            "description": "<p>multipart/form-data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>specialization name</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "parent",
            "description": "<p>specialization-parent-id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    pic : multipart/form-data,\n    name : \"IT\",\n    parent : null,\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string specialization model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"name\": \"IT\",\n    \"pic\": \"/link/to/pic\",\n    \"parent\": \"null\",\n    \"child\": [\n        { specialization1 },\n        { specialization2 },\n        ...\n    ],\n    inMaster: [\n        { master1 },\n        { master2 },\n        ...\n    ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/SpecializationController.js",
    "groupTitle": "Specialization"
  },
  {
    "type": "delete",
    "url": "/specialization/:id",
    "title": "delete specialization by id",
    "name": "deleteSpecialization",
    "group": "Specialization",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string deleted model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\": 2,\n     \"name\": \"new name\",\n     \"pic\": \"/link/to/new_pic\",\n     \"parent\": \"null\",\n     \"child\": [\n         { specialization1 },\n         { specialization2 },\n         ...\n     ],\n     inMaster: [\n         { master1 },\n         { master2 },\n         ...\n     ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/SpecializationController.js",
    "groupTitle": "Specialization"
  },
  {
    "type": "get",
    "url": "/specialization/:id",
    "title": "get specialization by id",
    "name": "getSpecialization",
    "group": "Specialization",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string of specialization model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"id\": 2,\n     \"name\": \"Автоперевозки\",\n     \"pic\": \"/link/to/pic\",\n     \"parent\": \"null\",\n     \"child\": [\n         { specialization1 },\n         { specialization2 },\n         ...\n     ],\n     inMaster: [\n         { master1 },\n         { master2 },\n         ...\n     ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/SpecializationController.js",
    "groupTitle": "Specialization"
  },
  {
    "type": "get",
    "url": "/specialization",
    "title": "get all specializations",
    "name": "getSpecializations",
    "group": "Specialization",
    "version": "0.0.0",
    "description": "<p>to get hi speed use /specialization?populate=child</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string array of getSpecializations</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    [\n        {\n             \"id\": 1,\n             \"name\": \"IT\",\n             \"pic\": \"/link/to/pic\",\n             \"parent\": \"null\",\n             \"child\": [\n                 { specialization1 },\n                 { specialization2 },\n                 ...\n             ],\n             inMaster: [\n                 { master1 },\n                 { master2 },\n                 ...\n             ]\n         },\n         {\n             \"id\": 2,\n             \"name\": \"Автоперевозки\",\n             \"pic\": \"/link/to/pic\",\n             \"parent\": \"null\",\n             \"child\": [\n                 { specialization1 },\n                 { specialization2 },\n                 ...\n             ],\n             inMaster: [\n                 { master1 },\n                 { master2 },\n                 ...\n             ]\n         }\n    ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/SpecializationController.js",
    "groupTitle": "Specialization"
  },
  {
    "type": "put",
    "url": "/specialization/:id",
    "title": "update specialization by id",
    "name": "updateSpecialization",
    "group": "Specialization",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "blob",
            "optional": false,
            "field": "pic",
            "description": "<p>multipart/form-data pic of specialization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of specialization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    pic : multipart/form-data,\n    name: \"new name\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string specialization model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 2,\n     \"name\": \"new name\",\n     \"pic\": \"/link/to/new_pic\",\n     \"parent\": \"null\",\n     \"child\": [\n         { specialization1 },\n         { specialization2 },\n         ...\n     ],\n     inMaster: [\n         { master1 },\n         { master2 },\n         ...\n     ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/SpecializationController.js",
    "groupTitle": "Specialization"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "create user",
    "name": "createUser",
    "group": "User",
    "version": "0.0.0",
    "description": "<p>DO NOT USE THIS API!!!!</p>",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "delete user",
    "name": "deleteUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "get user by id",
    "name": "getUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "get all users",
    "name": "getUsers",
    "group": "User",
    "version": "0.0.0",
    "description": "<p>if need use /user?where={&quot;field&quot;:value} for filter</p>",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "update user by id",
    "name": "updateUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/workday/:WDid/workhours/:WHid",
    "title": "set accociation wokrhour to workday",
    "name": "accociateWHToWD",
    "group": "Workday",
    "version": "0.0.0",
    "filename": "api/controllers/WorkdayController.js",
    "groupTitle": "Workday"
  },
  {
    "type": "post",
    "url": "/workday",
    "title": "create workday",
    "name": "createWorkday",
    "group": "Workday",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "master",
            "description": "<p>master-id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>date for the workday</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    master: 223,\n    date: '2017-01-31' //'YYYY-MM-DD' date format\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string created model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 14,\n    \"master\": {model.master},\n    \"date\": \"2017-01-31\",\n    \"workhours\":[\n        {workhour1},\n        {workhour2},\n        ...\n     ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkdayController.js",
    "groupTitle": "Workday"
  },
  {
    "type": "delete",
    "url": "/workday/:id",
    "title": "delete workdays",
    "name": "deleteWorkday",
    "group": "Workday",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string of deleted workday model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"id\": 15,\n    \"master\": {model.master},\n    \"date\": \"2017-02-28\",\n    \"workhours\":[\n        {workhour1},\n        {workhour2},\n        ...\n     ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkdayController.js",
    "groupTitle": "Workday"
  },
  {
    "type": "get",
    "url": "/workday/:id",
    "title": "get workday by id",
    "name": "getWorkday",
    "group": "Workday",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string workday model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 15,\n    \"master\": {model.master},\n    \"date\": \"2017-01-31\",\n    \"workhours\":[\n        {workhour1},\n        {workhour2},\n        ...\n     ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkdayController.js",
    "groupTitle": "Workday"
  },
  {
    "type": "get",
    "url": "/workday",
    "title": "get all workdays",
    "name": "getWorkdays",
    "group": "Workday",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string Array of workdays</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n [\n  {\n    \"id\": 14,\n    \"master\": {model.master},\n    \"date\": \"2017-01-31\",\n    \"workhours\":[\n        {workhour1},\n        {workhour2},\n        ...\n     ]\n  },\n  {\n    \"id\": 15,\n    \"master\": {model.master},\n    \"date\": \"2017-01-31\",\n    \"workhours\":[\n        {workhour1},\n        {workhour2},\n        ...\n     ]\n  },\n  ...\n ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkdayController.js",
    "groupTitle": "Workday"
  },
  {
    "type": "put",
    "url": "/workday/:id",
    "title": "update workday",
    "name": "updateWorkday",
    "group": "Workday",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "date",
            "description": "<p>date of workday</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    date : \"2017-02-28\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string of updated workday model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 15,\n    \"master\": {model.master},\n    \"date\": \"2017-02-28\",\n    \"workhours\":[\n        {workhour1},\n        {workhour2},\n        ...\n     ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkdayController.js",
    "groupTitle": "Workday"
  },
  {
    "type": "post",
    "url": "/workhour",
    "title": "create the workhour",
    "name": "createWorkhour",
    "group": "Workhour",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "workday",
            "description": "<p>workday-id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hour",
            "description": "<p>datetime ('YYYY-MM-DD HH:mm:ss')</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "busy",
            "description": "<p>true/false (defaults to false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    workday: 12,\n    hour: \"2017-01-31 15:00:00\",\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string Workhour created model</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 34,\n    \"workday\": 12,\n    \"hour\": \"2017-01-31 15:00:00\",\n    \"busy\": false  \n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkhourController.js",
    "groupTitle": "Workhour"
  },
  {
    "type": "delete",
    "url": "/workhour/:id",
    "title": "delete workhour",
    "name": "deleteWorkhour",
    "group": "Workhour",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    property : value\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    property : value\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkhourController.js",
    "groupTitle": "Workhour"
  },
  {
    "type": "get",
    "url": "/workhour/:id",
    "title": "get workhour by id",
    "name": "getWorkhour",
    "group": "Workhour",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    property : value\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    property : value\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkhourController.js",
    "groupTitle": "Workhour"
  },
  {
    "type": "get",
    "url": "/Workhour",
    "title": "get all workhours",
    "name": "getWorkhours",
    "group": "Workhour",
    "version": "0.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "noname",
            "description": "<p>json-string array of workhours models</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    [\n        {\n         \"id\": 34,\n         \"workday\": 12,\n         \"hour\": \"2017-01-31 15:00:00\",\n         \"busy\": false  \n        },\n        {\n         \"id\": 35,\n         \"workday\": 12,\n         \"hour\": \"2017-01-31 16:00:00\",\n         \"busy\": false  \n        },\n    ]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkhourController.js",
    "groupTitle": "Workhour"
  },
  {
    "type": "put",
    "url": "/workhour/:id",
    "title": "update workhour record",
    "name": "updateWorkhour",
    "group": "Workhour",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    property : value\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    property : value\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/WorkhourController.js",
    "groupTitle": "Workhour"
  },
  {
    "type": "put",
    "url": "/masterservice/:id",
    "title": "Изменить услугу",
    "name": "changeService",
    "group": "masterService",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Наименование услуги</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cost",
            "description": "<p>Стоимость услуги</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Валюта услуги</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    name : \"Стрижка волос\",\n    cost : \"300\",\n    currency: 2 //use currency ID\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n         \"id\" : 1,\n         \"master\": {\n             master model\n         },\n         \"name\": \"Стрижка волос\",\n         \"cost\": \"300\",\n         \"currency\":\"доллар\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MasterServiceController.js",
    "groupTitle": "masterService"
  },
  {
    "type": "post",
    "url": "/masterservice",
    "title": "Создание сервиса мастером",
    "name": "createService",
    "group": "masterService",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Наименование услуги</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cost",
            "description": "<p>Стоимость услуги</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Валюта услуги</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    name : \"Репетиторство по русскому\",\n    cost : \"800\",\n    currency: \"рубли\" //use currency ID\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n         \"id\" : 2,\n         \"master\": {\n             master model\n         },\n         \"name\": \"Репетиторство по русскому\",\n         \"cost\": \"800\",\n         \"currency\":\"рубли\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MasterServiceController.js",
    "groupTitle": "masterService"
  },
  {
    "type": "delete",
    "url": "/masterservice/:id",
    "title": "Удаление услуги",
    "name": "deleteService",
    "group": "masterService",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n         \"id\" : 2,\n         \"master\": {\n             master model\n         },\n         \"name\": \"Репетиторство по русскому\",\n         \"cost\": \"800\",\n         \"currency\":\"рубли\"\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MasterServiceController.js",
    "groupTitle": "masterService"
  },
  {
    "type": "get",
    "url": "/masterservice/:id",
    "title": "Получить конкретную услугу мастера",
    "name": "getService",
    "group": "masterService",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n         \"id\" : 1,\n         \"master\": {\n             master model\n         },\n         \"name\": \"Перетяжка мебели\",\n         \"cost\": \"500\",\n         \"currency\":\"рубли\",\n}",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MasterServiceController.js",
    "groupTitle": "masterService"
  },
  {
    "type": "get",
    "url": "/masterservice",
    "title": "получить ВСЕ услуги всех мастеров",
    "name": "getServices",
    "group": "masterService",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"id\" : 1,\n         \"master\": {\n             master model\n         },\n         \"name\": \"Перетяжка мебели\",\n         \"cost\": \"500\",\n         \"currency\": \"рубли\",\n     },\n     {\n         ...\n     }\n]",
          "type": "type"
        }
      ]
    },
    "filename": "api/controllers/MasterServiceController.js",
    "groupTitle": "masterService"
  }
] });
