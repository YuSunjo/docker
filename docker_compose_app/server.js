const express = require("express");
const redis = require("redis");

//create redis client
const client = redis.createClient({
    //도커환경과 도커환경이 아닐때의 host가 다름 
    //도커 compose를 사용할 때는 host옵션을 docker-compose.yml파일에 명시한 컨테이너 이름을 준다.
    host: "redis-server",
    posrt: 6379,
})


const app = express();
//숫자는 0부터 시작
client.set("number", 0);

app.get('/', (req, res) => {
    client.get("number", (err,number)=>{
        //현재 숫자를 가져온 후에 1씩 올려준다. 
        client.set("number", parseInt(number)+1);
        res.send("숫자가 1씩 올라갑니다. 숫자: " +number);
    })
})

app.listen(8080);
console.log('Server start')