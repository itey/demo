### 1.登录注册
 
Api path：

```bash
   http://43.198.63.219:1538/api/login
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| address |true | string |地址|
| signed |true | string |签约内容|
##### Response parameters:

```json
{
    "code":1,
    "message":"ok",
    "data":{
        "id": 12,
        "address":"0xCAC7BFd2B83DaAcbf6A9f6146CB6dF88f9e05f0d",
        "token": "1212121212121212" //访问本站其他接口要在header中带上此参数
     }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |              


### 2.上传ipfs文件
 
Api path：

```bash
   http://43.198.63.219:1538/api/uploadFile
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| file |true | File |文件|
##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "url": "https://ipfs.io/ipfs/bafkreigcbadsldmearemyz2x4v5yvzt7l3f2ccqvsifxtup47flvixhreu"
  }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       


### 3.上传ipfs json数据
 
Api path：

```bash
   http://43.198.63.219:1538/api/uploadJson
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| jsonData |true   | bas464(json) |string|
##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "url": "https://ipfs.io/ipfs/bafkreigcbadsldmearemyz2x4v5yvzt7l3f2ccqvsifxtup47flvixhreu"
  }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       


### 4.加密内容
 
Api path：

```bash
   http://43.198.63.219:1538/api/encryptContent
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| content |true   | bas464(content) |string|
##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "encrypted": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxreeeeeee"
  }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       
