FROM php:8.0-apache

# Prepare for installing dependecies
RUN apt-get update && apt-get upgrade -y

# Install and enable MySQLi
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Install Composer and Plates
RUN apt-get install git -y
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
COPY src/composer.* .
COPY src/vendor/ .
RUN composer i