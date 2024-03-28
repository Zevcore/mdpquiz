FROM nginx:latest

RUN apt-get update && apt-get install -y git

COPY docker/nginx/default.conf /etc/nginx/conf.d/

COPY ssl/certificate.crt /etc/nginx/certs/
COPY ssl/private.key /etc/nginx/certs/
COPY ssl/certificate-chain.crt /etc/nginx/certs/

RUN sed -i -e 's/ssl_certificate         \/etc\/nginx\/certs\/localhost.crt;/ssl_certificate         \/etc\/nginx\/certs\/certificate.crt;/g' /etc/nginx/conf.d/default.conf && \
    sed -i -e 's/ssl_certificate_key     \/etc\/nginx\/certs\/localhost.key;/ssl_certificate_key     \/etc\/nginx\/certs\/private.key;/g' /etc/nginx/conf.d/default.conf

EXPOSE 80
