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
| url |true   | ipfs url |string|
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

### 5.解锁加密内容
 
Api path：

```bash
   http://43.198.63.219:1538/api/unlockContent
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| encrypted |true   | 加密后的url |string|
| tokenId |true   | 要解密的的tokenId |int|
##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "url": "https://111111/ipfs/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxreeeeeee"
  }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       

### 6.每天签到
 
Api path：

```bash
   http://43.198.63.219:1538/api/checkIn
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| signed |true   | 钱包签的内容 Wellcome to DOUJI,A beautiful day has begun! |string|
##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
  }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       

### 7.每隔5分钟检查一下有没有要下发的盲盒
 
Api path：

```bash
   http://43.198.63.219:1538/api/checkHasBox
```

##### HTTP request method

get

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
    "get_box_flag": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  //获取盲盒的时候要用到
  }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |     

### 8.收盲盒
 
Api path：

```bash
   http://43.198.63.219:1538/api/getBox
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| signed |true   | 钱包签的内容 Collect DOUJI Blind Box! |string|
| get_box_flag |true   | 收取标志 接口7提供 |string|
| tokenId |true   | 当前页面的 tokenId |int|
##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
       "open_box_flag": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" //开盲盒标志
  }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       

### 9.开盲盒
 
Api path：

```bash
   http://43.198.63.219:1538/api/openBox
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| signed |true   | 钱包签的内容 Open DOUJI Blind Box! |string|
| open_box_flag |true   | 收取标志 接口8提供 |string|
##### Response parameters:

```json
{
  "code": 1,
  "message": "ok",
  "data": {
      "amount": 1111, 
      "coin": "MBD" //MBD|BJXStar NFT
  }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |      

### 10.上传ipfs 文本数据
 
Api path：

```bash
   http://43.198.63.219:1538/api/uploadContent
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| contentData |true   | bas464(content) |string|
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


### 11.NFT内容分类
 
Api path：

