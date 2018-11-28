FROM centos:latest
MAINTAINER Ahmad Bacchus
RUN yum -y install httpd
COPY /app /var/www/html/
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
EXPOSE 80

