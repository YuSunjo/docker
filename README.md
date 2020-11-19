docker run 이미지 이름 --도커 클라이언트 언급, 컨테이너 실행 

도커 클라이언트 -> docker server -> 이미지가 있는지 확인 없다면 docker hub로 가서 다운 

docker run 이미지이름 ls(현재 디렉토리의 파일리스트 출력)

docker ps - 컨테이너 나열 

 docker ps --format 'table{{.Names}}\table{{.Image}} 이런식으로 원하는 항목만 보는 것도 가능

 docker ps -a

//도커 생명주기 
 docker create <컨테이너 이름> 
 docker start -a <컨테이너 이름/아이디> 

 docker stop <container name/id>  -Gracefully하게 중지 
 docker kill <container name/id> 

 docker rm <id/name> 
 docker rm 'docker ps -a -q' --모든 컨테이너 삭제 
 docker rmi <image id> 
 docker system prune  --한번에 container , image .등 모두 지워줌 

docker exec <container id>  --실행중인 컨테이너에 명령어 전달 

docker run redis 
docker exec -it 86597d212a56 redis-cli 이런식으로 redis서버가 실행되고 있을 때 클라이언트로 들어갈 수 있음 
-it 가 없으면 클라이언트에 들어갔다가 바로 나옴

docker exec -it <container id> sh/bash/...
-터미널로 접근 
원래 docker exec -it <id> ls 이런식으로 했는데 터미널로 접근해서 그냥 ls 해주면 됨 
나올때는 ctrl+d로 나올 수 있음 

dockerfile -> docker client -> docker server -> create image

#베이스 이미지를 명시해준다. 
#FROM baseImage

#추가적으로 필요한 파일들을 다운로드 받는다.
#RUN command

#컨테이너 시작시 실행 될 명령어를 명시해준다. 
#CMD ["executable"]

FROM alpine
CMD [ "echo" , "hello" ]

#도커 파일에 입력된 것들이 도커 클라이언트에 전달 되어서 도커 서버가 인식하게 하여야 한다. 
#-- docker build ./ or docker build .

#build 시키면 숫자로 imageID가 나옴 -- 이름을 줄 수 있게 설정가능 
#docker build -t tnswh2023/hello:latest
#-t dockerid/저장소or 프로젝트 이름 : version 