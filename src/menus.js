export default [
  {
    "redirect": null,
    "path": "/dashboard/analysis",
    "component": "dashboard/Analysis",
    "route": "1",
    "meta": {"keepAlive": true, "internalOrExternal": false, "icon": "home", "title": "首页"},
    "name": "dashboard-analysis",
    "id": "9502685863ab87f0ad1134142788a385"
  },
  {
    "redirect": null,
    "path": "/exception",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [{
      "path": "/exception/403",
      "component": "exception/403",
      "route": "1",
      "meta": {"keepAlive": false, "internalOrExternal": false, "title": "403"},
      "name": "exception-403",
      "id": "65a8f489f25a345836b7f44b1181197a"
    }, {
      "path": "/exception/404",
      "component": "exception/404",
      "route": "1",
      "meta": {"keepAlive": false, "internalOrExternal": false, "title": "404"},
      "name": "exception-404",
      "id": "d2bbf9ebca5a8fa2e227af97d2da7548"
    }, {
      "path": "/exception/500",
      "component": "exception/500",
      "route": "1",
      "meta": {"keepAlive": false, "internalOrExternal": false, "title": "500"},
      "name": "exception-500",
      "id": "b4dfc7d5dd9e8d5b6dd6d4579b1aa559"
    }],
    "meta": {"keepAlive": false, "internalOrExternal": false, "icon": "warning", "title": "异常页"},
    "name": "exception",
    "id": "c65321e57b7949b7a975313220de0422"
  },
  {
    "redirect": null,
    "path": "/account",
    "component": "layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/account/center",
        "component": "account/center/Index",
        "route": "1",
        "meta": {"keepAlive": false, "internalOrExternal": false, "title": "个人中心"},
        "name": "account-center",
        "id": "d86f58e7ab516d3bc6bfb1fe10585f97"
      },
      {
        "path": "/account/settings/Index",
        "component": "account/settings/Index",
        // "hidden": true,
        "route": "1",
        "children": [
          {
            "path": "/account/settings/notification",
            "component": "account/settings/Notification",
            "route": "1",
            "meta": {"keepAlive": false, "internalOrExternal": false, "title": "新消息通知"},
            "name": "account-settings-notification",
            "id": "fedfbf4420536cacc0218557d263dfea"
          },
          {
            "path": "/account/settings/binding",
            "component": "account/settings/Binding",
            "route": "1",
            "meta": {"keepAlive": false, "internalOrExternal": false, "title": "账户绑定"},
            "name": "account-settings-binding",
            "id": "4f66409ef3bbd69c1d80469d6e2a885e"
          }, {
            "path": "/account/settings/BaseSetting",
            "component": "account/settings/BaseSetting",
            "route": "1",
            "hidden": true,
            "meta": {"keepAlive": false, "internalOrExternal": false, "title": "基本设置"},
            "name": "account-settings-base",
            "id": "1367a93f2c410b169faa7abcbad2f77c"
          },
          {
            "path": "/account/settings/security",
            "component": "account/settings/Security",
            "route": "1",
            "meta": {"keepAlive": false, "internalOrExternal": false, "title": "安全设置"},
            "name": "account-settings-security",
            "id": "ec8d607d0156e198b11853760319c646"
          },
          {
            "path": "/account/settings/custom",
            "component": "account/settings/Custom",
            "route": "1",
            "meta": {"keepAlive": false, "internalOrExternal": false, "title": "个性化设置"},
            "name": "account-settings-custom",
            "id": "882a73768cfd7f78f3a37584f7299656"
          }
        ],
        "meta": {"keepAlive": false, "internalOrExternal": false, "title": "个人设置"},
        "name": "account-settings-Index",
        "id": "6e73eb3c26099c191bf03852ee1310a1",
        "alwaysShow": true
      },
      {
        "path": "/dashboard/workplace",
        "component": "dashboard/Workplace",
        "route": "1",
        "meta": {"keepAlive": false, "internalOrExternal": false, "title": "工作台"},
        "name": "dashboard-workplace",
        "id": "8fb8172747a78756c11916216b8b8066"
      }
    ],
    "meta": {"keepAlive": false, "internalOrExternal": false, "icon": "user", "title": "个人页"},
    "name": "account",
    "id": "717f6bee46f44a3897eca9abd6e2ec44"
  },
];
