FROM ubuntu:18.04

# Get user id and group id from arguments.
ARG UID
ARG GID

# Timezone.
ENV TZ 'UTC'
ENV DEBIAN_FRONTEND=noninteractive
RUN echo $TZ > /etc/timezone && \
  apt-get update && apt-get install -y tzdata && \
  rm /etc/localtime && \
  ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata

RUN apt-get update && apt-get install -y --no-install-recommends curl && \
  apt-get remove make && apt-get install make && \
  apt-get install -y nodejs npm && npm install -g gulp-cli && \
  apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/*

RUN groupadd -r serveruser -g $GID && useradd -ms /bin/bash serveruser -u $UID -g $GID

USER serveruser

WORKDIR /home/serveruser/vhosts/public/theme