```bash
   http://43.198.63.219:1538/api/getNftTypes
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
##### Response parameters:

```json
{
    "code": 1,
    "message": "ok",
    "data": {
        "list": [
            {
                "id": 1,
                "e_name": "Article",
                "c_name": "文章",
                "status": 1
            },
            {
                "id": 2,
                "e_name": "Prompt",
                "c_name": "Prompt指令",
                "status": 1
            },
            {
                "id": 3,
                "e_name": "Digital Arts",
                "c_name": "數字藝術品",
                "status": 1
            },
            {
                "id": 4,
                "e_name": "Graphic Novels",
                "c_name": "圖像小說",
                "status": 1
            },
            {
                "id": 5,
                "e_name": "Electric Book",
                "c_name": "電子書",
                "status": 1
            },
            {
                "id": 6,
                "e_name": "Photography",
                "c_name": "攝影",
                "status": 1
            },
            {
                "id": 7,
                "e_name": "Audio",
                "c_name": "音頻",
                "status": 1
            },
            {
                "id": 8,
                "e_name": "Video",
                "c_name": "影視",
                "status": 1
            },
            {
                "id": 9,
                "e_name": "Social Media Posts",
                "c_name": "社交媒體帖子",
                "status": 1
            }
        ]
    }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       


### 12.NFT内容分类
 
Api path：

```bash
   http://43.198.63.219:1538/api/getNftCategoriesByType
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| type |true   | 1 |int|
##### Response parameters:

```json
{
    "code": 1,
    "message": "ok",
    "data": {
        "list": [
            {
                "id": 4,
                "e_name": "AI",
                "c_name": "人工智能"
            },
            {
                "id": 5,
                "e_name": "AIGC",
                "c_name": "生成式人工智能"
            },
            {
                "id": 11,
                "e_name": "Bitcoin",
                "c_name": "比特幣"
            },
            {
                "id": 12,
                "e_name": "BlockChain",
                "c_name": "區塊鏈"
            },
            {
                "id": 14,
                "e_name": "Business",
                "c_name": "商業"
            },
            {
                "id": 18,
                "e_name": "ChatGPT",
                "c_name": "ChatGPT"
            },
            {
                "id": 25,
                "e_name": "Crypto",
                "c_name": "加密貨幣"
            },
            {
                "id": 29,
                "e_name": "DiFi",
                "c_name": "去中心化金融"
            },
            {
                "id": 34,
                "e_name": "Ethereum",
                "c_name": "以太坊"
            },
            {
                "id": 37,
                "e_name": "Finance",
                "c_name": "金融"
            },
            {
                "id": 43,
                "e_name": "GameFi",
                "c_name": "遊戲金融"
            },
            {
                "id": 57,
                "e_name": "IT",
                "c_name": "IT"
            },
            {
                "id": 63,
                "e_name": "Markets",
                "c_name": "市場"
            },
            {
                "id": 64,
                "e_name": "Metaverse",
                "c_name": "元宇宙"
            },
            {
                "id": 72,
                "e_name": "NFT",
                "c_name": "NFT"
            },
            {
                "id": 96,
                "e_name": "Software",
                "c_name": "軟件"
            },
            {
                "id": 106,
                "e_name": "Technology",
                "c_name": "科技"
            },
            {
                "id": 109,
                "e_name": "Tools",
                "c_name": "工具應用"
            },
            {
                "id": 116,
                "e_name": "Web3",
                "c_name": "Web3"
            },
            {
                "id": 118,
                "e_name": "WIKI",
                "c_name": "維基百科"
            }
        ]
    }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       

### 13.NFT内容语音
 
Api path：

```bash
   http://43.198.63.219:1538/api/getNftLanguages
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
##### Response parameters:

```json
{
    "code": 1,
    "message": "ok",
    "data": {
        "list": [
            {
                "id": 1,
                "english": "English",
                "chinese": "英语",
                "status": 1
            },
            {
                "id": 2,
                "english": "Chinese",
                "chinese": "中文",
                "status": 1
            },
            {
                "id": 3,
                "english": "Japanese",
                "chinese": "日語",
                "status": 1
            },
            {
                "id": 4,
                "english": "Korean",
                "chinese": "韓語",
                "status": 1
            },
            {
                "id": 5,
                "english": "Spanish",
                "chinese": "西班牙語",
                "status": 1
            },
            {
                "id": 6,
                "english": "French",
                "chinese": "法語",
                "status": 1
            },
            {
                "id": 7,
                "english": "Russian",
                "chinese": "俄語",
                "status": 1
            },
            {
                "id": 8,
                "english": "German",
                "chinese": "德語",
                "status": 1
            },
            {
                "id": 9,
                "english": "Portuguese",
                "chinese": "葡萄牙語",
                "status": 1
            },
            {
                "id": 10,
                "english": "Italian",
                "chinese": "意大利語",
                "status": 1
            },
            {
                "id": 11,
                "english": "Arabic",
                "chinese": "阿拉伯語",
                "status": 1
            },
            {
                "id": 12,
                "english": "Other",
                "chinese": "其他語種",
                "status": 1
            }
        ]
    }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       

### 14.NFT内容平台
 
Api path：

```bash
   http://43.198.63.219:1538/api/getNftPlatformsByType
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| type |true   | 2 |int|
##### Response parameters:

```json
{
    "code": 1,
    "message": "ok",
    "data": {
        "list": [
            {
                "id": 1,
                "e_name": "Earnie Bot",
                "c_name": "文言一心",
                "status": 1
            },
            {
                "id": 2,
                "e_name": "DALL·E",
                "c_name": "DALL·E",
                "status": 1
            },
            {
                "id": 3,
                "e_name": "GPT",
                "c_name": "GPT",
                "status": 1
            },
            {
                "id": 4,
                "e_name": "Leonardo Ai",
                "c_name": "Leonardo Ai",
                "status": 1
            },
            {
                "id": 5,
                "e_name": "Llama",
                "c_name": "Llama",
                "status": 1
            },
            {
                "id": 6,
                "e_name": "Midjourney",
                "c_name": "Midjourney",
                "status": 1
            },
            {
                "id": 7,
                "e_name": "Stable Diffusion",
                "c_name": "Stable Diffusion",
                "status": 1
            },
            {
                "id": 8,
                "e_name": "IFlytek Spark",
                "c_name": "訊飛星火",
                "status": 1
            },
            {
                "id": 9,
                "e_name": "GLM",
                "c_name": "智譜清言",
                "status": 1
            },
            {
                "id": 10,
                "e_name": "Tongyi Qianwen",
                "c_name": "通義千問",
                "status": 1
            },
            {
                "id": 11,
                "e_name": "Grace",
                "c_name": "字節豆包",
                "status": 1
            },
            {
                "id": 12,
                "e_name": "PANGU",
                "c_name": "華為盤古",
                "status": 1
            }
        ]
    }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |       

### 15.更新用户信息
 
Api path：

```bash
   http://43.198.63.219:1538/api/updateUserInfo
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |
| nickname |true   | 昵称 |string|
| head_img |true   | 头像url |string|
| short_description |true   | short_description |string|
| location |true   | location |string|
| twitter |true   | twitter |string|
| telegram |true   | telegram |string|
| facebook |true   | facebook |string|
| tiktok |true   | tiktok |string|
| linkedin |true   | linkedin |string|
| medium |true   | medium |string|
| whatsapp |true   | whatsapp |string|
| website |true   | website |string|
| instagram |true   | instagram |string|
| youtube |true   | youtube |string|
| github |true   | github |string|
| wechat |true   | wechat |string|
| discord |true   | discord |string|
| line |true   | line |string|
| bilibili |true   | bilibili |string|
##### Response parameters:

```json
{
    "code": 1,
    "message": "ok",
    "data": {
       
    }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |    

### 16.获取用户信息
 
Api path：

```bash
   http://43.198.63.219:1538/api/getUserInfo
```

##### HTTP request method

post

##### Request parameters:

| 参数名   | 约束-required | 类型 | 说明 |
| :------ |:------ | :------    |:------ |

##### Response parameters:

```json
{
    "code": 1,
    "message": "success",
    "data": {
        "id": 60,
        "address": "0X36CBE8B131451DC4BAE73B867DB998504CF2A86F",
        "nickname": null,
        "head_img": null,
        "status": 0,
        "create_time": "2023-10-20 17:21:57",
        "update_time": null,
        "email": null,
        "short_description": null,
        "location": null,
        "twitter": null,
        "telegram": null,
        "facebook": null,
        "tiktok": null,
        "linkedin": null,
        "medium": null,
        "whatsapp": null,
        "website": null,
        "instagram": null,
        "youtube": null,
        "github": null,
        "wechat": null,
        "discord": null,
        "line": null,
        "bilibili": null
    }
}
```

##### Response the result data code instructions

| code         | 说明                             |
| -------------|:---------------------------------|
| 0            | 失败   |
| 1            | 成功   |    
