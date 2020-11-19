#node 이미지, 이 안에 npm을 실행할 수 있는게 있음 
#FROM node:10       

#RUN npm install 

#node란 명령어에 server.js를 쳐준다. 
#CMD ["node", "server.js"]

#이 위까지 하면 오류발생 - package.json을 보고 npm install 해주는데 package.json을 써주지 않으면 없음 ..

#FROM node:10
#./ 도커 컨테이너 안에 넣어준다.  ./ ./ 모든 파일을 컨테이너 안에 넣어주기 
#COPY package.json ./ ./

#RUN npm install

#CMD ["node", "server.js"]

#도커를 실행시킬 때 포트맵핑도 해줘야함 
#docker run -p 49160 : 8080 <image name> -> localhost에 49160으로 들어가면 docker 내부에서 8080과 연결

#docker run -it tnswh2023/nodejs ls 하면 이 안에 파일들이 정돈이 안되어 있음

# FROM node:10

# WORKDIR /usr/src/app

# COPY package.json ./ ./

# RUN npm install

# CMD ["node", "server.js"]

#docker run -it tnswh2023/nodejs sh 여기들어가서 ls 하면 WORKDIR를 보여줌 

#변경시 소스 반영이 안됨 -> 이미지 빌드 후 실행시켜야함 

#docker run -d -p 5000:8080 tnswh2023/nodejs 

FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["node", "server.js"]

#지금까지 무언가를 바꾸면 종속성까지 다시 다운받음 -> package.json과 분리
#-v %cd%:/usr/src/app  (window)
#-v $(PWD):/usr/src/app (mac)    pwd -> 현재 경로 

#docker volume 
#도커 컨테이너에서 volume을 이용해서 로컬부분을 참조 (원래는 로컬에 있는것을 가지고 컨테이너에 가져감 )
#docker run -d-p 5000:8080 -v/usr/src/app/node_modules -v %cd%:/usr/src/app <image id> 
#node_modeuls는 컨테이너 안에만 있기 때문에 컨테이너에 맵핑을 하지 말라는 명령어 