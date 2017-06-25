FROM node:boron

RUN usermod -u 501 --shell /bin/bash www-data

# Create app directory
RUN mkdir -p /var/www
WORKDIR /var/www

# Bundle app source
COPY . /var/www

RUN chown -R www-data:www-data /var/www

VOLUME ["/var/www"]

CMD ["bash", "/var/www/start.sh"]

EXPOSE 8100
