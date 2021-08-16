
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN git init
RUN git config core.sparseCheckout true
RUN git remote add -f origin https://github.com/bogland/htmlstudy.git
RUN echo "오늘의집/*"> .git/info/sparse-checkout
RUN git pull origin master
RUN cp -r 오늘의집/* .
#mv대신 cp를 이용하면 히든파일까지 보내짐
RUN rm -rf 오늘의집
VOLUME /mnt/c/project/htmlstudy/오늘의집/test

#COPY . /usr/share/nginx/html
