#!/bin/sh
set -e

# 1) /run/secrets 디렉토리에 마운트된 모든 Secret 파일을 순회하며
#    파일명(환경 변수명)과 내용을 읽어 export 합니다.
for secret in /run/secrets/*; do
  varname=$(basename "$secret")
  export "$varname"="$(cat "$secret")"
done

# 2) envsubst 로 config.js.template 의 ${VAR} 플레이스홀더를
#    위에서 export 한 환경 변수값으로 치환하여 config.js 생성
envsubst < /usr/share/nginx/html/config.js.template \
         > /usr/share/nginx/html/config.js

# 3) Nginx 를 포그라운드로 실행
exec nginx -g 'daemon off;'
