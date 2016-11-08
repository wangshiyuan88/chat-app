# chat-app


##Tech Stack:

###Server side:
1. Express
2. Mongo DB(on mongoLab cloud)
3. Mongoose as model library
4. Redis as Session store
5. Socket.io as message channel
6. Passport with Google outh as authentication

###Client Side
1. React
2. Redux as state store
3. Material-UI
4. Socket.io(of course...)

###Build Tool
1. Webpack

###Deploy
1. Heroku

###Resource related to scale

1. [Socket.io official document](http://socket.io/docs/using-multiple-nodes/)
2. [Node cluster](https://github.com/indutny/sticky-session)
3. [Niginx Sticky Session](http://nginx.org/en/docs/http/ngx_http_upstream_module.html#sticky)
4. [Niginx Web Socket Proxy setting](http://nginx.org/en/docs/http/websocket.html)
4. [Socket.io redis: how to communicate with other socket.io on other servers or processes](https://github.com/stoshiya/socket.io-redis-sample)
5. [Socket.io redis example](https://github.com/stoshiya/socket.io-redis-sample)
6. [Socket.io sticky-session: Requests from same client talks to same workers among multiple socket.io worker on the same server ](https://github.com/indutny/sticky-session)
