#!/bin/bash -x

if [ ! -d "/tmp/cache" ]; then
  mkdir -p /tmp/cache
fi

exec node server.js