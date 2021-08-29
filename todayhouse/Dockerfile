
FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN git init
RUN git config core.sparseCheckout true
RUN git remote add -f origin https://github.com/bogland/htmlstudy.git
RUN echo "todayhouse/*"> .git/info/sparse-checkout
RUN git pull origin master
RUN cp -r todayhouse/* .
#mv대신 cp를 이용하면 히든파일까지 보내짐
RUN rm -rf todayhouse

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

#COPY . /usr/share/nginx/html
