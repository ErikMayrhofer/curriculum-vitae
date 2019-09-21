FROM nginx
CMD npm run build
COPY dist/Lebenslauf /usr/share/nginx/html
