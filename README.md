## test-range-error

test-range-error

|K|V|
|---|---|
|vue|2.6.10|
|ant-design-vue|1.6.3|
|vue-router|3.0.1|

### Steps to reproduce

1. 克隆项目地址 https://github.com/tanpenggood/test-range-error.git ( 最简单的一个复现模型 )
2. npm install
3. npm run serve
4. 浏览器打开http://localhost:3000/
5. 登录 账号：`jeecg` 密码：`123456`
6. 点击`个人页`菜单，出现报错

### What is expected?

希望能协助解决这个问题
    
### What is actually happening?

页面报错 `“RangeError: Maximum call stack size exceeded”`

### RangeError

```javascript
[Vue warn]: Error in render: "RangeError: Maximum call stack size exceeded"
found in
---> <RouterLink>
       <MenuItem>
         <ConnectMenuItem>
           <ProxyConnectMenuItem>
             <Anonymous>
               <Trigger>
                 <Anonymous>
                   <ATooltip>
                     <AMenuItem>
                       <DOMWrap>
                         <SubPopupMenu>
                           <ConnectSubPopupMenu>
                             <ProxyConnectSubPopupMenu>
                               <SubMenu>
                                 <ConnectSubMenu>
                                   <ProxyConnectSubMenu>
                                     <ASubMenu>
                                       <DOMWrap>
                                         <SubPopupMenu>
                                           <ConnectSubPopupMenu>
                                             <ProxyConnectSubPopupMenu>
                                               <StoreProvider>
                                                 <Menu>
                                                   <AMenu>
                                                     <SMenu>
                                                       <ALayoutSider>
                                                         <SideMenu> at src/components/menu/SideMenu.vue
                                                           <Anonymous>
                                                             <ALayout>
                                                               <GlobalLayout> at src/components/page/GlobalLayout.vue
                                                                 <TabLayout> at src/components/layouts/TabLayout.vue
                                                                   <ALocaleProvider>
                                                                     <LocaleReceiver>
                                                                       <AConfigProvider>
                                                                         <App> at src/App.vue
                                                                           <Root>
```

### Menus

```
首页
异常页
    403
    404
    500
个人页
    个人中心
    个人设置
        新消息通知
        账户绑定
        安全设置
        个性化设置
    工作台
```

### notes

导致报错的原因是`个人页 - 个人设置`菜单的`alwaysShow`属性为`true`，

`个人设置菜单路由配置` `src/menus.js`
```json
{
  "path": "/account/settings/Index",
  "component": "account/settings/Index",
  "route": "1",
  "children": [],
  "meta": {"keepAlive": false, "internalOrExternal": false, "title": "个人设置"},
  "name": "account-settings-Index",
  "id": "6e73eb3c26099c191bf03852ee1310a1",
  "alwaysShow": true
}
```

### Solution

[[Vue warn]: Error in render: "RangeError: Maximum call stack size exceeded"](https://www.yuque.com/jeecg-os/index/nscgdt#739c055c)

